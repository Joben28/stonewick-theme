/**
 * StoneWick Core Utilities
 */

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
    const prop = name.startsWith('--') ? name : `--${name}`;
    return getComputedStyle(element).getPropertyValue(prop).trim();
  },

  /**
   * Set CSS custom property value
   * @param {string} name - Property name (with or without --)
   * @param {string} value - Value to set
   * @param {Element} element - Element to set on (default: documentElement)
   */
  setCSSVar(name, value, element = document.documentElement) {
    const prop = name.startsWith('--') ? name : `--${name}`;
    element.style.setProperty(prop, value);
  },

  /**
   * Parse data attributes from element
   * @param {Element} element - Element to parse
   * @param {string} prefix - Attribute prefix (default: 'sw')
   * @returns {Object}
   */
  parseDataAttrs(element, prefix = 'sw') {
    const attrs = {};
    const regex = new RegExp(`^data-${prefix}-(.+)$`);
    
    for (const attr of element.attributes) {
      const match = attr.name.match(regex);
      if (match) {
        const key = match[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        let value = attr.value;
        
        // Try to parse as JSON/number/boolean
        try {
          value = JSON.parse(value);
        } catch {
          if (value === 'true') value = true;
          else if (value === 'false') value = false;
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
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  },

  /**
   * Wait for element to exist in DOM
   * @param {string} selector - CSS selector
   * @param {number} timeout - Timeout in ms
   * @returns {Promise<Element>}
   */
  waitForElement(selector, timeout = 5000) {
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
      easing: 'ease-out',
      fill: 'forwards'
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
    
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    if (threshold === 0) return vertInView && horInView;
    
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    const visibleArea = visibleHeight * visibleWidth;
    const totalArea = rect.height * rect.width;
    
    return (visibleArea / totalArea) >= threshold;
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
        this._events[event] = this._events[event].filter(cb => cb !== callback);
      }
      return this;
    },
    
    emit(event, ...args) {
      if (!this._events[event]) return this;
      this._events[event].forEach(cb => cb.apply(this, args));
      return this;
    }
  }
};

export default utils;
