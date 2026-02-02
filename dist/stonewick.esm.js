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
const utils$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: utils
}, Symbol.toStringTag, { value: "Module" }));
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
const comparisonSlider = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComparisonSlider
}, Symbol.toStringTag, { value: "Module" }));
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
const videoTheater = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VideoTheater
}, Symbol.toStringTag, { value: "Module" }));
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
const modals = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Modal
}, Symbol.toStringTag, { value: "Module" }));
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
const slider = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Slider
}, Symbol.toStringTag, { value: "Module" }));
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
const accordion = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion
}, Symbol.toStringTag, { value: "Module" }));
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
const VERSION = "1.0.0";
function initAll(options = {}) {
  const scope = options.scope ? document.querySelector(options.scope) : document;
  const instances = {};
  const { ComparisonSlider: ComparisonSlider2 } = require("./modules/comparison-slider.js");
  const { VideoTheater: VideoTheater2 } = require("./modules/video-theater.js");
  const { Modal: Modal2 } = require("./modules/modals.js");
  const { Slider: Slider2 } = require("./modules/slider.js");
  const { Accordion: Accordion2 } = require("./modules/accordion.js");
  const { Navbar: Navbar2 } = require("./modules/navbar.js");
  const { Offcanvas: Offcanvas2 } = require("./modules/offcanvas.js");
  instances.comparisonSliders = ComparisonSlider2.initAll(".comparison-slider", scope);
  instances.videoTheaters = VideoTheater2.initAll(".video-theater", scope);
  instances.modals = Modal2.initAll(".modal-custom", scope);
  instances.sliders = Slider2.initAll(".carousel-thumbnails", scope);
  instances.accordions = Accordion2.initAll(".accordion", scope);
  instances.navbars = Navbar2.initAll(".navbar", scope);
  instances.offcanvas = Offcanvas2.initAll(".offcanvas-navbar", scope);
  console.log("[StoneWick] Initialized components:", {
    comparisonSliders: instances.comparisonSliders.length,
    videoTheaters: instances.videoTheaters.length,
    modals: instances.modals.length,
    sliders: instances.sliders.length,
    accordions: instances.accordions.length,
    navbars: instances.navbars.length,
    offcanvas: instances.offcanvas.length
  });
  return instances;
}
if (typeof window !== "undefined") {
  window.StoneWick = {
    VERSION,
    initAll,
    ComparisonSlider: null,
    VideoTheater: null,
    Modal: null,
    Slider: null,
    Accordion: null,
    utils: null
  };
  Promise.resolve().then(() => comparisonSlider).then((m) => window.StoneWick.ComparisonSlider = m.ComparisonSlider);
  Promise.resolve().then(() => videoTheater).then((m) => window.StoneWick.VideoTheater = m.VideoTheater);
  Promise.resolve().then(() => modals).then((m) => window.StoneWick.Modal = m.Modal);
  Promise.resolve().then(() => slider).then((m) => window.StoneWick.Slider = m.Slider);
  Promise.resolve().then(() => accordion).then((m) => window.StoneWick.Accordion = m.Accordion);
  Promise.resolve().then(() => utils$1).then((m) => window.StoneWick.utils = m.default);
}
export {
  Accordion,
  ComparisonSlider,
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
