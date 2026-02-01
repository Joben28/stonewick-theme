/**
 * StoneWick Accordion Component
 * Enhanced Bootstrap accordion with expand all and hash linking
 * 
 * @example
 * import { Accordion } from '@stonewick/theme';
 * const accordion = new Accordion(element, { expandAll: true });
 */

import utils from '../core/utils.js';

export class Accordion {
  static defaults = {
    allowMultiple: false,
    expandAll: false,
    hashLinks: true,
    scrollToOpen: false,
    scrollOffset: 80
  };

  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ...Accordion.defaults,
      ...utils.parseDataAttrs(element, 'sw'),
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
    this.items = [...this.element.querySelectorAll('.accordion-item')];
    this.expandAllBtn = this.element.querySelector('[data-sw-expand-all]');
    this.collapseAllBtn = this.element.querySelector('[data-sw-collapse-all]');

    if (this.items.length === 0) {
      console.warn('[Accordion] No accordion items found');
      return;
    }

    // Set up item click handlers
    this.items.forEach(item => {
      const button = item.querySelector('.accordion-button');
      if (button) {
        button.addEventListener('click', () => this._onItemClick(item));
      }
    });

    // Set up expand/collapse all buttons
    if (this.expandAllBtn) {
      this.expandAllBtn.addEventListener('click', this._onExpandAllClick);
    }
    if (this.collapseAllBtn) {
      this.collapseAllBtn.addEventListener('click', this._onCollapseAllClick);
    }

    // Hash linking
    if (this.options.hashLinks) {
      window.addEventListener('hashchange', this._onHashChange);
      // Check initial hash
      this._onHashChange();
    }

    // Allow multiple if configured
    if (this.options.allowMultiple) {
      this.element.classList.add('accordion-flush');
      // Remove data-bs-parent to allow multiple open
      this.items.forEach(item => {
        const collapse = item.querySelector('.accordion-collapse');
        if (collapse) collapse.removeAttribute('data-bs-parent');
      });
    }

    this.element.classList.add('is-initialized');
  }

  _onItemClick(item) {
    const collapse = item.querySelector('.accordion-collapse');
    if (!collapse) return;

    // Update hash if hashLinks enabled
    if (this.options.hashLinks && collapse.id) {
      const isOpening = !collapse.classList.contains('show');
      if (isOpening) {
        history.replaceState(null, null, `#${collapse.id}`);
      }
    }

    // Scroll to item if configured
    if (this.options.scrollToOpen) {
      setTimeout(() => {
        if (collapse.classList.contains('show')) {
          const top = item.getBoundingClientRect().top + window.scrollY - this.options.scrollOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 350); // Wait for animation
    }

    this.element.dispatchEvent(new CustomEvent('sw:accordion:toggle', {
      detail: { item, collapse }
    }));
  }

  _onHashChange() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const collapse = this.element.querySelector(`#${hash}`);
    if (collapse && collapse.classList.contains('accordion-collapse')) {
      // Use Bootstrap's collapse API if available
      if (window.bootstrap && window.bootstrap.Collapse) {
        const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapse);
        bsCollapse.show();
      } else {
        collapse.classList.add('show');
        const button = collapse.previousElementSibling?.querySelector('.accordion-button');
        if (button) button.classList.remove('collapsed');
      }

      // Scroll into view
      setTimeout(() => {
        const item = collapse.closest('.accordion-item');
        if (item) {
          const top = item.getBoundingClientRect().top + window.scrollY - this.options.scrollOffset;
          window.scrollTo({ top, behavior: 'smooth' });
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
    this.items.forEach(item => {
      const collapse = item.querySelector('.accordion-collapse');
      if (collapse && !collapse.classList.contains('show')) {
        if (window.bootstrap && window.bootstrap.Collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(collapse).show();
        } else {
          collapse.classList.add('show');
          const button = item.querySelector('.accordion-button');
          if (button) button.classList.remove('collapsed');
        }
      }
    });

    this.element.dispatchEvent(new CustomEvent('sw:accordion:expandAll'));
  }

  collapseAll() {
    this.items.forEach(item => {
      const collapse = item.querySelector('.accordion-collapse');
      if (collapse && collapse.classList.contains('show')) {
        if (window.bootstrap && window.bootstrap.Collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        } else {
          collapse.classList.remove('show');
          const button = item.querySelector('.accordion-button');
          if (button) button.classList.add('collapsed');
        }
      }
    });

    this.element.dispatchEvent(new CustomEvent('sw:accordion:collapseAll'));
  }

  toggle(index) {
    const item = this.items[index];
    if (!item) return;

    const collapse = item.querySelector('.accordion-collapse');
    if (collapse) {
      if (window.bootstrap && window.bootstrap.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(collapse).toggle();
      } else {
        collapse.classList.toggle('show');
        const button = item.querySelector('.accordion-button');
        if (button) button.classList.toggle('collapsed');
      }
    }
  }

  destroy() {
    window.removeEventListener('hashchange', this._onHashChange);
    
    if (this.expandAllBtn) {
      this.expandAllBtn.removeEventListener('click', this._onExpandAllClick);
    }
    if (this.collapseAllBtn) {
      this.collapseAllBtn.removeEventListener('click', this._onCollapseAllClick);
    }

    this.element.classList.remove('is-initialized');
  }

  static initAll(selector = '.accordion', scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map(el => new Accordion(el));
  }
}

export default Accordion;
