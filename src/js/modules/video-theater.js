/**
 * StoneWick Video Theater Component
 * YouTube-style video player with thumbnail overlay
 * 
 * @example
 * import { VideoTheater } from '@stonewick/theme';
 * const theater = new VideoTheater(element);
 */

import utils from '../core/utils.js';

export class VideoTheater {
  static defaults = {
    autoplay: false,
    muted: false,
    loop: false,
    preload: 'metadata'
  };

  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ...VideoTheater.defaults,
      ...utils.parseDataAttrs(element, 'sw'),
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
    this.video = this.element.querySelector('video');
    this.overlay = this.element.querySelector('.video-theater-overlay');
    this.playBtn = this.element.querySelector('.video-theater-play-btn');

    if (!this.video) {
      // Check for iframe (YouTube/Vimeo embed)
      const iframe = this.element.querySelector('iframe');
      if (iframe) {
        // For iframes, we don't need play button functionality
        this.element.classList.add('is-initialized', 'is-iframe');
        return;
      }
      console.warn('[VideoTheater] No video or iframe element found');
      return;
    }

    // Set video attributes
    if (this.options.muted) this.video.muted = true;
    if (this.options.loop) this.video.loop = true;
    this.video.preload = this.options.preload;

    // Add event listeners
    if (this.playBtn) {
      this.playBtn.addEventListener('click', this._onPlayClick);
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', this._onPlayClick);
    }
    
    this.video.addEventListener('ended', this._onVideoEnd);
    this.video.addEventListener('play', this._onVideoPlay);
    this.video.addEventListener('pause', this._onVideoPause);

    // Auto-play if configured
    if (this.options.autoplay) {
      this.play();
    }

    this.element.classList.add('is-initialized');
  }

  play() {
    if (!this.video) return;
    
    const playPromise = this.video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn('[VideoTheater] Autoplay prevented:', error);
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
    this.element.classList.add('is-playing');
    if (this.overlay) {
      this.overlay.classList.add('is-hidden');
    }
    this.element.dispatchEvent(new CustomEvent('sw:video:play'));
  }

  _onVideoPause() {
    this.isPlaying = false;
    this.element.classList.remove('is-playing');
    this.element.dispatchEvent(new CustomEvent('sw:video:pause'));
  }

  _onVideoEnd() {
    this.isPlaying = false;
    this.element.classList.remove('is-playing');
    if (this.overlay && !this.options.loop) {
      this.overlay.classList.remove('is-hidden');
    }
    this.element.dispatchEvent(new CustomEvent('sw:video:end'));
  }

  destroy() {
    if (this.playBtn) {
      this.playBtn.removeEventListener('click', this._onPlayClick);
    }
    if (this.overlay) {
      this.overlay.removeEventListener('click', this._onPlayClick);
    }
    if (this.video) {
      this.video.removeEventListener('ended', this._onVideoEnd);
      this.video.removeEventListener('play', this._onVideoPlay);
      this.video.removeEventListener('pause', this._onVideoPause);
    }
    
    this.element.classList.remove('is-initialized', 'is-playing');
  }

  static initAll(selector = '.video-theater', scope = document) {
    const elements = scope.querySelectorAll(selector);
    return [...elements].map(el => new VideoTheater(el));
  }
}

export default VideoTheater;
