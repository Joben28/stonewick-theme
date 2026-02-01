/**
 * StoneWick Comparison Slider Component
 * Interactive before/after image comparison with drag handle
 * 
 * @example
 * <div class="comparison-slider" data-sw-start-position="50">
 *   <div class="comparison-before">
 *     <img src="before.jpg" alt="Before">
 *   </div>
 *   <div class="comparison-after">
 *     <img src="after.jpg" alt="After">
 *   </div>
 *   <div class="comparison-handle">
 *     <div class="comparison-handle-line"></div>
 *     <div class="comparison-handle-circle">
 *       <i class="bi bi-chevron-left"></i>
 *       <i class="bi bi-chevron-right"></i>
 *     </div>
 *   </div>
 * </div>
 * 
 * @example
 * import { ComparisonSlider } from '@stonewick/theme';
 * const slider = new ComparisonSlider(element, { startPosition: 30 });
 */

import utils from '../core/utils.js';

export class ComparisonSlider {
  static defaults = {
    startPosition: 50,
    showLabels: true,
    smoothTransition: true
  };

  /**
   * @param {HTMLElement} element - Container element
   * @param {Object} options - Configuration options
   */
  constructor(element, options = {}) {
    this.element = element;
    this.options = { 
      ...ComparisonSlider.defaults, 
      ...utils.parseDataAttrs(element, 'sw'),
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
    this.handle = this.element.querySelector('.comparison-handle');
    this.beforeEl = this.element.querySelector('.comparison-before');
    this.afterEl = this.element.querySelector('.comparison-after');
    
    if (!this.handle || !this.beforeEl) {
      console.warn('[ComparisonSlider] Missing required elements');
      return;
    }

    // Set initial position
    this.setPosition(this.position);

    // Add event listeners
    this.handle.addEventListener('mousedown', this._onMouseDown);
    this.handle.addEventListener('touchstart', this._onTouchStart, { passive: false });
    this.handle.addEventListener('keydown', this._onKeyDown);
    
    // Make handle focusable for keyboard control
    this.handle.setAttribute('tabindex', '0');
    this.handle.setAttribute('role', 'slider');
    this.handle.setAttribute('aria-valuenow', this.position);
    this.handle.setAttribute('aria-valuemin', '0');
    this.handle.setAttribute('aria-valuemax', '100');
    this.handle.setAttribute('aria-label', 'Comparison slider');

    this.element.classList.add('is-initialized');
  }

  setPosition(percent) {
    percent = Math.max(0, Math.min(100, percent));
    this.position = percent;
    
    // Update clip-path on after element (or before, depending on structure)
    this.afterEl.style.clipPath = `inset(0 0 0 ${percent}%)`;
    this.handle.style.left = `${percent}%`;
    
    // Update ARIA
    this.handle.setAttribute('aria-valuenow', Math.round(percent));
    this.handle.dataset.position = percent;
    
    // Emit event
    this.element.dispatchEvent(new CustomEvent('sw:slider:change', {
      detail: { position: percent }
    }));
  }

  _getPositionFromEvent(event) {
    const rect = this.element.getBoundingClientRect();
    const x = event.clientX || (event.touches && event.touches[0].clientX);
    return ((x - rect.left) / rect.width) * 100;
  }

  _onMouseDown(e) {
    e.preventDefault();
    this.isDragging = true;
    this.element.classList.add('is-dragging');
    
    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('mouseup', this._onMouseUp);
  }

  _onMouseMove(e) {
    if (!this.isDragging) return;
    this.setPosition(this._getPositionFromEvent(e));
  }

  _onMouseUp() {
    this.isDragging = false;
    this.element.classList.remove('is-dragging');
    
    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('mouseup', this._onMouseUp);
  }

  _onTouchStart(e) {
    e.preventDefault();
    this.isDragging = true;
    this.element.classList.add('is-dragging');
    
    document.addEventListener('touchmove', this._onTouchMove, { passive: false });
    document.addEventListener('touchend', this._onTouchEnd);
  }

  _onTouchMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    this.setPosition(this._getPositionFromEvent(e));
  }

  _onTouchEnd() {
    this.isDragging = false;
    this.element.classList.remove('is-dragging');
    
    document.removeEventListener('touchmove', this._onTouchMove);
    document.removeEventListener('touchend', this._onTouchEnd);
  }

  _onKeyDown(e) {
    const step = e.shiftKey ? 10 : 1;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        this.setPosition(this.position - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        this.setPosition(this.position + step);
        break;
      case 'Home':
        e.preventDefault();
        this.setPosition(0);
        break;
      case 'End':
        e.preventDefault();
        this.setPosition(100);
        break;
    }
  }

  destroy() {
    this.handle.removeEventListener('mousedown', this._onMouseDown);
    this.handle.removeEventListener('touchstart', this._onTouchStart);
    this.handle.removeEventListener('keydown', this._onKeyDown);
    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('mouseup', this._onMouseUp);
    document.removeEventListener('touchmove', this._onTouchMove);
    document.removeEventListener('touchend', this._onTouchEnd);
    
    this.element.classList.remove('is-initialized', 'is-dragging');
  }

  /**
   * Initialize all comparison sliders in scope
   * @param {string} selector - CSS selector
   * @param {Element} scope - Scope element
   * @returns {ComparisonSlider[]}
   */
  static initAll(selector = '.comparison-slider', scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map(el => new ComparisonSlider(el));
  }
}

export default ComparisonSlider;
