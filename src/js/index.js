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
import utils from './core/utils.js';
export { utils };

// Components — imported here so initAll() can reference them directly
import { ComparisonSlider } from './modules/comparison-slider.js';
import { Lightbox }         from './modules/lightbox.js';
import { VideoTheater }     from './modules/video-theater.js';
import { Modal }            from './modules/modals.js';
import { Slider }           from './modules/slider.js';
import { Accordion }        from './modules/accordion.js';
import { Navbar }           from './modules/navbar.js';
import { Offcanvas }        from './modules/offcanvas.js';
import { Forms }            from './modules/forms.js';

export { ComparisonSlider, Lightbox, VideoTheater, Modal, Slider, Accordion, Navbar, Offcanvas, Forms };

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

  instances.comparisonSliders = ComparisonSlider.initAll('.comparison-slider', scope);
  instances.lightboxes        = Lightbox.initAll('.gallery-grid, .gallery-list, [data-lightbox]', scope);
  instances.videoTheaters     = VideoTheater.initAll('.video-theater', scope);
  instances.modals            = Modal.initAll('.modal-custom', scope);
  instances.sliders           = Slider.initAll('.carousel-thumbnails', scope);
  instances.accordions        = Accordion.initAll('.accordion', scope);
  instances.navbars           = Navbar.initAll('.navbar', scope);
  instances.offcanvas         = Offcanvas.initAll('.offcanvas-navbar', scope);
  instances.forms             = Forms.initAll('form[data-validate]', scope);

  return instances;
}

// Auto-expose to window for non-module / plain <script> usage
if (typeof window !== 'undefined') {
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
    utils,
  };

  // Auto-init when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { initAll(); });
  } else {
    initAll();
  }
}
