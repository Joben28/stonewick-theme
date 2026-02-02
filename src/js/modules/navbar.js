/**
 * StoneWick Theme - Navbar Module
 * Handles mega menus, nested dropdowns, and mobile navigation
 */

export class Navbar {
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
    const submenus = this.element.querySelectorAll('.dropdown-submenu');
    
    submenus.forEach(submenu => {
      const link = submenu.querySelector(':scope > .dropdown-item');
      if (!link) return;

      // Mobile click handling - toggle nested dropdowns
      link.addEventListener('click', (e) => {
        // Only handle on mobile/collapsed navbar
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();
          
          const nestedMenu = submenu.querySelector(':scope > .dropdown-menu');
          if (nestedMenu) {
            // Toggle this submenu
            submenu.classList.toggle('show');
            
            // Close other submenus at same level
            const parent = submenu.parentElement;
            parent.querySelectorAll(':scope > .dropdown-submenu.show').forEach(other => {
              if (other !== submenu) {
                other.classList.remove('show');
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
    const submenus = this.element.querySelectorAll('.dropdown-submenu');
    
    submenus.forEach(submenu => {
      submenu.addEventListener('mouseenter', function() {
        const nestedMenu = this.querySelector(':scope > .dropdown-menu');
        if (!nestedMenu) return;
        
        // Temporarily show to measure
        const originalDisplay = nestedMenu.style.display;
        nestedMenu.style.display = 'block';
        nestedMenu.style.visibility = 'hidden';
        
        const rect = nestedMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Check right edge overflow - open to left instead
        if (rect.right > viewportWidth - 10) {
          this.classList.add('submenu-left');
          this.classList.remove('submenu-right');
        } else if (rect.left < 10) {
          this.classList.add('submenu-right');
          this.classList.remove('submenu-left');
        }
        
        // Restore
        nestedMenu.style.display = originalDisplay;
        nestedMenu.style.visibility = '';
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
  static initAll(selector = '.navbar', scope = document) {
    const navbars = scope.querySelectorAll(selector);
    return Array.from(navbars).map(navbar => new Navbar(navbar));
  }
}

// Auto-initialize on DOMContentLoaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      Navbar.initAll();
    });
  } else {
    Navbar.initAll();
  }
}
