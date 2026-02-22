var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const utils = {
  /**
   * Debounce function execution
   * @param {Function} fn - Function to debounce
   * @param {number} delay - Delay in ms
   * @returns {Function}
   */
  debounce(fn, delay = 150) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },
  /**
   * Throttle function execution
   * @param {Function} fn - Function to throttle
   * @param {number} limit - Minimum time between calls in ms
   * @returns {Function}
   */
  throttle(fn, limit = 150) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  /**
   * Get CSS custom property value
   * @param {string} name - Property name (with or without --)
   * @param {Element} element - Element to read from (default: documentElement)
   * @returns {string}
   */
  getCSSVar(name, element = document.documentElement) {
    const prop = name.startsWith("--") ? name : `--${name}`;
    return getComputedStyle(element).getPropertyValue(prop).trim();
  },
  /**
   * Set CSS custom property value
   * @param {string} name - Property name (with or without --)
   * @param {string} value - Value to set
   * @param {Element} element - Element to set on (default: documentElement)
   */
  setCSSVar(name, value, element = document.documentElement) {
    const prop = name.startsWith("--") ? name : `--${name}`;
    element.style.setProperty(prop, value);
  },
  /**
   * Parse data attributes from element
   * @param {Element} element - Element to parse
   * @param {string} prefix - Attribute prefix (default: 'sw')
   * @returns {Object}
   */
  parseDataAttrs(element, prefix = "sw") {
    const attrs = {};
    const regex = new RegExp(`^data-${prefix}-(.+)$`);
    for (const attr of element.attributes) {
      const match = attr.name.match(regex);
      if (match) {
        const key = match[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        let value = attr.value;
        try {
          value = JSON.parse(value);
        } catch {
          if (value === "true") value = true;
          else if (value === "false") value = false;
          else if (!isNaN(Number(value))) value = Number(value);
        }
        attrs[key] = value;
      }
    }
    return attrs;
  },
  /**
   * Create element from HTML string
   * @param {string} html - HTML string
   * @returns {Element}
   */
  createElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
  },
  /**
   * Wait for element to exist in DOM
   * @param {string} selector - CSS selector
   * @param {number} timeout - Timeout in ms
   * @returns {Promise<Element>}
   */
  waitForElement(selector, timeout = 5e3) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) return resolve(element);
      const observer = new MutationObserver((_, obs) => {
        const el = document.querySelector(selector);
        if (el) {
          obs.disconnect();
          resolve(el);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
  },
  /**
   * Animate element with Web Animations API
   * @param {Element} element - Element to animate
   * @param {Keyframe[]} keyframes - Animation keyframes
   * @param {Object} options - Animation options
   * @returns {Animation}
   */
  animate(element, keyframes, options = {}) {
    const defaults = {
      duration: 300,
      easing: "ease-out",
      fill: "forwards"
    };
    return element.animate(keyframes, { ...defaults, ...options });
  },
  /**
   * Check if element is in viewport
   * @param {Element} element - Element to check
   * @param {number} threshold - Visibility threshold (0-1)
   * @returns {boolean}
   */
  isInViewport(element, threshold = 0) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    if (threshold === 0) return vertInView && horInView;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    const visibleArea = visibleHeight * visibleWidth;
    const totalArea = rect.height * rect.width;
    return visibleArea / totalArea >= threshold;
  },
  /**
   * Simple event emitter mixin
   */
  EventEmitter: {
    _events: {},
    on(event, callback) {
      if (!this._events[event]) this._events[event] = [];
      this._events[event].push(callback);
      return this;
    },
    off(event, callback) {
      if (!this._events[event]) return this;
      if (!callback) {
        delete this._events[event];
      } else {
        this._events[event] = this._events[event].filter((cb) => cb !== callback);
      }
      return this;
    },
    emit(event, ...args) {
      if (!this._events[event]) return this;
      this._events[event].forEach((cb) => cb.apply(this, args));
      return this;
    }
  }
};
const _ComparisonSlider = class _ComparisonSlider {
  /**
   * @param {HTMLElement} element - Container element
   * @param {Object} options - Configuration options
   */
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ..._ComparisonSlider.defaults,
      ...utils.parseDataAttrs(element, "sw"),
      ...options
    };
    this.handle = null;
    this.beforeEl = null;
    this.afterEl = null;
    this.isDragging = false;
    this.position = this.options.startPosition;
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this.init();
  }
  init() {
    this.handle = this.element.querySelector(".comparison-handle");
    this.beforeEl = this.element.querySelector(".comparison-before");
    this.afterEl = this.element.querySelector(".comparison-after");
    if (!this.handle || !this.beforeEl) {
      console.warn("[ComparisonSlider] Missing required elements");
      return;
    }
    this.setPosition(this.position);
    this.handle.addEventListener("mousedown", this._onMouseDown);
    this.handle.addEventListener("touchstart", this._onTouchStart, { passive: false });
    this.handle.addEventListener("keydown", this._onKeyDown);
    this.handle.setAttribute("tabindex", "0");
    this.handle.setAttribute("role", "slider");
    this.handle.setAttribute("aria-valuenow", this.position);
    this.handle.setAttribute("aria-valuemin", "0");
    this.handle.setAttribute("aria-valuemax", "100");
    this.handle.setAttribute("aria-label", "Comparison slider");
    this.element.classList.add("is-initialized");
  }
  setPosition(percent) {
    percent = Math.max(0, Math.min(100, percent));
    this.position = percent;
    this.afterEl.style.clipPath = `inset(0 0 0 ${percent}%)`;
    this.handle.style.left = `${percent}%`;
    this.handle.setAttribute("aria-valuenow", Math.round(percent));
    this.handle.dataset.position = percent;
    this.element.dispatchEvent(new CustomEvent("sw:slider:change", {
      detail: { position: percent }
    }));
  }
  _getPositionFromEvent(event) {
    const rect = this.element.getBoundingClientRect();
    const x = event.clientX || event.touches && event.touches[0].clientX;
    return (x - rect.left) / rect.width * 100;
  }
  _onMouseDown(e) {
    e.preventDefault();
    this.isDragging = true;
    this.element.classList.add("is-dragging");
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
  }
  _onMouseMove(e) {
    if (!this.isDragging) return;
    this.setPosition(this._getPositionFromEvent(e));
  }
  _onMouseUp() {
    this.isDragging = false;
    this.element.classList.remove("is-dragging");
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
  }
  _onTouchStart(e) {
    e.preventDefault();
    this.isDragging = true;
    this.element.classList.add("is-dragging");
    document.addEventListener("touchmove", this._onTouchMove, { passive: false });
    document.addEventListener("touchend", this._onTouchEnd);
  }
  _onTouchMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    this.setPosition(this._getPositionFromEvent(e));
  }
  _onTouchEnd() {
    this.isDragging = false;
    this.element.classList.remove("is-dragging");
    document.removeEventListener("touchmove", this._onTouchMove);
    document.removeEventListener("touchend", this._onTouchEnd);
  }
  _onKeyDown(e) {
    const step = e.shiftKey ? 10 : 1;
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        this.setPosition(this.position - step);
        break;
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        this.setPosition(this.position + step);
        break;
      case "Home":
        e.preventDefault();
        this.setPosition(0);
        break;
      case "End":
        e.preventDefault();
        this.setPosition(100);
        break;
    }
  }
  destroy() {
    this.handle.removeEventListener("mousedown", this._onMouseDown);
    this.handle.removeEventListener("touchstart", this._onTouchStart);
    this.handle.removeEventListener("keydown", this._onKeyDown);
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchmove", this._onTouchMove);
    document.removeEventListener("touchend", this._onTouchEnd);
    this.element.classList.remove("is-initialized", "is-dragging");
  }
  /**
   * Initialize all comparison sliders in scope
   * @param {string} selector - CSS selector
   * @param {Element} scope - Scope element
   * @returns {ComparisonSlider[]}
   */
  static initAll(selector = ".comparison-slider", scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map((el) => new _ComparisonSlider(el));
  }
};
__publicField(_ComparisonSlider, "defaults", {
  startPosition: 50,
  showLabels: true,
  smoothTransition: true
});
let ComparisonSlider = _ComparisonSlider;
const LB_OVERLAY_ID = "sw-lightbox";
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;
const SWIPE_THRESHOLD = 50;
function toHighRes(src) {
  if (!src) return src;
  if (/unsplash\.com/.test(src)) {
    return src.replace(/([?&]w=)\d+/, "$11600").replace(/([?&]h=)\d+/, "$11200");
  }
  if (/picsum\.photos/.test(src)) {
    return src.replace(/(\/[\w-]+\/[\w-]+\/)(\d+)\/(\d+)/, "$11600/1200");
  }
  return src;
}
const _Lightbox = class _Lightbox {
  /**
   * @param {Element} container  – .gallery-grid / .gallery-list wrapper
   * @param {Object}  [options]
   */
  constructor(container, options = {}) {
    this.container = container;
    this.options = { ..._Lightbox.defaults, ...options };
    this._items = [];
    this._currentIndex = 0;
    this._zoom = 1;
    this._panX = 0;
    this._panY = 0;
    this._isDragging = false;
    this._dragStart = { x: 0, y: 0 };
    this._touchDist = null;
    this._touchZoomBase = 1;
    this._touchStart = null;
    this._isOpen = false;
    this._overlay = null;
    this._els = null;
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onFSChange = this._onFSChange.bind(this);
    this._collectItems();
    this._bindTriggers();
  }
  // ─── Item collection ──────────────────────────────────────────────────────
  _collectItems() {
    const { itemSelector, imgSelector, captionSelector, creditSelector } = this.options;
    this._items = Array.from(this.container.querySelectorAll(itemSelector)).map((item) => {
      const img = item.querySelector(imgSelector);
      const capEl = item.querySelector(captionSelector);
      const creditEl = item.querySelector(creditSelector);
      const src = (img == null ? void 0 : img.getAttribute("src")) ?? "";
      const hiResSrc = item.dataset.lightboxSrc ?? toHighRes(src);
      return {
        src,
        hiResSrc,
        alt: (img == null ? void 0 : img.getAttribute("alt")) ?? "",
        caption: (capEl == null ? void 0 : capEl.textContent.trim()) ?? "",
        credit: (creditEl == null ? void 0 : creditEl.textContent.trim()) ?? ""
      };
    });
  }
  _bindTriggers() {
    const items = this.container.querySelectorAll(this.options.itemSelector);
    items.forEach((item, i) => {
      item.addEventListener("click", (e) => {
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
      overlay = document.createElement("div");
      overlay.id = LB_OVERLAY_ID;
      overlay.className = "lightbox-overlay";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "Image lightbox");
      overlay.setAttribute("tabindex", "-1");
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
    return (
      /* html */
      `
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
    `
    );
  }
  _cacheEls(overlay) {
    const q = (sel) => overlay.querySelector(sel);
    this._els = {
      backdrop: q(".lightbox-backdrop"),
      close: q(".lightbox-close"),
      counter: q(".lightbox-counter"),
      prev: q(".lightbox-prev"),
      next: q(".lightbox-next"),
      figure: q(".lightbox-figure"),
      img: q(".lightbox-img"),
      skeleton: q(".lightbox-skeleton"),
      caption: q(".lightbox-caption"),
      captionText: q(".lightbox-caption-text"),
      captionCredit: q(".lightbox-caption-credit"),
      thumbs: q(".lightbox-thumbs"),
      toolbar: q(".lightbox-toolbar"),
      zoomOut: q(".lightbox-zoom-out"),
      zoomLevel: q(".lightbox-zoom-level"),
      zoomIn: q(".lightbox-zoom-in"),
      zoomReset: q(".lightbox-zoom-reset"),
      fsBtn: q(".lightbox-fullscreen"),
      iconExpand: q(".lb-icon-expand"),
      iconCollapse: q(".lb-icon-collapse")
    };
  }
  _bindOverlayEvents() {
    const e = this._els;
    e.backdrop.addEventListener("click", () => this.close());
    e.close.addEventListener("click", () => this.close());
    e.prev.addEventListener("click", () => this._navigate(-1));
    e.next.addEventListener("click", () => this._navigate(1));
    e.zoomOut.addEventListener("click", () => this._adjustZoom(-ZOOM_STEP));
    e.zoomIn.addEventListener("click", () => this._adjustZoom(ZOOM_STEP));
    e.zoomReset.addEventListener("click", () => this._resetZoom());
    if (this.options.fullscreen) {
      e.fsBtn.addEventListener("click", () => this._toggleFullscreen());
      document.addEventListener("fullscreenchange", this._onFSChange);
    } else {
      e.fsBtn.style.display = "none";
      e.toolbar.querySelector(".lightbox-toolbar-divider").style.display = "none";
    }
    e.figure.addEventListener("mousedown", this._onMouseDown);
    e.figure.addEventListener("mousemove", this._onMouseMove);
    e.figure.addEventListener("mouseup", this._onMouseUp);
    e.figure.addEventListener("mouseleave", this._onMouseUp);
    e.figure.addEventListener("wheel", this._onWheel, { passive: false });
    e.figure.addEventListener("touchstart", this._onTouchStart, { passive: false });
    e.figure.addEventListener("touchmove", this._onTouchMove, { passive: false });
    e.figure.addEventListener("touchend", this._onTouchEnd);
  }
  // ─── Public API ───────────────────────────────────────────────────────────
  open(index = 0) {
    this._ensureOverlay();
    this._isOpen = true;
    this._currentIndex = index;
    this._buildThumbs();
    this._updateSingleClass();
    this._overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this._onKeyDown);
    this._goTo(index);
    this._overlay.focus();
  }
  close() {
    if (!this._isOpen) return;
    this._isOpen = false;
    this._overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", this._onKeyDown);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {
      });
    }
    this._resetZoom(true);
  }
  // ─── Navigation ───────────────────────────────────────────────────────────
  _navigate(dir) {
    if (this._zoom > 1) return;
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
    this._overlay.classList.add("is-loading");
    e.img.src = "";
    e.counter.textContent = `${index + 1} / ${this._items.length}`;
    this._overlay.classList.toggle("is-first", index === 0);
    this._overlay.classList.toggle("is-last", index === this._items.length - 1);
    this._updateCaption(item);
    this._updateThumbActive(index);
    const probe = new Image();
    probe.onload = () => {
      if (this._currentIndex !== index) return;
      e.img.src = item.hiResSrc;
      e.img.alt = item.alt;
      this._overlay.classList.remove("is-loading");
    };
    probe.onerror = () => {
      e.img.src = item.src;
      e.img.alt = item.alt;
      this._overlay.classList.remove("is-loading");
    };
    probe.src = item.hiResSrc;
  }
  // ─── Thumbnails ───────────────────────────────────────────────────────────
  _buildThumbs() {
    const e = this._els;
    if (!this.options.thumbs || this._items.length <= 1) {
      e.thumbs.innerHTML = "";
      return;
    }
    e.thumbs.innerHTML = this._items.map((item, i) => (
      /* html */
      `
      <button type="button"
              class="lightbox-thumb${i === this._currentIndex ? " is-active" : ""}"
              aria-label="View image ${i + 1}"
              role="listitem"
              data-lb-index="${i}">
        <div class="lightbox-thumb-skeleton" aria-hidden="true"></div>
        <img class="lightbox-thumb-img" src="${item.src}" alt="${item.alt}"
             draggable="false" loading="lazy"/>
      </button>
    `
    )).join("");
    e.thumbs.querySelectorAll(".lightbox-thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.lbIndex, 10);
        this._resetZoom(true);
        this._goTo(i);
      });
      const img = btn.querySelector(".lightbox-thumb-img");
      const skeleton = btn.querySelector(".lightbox-thumb-skeleton");
      const removeSkeleton = () => skeleton == null ? void 0 : skeleton.remove();
      if (img.complete) removeSkeleton();
      else {
        img.addEventListener("load", removeSkeleton, { once: true });
        img.addEventListener("error", removeSkeleton, { once: true });
      }
    });
  }
  _updateThumbActive(index) {
    var _a;
    if (!((_a = this._els) == null ? void 0 : _a.thumbs)) return;
    this._els.thumbs.querySelectorAll(".lightbox-thumb").forEach((t, i) => {
      t.classList.toggle("is-active", i === index);
    });
    const active = this._els.thumbs.querySelector(".lightbox-thumb.is-active");
    active == null ? void 0 : active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
  _updateCaption(item) {
    const e = this._els;
    if (!this.options.captions) {
      e.caption.hidden = true;
      return;
    }
    e.captionText.textContent = item.caption ?? "";
    e.captionCredit.textContent = item.credit ?? "";
    e.caption.hidden = !item.caption && !item.credit;
  }
  _updateSingleClass() {
    this._overlay.classList.toggle("is-single", this._items.length <= 1);
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
    if (wasOne && isZoomed) {
      this._panX = 0;
      this._panY = 0;
    }
    if (!isZoomed) {
      this._panX = 0;
      this._panY = 0;
    }
    this._overlay.classList.toggle("is-zoomed", isZoomed);
    this._els.figure.classList.toggle("is-pannable", isZoomed);
    this._els.zoomLevel.textContent = `${Math.round(value * 100)}%`;
    this._applyTransform();
  }
  _resetZoom(instant = false) {
    this._zoom = 1;
    this._panX = 0;
    this._panY = 0;
    this._overlay.classList.remove("is-zoomed");
    if (this._els) {
      this._els.figure.classList.remove("is-pannable", "is-grabbing");
      this._els.zoomLevel.textContent = "100%";
    }
    this._applyTransform(instant);
  }
  _applyTransform(instant = false) {
    var _a;
    const img = (_a = this._els) == null ? void 0 : _a.img;
    if (!img) return;
    if (instant) img.classList.add("no-transition");
    img.style.transform = `scale(${this._zoom}) translate(${this._panX / this._zoom}px, ${this._panY / this._zoom}px)`;
    if (instant) {
      img.offsetHeight;
      img.classList.remove("no-transition");
    }
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
    this._dragStart = { x: e.clientX - this._panX, y: e.clientY - this._panY };
    this._els.figure.classList.add("is-grabbing");
  }
  _onMouseMove(e) {
    if (!this._isDragging) return;
    this._panX = e.clientX - this._dragStart.x;
    this._panY = e.clientY - this._dragStart.y;
    this._applyTransform(true);
  }
  _onMouseUp() {
    this._isDragging = false;
    this._els.figure.classList.remove("is-grabbing");
  }
  // ─── Touch ────────────────────────────────────────────────────────────────
  _onTouchStart(e) {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      this._touchDist = Math.hypot(dx, dy);
      this._touchZoomBase = this._zoom;
    } else if (e.touches.length === 1) {
      this._touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (this._zoom > 1) {
        this._isDragging = true;
        this._dragStart = { x: e.touches[0].clientX - this._panX, y: e.touches[0].clientY - this._panY };
      }
    }
  }
  _onTouchMove(e) {
    if (e.touches.length === 2 && this._touchDist !== null) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
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
      this._touchDist = null;
      this._els.figure.classList.remove("is-grabbing");
    } else if (e.touches.length < 2) {
      this._touchDist = null;
    }
  }
  // ─── Keyboard ─────────────────────────────────────────────────────────────
  _onKeyDown(e) {
    if (!this._isOpen) return;
    switch (e.key) {
      case "Escape":
        this.close();
        break;
      case "ArrowLeft":
        this._navigate(-1);
        break;
      case "ArrowRight":
        this._navigate(1);
        break;
      case "+":
      case "=":
        this._adjustZoom(ZOOM_STEP);
        break;
      case "-":
        this._adjustZoom(-ZOOM_STEP);
        break;
      case "0":
        this._resetZoom();
        break;
      case "f":
      case "F":
        this._toggleFullscreen();
        break;
    }
  }
  // ─── Fullscreen ───────────────────────────────────────────────────────────
  _toggleFullscreen() {
    if (!document.fullscreenElement) {
      this._overlay.requestFullscreen().catch(() => {
      });
    } else {
      document.exitFullscreen().catch(() => {
      });
    }
  }
  _onFSChange() {
    const isFS = !!document.fullscreenElement;
    this._overlay.classList.toggle("is-fullscreen", isFS);
    this._els.iconExpand.style.display = isFS ? "none" : "";
    this._els.iconCollapse.style.display = isFS ? "" : "none";
    this._els.fsBtn.setAttribute("aria-label", isFS ? "Exit fullscreen" : "Enter fullscreen");
    this._els.fsBtn.setAttribute("title", isFS ? "Exit fullscreen (F)" : "Fullscreen (F)");
  }
  // ─── Static init ──────────────────────────────────────────────────────────
  /**
   * Auto-initialize all gallery containers on the page.
   * @param {string}  [selector] – defaults to .gallery-grid, .gallery-list, [data-lightbox]
   * @param {Element} [scope]    – defaults to document
   * @returns {Lightbox[]}
   */
  static initAll(selector = ".gallery-grid, .gallery-list, [data-lightbox]", scope = document) {
    return Array.from(scope.querySelectorAll(selector)).map((el) => new _Lightbox(el));
  }
  // ─── Cleanup ──────────────────────────────────────────────────────────────
  destroy() {
    document.removeEventListener("keydown", this._onKeyDown);
    document.removeEventListener("fullscreenchange", this._onFSChange);
    document.body.style.overflow = "";
    this.close();
  }
};
__publicField(_Lightbox, "defaults", {
  /** Enable scroll-wheel / pinch-to-zoom */
  zoom: true,
  /** Show thumbnail strip */
  thumbs: true,
  /** Show caption + credit text */
  captions: true,
  /** Show fullscreen toggle button */
  fullscreen: true,
  /** Selector for clickable trigger items inside the container */
  itemSelector: ".gallery-item",
  /** Selector for the main image inside each item */
  imgSelector: ".gallery-image",
  /** Selector for caption text inside each item */
  captionSelector: ".caption-text",
  /** Selector for credit text inside each item */
  creditSelector: ".caption-credit"
});
let Lightbox = _Lightbox;
const _VideoTheater = class _VideoTheater {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ..._VideoTheater.defaults,
      ...utils.parseDataAttrs(element, "sw"),
      ...options
    };
    this.video = null;
    this.overlay = null;
    this.playBtn = null;
    this.isPlaying = false;
    this._onPlayClick = this._onPlayClick.bind(this);
    this._onVideoEnd = this._onVideoEnd.bind(this);
    this._onVideoPlay = this._onVideoPlay.bind(this);
    this._onVideoPause = this._onVideoPause.bind(this);
    this.init();
  }
  init() {
    this.video = this.element.querySelector("video");
    this.overlay = this.element.querySelector(".video-theater-overlay");
    this.playBtn = this.element.querySelector(".video-theater-play-btn");
    if (!this.video) {
      const iframe = this.element.querySelector("iframe");
      if (iframe) {
        this.element.classList.add("is-initialized", "is-iframe");
        return;
      }
      console.warn("[VideoTheater] No video or iframe element found");
      return;
    }
    if (this.options.muted) this.video.muted = true;
    if (this.options.loop) this.video.loop = true;
    this.video.preload = this.options.preload;
    if (this.playBtn) {
      this.playBtn.addEventListener("click", this._onPlayClick);
    }
    if (this.overlay) {
      this.overlay.addEventListener("click", this._onPlayClick);
    }
    this.video.addEventListener("ended", this._onVideoEnd);
    this.video.addEventListener("play", this._onVideoPlay);
    this.video.addEventListener("pause", this._onVideoPause);
    if (this.options.autoplay) {
      this.play();
    }
    this.element.classList.add("is-initialized");
  }
  play() {
    if (!this.video) return;
    const playPromise = this.video.play();
    if (playPromise !== void 0) {
      playPromise.catch((error) => {
        console.warn("[VideoTheater] Autoplay prevented:", error);
      });
    }
  }
  pause() {
    if (!this.video) return;
    this.video.pause();
  }
  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  _onPlayClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.play();
  }
  _onVideoPlay() {
    this.isPlaying = true;
    this.element.classList.add("is-playing");
    if (this.overlay) {
      this.overlay.classList.add("is-hidden");
    }
    this.element.dispatchEvent(new CustomEvent("sw:video:play"));
  }
  _onVideoPause() {
    this.isPlaying = false;
    this.element.classList.remove("is-playing");
    this.element.dispatchEvent(new CustomEvent("sw:video:pause"));
  }
  _onVideoEnd() {
    this.isPlaying = false;
    this.element.classList.remove("is-playing");
    if (this.overlay && !this.options.loop) {
      this.overlay.classList.remove("is-hidden");
    }
    this.element.dispatchEvent(new CustomEvent("sw:video:end"));
  }
  destroy() {
    if (this.playBtn) {
      this.playBtn.removeEventListener("click", this._onPlayClick);
    }
    if (this.overlay) {
      this.overlay.removeEventListener("click", this._onPlayClick);
    }
    if (this.video) {
      this.video.removeEventListener("ended", this._onVideoEnd);
      this.video.removeEventListener("play", this._onVideoPlay);
      this.video.removeEventListener("pause", this._onVideoPause);
    }
    this.element.classList.remove("is-initialized", "is-playing");
  }
  static initAll(selector = ".video-theater", scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map((el) => new _VideoTheater(el));
  }
};
__publicField(_VideoTheater, "defaults", {
  autoplay: false,
  muted: false,
  loop: false,
  preload: "metadata"
});
let VideoTheater = _VideoTheater;
const _Modal = class _Modal {
  constructor(element, options = {}) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element) {
      console.warn("[Modal] Element not found");
      return;
    }
    this.options = {
      ..._Modal.defaults,
      ...utils.parseDataAttrs(this.element, "sw"),
      ...options
    };
    this.overlay = null;
    this.closeBtn = null;
    this.previousFocus = null;
    this.isOpen = false;
    this._onOverlayClick = this._onOverlayClick.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._trapFocus = this._trapFocus.bind(this);
    this.init();
  }
  init() {
    this.overlay = this.element.querySelector(".modal-overlay");
    this.closeBtn = this.element.querySelectorAll('.modal-close, [data-sw-dismiss="modal"]');
    this.content = this.element.querySelector(".modal-content-custom");
    if (this.overlay && this.options.closeOnOverlay) {
      this.overlay.addEventListener("click", this._onOverlayClick);
    }
    this.closeBtn.forEach((btn) => {
      btn.addEventListener("click", this._onCloseClick);
    });
    this.element.setAttribute("role", "dialog");
    this.element.setAttribute("aria-modal", "true");
    if (!this.element.hasAttribute("aria-labelledby")) {
      const title = this.element.querySelector(".modal-title-custom, h2, h3");
      if (title) {
        const id = title.id || `modal-title-${Date.now()}`;
        title.id = id;
        this.element.setAttribute("aria-labelledby", id);
      }
    }
    this.element.classList.add("modal-initialized");
  }
  open() {
    if (this.isOpen) return;
    this.previousFocus = document.activeElement;
    this.isOpen = true;
    _Modal.activeModals.push(this);
    this.element.classList.add("is-active");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    if (this.options.closeOnEscape) {
      document.addEventListener("keydown", this._onKeyDown);
    }
    if (this.options.trapFocus) {
      this.element.addEventListener("keydown", this._trapFocus);
    }
    requestAnimationFrame(() => {
      const focusable = this._getFocusableElements()[0];
      if (focusable) focusable.focus();
    });
    this.element.dispatchEvent(new CustomEvent("sw:modal:open"));
  }
  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    const index = _Modal.activeModals.indexOf(this);
    if (index > -1) _Modal.activeModals.splice(index, 1);
    this.element.classList.remove("is-active");
    if (_Modal.activeModals.length === 0) {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
    document.removeEventListener("keydown", this._onKeyDown);
    this.element.removeEventListener("keydown", this._trapFocus);
    if (this.options.restoreFocus && this.previousFocus) {
      this.previousFocus.focus();
    }
    this.element.dispatchEvent(new CustomEvent("sw:modal:close"));
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  _onOverlayClick(e) {
    if (e.target === this.overlay) {
      this.close();
    }
  }
  _onCloseClick(e) {
    e.preventDefault();
    this.close();
  }
  _onKeyDown(e) {
    if (_Modal.activeModals[_Modal.activeModals.length - 1] !== this) return;
    if (e.key === "Escape") {
      e.preventDefault();
      this.close();
    }
  }
  _getFocusableElements() {
    const selector = [
      "button:not([disabled])",
      "a[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])'
    ].join(", ");
    return [...this.element.querySelectorAll(selector)].filter((el) => {
      return el.offsetParent !== null;
    });
  }
  _trapFocus(e) {
    if (e.key !== "Tab") return;
    const focusable = this._getFocusableElements();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  destroy() {
    this.close();
    if (this.overlay) {
      this.overlay.removeEventListener("click", this._onOverlayClick);
    }
    this.closeBtn.forEach((btn) => {
      btn.removeEventListener("click", this._onCloseClick);
    });
    this.element.classList.remove("modal-initialized");
  }
  // Static methods for convenience
  static open(selector) {
    const element = document.querySelector(selector);
    if (!element) return null;
    let modal = _Modal.getInstance(element);
    if (!modal) modal = new _Modal(element);
    modal.open();
    return modal;
  }
  static close(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    const modal = _Modal.getInstance(element);
    if (modal) modal.close();
  }
  static closeAll() {
    [..._Modal.activeModals].forEach((modal) => modal.close());
  }
  static getInstance(element) {
    return _Modal.activeModals.find((m) => m.element === element);
  }
  static initAll(selector = ".modal-custom", scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map((el) => new _Modal(el));
  }
};
__publicField(_Modal, "defaults", {
  closeOnOverlay: true,
  closeOnEscape: true,
  trapFocus: true,
  restoreFocus: true
});
__publicField(_Modal, "activeModals", []);
let Modal = _Modal;
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-sw-modal]");
  if (trigger) {
    e.preventDefault();
    const selector = trigger.dataset.swModal;
    Modal.open(selector);
  }
});
const _Slider = class _Slider {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ..._Slider.defaults,
      ...utils.parseDataAttrs(element, "sw"),
      ...options
    };
    this.slides = [];
    this.thumbnails = [];
    this.currentIndex = 0;
    this.autoplayTimer = null;
    this.isPlaying = false;
    this._onPrevClick = this._onPrevClick.bind(this);
    this._onNextClick = this._onNextClick.bind(this);
    this._onThumbnailClick = this._onThumbnailClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.init();
  }
  init() {
    this.slides = [...this.element.querySelectorAll(".carousel-item, .slide-item")];
    this.thumbnails = [...this.element.querySelectorAll(".carousel-thumb, .slide-thumb")];
    this.prevBtn = this.element.querySelector(".carousel-control-prev, .slide-prev");
    this.nextBtn = this.element.querySelector(".carousel-control-next, .slide-next");
    this.indicators = [...this.element.querySelectorAll(".carousel-indicator, [data-bs-slide-to]")];
    if (this.slides.length === 0) {
      console.warn("[Slider] No slides found");
      return;
    }
    if (this.prevBtn) this.prevBtn.addEventListener("click", this._onPrevClick);
    if (this.nextBtn) this.nextBtn.addEventListener("click", this._onNextClick);
    this.thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => this._onThumbnailClick(index));
    });
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goTo(index));
    });
    if (this.options.keyboard) {
      this.element.setAttribute("tabindex", "0");
      this.element.addEventListener("keydown", this._onKeyDown);
    }
    if (this.options.pauseOnHover) {
      this.element.addEventListener("mouseenter", this._onMouseEnter);
      this.element.addEventListener("mouseleave", this._onMouseLeave);
    }
    this.goTo(0);
    if (this.options.autoplay) {
      this.play();
    }
    this.element.classList.add("is-initialized");
  }
  goTo(index) {
    if (index < 0) {
      index = this.options.loop ? this.slides.length - 1 : 0;
    } else if (index >= this.slides.length) {
      index = this.options.loop ? 0 : this.slides.length - 1;
    }
    const prevIndex = this.currentIndex;
    this.currentIndex = index;
    this.slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    this.thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === index);
      thumb.setAttribute("aria-selected", i === index);
    });
    this.indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
    this.element.dispatchEvent(new CustomEvent("sw:slide:change", {
      detail: {
        currentIndex: index,
        previousIndex: prevIndex,
        slide: this.slides[index]
      }
    }));
  }
  prev() {
    this.goTo(this.currentIndex - 1);
  }
  next() {
    this.goTo(this.currentIndex + 1);
  }
  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.element.classList.add("is-playing");
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.options.autoplayInterval);
  }
  pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    this.element.classList.remove("is-playing");
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }
  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  _onPrevClick(e) {
    e.preventDefault();
    this.prev();
  }
  _onNextClick(e) {
    e.preventDefault();
    this.next();
  }
  _onThumbnailClick(index) {
    this.goTo(index);
  }
  _onKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        this.prev();
        break;
      case "ArrowRight":
        e.preventDefault();
        this.next();
        break;
      case "Home":
        e.preventDefault();
        this.goTo(0);
        break;
      case "End":
        e.preventDefault();
        this.goTo(this.slides.length - 1);
        break;
      case " ":
        e.preventDefault();
        this.toggle();
        break;
    }
  }
  _onMouseEnter() {
    if (this.isPlaying) {
      this._wasPlaying = true;
      this.pause();
    }
  }
  _onMouseLeave() {
    if (this._wasPlaying) {
      this._wasPlaying = false;
      this.play();
    }
  }
  destroy() {
    this.pause();
    if (this.prevBtn) this.prevBtn.removeEventListener("click", this._onPrevClick);
    if (this.nextBtn) this.nextBtn.removeEventListener("click", this._onNextClick);
    this.element.removeEventListener("keydown", this._onKeyDown);
    this.element.removeEventListener("mouseenter", this._onMouseEnter);
    this.element.removeEventListener("mouseleave", this._onMouseLeave);
    this.element.classList.remove("is-initialized", "is-playing");
  }
  static initAll(selector = ".carousel-thumbnails, .slider", scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map((el) => new _Slider(el));
  }
};
__publicField(_Slider, "defaults", {
  autoplay: false,
  autoplayInterval: 5e3,
  pauseOnHover: true,
  loop: true,
  keyboard: true,
  indicators: true,
  thumbnails: true
});
let Slider = _Slider;
const _Accordion = class _Accordion {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ..._Accordion.defaults,
      ...utils.parseDataAttrs(element, "sw"),
      ...options
    };
    this.items = [];
    this.expandAllBtn = null;
    this.collapseAllBtn = null;
    this._onItemClick = this._onItemClick.bind(this);
    this._onHashChange = this._onHashChange.bind(this);
    this._onExpandAllClick = this._onExpandAllClick.bind(this);
    this._onCollapseAllClick = this._onCollapseAllClick.bind(this);
    this.init();
  }
  init() {
    this.items = [...this.element.querySelectorAll(".accordion-item")];
    this.expandAllBtn = this.element.querySelector("[data-sw-expand-all]");
    this.collapseAllBtn = this.element.querySelector("[data-sw-collapse-all]");
    if (this.items.length === 0) {
      console.warn("[Accordion] No accordion items found");
      return;
    }
    this.items.forEach((item) => {
      const button = item.querySelector(".accordion-button");
      if (button) {
        button.addEventListener("click", () => this._onItemClick(item));
      }
    });
    if (this.expandAllBtn) {
      this.expandAllBtn.addEventListener("click", this._onExpandAllClick);
    }
    if (this.collapseAllBtn) {
      this.collapseAllBtn.addEventListener("click", this._onCollapseAllClick);
    }
    if (this.options.hashLinks) {
      window.addEventListener("hashchange", this._onHashChange);
      this._onHashChange();
    }
    if (this.options.allowMultiple) {
      this.element.classList.add("accordion-flush");
      this.items.forEach((item) => {
        const collapse = item.querySelector(".accordion-collapse");
        if (collapse) collapse.removeAttribute("data-bs-parent");
      });
    }
    this.element.classList.add("is-initialized");
  }
  _onItemClick(item) {
    const collapse = item.querySelector(".accordion-collapse");
    if (!collapse) return;
    if (this.options.hashLinks && collapse.id) {
      const isOpening = !collapse.classList.contains("show");
      if (isOpening) {
        history.replaceState(null, null, `#${collapse.id}`);
      }
    }
    if (this.options.scrollToOpen) {
      setTimeout(() => {
        if (collapse.classList.contains("show")) {
          const top = item.getBoundingClientRect().top + window.scrollY - this.options.scrollOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 350);
    }
    this.element.dispatchEvent(new CustomEvent("sw:accordion:toggle", {
      detail: { item, collapse }
    }));
  }
  _onHashChange() {
    var _a;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const collapse = this.element.querySelector(`#${hash}`);
    if (collapse && collapse.classList.contains("accordion-collapse")) {
      if (window.bootstrap && window.bootstrap.Collapse) {
        const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapse);
        bsCollapse.show();
      } else {
        collapse.classList.add("show");
        const button = (_a = collapse.previousElementSibling) == null ? void 0 : _a.querySelector(".accordion-button");
        if (button) button.classList.remove("collapsed");
      }
      setTimeout(() => {
        const item = collapse.closest(".accordion-item");
        if (item) {
          const top = item.getBoundingClientRect().top + window.scrollY - this.options.scrollOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }
  _onExpandAllClick(e) {
    e.preventDefault();
    this.expandAll();
  }
  _onCollapseAllClick(e) {
    e.preventDefault();
    this.collapseAll();
  }
  expandAll() {
    this.items.forEach((item) => {
      const collapse = item.querySelector(".accordion-collapse");
      if (collapse && !collapse.classList.contains("show")) {
        if (window.bootstrap && window.bootstrap.Collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(collapse).show();
        } else {
          collapse.classList.add("show");
          const button = item.querySelector(".accordion-button");
          if (button) button.classList.remove("collapsed");
        }
      }
    });
    this.element.dispatchEvent(new CustomEvent("sw:accordion:expandAll"));
  }
  collapseAll() {
    this.items.forEach((item) => {
      const collapse = item.querySelector(".accordion-collapse");
      if (collapse && collapse.classList.contains("show")) {
        if (window.bootstrap && window.bootstrap.Collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        } else {
          collapse.classList.remove("show");
          const button = item.querySelector(".accordion-button");
          if (button) button.classList.add("collapsed");
        }
      }
    });
    this.element.dispatchEvent(new CustomEvent("sw:accordion:collapseAll"));
  }
  toggle(index) {
    const item = this.items[index];
    if (!item) return;
    const collapse = item.querySelector(".accordion-collapse");
    if (collapse) {
      if (window.bootstrap && window.bootstrap.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(collapse).toggle();
      } else {
        collapse.classList.toggle("show");
        const button = item.querySelector(".accordion-button");
        if (button) button.classList.toggle("collapsed");
      }
    }
  }
  destroy() {
    window.removeEventListener("hashchange", this._onHashChange);
    if (this.expandAllBtn) {
      this.expandAllBtn.removeEventListener("click", this._onExpandAllClick);
    }
    if (this.collapseAllBtn) {
      this.collapseAllBtn.removeEventListener("click", this._onCollapseAllClick);
    }
    this.element.classList.remove("is-initialized");
  }
  static initAll(selector = ".accordion", scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map((el) => new _Accordion(el));
  }
};
__publicField(_Accordion, "defaults", {
  allowMultiple: false,
  expandAll: false,
  hashLinks: true,
  scrollToOpen: false,
  scrollOffset: 80
});
let Accordion = _Accordion;
class Navbar {
  /**
   * Initialize navbar functionality
   * @param {HTMLElement} element - Navbar element
   */
  constructor(element) {
    this.element = element;
    this.isInitialized = false;
    this.init();
  }
  /**
   * Initialize navbar features
   */
  init() {
    if (this.isInitialized) return;
    this.initNestedDropdowns();
    this.initViewportDetection();
    this.isInitialized = true;
  }
  /**
   * Initialize nested dropdown functionality
   */
  initNestedDropdowns() {
    const submenus = this.element.querySelectorAll(".dropdown-submenu");
    submenus.forEach((submenu) => {
      const link = submenu.querySelector(":scope > .dropdown-item");
      if (!link) return;
      link.addEventListener("click", (e) => {
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();
          const nestedMenu = submenu.querySelector(":scope > .dropdown-menu");
          if (nestedMenu) {
            submenu.classList.toggle("show");
            const parent = submenu.parentElement;
            parent.querySelectorAll(":scope > .dropdown-submenu.show").forEach((other) => {
              if (other !== submenu) {
                other.classList.remove("show");
              }
            });
          }
        }
      });
    });
  }
  /**
   * Auto-detect viewport edges for nested submenus
   */
  initViewportDetection() {
    const submenus = this.element.querySelectorAll(".dropdown-submenu");
    submenus.forEach((submenu) => {
      submenu.addEventListener("mouseenter", function() {
        const nestedMenu = this.querySelector(":scope > .dropdown-menu");
        if (!nestedMenu) return;
        const originalDisplay = nestedMenu.style.display;
        nestedMenu.style.display = "block";
        nestedMenu.style.visibility = "hidden";
        const rect = nestedMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        if (rect.right > viewportWidth - 10) {
          this.classList.add("submenu-left");
          this.classList.remove("submenu-right");
        } else if (rect.left < 10) {
          this.classList.add("submenu-right");
          this.classList.remove("submenu-left");
        }
        nestedMenu.style.display = originalDisplay;
        nestedMenu.style.visibility = "";
      });
    });
  }
  /**
   * Destroy the navbar instance
   */
  destroy() {
    this.isInitialized = false;
  }
  /**
   * Initialize all navbars in the document
   * @param {string} selector - CSS selector for navbar elements
   * @param {HTMLElement} scope - Scope to search within (default: document)
   * @returns {Array<Navbar>} Array of initialized navbar instances
   */
  static initAll(selector = ".navbar", scope = document) {
    const navbars = scope.querySelectorAll(selector);
    return Array.from(navbars).map((navbar) => new Navbar(navbar));
  }
}
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      Navbar.initAll();
    });
  } else {
    Navbar.initAll();
  }
}
class Offcanvas {
  constructor(element) {
    this.element = element;
    this.container = element.querySelector(".offcanvas-drill-container");
    if (this.container) {
      this.init();
    }
  }
  init() {
    this.initForwardNavigation();
    this.initBackNavigation();
    this.initReset();
  }
  /**
   * Handle forward navigation - drill into panels
   */
  initForwardNavigation() {
    this.element.querySelectorAll("[data-panel]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPanelId = link.getAttribute("data-panel");
        const targetPanel = this.container.querySelector(`#${targetPanelId}`);
        const currentPanel = this.container.querySelector(".offcanvas-drill-panel.active");
        if (targetPanel && currentPanel) {
          currentPanel.classList.remove("active");
          currentPanel.classList.add("parent");
          targetPanel.classList.add("active");
        }
      });
    });
  }
  /**
   * Handle back navigation - return to parent panels
   */
  initBackNavigation() {
    this.element.querySelectorAll("[data-back]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPanelId = btn.getAttribute("data-back");
        const targetPanel = this.container.querySelector(`#${targetPanelId}`);
        const currentPanel = this.container.querySelector(".offcanvas-drill-panel.active");
        if (targetPanel && currentPanel) {
          currentPanel.classList.remove("active");
          targetPanel.classList.remove("parent");
          targetPanel.classList.add("active");
        }
      });
    });
  }
  /**
   * Reset to main panel when offcanvas is closed
   */
  initReset() {
    this.element.addEventListener("hidden.bs.offcanvas", () => {
      const panels = this.container.querySelectorAll(".offcanvas-drill-panel");
      panels.forEach((panel) => {
        panel.classList.remove("active", "parent");
      });
      const mainPanel = panels[0];
      if (mainPanel) {
        mainPanel.classList.add("active");
      }
    });
  }
  /**
   * Cleanup
   */
  destroy() {
  }
  /**
   * Initialize all offcanvas drill navigations in the document
   */
  static initAll(selector = ".offcanvas-navbar", scope = document) {
    const elements = scope.querySelectorAll(selector);
    const instances = [];
    elements.forEach((element) => {
      const instance = new Offcanvas(element);
      instances.push(instance);
    });
    console.log(`[StoneWick] Initialized ${instances.length} offcanvas drill navigation(s)`);
    return instances;
  }
}
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      Offcanvas.initAll();
    });
  } else {
    Offcanvas.initAll();
  }
}
class Forms {
  constructor(formElement, options = {}) {
    this.form = typeof formElement === "string" ? document.querySelector(formElement) : formElement;
    if (!this.form) {
      throw new Error("Form element not found");
    }
    this.options = {
      validateOnInput: true,
      validateOnBlur: true,
      showFeedback: true,
      ...options
    };
    this.init();
  }
  init() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
    if (this.options.validateOnInput) {
      this.form.querySelectorAll(".form-control, .form-select").forEach((input) => {
        input.addEventListener("input", () => this.validateField(input));
      });
    }
    if (this.options.validateOnBlur) {
      this.form.querySelectorAll(".form-control, .form-select").forEach((input) => {
        input.addEventListener("blur", () => this.validateField(input));
      });
    }
    this.setupCustomValidation();
  }
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.form.checkValidity()) {
      this.form.classList.add("was-validated");
      const firstInvalid = this.form.querySelector(".form-control:invalid, .form-select:invalid");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return false;
    }
    this.form.classList.remove("was-validated");
    this.form.dispatchEvent(new CustomEvent("form:valid", {
      detail: { formData: new FormData(this.form) }
    }));
    return true;
  }
  validateField(input) {
    const isValid = input.checkValidity();
    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      this.hideFeedback(input, "invalid");
      this.showFeedback(input, "valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      this.hideFeedback(input, "valid");
      this.showFeedback(input, "invalid");
    }
    return isValid;
  }
  showFeedback(input, type) {
    if (!this.options.showFeedback) return;
    const feedback = input.parentElement.querySelector(`.${type}-feedback`);
    if (feedback) {
      feedback.style.display = "block";
    }
  }
  hideFeedback(input, type) {
    const feedback = input.parentElement.querySelector(`.${type}-feedback`);
    if (feedback) {
      feedback.style.display = "none";
    }
  }
  setupCustomValidation() {
    const passwordInputs = this.form.querySelectorAll("[data-password-match]");
    passwordInputs.forEach((input) => {
      const targetId = input.dataset.passwordMatch;
      const targetInput = this.form.querySelector(`#${targetId}`);
      if (targetInput) {
        const validateMatch = () => {
          if (input.value !== targetInput.value) {
            input.setCustomValidity("Passwords do not match");
          } else {
            input.setCustomValidity("");
          }
          this.validateField(input);
        };
        input.addEventListener("input", validateMatch);
        targetInput.addEventListener("input", validateMatch);
      }
    });
    const phoneInputs = this.form.querySelectorAll('[type="tel"]');
    phoneInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) value = value.slice(0, 10);
        if (value.length >= 6) {
          e.target.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length >= 3) {
          e.target.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
          e.target.value = value;
        }
      });
    });
    const emailInputs = this.form.querySelectorAll('[type="email"]');
    emailInputs.forEach((input) => {
      input.addEventListener("blur", () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value && !emailPattern.test(input.value)) {
          input.setCustomValidity("Please enter a valid email address");
        } else {
          input.setCustomValidity("");
        }
        this.validateField(input);
      });
    });
  }
  reset() {
    this.form.reset();
    this.form.classList.remove("was-validated");
    this.form.querySelectorAll(".form-control, .form-select").forEach((input) => {
      input.classList.remove("is-valid", "is-invalid");
    });
    this.form.querySelectorAll(".valid-feedback, .invalid-feedback").forEach((feedback) => {
      feedback.style.display = "none";
    });
  }
  /**
   * Initialize all forms with data-validate attribute
   */
  static initAll(options = {}) {
    const forms = document.querySelectorAll("form[data-validate]");
    const instances = [];
    forms.forEach((form) => {
      const instance = new Forms(form, options);
      instances.push(instance);
    });
    return instances;
  }
  /**
   * Initialize a specific form
   */
  static init(selector, options = {}) {
    return new Forms(selector, options);
  }
  /**
   * Utility: Check if form is valid without submitting
   */
  isValid() {
    return this.form.checkValidity();
  }
  /**
   * Utility: Get form data as object
   */
  getData() {
    const formData = new FormData(this.form);
    const data = {};
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }
    return data;
  }
  /**
   * Utility: Set form data from object
   */
  setData(data) {
    Object.entries(data).forEach(([key, value]) => {
      const input = this.form.querySelector(`[name="${key}"]`);
      if (input) {
        if (input.type === "checkbox" || input.type === "radio") {
          input.checked = value;
        } else {
          input.value = value;
        }
      }
    });
  }
  /**
   * Utility: Disable all form inputs
   */
  disable() {
    this.form.querySelectorAll("input, select, textarea, button").forEach((el) => {
      el.disabled = true;
    });
  }
  /**
   * Utility: Enable all form inputs
   */
  enable() {
    this.form.querySelectorAll("input, select, textarea, button").forEach((el) => {
      el.disabled = false;
    });
  }
}
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    Forms.initAll();
  });
}
const VERSION = "1.0.0";
function initAll(options = {}) {
  const scope = options.scope ? document.querySelector(options.scope) : document;
  const instances = {};
  instances.comparisonSliders = ComparisonSlider.initAll(".comparison-slider", scope);
  instances.lightboxes = Lightbox.initAll(".gallery-grid, .gallery-list, [data-lightbox]", scope);
  instances.videoTheaters = VideoTheater.initAll(".video-theater", scope);
  instances.modals = Modal.initAll(".modal-custom", scope);
  instances.sliders = Slider.initAll(".carousel-thumbnails", scope);
  instances.accordions = Accordion.initAll(".accordion", scope);
  instances.navbars = Navbar.initAll(".navbar", scope);
  instances.offcanvas = Offcanvas.initAll(".offcanvas-navbar", scope);
  instances.forms = Forms.initAll("form[data-validate]", scope);
  return instances;
}
if (typeof window !== "undefined") {
  window.StoneWick = {
    VERSION,
    initAll,
    ComparisonSlider,
    Lightbox,
    VideoTheater,
    Modal,
    Slider,
    Accordion,
    Navbar,
    Offcanvas,
    Forms,
    utils
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      initAll();
    });
  } else {
    initAll();
  }
}
export {
  Accordion,
  ComparisonSlider,
  Forms,
  Lightbox,
  Modal,
  Navbar,
  Offcanvas,
  Slider,
  VERSION,
  VideoTheater,
  initAll,
  utils
};
//# sourceMappingURL=stonewick.esm.js.map
