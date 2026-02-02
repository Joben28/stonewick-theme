/**
 * Offcanvas Drill Navigation
 * Handles multi-level sliding panel navigation in offcanvas components
 */

export class Offcanvas {
  constructor(element) {
    this.element = element;
    this.container = element.querySelector('.offcanvas-drill-container');
    
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
    this.element.querySelectorAll('[data-panel]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPanelId = link.getAttribute('data-panel');
        const targetPanel = this.container.querySelector(`#${targetPanelId}`);
        const currentPanel = this.container.querySelector('.offcanvas-drill-panel.active');
        
        if (targetPanel && currentPanel) {
          currentPanel.classList.remove('active');
          currentPanel.classList.add('parent');
          targetPanel.classList.add('active');
        }
      });
    });
  }

  /**
   * Handle back navigation - return to parent panels
   */
  initBackNavigation() {
    this.element.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPanelId = btn.getAttribute('data-back');
        const targetPanel = this.container.querySelector(`#${targetPanelId}`);
        const currentPanel = this.container.querySelector('.offcanvas-drill-panel.active');
        
        if (targetPanel && currentPanel) {
          currentPanel.classList.remove('active');
          targetPanel.classList.remove('parent');
          targetPanel.classList.add('active');
        }
      });
    });
  }

  /**
   * Reset to main panel when offcanvas is closed
   */
  initReset() {
    this.element.addEventListener('hidden.bs.offcanvas', () => {
      const panels = this.container.querySelectorAll('.offcanvas-drill-panel');
      panels.forEach(panel => {
        panel.classList.remove('active', 'parent');
      });
      
      // Reactivate the first panel (main menu)
      const mainPanel = panels[0];
      if (mainPanel) {
        mainPanel.classList.add('active');
      }
    });
  }

  /**
   * Cleanup
   */
  destroy() {
    // Remove event listeners if needed
    // Note: Modern browsers handle this automatically when element is removed
  }

  /**
   * Initialize all offcanvas drill navigations in the document
   */
  static initAll(selector = '.offcanvas-navbar', scope = document) {
    const elements = scope.querySelectorAll(selector);
    const instances = [];
    
    elements.forEach(element => {
      const instance = new Offcanvas(element);
      instances.push(instance);
    });
    
    console.log(`[StoneWick] Initialized ${instances.length} offcanvas drill navigation(s)`);
    return instances;
  }
}

// Auto-initialize on DOMContentLoaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      Offcanvas.initAll();
    });
  } else {
    Offcanvas.initAll();
  }
}
