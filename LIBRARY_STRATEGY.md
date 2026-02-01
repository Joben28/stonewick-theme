# StoneWick Library Strategy

> Transform StoneWick from a single-project theme into a modular, versionable library for reuse across projects.

---

## Architecture Overview

```
stonewick/
├── dist/                    # Built output (git-ignored, npm-published)
│   ├── stonewick.css        # Full bundle
│   ├── stonewick.min.css    # Minified full bundle
│   ├── stonewick.js         # Full JS bundle
│   ├── stonewick.min.js     # Minified JS
│   ├── core.css             # Core only
│   ├── core.min.css
│   └── modules/             # Individual modules
│       ├── cards.css
│       ├── navigation.css
│       ├── media.css
│       ├── commerce.css
│       └── interactive.css
│
├── src/                     # Source files
│   ├── scss/                # SCSS source (optional migration)
│   │   └── ...
│   ├── css/                 # Current CSS structure
│   │   ├── core/            # Required for all projects
│   │   │   ├── _variables.css
│   │   │   ├── _base.css
│   │   │   ├── _typography.css
│   │   │   └── _utilities.css
│   │   ├── bootstrap/
│   │   │   └── _bs5-overrides.css
│   │   ├── layout/
│   │   │   ├── _layout.css
│   │   │   └── _responsive.css
│   │   └── modules/         # Optional feature modules
│   │       ├── cards/
│   │       ├── navigation/
│   │       ├── media/
│   │       ├── commerce/
│   │       └── interactive/
│   │
│   └── js/                  # JavaScript source
│       ├── core/
│       │   └── utils.js
│       └── modules/
│           ├── comparison-slider.js
│           ├── video-theater.js
│           ├── modals.js
│           └── index.js
│
├── package.json             # NPM package config
├── vite.config.js           # Build configuration
└── README.md                # Documentation
```

---

## Module Breakdown

### 1. Core (Required)
**Size**: ~15KB minified  
**Files**:
- `_variables.css` - All CSS custom properties
- `_base.css` - Reset and base HTML elements
- `_typography.css` - Type scale, headings, text utilities
- `_utilities.css` - Custom utility classes

**Usage**: Every project needs this.

---

### 2. Bootstrap Layer (Recommended)
**Size**: ~8KB minified  
**Files**:
- `_bs5-overrides.css` - Bootstrap component theming

**Usage**: When using Bootstrap 5 components.

---

### 3. Layout Module
**Size**: ~5KB minified  
**Files**:
- `_layout.css` - Header, footer, sections, CTA
- `_responsive.css` - All media queries

**Usage**: Standard page layouts.

---

### 4. Cards Module
**Size**: ~12KB minified  
**Components**:
- `card-service`, `card-service-dark`
- `card-feature`, `card-feature-dark`
- `card-benefit`, `card-benefit-dark`
- `card-glass`
- `card-media`
- `card-resource`

**Usage**: Feature sections, content grids.

---

### 5. Navigation Module
**Size**: ~10KB minified  
**Components**:
- `_navbar.css` - Header navigation, mega menu
- `_tabs.css` - Tab navigation
- `_pagination.css` - Pagination, load more
- `_breadcrumbs.css` - Breadcrumb trails

**Usage**: Multi-page sites, complex navigation.

---

### 6. Media Module
**Size**: ~8KB minified  
**Components**:
- `_hero.css` - Hero sections
- `_gallery.css` - Image galleries
- `_media-list.css` - Podcast/video lists
- `_video-theater.css` - Video players
- `_channel-header.css` - YouTube-style headers

**Usage**: Media-rich sites, portfolios.

---

### 7. Commerce Module
**Size**: ~10KB minified  
**Components**:
- `commerce-card`, `commerce-card-dark`
- `_tables.css` - Pricing tables
- `_products.css` - Product displays

**Usage**: E-commerce, SaaS pricing pages.

---

### 8. Interactive Module
**Size**: ~6KB minified (CSS) + ~15KB (JS)  
**Components**:
- `_modals.css` - Modal system
- `_slider.css` - Carousel/slider
- `_metrics.css` - Animated stats
- `_timeline.css` - Process timelines
- `_section-transitions.css` - Waves, angles

**Requires JS**: Yes

**Usage**: Landing pages, interactive experiences.

---

## JavaScript Architecture

```javascript
// src/js/index.js - Main entry
export { ComparisonSlider } from './modules/comparison-slider.js';
export { VideoTheater } from './modules/video-theater.js';
export { Modal } from './modules/modals.js';
export { Slider } from './modules/slider.js';
export { initAll } from './core/init.js';

// Auto-init on DOMContentLoaded (optional)
if (typeof window !== 'undefined') {
  window.StoneWick = { ComparisonSlider, VideoTheater, Modal, Slider, initAll };
}
```

### JS Module Pattern
```javascript
// src/js/modules/comparison-slider.js
export class ComparisonSlider {
  constructor(element, options = {}) {
    this.element = element;
    this.options = { ...ComparisonSlider.defaults, ...options };
    this.init();
  }
  
  static defaults = {
    startPosition: 50,
    showLabels: true
  };
  
  init() { /* ... */ }
  destroy() { /* ... */ }
  
  // Static factory for auto-init
  static initAll(selector = '.comparison-slider') {
    return [...document.querySelectorAll(selector)].map(el => new ComparisonSlider(el));
  }
}
```

---

## Build Configuration

### package.json
```json
{
  "name": "@stonewick/theme",
  "version": "1.0.0",
  "description": "Modular Bootstrap 5 theme with CSS custom properties",
  "main": "dist/stonewick.js",
  "module": "dist/stonewick.esm.js",
  "style": "dist/stonewick.css",
  "types": "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/stonewick.esm.js",
      "require": "./dist/stonewick.js",
      "style": "./dist/stonewick.css"
    },
    "./core": "./dist/core.css",
    "./modules/*": "./dist/modules/*.css",
    "./js/*": "./dist/js/*.js"
  },
  "files": [
    "dist",
    "src/css",
    "README.md"
  ],
  "scripts": {
    "dev": "vite",
    "build": "npm run build:css && npm run build:js",
    "build:css": "node scripts/build-css.js",
    "build:js": "vite build",
    "watch": "npm run build -- --watch",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "bootstrap": "^5.3.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "cssnano": "^6.0.0",
    "concat": "^1.0.3"
  },
  "keywords": ["bootstrap", "theme", "css", "design-system"],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourname/stonewick.git"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/js/index.js'),
      name: 'StoneWick',
      fileName: (format) => `stonewick.${format === 'es' ? 'esm' : 'js'}.js`
    },
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap'
        }
      }
    },
    minify: 'terser',
    sourcemap: true
  }
});
```

---

## Variable Override System

### How It Works

1. **Your library** defines defaults in `:root`
2. **Consumer project** overrides before importing

### Library Variables (src/css/core/_variables.css)
```css
:root {
  /* Primary brand - override these */
  --sw-primary: var(--bs-primary, #2563eb);
  --sw-primary-rgb: var(--bs-primary-rgb, 37, 99, 235);
  
  /* Secondary brand */
  --sw-secondary: var(--bs-secondary, #64748b);
  
  /* Semantic colors mapped to --sw-* */
  --sw-success: var(--bs-success, #10b981);
  --sw-warning: var(--bs-warning, #f59e0b);
  --sw-danger: var(--bs-danger, #ef4444);
  
  /* Spacing scale */
  --sw-space-1: 0.25rem;
  --sw-space-2: 0.5rem;
  --sw-space-3: 0.75rem;
  --sw-space-4: 1rem;
  --sw-space-5: 1.5rem;
  --sw-space-6: 2rem;
  --sw-space-7: 3rem;
  --sw-space-8: 4rem;
  
  /* Typography */
  --sw-font-family: var(--bs-body-font-family, system-ui, sans-serif);
  --sw-font-size-base: 1rem;
  
  /* Component tokens (derived from above) */
  --sw-card-bg: var(--bs-white, #fff);
  --sw-card-border: var(--bs-border-color, #e2e8f0);
  --sw-card-shadow: var(--bs-shadow-sm);
}
```

### Consumer Override Pattern
```css
/* my-project/css/theme-overrides.css */

/* BEFORE importing StoneWick */
:root {
  /* Override Bootstrap colors first */
  --bs-primary: #7c3aed;
  --bs-primary-rgb: 124, 58, 237;
  
  /* Override StoneWick tokens if needed */
  --sw-card-bg: #fafafa;
}

/* THEN import StoneWick */
@import '@stonewick/theme/dist/stonewick.css';
```

---

## Usage Patterns

### Pattern 1: Full Bundle (Simplest)
```html
<!-- In HTML -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="node_modules/@stonewick/theme/dist/stonewick.min.css">
<script src="node_modules/@stonewick/theme/dist/stonewick.min.js"></script>
```

### Pattern 2: Selective Modules (Optimized)
```css
/* In your main.css */
@import 'bootstrap/dist/css/bootstrap.min.css';

/* Core is always required */
@import '@stonewick/theme/dist/core.css';

/* Pick only what you need */
@import '@stonewick/theme/dist/modules/cards.css';
@import '@stonewick/theme/dist/modules/navigation.css';
/* Skip media, commerce, interactive if not needed */
```

### Pattern 3: Build Tool Integration (Vite/Webpack)
```javascript
// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@stonewick/theme/dist/core.css';
import '@stonewick/theme/dist/modules/cards.css';

// JS components (tree-shaken)
import { ComparisonSlider, Modal } from '@stonewick/theme';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  ComparisonSlider.initAll();
});
```

### Pattern 4: CDN (No Build Tool)
```html
<!-- jsDelivr CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@stonewick/theme@1.0.0/dist/stonewick.min.css">
<script src="https://cdn.jsdelivr.net/npm/@stonewick/theme@1.0.0/dist/stonewick.min.js"></script>

<!-- Or unpkg -->
<link rel="stylesheet" href="https://unpkg.com/@stonewick/theme@1.0.0/dist/stonewick.min.css">
```

---

## Versioning Strategy

### Semantic Versioning (SemVer)
```
MAJOR.MINOR.PATCH
  │     │     └── Bug fixes, no breaking changes
  │     └──────── New features, backwards compatible
  └────────────── Breaking changes
```

### Version Examples
- `1.0.0` → Initial stable release
- `1.1.0` → Added new card variant (backwards compatible)
- `1.2.0` → Added new module (backwards compatible)
- `2.0.0` → Changed variable naming convention (breaking)

### Changelog Convention
```markdown
## [1.2.0] - 2026-02-15
### Added
- New `card-testimonial` component
- `timeline-navigable` variant

### Changed
- Improved `card-glass` hover animation

### Fixed
- Modal close button alignment on mobile

### Deprecated
- `card-basic` (use `card-benefit` instead)
```

---

## Linking to Another Project

### Method 1: NPM Package (Recommended)

**Publish to NPM:**
```bash
# In stonewick directory
npm login
npm publish --access public
```

**Install in consumer project:**
```bash
npm install @stonewick/theme@^1.0.0
```

**package.json dependency:**
```json
{
  "dependencies": {
    "@stonewick/theme": "^1.0.0"
  }
}
```

---

### Method 2: Git Submodule (For Private/Dev)

**Add as submodule:**
```bash
# In consumer project
git submodule add https://github.com/yourname/stonewick.git lib/stonewick
git submodule update --init
```

**Link in your CSS:**
```css
@import './lib/stonewick/dist/stonewick.css';
```

**Update to latest:**
```bash
cd lib/stonewick
git pull origin main
cd ../..
git add lib/stonewick
git commit -m "Update stonewick to latest"
```

---

### Method 3: NPM Link (Local Development)

**In stonewick directory:**
```bash
npm link
```

**In consumer project:**
```bash
npm link @stonewick/theme
```

**Unlink when done:**
```bash
npm unlink @stonewick/theme
```

---

### Method 4: GitHub Package Registry

**package.json:**
```json
{
  "name": "@yourorg/stonewick",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

**Publish:**
```bash
npm publish
```

**Install from GitHub:**
```bash
npm install @yourorg/stonewick --registry=https://npm.pkg.github.com
```

---

## Migration Checklist

### Phase 1: Restructure
- [ ] Create `src/` directory structure
- [ ] Move CSS files to `src/css/`
- [ ] Split into core/modules
- [ ] Create module entry points

### Phase 2: JavaScript
- [ ] Extract inline JS to modules
- [ ] Create class-based components
- [ ] Add TypeScript declarations (optional)
- [ ] Bundle with Vite

### Phase 3: Build System
- [ ] Set up package.json
- [ ] Configure Vite build
- [ ] Add PostCSS processing
- [ ] Create build scripts

### Phase 4: Documentation
- [ ] Write README with install instructions
- [ ] Document all components
- [ ] Add usage examples
- [ ] Create CHANGELOG.md

### Phase 5: Publish
- [ ] Create GitHub repository
- [ ] Set up GitHub Actions for CI
- [ ] Publish to NPM
- [ ] Tag releases

---

## File Size Budget

| Bundle | Target | Includes |
|--------|--------|----------|
| Core | < 15KB | Variables, base, typography, utilities |
| Full CSS | < 60KB | All modules |
| Full JS | < 20KB | All interactive components |
| **Total** | **< 80KB** | Everything minified + gzipped |

---

## Quick Start Template

For a consumer project, create this starter:

```
my-project/
├── css/
│   └── main.css          # Your overrides + imports
├── js/
│   └── main.js           # Your JS + StoneWick init
├── index.html
└── package.json
```

**main.css:**
```css
/* 1. Your variable overrides */
:root {
  --bs-primary: #your-brand-color;
}

/* 2. Bootstrap */
@import 'bootstrap/dist/css/bootstrap.min.css';

/* 3. StoneWick (pick your modules) */
@import '@stonewick/theme/dist/core.css';
@import '@stonewick/theme/dist/modules/cards.css';

/* 4. Your custom styles */
.my-component { /* ... */ }
```

**main.js:**
```javascript
import { initAll } from '@stonewick/theme';

document.addEventListener('DOMContentLoaded', () => {
  initAll(); // Auto-initializes all StoneWick components
});
```

---

## Next Steps

1. **Review this strategy** - Confirm module groupings make sense
2. **Create build infrastructure** - package.json, vite.config.js
3. **Restructure files** - Move to src/ layout
4. **Extract JavaScript** - Create JS modules from inline scripts
5. **Test builds** - Verify bundles work
6. **Publish** - NPM or GitHub Packages
