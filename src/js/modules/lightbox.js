/**
 * StoneWick Lightbox Component
 *
 * Full-screen image viewer with zoom, pan, thumbnail strip, and
 * fullscreen support. Auto-inits by scanning for .gallery-grid,
 * .gallery-list, or any [data-lightbox] containers and attaching
 * click handlers to every .gallery-item inside them.
 *
 * @example
 * import { Lightbox } from '@stonewick/theme';
 * Lightbox.initAll(); // wire every gallery on the page
 *
 * @example
 * // Custom container / selector
 * const lb = new Lightbox(element, { captions: false });
 */

const LB_OVERLAY_ID = 'sw-lightbox';
const MIN_ZOOM = 0.5;
const MAX_ZOOM  = 5;
const ZOOM_STEP = 0.25;
const SWIPE_THRESHOLD = 50; // px

/** Upgrade low-res Unsplash / Picsum URLs for the full-screen view */
function toHighRes(src) {
  if (!src) return src;
  if (/unsplash\.com/.test(src)) {
    return src
      .replace(/([?&]w=)\d+/, '$11600')
      .replace(/([?&]h=)\d+/, '$11200');
  }
  if (/picsum\.photos/.test(src)) {
    // /seed/xxx/W/H  →  /seed/xxx/1600/1200
    return src.replace(/(\/[\w-]+\/[\w-]+\/)(\d+)\/(\d+)/, '$11600/1200');
  }
  return src;
}

// ─────────────────────────────────────────────────────────────────────────────

export class Lightbox {
  static defaults = {
    /** Enable scroll-wheel / pinch-to-zoom */
    zoom: true,
    /** Show thumbnail strip */
    thumbs: true,
    /** Show caption + credit text */
    captions: true,
    /** Show fullscreen toggle button */
    fullscreen: true,
    /** Selector for clickable trigger items inside the container */
    itemSelector: '.gallery-item',
    /** Selector for the main image inside each item */
    imgSelector: '.gallery-image',
    /** Selector for caption text inside each item */
    captionSelector: '.caption-text',
    /** Selector for credit text inside each item */
    creditSelector: '.caption-credit',
  };

  /**
   * @param {Element} container  – .gallery-grid / .gallery-list wrapper
   * @param {Object}  [options]
   */
  constructor(container, options = {}) {
    this.container = container;
    this.options   = { ...Lightbox.defaults, ...options };

    this._items        = [];   // { src, hiResSrc, alt, caption, credit }
    this._currentIndex = 0;
    this._zoom         = 1;
    this._panX         = 0;
    this._panY         = 0;
    this._isDragging   = false;
    this._dragStart    = { x: 0, y: 0 };
    this._touchDist    = null;
    this._touchZoomBase= 1;
    this._touchStart   = null;
    this._isOpen       = false;
    this._overlay      = null;
    this._els          = null;

    // Bound handlers for add/removeEventListener
    this._onKeyDown    = this._onKeyDown.bind(this);
    this._onWheel      = this._onWheel.bind(this);
    this._onMouseDown  = this._onMouseDown.bind(this);
    this._onMouseMove  = this._onMouseMove.bind(this);
    this._onMouseUp    = this._onMouseUp.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove  = this._onTouchMove.bind(this);
    this._onTouchEnd   = this._onTouchEnd.bind(this);
    this._onFSChange   = this._onFSChange.bind(this);

    this._collectItems();
    this._bindTriggers();
  }

  // ─── Item collection ──────────────────────────────────────────────────────

  _collectItems() {
    const { itemSelector, imgSelector, captionSelector, creditSelector } = this.options;
    this._items = Array.from(this.container.querySelectorAll(itemSelector)).map(item => {
      const img       = item.querySelector(imgSelector);
      const capEl     = item.querySelector(captionSelector);
      const creditEl  = item.querySelector(creditSelector);
      const src       = img?.getAttribute('src') ?? '';
      const hiResSrc  = item.dataset.lightboxSrc ?? toHighRes(src);
      return {
        src,
        hiResSrc,
        alt:     img?.getAttribute('alt') ?? '',
        caption: capEl?.textContent.trim()    ?? '',
        credit:  creditEl?.textContent.trim() ?? '',
      };
    });
  }

  _bindTriggers() {
    const items = this.container.querySelectorAll(this.options.itemSelector);
    items.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.open(i);
      });
    });
  }

  // ─── Overlay DOM ──────────────────────────────────────────────────────────

  /** Create overlay once per page; reuse across all Lightbox instances */
  _ensureOverlay() {
    let overlay = document.getElementById(LB_OVERLAY_ID);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id        = LB_OVERLAY_ID;
      overlay.className = 'lightbox-overlay';
      overlay.setAttribute('role',       'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Image lightbox');
      overlay.setAttribute('tabindex',   '-1');
      overlay.innerHTML = this._html();
      document.body.appendChild(overlay);
      this._cacheEls(overlay);
      this._bindOverlayEvents();
    } else {
      this._cacheEls(overlay);
    }
    this._overlay = overlay;
  }

  _html() {
    return /* html */`
      <div class="lightbox-backdrop" aria-hidden="true"></div>

      <div class="lightbox-wrapper">

        <!-- Close -->
        <button type="button" class="lightbox-close" aria-label="Close lightbox">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Counter -->
        <div class="lightbox-counter" aria-live="polite" aria-atomic="true">1 / 1</div>

        <!-- Main row: prev | figure | next -->
        <div class="lightbox-main-row">

          <button type="button" class="lightbox-prev" aria-label="Previous image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <!-- Main image figure — pan/zoom target -->
          <figure class="lightbox-figure" aria-label="Gallery image">
            <img class="lightbox-img" src="" alt="" draggable="false"/>
            <div class="lightbox-skeleton" aria-hidden="true"></div>
          </figure>

          <button type="button" class="lightbox-next" aria-label="Next image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

        </div><!-- /.lightbox-main-row -->

        <!-- Caption -->
        <div class="lightbox-caption" aria-live="polite">
          <p class="lightbox-caption-text"></p>
          <p class="lightbox-caption-credit"></p>
        </div>

        <!-- Thumbnail strip (only rendered when >1 item) -->
        <div class="lightbox-thumbs" role="list" aria-label="Image thumbnails"></div>

        <!-- Toolbar: zoom controls + fullscreen toggle -->
        <div class="lightbox-toolbar" role="toolbar" aria-label="Image controls">

          <button type="button" class="lightbox-toolbar-btn lightbox-zoom-out"
                  aria-label="Zoom out" title="Zoom out (-)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zM9 11h4"/>
            </svg>
          </button>

          <span class="lightbox-zoom-level" aria-live="polite" aria-atomic="true">100%</span>

          <button type="button" class="lightbox-toolbar-btn lightbox-zoom-in"
                  aria-label="Zoom in" title="Zoom in (+)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zM11 8v6M8 11h6"/>
            </svg>
          </button>

          <button type="button" class="lightbox-toolbar-btn lightbox-zoom-reset"
                  aria-label="Reset zoom" title="Reset zoom (0)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </button>

          <div class="lightbox-toolbar-divider" aria-hidden="true"></div>

          <button type="button" class="lightbox-toolbar-btn lightbox-fullscreen"
                  aria-label="Enter fullscreen" title="Fullscreen (F)">
            <svg class="lb-icon-expand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
            </svg>
            <svg class="lb-icon-collapse" style="display:none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25"/>
            </svg>
          </button>

        </div><!-- /.lightbox-toolbar -->

      </div><!-- /.lightbox-wrapper -->
    `;
  }

  _cacheEls(overlay) {
    const q = (sel) => overlay.querySelector(sel);
    this._els = {
      backdrop:      q('.lightbox-backdrop'),
      close:         q('.lightbox-close'),
      counter:       q('.lightbox-counter'),
      prev:          q('.lightbox-prev'),
      next:          q('.lightbox-next'),
      figure:        q('.lightbox-figure'),
      img:           q('.lightbox-img'),
      skeleton:      q('.lightbox-skeleton'),
      caption:       q('.lightbox-caption'),
      captionText:   q('.lightbox-caption-text'),
      captionCredit: q('.lightbox-caption-credit'),
      thumbs:        q('.lightbox-thumbs'),
      toolbar:       q('.lightbox-toolbar'),
      zoomOut:       q('.lightbox-zoom-out'),
      zoomLevel:     q('.lightbox-zoom-level'),
      zoomIn:        q('.lightbox-zoom-in'),
      zoomReset:     q('.lightbox-zoom-reset'),
      fsBtn:         q('.lightbox-fullscreen'),
      iconExpand:    q('.lb-icon-expand'),
      iconCollapse:  q('.lb-icon-collapse'),
    };
  }

  _bindOverlayEvents() {
    const e = this._els;

    e.backdrop.addEventListener('click', () => this.close());
    e.close.addEventListener('click',    () => this.close());
    e.prev.addEventListener('click',     () => this._navigate(-1));
    e.next.addEventListener('click',     () => this._navigate(1));

    e.zoomOut.addEventListener('click',   () => this._adjustZoom(-ZOOM_STEP));
    e.zoomIn.addEventListener('click',    () => this._adjustZoom(ZOOM_STEP));
    e.zoomReset.addEventListener('click', () => this._resetZoom());

    if (this.options.fullscreen) {
      e.fsBtn.addEventListener('click', () => this._toggleFullscreen());
      document.addEventListener('fullscreenchange', this._onFSChange);
    } else {
      e.fsBtn.style.display = 'none';
      e.toolbar.querySelector('.lightbox-toolbar-divider').style.display = 'none';
    }

    // Pan + zoom on figure
    e.figure.addEventListener('mousedown',  this._onMouseDown);
    e.figure.addEventListener('mousemove',  this._onMouseMove);
    e.figure.addEventListener('mouseup',    this._onMouseUp);
    e.figure.addEventListener('mouseleave', this._onMouseUp);
    e.figure.addEventListener('wheel',      this._onWheel, { passive: false });
    e.figure.addEventListener('touchstart', this._onTouchStart, { passive: false });
    e.figure.addEventListener('touchmove',  this._onTouchMove,  { passive: false });
    e.figure.addEventListener('touchend',   this._onTouchEnd);
  }

  // ─── Public API ───────────────────────────────────────────────────────────

  open(index = 0) {
    this._ensureOverlay();
    this._isOpen       = true;
    this._currentIndex = index;

    this._buildThumbs();
    this._updateSingleClass();
    this._overlay.classList.add('is-open');

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this._onKeyDown);

    this._goTo(index);
    this._overlay.focus();
  }

  close() {
    if (!this._isOpen) return;
    this._isOpen = false;

    this._overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this._onKeyDown);

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    this._resetZoom(true);
  }

  // ─── Navigation ───────────────────────────────────────────────────────────

  _navigate(dir) {
    if (this._zoom > 1) return; // no navigation while zoomed
    const next = this._currentIndex + dir;
    if (next >= 0 && next < this._items.length) {
      this._goTo(next);
    }
  }

  _goTo(index) {
    this._currentIndex = index;
    const item = this._items[index];
    if (!item) return;

    const e = this._els;

    this._overlay.classList.add('is-loading');
    e.img.src = '';

    e.counter.textContent = `${index + 1} / ${this._items.length}`;
    this._overlay.classList.toggle('is-first', index === 0);
    this._overlay.classList.toggle('is-last',  index === this._items.length - 1);

    this._updateCaption(item);
    this._updateThumbActive(index);

    // Load high-res image first; fallback to original src
    const probe = new Image();
    probe.onload = () => {
      if (this._currentIndex !== index) return;
      e.img.src = item.hiResSrc;
      e.img.alt = item.alt;
      this._overlay.classList.remove('is-loading');
    };
    probe.onerror = () => {
      e.img.src = item.src;
      e.img.alt = item.alt;
      this._overlay.classList.remove('is-loading');
    };
    probe.src = item.hiResSrc;
  }

  // ─── Thumbnails ───────────────────────────────────────────────────────────

  _buildThumbs() {
    const e = this._els;
    if (!this.options.thumbs || this._items.length <= 1) {
      e.thumbs.innerHTML = '';
      return;
    }

    e.thumbs.innerHTML = this._items.map((item, i) => /* html */`
      <button type="button"
              class="lightbox-thumb${i === this._currentIndex ? ' is-active' : ''}"
              aria-label="View image ${i + 1}"
              role="listitem"
              data-lb-index="${i}">
        <div class="lightbox-thumb-skeleton" aria-hidden="true"></div>
        <img class="lightbox-thumb-img" src="${item.src}" alt="${item.alt}"
             draggable="false" loading="lazy"/>
      </button>
    `).join('');

    e.thumbs.querySelectorAll('.lightbox-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.lbIndex, 10);
        this._resetZoom(true);
        this._goTo(i);
      });
      const img      = btn.querySelector('.lightbox-thumb-img');
      const skeleton = btn.querySelector('.lightbox-thumb-skeleton');
      const removeSkeleton = () => skeleton?.remove();
      if (img.complete) removeSkeleton();
      else {
        img.addEventListener('load',  removeSkeleton, { once: true });
        img.addEventListener('error', removeSkeleton, { once: true });
      }
    });
  }

  _updateThumbActive(index) {
    if (!this._els?.thumbs) return;
    this._els.thumbs.querySelectorAll('.lightbox-thumb').forEach((t, i) => {
      t.classList.toggle('is-active', i === index);
    });
    const active = this._els.thumbs.querySelector('.lightbox-thumb.is-active');
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  _updateCaption(item) {
    const e = this._els;
    if (!this.options.captions) { e.caption.hidden = true; return; }
    e.captionText.textContent   = item.caption ?? '';
    e.captionCredit.textContent = item.credit  ?? '';
    e.caption.hidden = !item.caption && !item.credit;
  }

  _updateSingleClass() {
    this._overlay.classList.toggle('is-single', this._items.length <= 1);
  }

  // ─── Zoom & Pan ───────────────────────────────────────────────────────────

  _adjustZoom(delta) {
    const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, this._zoom + delta));
    this._setZoom(next);
  }

  _setZoom(value) {
    const wasOne = this._zoom === 1;
    this._zoom = value;
    const isZoomed = value > 1;
    if (wasOne && isZoomed)  { /* entering zoom: reset pan */ this._panX = 0; this._panY = 0; }
    if (!isZoomed)           { this._panX = 0; this._panY = 0; }

    this._overlay.classList.toggle('is-zoomed', isZoomed);
    this._els.figure.classList.toggle('is-pannable', isZoomed);
    this._els.zoomLevel.textContent = `${Math.round(value * 100)}%`;
    this._applyTransform();
  }

  _resetZoom(instant = false) {
    this._zoom = 1;
    this._panX = 0;
    this._panY = 0;
    this._overlay.classList.remove('is-zoomed');
    if (this._els) {
      this._els.figure.classList.remove('is-pannable', 'is-grabbing');
      this._els.zoomLevel.textContent = '100%';
    }
    this._applyTransform(instant);
  }

  _applyTransform(instant = false) {
    const img = this._els?.img;
    if (!img) return;
    if (instant) img.classList.add('no-transition');
    img.style.transform = `scale(${this._zoom}) translate(${this._panX / this._zoom}px, ${this._panY / this._zoom}px)`;
    if (instant) { img.offsetHeight; img.classList.remove('no-transition'); }
  }

  // ─── Mouse ────────────────────────────────────────────────────────────────

  _onWheel(e) {
    if (!this.options.zoom) return;
    e.preventDefault();
    this._adjustZoom(e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP);
  }

  _onMouseDown(e) {
    if (this._zoom <= 1) return;
    e.preventDefault();
    this._isDragging = true;
    this._dragStart  = { x: e.clientX - this._panX, y: e.clientY - this._panY };
    this._els.figure.classList.add('is-grabbing');
  }

  _onMouseMove(e) {
    if (!this._isDragging) return;
    this._panX = e.clientX - this._dragStart.x;
    this._panY = e.clientY - this._dragStart.y;
    this._applyTransform(true);
  }

  _onMouseUp() {
    this._isDragging = false;
    this._els.figure.classList.remove('is-grabbing');
  }

  // ─── Touch ────────────────────────────────────────────────────────────────

  _onTouchStart(e) {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      this._touchDist     = Math.hypot(dx, dy);
      this._touchZoomBase = this._zoom;
    } else if (e.touches.length === 1) {
      this._touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (this._zoom > 1) {
        this._isDragging = true;
        this._dragStart  = { x: e.touches[0].clientX - this._panX, y: e.touches[0].clientY - this._panY };
      }
    }
  }

  _onTouchMove(e) {
    if (e.touches.length === 2 && this._touchDist !== null) {
      e.preventDefault();
      const dx   = e.touches[0].clientX - e.touches[1].clientX;
      const dy   = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, this._touchZoomBase * (dist / this._touchDist)));
      this._setZoom(next);
    } else if (e.touches.length === 1 && this._isDragging) {
      e.preventDefault();
      this._panX = e.touches[0].clientX - this._dragStart.x;
      this._panY = e.touches[0].clientY - this._dragStart.y;
      this._applyTransform(true);
    }
  }

  _onTouchEnd(e) {
    const changed = e.changedTouches[0];

    // Swipe-to-navigate (only when not zoomed)
    if (this._zoom <= 1 && this._touchStart && e.touches.length === 0) {
      const dx = changed.clientX - this._touchStart.x;
      const dy = changed.clientY - this._touchStart.y;
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        this._navigate(dx < 0 ? 1 : -1);
      }
    }

    if (e.touches.length === 0) {
      this._isDragging = false;
      this._touchStart = null;
      this._touchDist  = null;
      this._els.figure.classList.remove('is-grabbing');
    } else if (e.touches.length < 2) {
      this._touchDist = null;
    }
  }

  // ─── Keyboard ─────────────────────────────────────────────────────────────

  _onKeyDown(e) {
    if (!this._isOpen) return;
    switch (e.key) {
      case 'Escape':      this.close();                   break;
      case 'ArrowLeft':   this._navigate(-1);             break;
      case 'ArrowRight':  this._navigate(1);              break;
      case '+': case '=': this._adjustZoom(ZOOM_STEP);   break;
      case '-':           this._adjustZoom(-ZOOM_STEP);  break;
      case '0':           this._resetZoom();              break;
      case 'f': case 'F': this._toggleFullscreen();      break;
    }
  }

  // ─── Fullscreen ───────────────────────────────────────────────────────────

  _toggleFullscreen() {
    if (!document.fullscreenElement) {
      this._overlay.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  _onFSChange() {
    const isFS = !!document.fullscreenElement;
    this._overlay.classList.toggle('is-fullscreen', isFS);
    this._els.iconExpand.style.display   = isFS ? 'none' : '';
    this._els.iconCollapse.style.display = isFS ? '' : 'none';
    this._els.fsBtn.setAttribute('aria-label', isFS ? 'Exit fullscreen' : 'Enter fullscreen');
    this._els.fsBtn.setAttribute('title',      isFS ? 'Exit fullscreen (F)' : 'Fullscreen (F)');
  }

  // ─── Static init ──────────────────────────────────────────────────────────

  /**
   * Auto-initialize all gallery containers on the page.
   * @param {string}  [selector] – defaults to .gallery-grid, .gallery-list, [data-lightbox]
   * @param {Element} [scope]    – defaults to document
   * @returns {Lightbox[]}
   */
  static initAll(
    selector = '.gallery-grid, .gallery-list, [data-lightbox]',
    scope    = document
  ) {
    return Array.from(scope.querySelectorAll(selector)).map(el => new Lightbox(el));
  }

  // ─── Cleanup ──────────────────────────────────────────────────────────────

  destroy() {
    document.removeEventListener('keydown',         this._onKeyDown);
    document.removeEventListener('fullscreenchange', this._onFSChange);
    document.body.style.overflow = '';
    // Overlay is shared — don't remove it; just close
    this.close();
  }
}
