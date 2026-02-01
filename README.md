# @stonewick/theme

A modular Bootstrap 5 theme with CSS custom properties and interactive JavaScript components.

## Features

- 🎨 **CSS Custom Properties** - Easy theming via CSS variables
- 📦 **Modular Architecture** - Import only what you need
- 🌗 **Light/Dark Variants** - Components for any background
- ⚡ **Interactive Components** - Sliders, modals, video players
- 🔧 **Bootstrap 5 Compatible** - Extends BS5, doesn't replace it

## Installation

```bash
npm install @stonewick/theme
```

## Quick Start

### Full Bundle (Simplest)

```html
<!-- CSS -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="node_modules/@stonewick/theme/dist/stonewick.min.css">

<!-- JS (optional, for interactive components) -->
<script src="node_modules/@stonewick/theme/dist/stonewick.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => StoneWick.initAll());
</script>
```

### Selective Imports (Optimized)

```css
/* Import only what you need */
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@stonewick/theme/dist/core.css';           /* Required */
@import '@stonewick/theme/dist/modules/cards.css';  /* Optional */
```

```javascript
// Import specific JS components
import { ComparisonSlider, Modal } from '@stonewick/theme';

document.addEventListener('DOMContentLoaded', () => {
  ComparisonSlider.initAll();
});
```

## Customization

Override CSS variables **before** importing StoneWick:

```css
:root {
  /* Override Bootstrap colors */
  --bs-primary: #7c3aed;
  --bs-primary-rgb: 124, 58, 237;
  
  /* Override StoneWick tokens */
  --sw-card-bg: #fafafa;
}

@import '@stonewick/theme/dist/stonewick.css';
```

## Available Modules

| Module | Size | Description |
|--------|------|-------------|
| `core.css` | ~15KB | Variables, base, typography, utilities |
| `bootstrap.css` | ~8KB | Bootstrap component overrides |
| `layout.css` | ~5KB | Header, footer, sections |
| `modules/cards.css` | ~12KB | Card components |
| `modules/navigation.css` | ~10KB | Navbar, tabs, pagination |
| `modules/media.css` | ~8KB | Hero, gallery, video |
| `modules/commerce.css` | ~10KB | Pricing, products |
| `modules/interactive.css` | ~6KB | Modals, sliders, timelines |

## JavaScript Components

### ComparisonSlider

```html
<div class="comparison-slider" data-sw-start-position="50">
  <div class="comparison-before"><img src="before.jpg" alt="Before"></div>
  <div class="comparison-after"><img src="after.jpg" alt="After"></div>
  <div class="comparison-handle"><!-- handle markup --></div>
</div>
```

```javascript
import { ComparisonSlider } from '@stonewick/theme';
ComparisonSlider.initAll();
```

### Modal

```javascript
import { Modal } from '@stonewick/theme';

// Open programmatically
Modal.open('#my-modal');

// Or use data attributes
// <button data-sw-modal="#my-modal">Open</button>
```

### VideoTheater

```javascript
import { VideoTheater } from '@stonewick/theme';
const theater = new VideoTheater(element, { autoplay: false });
theater.play();
```

## Component Overview

### Light Background Components
- `.card-service` - Vertical icon + title + text
- `.card-feature` - Horizontal icon + content
- `.card-benefit` - Simple elevated box
- `.commerce-card` - Pricing/product card
- `.badge-gradient` - Circular gradient badge

### Dark Background Components
- `.card-service-dark`, `.card-feature-dark`, `.card-benefit-dark`
- `.card-glass` - Glassmorphic card
- `.glass-badge` - Glassmorphic pill badge
- `.icon-badge` - Icon containers (blue, teal, purple, amber)

## CDN Usage

```html
<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@stonewick/theme@1.0.0/dist/stonewick.min.css">
<script src="https://cdn.jsdelivr.net/npm/@stonewick/theme@1.0.0/dist/stonewick.min.js"></script>

<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/@stonewick/theme@1.0.0/dist/stonewick.min.css">
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT
