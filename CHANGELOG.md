# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-02-03

### Added
- **Forms Component**: Comprehensive form controls, validation, and layouts following Bootstrap 5 standards
  - Form controls: `.form-control`, `.form-select`, `.form-check` with theme variable integration
  - Validation states: `.is-valid`, `.is-invalid` with custom icons and feedback
  - Validation feedback: `.valid-feedback`, `.invalid-feedback`, `.valid-tooltip`, `.invalid-tooltip`
  - Form checks: Custom checkbox, radio, and switch styling with theme colors
  - Form ranges: Styled range sliders with primary color theming
  - Input groups: Text addons and button combinations
  - Floating labels: Animated label positioning
  - Dark form variants: `.form-control-dark`, `.form-label-dark` for dark backgrounds
  - Form layouts: Inline forms, grid system integration, responsive columns
  
- **Forms JavaScript Module** (`forms.js`): Client-side validation and interaction
  - Real-time validation on input/blur events
  - Custom validation rules: password matching, phone formatting, enhanced email validation
  - Bootstrap 5 validation integration with `was-validated` class
  - Auto-initialization via `data-validate` attribute
  - Custom events: `form:valid` event on successful validation
  - Utility methods:
    - `isValid()` - Check form validity without submitting
    - `getData()` - Get form data as object (handles multiple values)
    - `setData(data)` - Populate form from object
    - `disable()` / `enable()` - Toggle all form inputs
    - `reset()` - Clear form and validation states
  - Phone number auto-formatting to (555) 123-4567 format
  - Password confirmation validation
  - Focus management (auto-focus first invalid field)

- **Kitchen Sink Forms Examples**: Comprehensive form demonstrations
  - Contact form with full validation (required fields, email, phone, textarea)
  - Password matching form with custom validation
  - Dark theme form example
  - Validation state examples (valid/invalid/neutral)
  - Form ranges with value display
  - File upload inputs
  - Disabled state examples
  - Input groups with icons and buttons
  - Switches and inline checkboxes/radios
  - Floating labels demo

### Technical Details
- **CSS**: 900+ lines of form styling in `_forms.css`
- **JavaScript**: 300+ lines of validation logic in `forms.js`
- **Bundle Size**: +14.48 KB (CSS), +4.47 KB (JS) minified
- **Total Bundle**: 183.31 KB (CSS), 29.65 KB (JS) gzipped
- **Bootstrap Compatibility**: Full compatibility with Bootstrap 5.3.2 form classes and validation
- **Theme Integration**: All form colors use CSS custom properties for consistent theming
- **Validation Icons**: SVG icons embedded as data URIs (success checkmark, error X)

### Integration Guide for API/Workers

**Form Initialization:**
```javascript
import { Forms } from '@stonewick/theme';

// Auto-initialize all forms with data-validate
Forms.initAll();

// Or initialize specific form
const contactForm = Forms.init('#contactForm');
```

**Handling Form Submission:**
```javascript
const form = document.getElementById('contactForm');

form.addEventListener('form:valid', async (e) => {
  const formData = e.detail.formData;
  
  // Convert FormData to JSON
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  // Send to API/Worker
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      alert('Form submitted successfully!');
      form.reset();
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
});
```

**Using Form Utilities:**
```javascript
const myForm = Forms.init('#myForm');

// Check validity before AJAX submission
if (myForm.isValid()) {
  const data = myForm.getData(); // Returns object
  await sendToAPI(data);
}

// Disable form during submission
myForm.disable();
await sendToAPI();
myForm.enable();

// Pre-populate form from API response
const userData = await fetchUserData();
myForm.setData(userData);
```

**Custom Validation Rules:**
```html
<!-- Password matching -->
<input type="password" id="password">
<input type="password" data-password-match="password">

<!-- Phone auto-formatting -->
<input type="tel" placeholder="(555) 123-4567">
```

**Cloudflare Workers Example:**
```javascript
// Worker endpoint
export default {
  async fetch(request) {
    if (request.method === 'POST') {
      const formData = await request.json();
      
      // Validate server-side
      if (!formData.email || !formData.message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Process form data
      await sendEmail(formData);
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
}
```

### Changed
- Updated `theme.css` to import `components/_forms.css`
- Updated `index.js` to export Forms module
- Updated `initAll()` to initialize forms with `data-validate` attribute
- Enhanced kitchen sink interactive section with comprehensive form examples

### Files Modified
- `package.json` - Version bump to 1.2.0
- `css/components/_forms.css` - New file (CSS)
- `src/css/modules/interactive/_forms.css` - New file (build source)
- `src/js/modules/forms.js` - New file (JavaScript)
- `css/theme.css` - Added forms import
- `src/js/index.js` - Added forms export
- `scripts/build-css.js` - Added forms to interactive module
- `ks-interactive.html` - Enhanced with validation examples

## [1.1.0] - 2026-02-01

### Changed
- **BREAKING CHANGE**: Replaced all hardcoded color values with CSS custom properties throughout the theme
- Button state colors now use `color-mix()` with base variables for dynamic theming
- All `rgba(255, 255, 255, X)` values replaced with `rgba(var(--bs-white-rgb), X)`
- All `rgba(0, 0, 0, X)` values replaced with `rgba(var(--bs-black-rgb), X)`
- All standalone `#ffffff` values replaced with `var(--bs-white)`
- Background gradients now use CSS variables for colors

### Added
- `--bs-black` and `--bs-black-rgb` variables to color palette
- Social media brand colors documented in modals component (Google, Yelp, Facebook, LinkedIn)

### Fixed
- CSS syntax error in modals component (line 1576) causing build failures
- All hardcoded colors now properly reference theme variables for consistent theming

### Technical Details
- **~200+ color replacements** across 25+ CSS files
- Button hover/active states: `color-mix(in srgb, var(--bs-primary) 85%, black)`
- Navigation components: All white rgba values converted to `var(--bs-white-rgb)`
- Media components: Video theater, gallery, and channel headers updated
- Interactive components: Modals, sliders, timelines, section transitions
- Cards & commerce: All component variants updated

This release ensures all theme colors can be customized by overriding root CSS variables, enabling true theme customization without modifying component styles.

## [1.0.0] - 2026-02-01

### Added
- Initial stable release
- Full Bootstrap 5.3.2 theme with CSS custom properties
- Modular CSS architecture
- Light and dark component variants
- Interactive JavaScript components
- Comprehensive documentation

### Components
- **Cards**: card-service, card-feature, card-benefit, card-glass, card-media, card-resource, commerce-card
- **Badges**: badge-gradient, glass-badge, icon-badge
- **Navigation**: navbar (with mega menu), tabs, pagination, breadcrumbs
- **Media**: hero, gallery, media-list, video-theater, channel-header
- **Interactive**: modals, slider, comparison-slider, metrics, timeline
- **Layout**: section transitions (waves, angles), section patterns

### JavaScript
- ComparisonSlider - Before/after image comparison
- VideoTheater - YouTube-style video player
- Modal - Custom modal system with variants
- Slider - Carousel with thumbnail navigation
- Accordion - Enhanced accordion with expand all

[Unreleased]: https://github.com/Joben28/stonewick-theme/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/Joben28/stonewick-theme/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Joben28/stonewick-theme/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Joben28/stonewick-theme/releases/tag/v1.0.0
