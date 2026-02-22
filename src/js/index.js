/**
 * StoneWick Theme - JavaScript Entry Point
 * 
 * @example
 * // Import everything
 * import { initAll, ComparisonSlider, Modal } from '@stonewick/theme';
 * 
 * // Auto-initialize all components
 * document.addEventListener('DOMContentLoaded', () => initAll());
 * 
 * @example
 * // Import specific components
 * import { ComparisonSlider } from '@stonewick/theme/js/comparison-slider';
 */

// Core utilities
export { default as utils } from './core/utils.js';

// Components
export { ComparisonSlider } from './modules/comparison-slider.js';
export { Lightbox } from './modules/lightbox.js';
export { VideoTheater } from './modules/video-theater.js';
export { Modal } from './modules/modals.js';
export { Slider } from './modules/slider.js';
export { Accordion } from './modules/accordion.js';
export { Navbar } from './modules/navbar.js';
export { Offcanvas } from './modules/offcanvas.js';
export { Forms } from './modules/forms.js';

// Version
export const VERSION = '1.0.0';

/**
 * Initialize all StoneWick components on the page
 * @param {Object} options - Configuration options
 * @param {string} options.scope - CSS selector to limit scope (default: document)
 * @returns {Object} Map of initialized component instances
 */
export function initAll(options = {}) {
  const scope = options.scope ? document.querySelector(options.scope) : document;
  const instances = {};
  
  // Import components dynamically to avoid issues if DOM isn't ready
  const { ComparisonSlider } = require('./modules/comparison-slider.js');
  const { Lightbox } = require('./modules/lightbox.js');
  const { VideoTheater } = require('./modules/video-theater.js');
  const { Modal } = require('./modules/modals.js');
  const { Slider } = require('./modules/slider.js');
  const { Accordion } = require('./modules/accordion.js');
  const { Navbar } = require('./modules/navbar.js');
  const { Offcanvas } = require('./modules/offcanvas.js');
  const { Forms } = require('./modules/forms.js');
  
  // Initialize each component type
  instances.comparisonSliders = ComparisonSlider.initAll('.comparison-slider', scope);
  instances.lightboxes = Lightbox.initAll('.gallery-grid, .gallery-list, [data-lightbox]', scope);
  instances.videoTheaters = VideoTheater.initAll('.video-theater', scope);
  instances.modals = Modal.initAll('.modal-custom', scope);
  instances.sliders = Slider.initAll('.carousel-thumbnails', scope);
  instances.accordions = Accordion.initAll('.accordion', scope);
  instances.navbars = Navbar.initAll('.navbar', scope);
  instances.offcanvas = Offcanvas.initAll('.offcanvas-navbar', scope);
  instances.forms = Forms.initAll('form[data-validate]', scope);
  
  console.log('[StoneWick] Initialized components:', {
    comparisonSliders: instances.comparisonSliders.length,
    lightboxes: instances.lightboxes.length,
    videoTheaters: instances.videoTheaters.length,
    modals: instances.modals.length,
    sliders: instances.sliders.length,
    accordions: instances.accordions.length,
    navbars: instances.navbars.length,
    offcanvas: instances.offcanvas.length,
    forms: instances.forms.length
  });
  
  return instances;
}

// Auto-expose to window for non-module usage
if (typeof window !== 'undefined') {
  window.StoneWick = {
    VERSION,
    initAll,
    ComparisonSlider: null,
    Lightbox: null,
    VideoTheater: null,
    Modal: null,
    Slider: null,
    Accordion: null,
    utils: null
  };
  
  // Lazy load components to window when accessed
  import('./modules/comparison-slider.js').then(m => window.StoneWick.ComparisonSlider = m.ComparisonSlider);
  import('./modules/lightbox.js').then(m => window.StoneWick.Lightbox = m.Lightbox);
  import('./modules/video-theater.js').then(m => window.StoneWick.VideoTheater = m.VideoTheater);
  import('./modules/modals.js').then(m => window.StoneWick.Modal = m.Modal);
  import('./modules/slider.js').then(m => window.StoneWick.Slider = m.Slider);
  import('./modules/accordion.js').then(m => window.StoneWick.Accordion = m.Accordion);
  import('./modules/forms.js').then(m => window.StoneWick.Forms = m.Forms);
  import('./core/utils.js').then(m => window.StoneWick.utils = m.default);
}
