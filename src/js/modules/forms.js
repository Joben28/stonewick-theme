/**
 * Forms Module
 * Bootstrap 5 form validation with custom enhancements
 * 
 * @example
 * import { Forms } from './modules/forms.js';
 * 
 * // Auto-initialize all forms
 * document.addEventListener('DOMContentLoaded', () => {
 *   Forms.initAll();
 * });
 * 
 * // Initialize specific form
 * const myForm = Forms.init('#contactForm');
 */

export class Forms {
  constructor(formElement, options = {}) {
    this.form = typeof formElement === 'string' 
      ? document.querySelector(formElement) 
      : formElement;
    
    if (!this.form) {
      throw new Error('Form element not found');
    }

    this.options = {
      validateOnInput: true,
      validateOnBlur: true,
      showFeedback: true,
      ...options
    };

    this.init();
  }

  init() {
    // Prevent Bootstrap default validation styling on submit
    this.form.addEventListener('submit', this.handleSubmit.bind(this));

    if (this.options.validateOnInput) {
      this.form.querySelectorAll('.form-control, .form-select').forEach(input => {
        input.addEventListener('input', () => this.validateField(input));
      });
    }

    if (this.options.validateOnBlur) {
      this.form.querySelectorAll('.form-control, .form-select').forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
      });
    }

    // Handle custom validation rules
    this.setupCustomValidation();
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.form.checkValidity()) {
      // Form is invalid
      this.form.classList.add('was-validated');
      
      // Focus first invalid field
      const firstInvalid = this.form.querySelector('.form-control:invalid, .form-select:invalid');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      
      return false;
    }

    // Form is valid - remove was-validated class
    this.form.classList.remove('was-validated');
    
    // Trigger custom valid event
    this.form.dispatchEvent(new CustomEvent('form:valid', {
      detail: { formData: new FormData(this.form) }
    }));

    return true;
  }

  validateField(input) {
    const isValid = input.checkValidity();
    
    if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      this.hideFeedback(input, 'invalid');
      this.showFeedback(input, 'valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      this.hideFeedback(input, 'valid');
      this.showFeedback(input, 'invalid');
    }

    return isValid;
  }

  showFeedback(input, type) {
    if (!this.options.showFeedback) return;

    const feedback = input.parentElement.querySelector(`.${type}-feedback`);
    if (feedback) {
      feedback.style.display = 'block';
    }
  }

  hideFeedback(input, type) {
    const feedback = input.parentElement.querySelector(`.${type}-feedback`);
    if (feedback) {
      feedback.style.display = 'none';
    }
  }

  setupCustomValidation() {
    // Password matching
    const passwordInputs = this.form.querySelectorAll('[data-password-match]');
    passwordInputs.forEach(input => {
      const targetId = input.dataset.passwordMatch;
      const targetInput = this.form.querySelector(`#${targetId}`);
      
      if (targetInput) {
        const validateMatch = () => {
          if (input.value !== targetInput.value) {
            input.setCustomValidity('Passwords do not match');
          } else {
            input.setCustomValidity('');
          }
          this.validateField(input);
        };

        input.addEventListener('input', validateMatch);
        targetInput.addEventListener('input', validateMatch);
      }
    });

    // Phone number formatting
    const phoneInputs = this.form.querySelectorAll('[type="tel"]');
    phoneInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) value = value.slice(0, 10);
        
        if (value.length >= 6) {
          e.target.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length >= 3) {
          e.target.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
          e.target.value = value;
        }
      });
    });

    // Email validation enhancement
    const emailInputs = this.form.querySelectorAll('[type="email"]');
    emailInputs.forEach(input => {
      input.addEventListener('blur', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value && !emailPattern.test(input.value)) {
          input.setCustomValidity('Please enter a valid email address');
        } else {
          input.setCustomValidity('');
        }
        this.validateField(input);
      });
    });
  }

  reset() {
    this.form.reset();
    this.form.classList.remove('was-validated');
    
    // Remove validation classes from all inputs
    this.form.querySelectorAll('.form-control, .form-select').forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });

    // Hide all feedback
    this.form.querySelectorAll('.valid-feedback, .invalid-feedback').forEach(feedback => {
      feedback.style.display = 'none';
    });
  }

  /**
   * Initialize all forms with data-validate attribute
   */
  static initAll(options = {}) {
    const forms = document.querySelectorAll('form[data-validate]');
    const instances = [];

    forms.forEach(form => {
      const instance = new Forms(form, options);
      instances.push(instance);
    });

    return instances;
  }

  /**
   * Initialize a specific form
   */
  static init(selector, options = {}) {
    return new Forms(selector, options);
  }

  /**
   * Utility: Check if form is valid without submitting
   */
  isValid() {
    return this.form.checkValidity();
  }

  /**
   * Utility: Get form data as object
   */
  getData() {
    const formData = new FormData(this.form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        // Handle multiple values (like checkboxes)
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }
    
    return data;
  }

  /**
   * Utility: Set form data from object
   */
  setData(data) {
    Object.entries(data).forEach(([key, value]) => {
      const input = this.form.querySelector(`[name="${key}"]`);
      if (input) {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = value;
        } else {
          input.value = value;
        }
      }
    });
  }

  /**
   * Utility: Disable all form inputs
   */
  disable() {
    this.form.querySelectorAll('input, select, textarea, button').forEach(el => {
      el.disabled = true;
    });
  }

  /**
   * Utility: Enable all form inputs
   */
  enable() {
    this.form.querySelectorAll('input, select, textarea, button').forEach(el => {
      el.disabled = false;
    });
  }
}

// Auto-initialize on DOMContentLoaded if data-validate attribute present
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    Forms.initAll();
  });
}

export default Forms;
