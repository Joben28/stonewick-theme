/**
 * StoneWick Modal Component
 * Custom modal system with multiple variants
 * 
 * @example
 * import { Modal } from '@stonewick/theme';
 * 
 * // Open programmatically
 * Modal.open('#my-modal');
 * 
 * // Instance-based
 * const modal = new Modal(element);
 * modal.open();
 */

import utils from '../core/utils.js';

export class Modal {
  static defaults = {
    closeOnOverlay: true,
    closeOnEscape: true,
    trapFocus: true,
    restoreFocus: true
  };

  static activeModals = [];

  constructor(element, options = {}) {
    this.element = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;
    
    if (!this.element) {
      console.warn('[Modal] Element not found');
      return;
    }

    this.options = {
      ...Modal.defaults,
      ...utils.parseDataAttrs(this.element, 'sw'),
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
    this.overlay = this.element.querySelector('.modal-overlay');
    this.closeBtn = this.element.querySelectorAll('.modal-close, [data-sw-dismiss="modal"]');
    this.content = this.element.querySelector('.modal-content-custom');

    // Set up event listeners
    if (this.overlay && this.options.closeOnOverlay) {
      this.overlay.addEventListener('click', this._onOverlayClick);
    }

    this.closeBtn.forEach(btn => {
      btn.addEventListener('click', this._onCloseClick);
    });

    // Set ARIA attributes
    this.element.setAttribute('role', 'dialog');
    this.element.setAttribute('aria-modal', 'true');
    if (!this.element.hasAttribute('aria-labelledby')) {
      const title = this.element.querySelector('.modal-title-custom, h2, h3');
      if (title) {
        const id = title.id || `modal-title-${Date.now()}`;
        title.id = id;
        this.element.setAttribute('aria-labelledby', id);
      }
    }

    this.element.classList.add('modal-initialized');
  }

  open() {
    if (this.isOpen) return;

    this.previousFocus = document.activeElement;
    this.isOpen = true;
    
    // Add to active modals stack
    Modal.activeModals.push(this);

    // Add classes and show
    this.element.classList.add('is-active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // Add keyboard listener
    if (this.options.closeOnEscape) {
      document.addEventListener('keydown', this._onKeyDown);
    }

    // Trap focus
    if (this.options.trapFocus) {
      this.element.addEventListener('keydown', this._trapFocus);
    }

    // Focus first focusable element
    requestAnimationFrame(() => {
      const focusable = this._getFocusableElements()[0];
      if (focusable) focusable.focus();
    });

    this.element.dispatchEvent(new CustomEvent('sw:modal:open'));
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    
    // Remove from active modals stack
    const index = Modal.activeModals.indexOf(this);
    if (index > -1) Modal.activeModals.splice(index, 1);

    // Remove classes
    this.element.classList.remove('is-active');
    
    // Only remove body class if no other modals open
    if (Modal.activeModals.length === 0) {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }

    // Remove listeners
    document.removeEventListener('keydown', this._onKeyDown);
    this.element.removeEventListener('keydown', this._trapFocus);

    // Restore focus
    if (this.options.restoreFocus && this.previousFocus) {
      this.previousFocus.focus();
    }

    this.element.dispatchEvent(new CustomEvent('sw:modal:close'));
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
    // Only handle if this is the topmost modal
    if (Modal.activeModals[Modal.activeModals.length - 1] !== this) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      this.close();
    }
  }

  _getFocusableElements() {
    const selector = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    return [...this.element.querySelectorAll(selector)].filter(el => {
      return el.offsetParent !== null; // Is visible
    });
  }

  _trapFocus(e) {
    if (e.key !== 'Tab') return;

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
      this.overlay.removeEventListener('click', this._onOverlayClick);
    }
    this.closeBtn.forEach(btn => {
      btn.removeEventListener('click', this._onCloseClick);
    });
    
    this.element.classList.remove('modal-initialized');
  }

  // Static methods for convenience
  static open(selector) {
    const element = document.querySelector(selector);
    if (!element) return null;
    
    let modal = Modal.getInstance(element);
    if (!modal) modal = new Modal(element);
    
    modal.open();
    return modal;
  }

  static close(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const modal = Modal.getInstance(element);
    if (modal) modal.close();
  }

  static closeAll() {
    [...Modal.activeModals].forEach(modal => modal.close());
  }

  static getInstance(element) {
    return Modal.activeModals.find(m => m.element === element);
  }

  static initAll(selector = '.modal-custom', scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map(el => new Modal(el));
  }
}

// Set up trigger buttons
document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-sw-modal]');
  if (trigger) {
    e.preventDefault();
    const selector = trigger.dataset.swModal;
    Modal.open(selector);
  }
});

export default Modal;
