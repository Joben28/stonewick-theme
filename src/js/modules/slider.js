/**
 * StoneWick Slider Component
 * Enhanced carousel with thumbnail navigation
 * 
 * @example
 * import { Slider } from '@stonewick/theme';
 * const slider = new Slider(element, { autoplay: true });
 */

import utils from '../core/utils.js';

export class Slider {
  static defaults = {
    autoplay: false,
    autoplayInterval: 5000,
    pauseOnHover: true,
    loop: true,
    keyboard: true,
    indicators: true,
    thumbnails: true
  };

  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ...Slider.defaults,
      ...utils.parseDataAttrs(element, 'sw'),
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
    // Get slides (carousel items or direct children)
    this.slides = [...this.element.querySelectorAll('.carousel-item, .slide-item')];
    this.thumbnails = [...this.element.querySelectorAll('.carousel-thumb, .slide-thumb')];
    
    // Get controls
    this.prevBtn = this.element.querySelector('.carousel-control-prev, .slide-prev');
    this.nextBtn = this.element.querySelector('.carousel-control-next, .slide-next');
    this.indicators = [...this.element.querySelectorAll('.carousel-indicator, [data-bs-slide-to]')];

    if (this.slides.length === 0) {
      console.warn('[Slider] No slides found');
      return;
    }

    // Set up controls
    if (this.prevBtn) this.prevBtn.addEventListener('click', this._onPrevClick);
    if (this.nextBtn) this.nextBtn.addEventListener('click', this._onNextClick);

    // Set up thumbnails
    this.thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => this._onThumbnailClick(index));
    });

    // Set up indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goTo(index));
    });

    // Keyboard navigation
    if (this.options.keyboard) {
      this.element.setAttribute('tabindex', '0');
      this.element.addEventListener('keydown', this._onKeyDown);
    }

    // Pause on hover
    if (this.options.pauseOnHover) {
      this.element.addEventListener('mouseenter', this._onMouseEnter);
      this.element.addEventListener('mouseleave', this._onMouseLeave);
    }

    // Initial state
    this.goTo(0);

    // Start autoplay
    if (this.options.autoplay) {
      this.play();
    }

    this.element.classList.add('is-initialized');
  }

  goTo(index) {
    // Handle wrap-around
    if (index < 0) {
      index = this.options.loop ? this.slides.length - 1 : 0;
    } else if (index >= this.slides.length) {
      index = this.options.loop ? 0 : this.slides.length - 1;
    }

    const prevIndex = this.currentIndex;
    this.currentIndex = index;

    // Update slides
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // Update thumbnails
    this.thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('is-active', i === index);
      thumb.setAttribute('aria-selected', i === index);
    });

    // Update indicators
    this.indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('sw:slide:change', {
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
    this.element.classList.add('is-playing');
    
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.options.autoplayInterval);
  }

  pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    this.element.classList.remove('is-playing');
    
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
      case 'ArrowLeft':
        e.preventDefault();
        this.prev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        this.next();
        break;
      case 'Home':
        e.preventDefault();
        this.goTo(0);
        break;
      case 'End':
        e.preventDefault();
        this.goTo(this.slides.length - 1);
        break;
      case ' ':
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
    
    if (this.prevBtn) this.prevBtn.removeEventListener('click', this._onPrevClick);
    if (this.nextBtn) this.nextBtn.removeEventListener('click', this._onNextClick);
    
    this.element.removeEventListener('keydown', this._onKeyDown);
    this.element.removeEventListener('mouseenter', this._onMouseEnter);
    this.element.removeEventListener('mouseleave', this._onMouseLeave);
    
    this.element.classList.remove('is-initialized', 'is-playing');
  }

  static initAll(selector = '.carousel-thumbnails, .slider', scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map(el => new Slider(el));
  }
}

export default Slider;
