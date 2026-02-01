# StoneWick Theme - LLM Quick Reference

> **Foundation**: Bootstrap 5.3.2 - all BS5 utilities available by default

## Variables System
Always use CSS custom properties for colors, spacing, sizes:

```css
/* Colors */
var(--bs-primary)      /* #2563eb - main brand */
var(--bs-secondary)    /* #64748b - muted */
var(--bs-success)      /* #10b981 - green */
var(--bs-info)         /* #06b6d4 - cyan */
var(--bs-warning)      /* #f59e0b - amber */
var(--bs-danger)       /* #ef4444 - red */
var(--bs-light)        /* #f8fafc - light gray */
var(--bs-dark)         /* #0f172a - dark navy */
var(--bs-white)        /* #ffffff */

/* Extended colors */
var(--bs-teal)         /* #14b8a6 */
var(--bs-purple)       /* #8b5cf6 */
var(--bs-amber)        /* #f59e0b */

/* RGB variants (for opacity) */
var(--bs-primary-rgb)  /* 37, 99, 235 */
var(--bs-info-rgb)     /* 6, 182, 212 */

/* Spacing */
var(--bs-space-1) through var(--bs-space-8)

/* Shadows */
var(--bs-shadow-sm), var(--bs-shadow-md), var(--bs-shadow-lg)

/* Border radius */
var(--bs-border-radius), var(--bs-border-radius-lg), var(--bs-border-radius-xl)
```

## Section Layout

### Section Spacing Classes
```html
<section class="py-section">      <!-- Default: 4rem/6rem (mobile/desktop) -->
<section class="py-section-sm">   <!-- Small: 3rem/4rem -->
<section class="py-section-lg">   <!-- Large: 6rem/8rem -->
```

### Section Backgrounds
```html
<section class="bg-light">              <!-- Light gray -->
<section class="bg-dark">               <!-- Dark navy -->
<section class="bg-dark-gradient">      <!-- Dark with gradient -->
<section class="section-pattern pattern-dots">    <!-- Subtle dot overlay -->
<section class="section-pattern pattern-dots-wide"> <!-- Wide-spaced dots -->
<section class="section-pattern pattern-grid">    <!-- Grid overlay -->
<section class="section-pattern">                 <!-- Diagonal stripes -->
<section class="section-gradient gradient-primary"> <!-- Primary gradient -->
<section class="section-overlay">                  <!-- Dual-color gradient -->
<section class="section-accent-border border-gradient"> <!-- Top gradient border -->
```

### Section Transitions

Transitions use **negative margins** to overlap into the previous section. Simply specify the color of the NEXT section - no need to specify "from" colors.

```html
<!-- Simple dividers -->
<hr class="section-divider">              <!-- Thin line -->
<hr class="section-divider thick">        <!-- Thick line -->
<hr class="section-divider-gradient">     <!-- Gradient fade -->
<div class="section-divider-dots"></div>  <!-- Decorative dots -->

<!-- Angled transitions - just specify next section's color -->
<div class="section-angle angle-light"></div>    <!-- TO light section -->
<div class="section-angle angle-dark"></div>     <!-- TO dark section -->
<div class="section-angle angle-trust"></div>    <!-- TO bg-trust section -->
<div class="section-angle angle-reverse angle-dark"></div> <!-- Reverse direction -->

<!-- Wave transitions - just specify next section's color -->
<div class="section-wave wave-light">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
</div>
<!-- Wave colors: wave-light, wave-white, wave-dark, wave-trust, wave-primary -->
<!-- Angle colors: angle-light, angle-white, angle-dark, angle-trust, angle-primary -->
```

**TIP**: Only use transitions between sections with clearly different colors (e.g., light→dark). Don't use transitions between similar backgrounds.

## Light/Dark Component Convention

**CRITICAL RULE**: Components have light and dark variants. Use correct variant for background color.

### Light Backgrounds (white, .bg-light)
- `.card-service` - vertical card, centered icon
- `.card-feature` - horizontal card, icon + content
- `.card-benefit` - simple elevated box (requires utility classes)
- `.commerce-card` - pricing/product card
- `.badge-gradient` - circular gradient badge
- `.metric-item` - stats with icon, value, label
- `.process-timeline` - vertical timeline (default)

### Dark Backgrounds (.bg-dark, .bg-dark-gradient)
- `.card-service-dark`
- `.card-feature-dark`
- `.card-benefit-dark`
- `.card-glass` - glassmorphic card
- `.commerce-card-dark`
- `.glass-badge` - glassmorphic pill badge
- `.icon-badge` - icon containers (blue, teal, purple, amber, gray, green)
- `.pricing-table` - default pricing table is for dark

## Card Components

### card-service (Light) / card-service-dark (Dark)
**When to use**: Feature highlights, service offerings, process steps
**Structure**: Icon → Title (h4) → Description
```html
<div class="card-service">
  <div class="service-icon"><i class="bi bi-laptop"></i></div>
  <h4>Web Development</h4>
  <p>Custom websites built for your business.</p>
</div>
```

### card-feature (Light) / card-feature-dark (Dark)
**When to use**: Feature lists, benefits, horizontal layouts
**Structure**: Icon + Content side-by-side, uses h5 (not h4!)
```html
<div class="card-feature">
  <i class="bi bi-lightning text-primary fs-4"></i>
  <div>
    <h5>Fast Performance</h5>
    <p>Lightning-quick load times.</p>
  </div>
</div>
```

### card-benefit (Light) / card-benefit-dark (Dark)
**When to use**: Simple feature boxes, trust indicators
**Structure**: REQUIRES utility classes (d-flex, p-4, etc.)
```html
<div class="card-benefit d-flex flex-column justify-content-center align-items-center text-center p-4 h-100">
  <i class="bi bi-telephone fs-1 mb-3 text-primary opacity-75"></i>
  <h5 class="h6 fw-bold text-dark mb-2">24/7 Support</h5>
  <p class="small mb-0">Always here to help.</p>
</div>
```

### card-glass (Dark backgrounds only!)
**When to use**: Premium features on dark sections
**Structure**: Glassmorphic with icon-badge and glass-badge footer
```html
<div class="card-glass">
  <div class="icon-badge blue"><i class="bi bi-code-slash"></i></div>
  <h4>Clean Code</h4>
  <p>Well-structured, maintainable code.</p>
  <div class="card-footer">
    <span class="glass-badge blue"><i class="bi bi-braces"></i> Modern</span>
  </div>
</div>
```

### commerce-card (Light) / commerce-card-dark (Dark)
**When to use**: Pricing tables, product listings
```html
<div class="commerce-card">
  <div class="card-header">
    <span class="badge-gradient">Popular</span>
    <h3>Pro Plan</h3>
    <div class="price-tag">
      <span class="price">$99</span>
      <span class="period">/month</span>
    </div>
  </div>
  <ul class="feature-list">
    <li><i class="bi bi-check-circle-fill"></i> Feature 1</li>
    <li><i class="bi bi-check-circle-fill"></i> Feature 2</li>
  </ul>
  <a href="#" class="btn btn-primary w-100">Get Started</a>
</div>
```

## Special Components

### metric-item
**When to use**: Stats, performance metrics, key numbers
**Structure**: MUST include icon
```html
<div class="metric-item">
  <i class="bi bi-speedometer2"></i>
  <div class="metric-value">&lt;1s</div>
  <div class="metric-label">Load Time</div>
</div>
```

### process-timeline
**When to use**: Step-by-step processes, roadmaps
**Variants**: 
- `.timeline-filled` - filled markers
- `.timeline-gradient` - gradient markers
- `.timeline-lg` / `.timeline-sm` - size variants
- `.timeline-icon` - icon markers
- `.timeline-cards` - card-style content
- `.timeline-horizontal` - horizontal layout (desktop)
- `.timeline-alternating` - alternating sides
- `.timeline-navigable` - clickable with BS5 tabs
- Color: `.timeline-success`, `.timeline-info`, `.timeline-warning`
```html
<ol class="process-timeline timeline-filled">
  <li class="process-timeline-item">
    <div class="process-marker">1</div>
    <h3 class="process-title">Discovery</h3>
    <p class="process-text">Understanding your goals.</p>
  </li>
</ol>
```

### performance-split
**When to use**: Before/after comparisons
**Works on**: Light and dark backgrounds (auto-adapts on dark)
```html
<div class="performance-split">
  <div class="performance-visual">
    <div class="visual-header">Before</div>
    <div class="visual-metrics bad">
      <div class="visual-metric">
        <i class="bi bi-hourglass-split"></i>
        <span class="metric-text">4.2s load</span>
      </div>
    </div>
  </div>
  <div class="performance-arrow"><i class="bi bi-arrow-right"></i></div>
  <div class="performance-visual">
    <div class="visual-header">After</div>
    <div class="visual-metrics good">
      <div class="visual-metric">
        <i class="bi bi-lightning-charge-fill"></i>
        <span class="metric-text">&lt;1s load</span>
      </div>
    </div>
  </div>
</div>
```

## Hero Sections

### Hero Variants
```html
<!-- Default hero -->
<section class="hero pt-header"> <!-- pt-header for first hero only -->
  <div class="container">
    <div class="col-lg-10 hero-content">
      <h1>Headline</h1>
      <p class="lead">Lead text.</p>
      <a href="#" class="btn btn-primary btn-lg me-3">Primary</a>
      <a href="#" class="btn btn-outline-light btn-lg">Secondary</a>
    </div>
  </div>
</section>

<!-- Other variants -->
<section class="hero hero-light">      <!-- Light background -->
<section class="hero hero-centered">   <!-- Centered content -->
<section class="hero hero-compact">    <!-- Reduced padding -->
```
**Note**: Hero buttons should use `.btn-lg` by default

## Badges

### badge-gradient (Light backgrounds)
**When to use**: Feature labels, highlights, new/popular tags
```html
<span class="badge-gradient">Popular</span>
```

### glass-badge (Dark backgrounds)
**When to use**: Tags, categories in glass cards
```html
<span class="glass-badge blue"><i class="bi bi-code"></i> Modern</span>
```

### icon-badge (Dark backgrounds)
**When to use**: Icon containers in glass cards
**Colors**: blue, teal, purple, amber, gray, green
```html
<div class="icon-badge blue"><i class="bi bi-code-slash"></i></div>
```

## Typography Utilities

### Section Headers
```html
<div class="eyebrow">SECTION LABEL</div>  <!-- Small caps with underline -->
<h2 class="section-heading">Main Title</h2>
<p class="section-intro">Subtitle text</p>
```

### Content Callout
```html
<div class="content-callout">
  <strong>Pro Tip:</strong> Your message here.
</div>
```

### Text Utilities
- `.text-white-*` -  50, 70, % opacity white (for dark backgrounds)
- `.text-dark-*` - 50,  70, % opacity dark (for light backgrounds)

- `.lead` - Larger intro text
- `.eyebrow` - Small caps label with accent underline

## Custom Utilities

### Spacing
- `.py-section`, `.py-section-sm`, `.py-section-lg` - vertical section padding
- `.pt-header` - padding-top to account for fixed header (use on first hero)

### Layout
- `.container` - responsive container (BS5 standard)
- `.row`, `.col-*` - grid system (BS5 standard)

### Link Lists (Generic)
```html
<!-- Basic vertical list -->
<ul class="link-list link-list-muted link-list-sm">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
</ul>

<!-- Horizontal list -->
<ul class="link-list link-list-horizontal link-list-light">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
</ul>
```
**Layouts:**
- `.link-list-vertical` - vertical (default)
- `.link-list-horizontal` - horizontal with gap

**Sizes:**
- `.link-list-sm` - small font
- `.link-list-md` - medium font (default)

**Colors:**
- `.link-list-muted` - gray-400, hover to gray-200
- `.link-list-light` - gray-300, hover to white (for dark backgrounds)
- `.link-list-dark` - gray-600, hover to dark (for light backgrounds)

### Navigation Utilities
```html
<!-- Glassmorphic navigation -->
<nav class="nav-glass nav-fixed">
  <div class="container">
    <a class="navbar-brand">
      <span class="brand-text brand-gradient">Brand</span>
    </a>
  </div>
</nav>
```
**Nav utilities:**
- `.nav-glass` - glassmorphic background with blur
- `.nav-fixed` - fixed to top
- `.nav-link-underline` - animated underline effect on hover
- `.nav-link-light` - light colored links (for dark nav)
- `.nav-link-dark` - dark colored links (for light nav)

**Brand utilities:**
- `.brand-gradient` - primary-to-warning gradient text
- `.brand-text` - bold, inline-block brand text

**CTA button:**
- `.nav-cta` - rounded CTA button for navigation (add to `.btn`)

### Shadows
- `.shadow-sm`, `.shadow-md`, `.shadow-lg` - elevation levels

### Hover States
Most components have built-in hover states. No special classes needed.

## Common Patterns
These are short,  simplistic examples, and are not to  be used to  assume any requests are  desiring such simplistic and thin  content.

### Feature Section (Light)
```html
<section class="py-section bg-light">
  <div class="container">
    <div class="eyebrow">FEATURES</div>
    <h2 class="section-heading">What We Offer</h2>
    <p class="section-intro">Comprehensive solutions</p>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card-service">
          <div class="service-icon"><i class="bi bi-laptop"></i></div>
          <h4>Web Design</h4>
          <p>Beautiful, responsive websites.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Feature Section (Dark)
```html
<section class="py-section bg-dark">
  <div class="container">
    <div class="eyebrow text-warning">FEATURES</div>
    <h2 class="section-heading text-white">What We Offer</h2>
    <p class="section-intro text-white-70">Comprehensive solutions</p>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card-glass">
          <div class="icon-badge blue"><i class="bi bi-code-slash"></i></div>
          <h4>Clean Code</h4>
          <p>Maintainable, scalable solutions.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Metrics Section
```html
<section class="section-pattern pattern-grid py-section">
  <div class="container">
    <div class="row g-4 justify-content-center">
      <div class="col-md-3 col-6">
        <div class="metric-item">
          <i class="bi bi-code-slash"></i>
          <div class="metric-value">500+</div>
          <div class="metric-label">Projects</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Navigation Header
```html
<header class="main-header">
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <span class="brand-text brand-gradient">StoneWick</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item"><a class="nav-link btn btn-primary nav-cta" href="#quote">Get Quote</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

### Footer with Link Lists
```html
<footer>
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="footer-brand">
          <div class="brand-text brand-gradient">StoneWick</div>
          <p class="footer-description">Building beautiful web experiences.</p>
        </div>
      </div>
      <div class="col-lg-2">
        <h5 class="footer-heading">Services</h5>
        <ul class="link-list link-list-muted link-list-sm">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </div>
      <div class="col-lg-2">
        <h5 class="footer-heading">Company</h5>
        <ul class="link-list link-list-muted link-list-sm">
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="col-lg-4">
        <h5 class="footer-heading">Connect</h5>
        <div class="social-links">
          <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
          <a href="#" class="social-link"><i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom row">
      <div class="col-md-6">
        <p>&copy; 2026 StoneWick. All rights reserved.</p>
      </div>
      <div class="col-md-6">
        <ul class="link-list link-list-horizontal link-list-muted link-list-sm justify-content-md-end">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

### Section with Transition
```html
<section class="py-section bg-light">
  <!-- content -->
</section>

<!-- Wave transition to dark - uses negative margin, just specify next color -->
<div class="section-wave wave-dark">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
</div>

<section class="py-section bg-dark">
  <!-- dark content -->
</section>
```

### Highlight Text in Headings
```html
<!-- Gradient highlight for key phrases in headings -->
<h2 class="section-heading">Professional Web Development <span class="text-highlight">Done Right</span></h2>

<!-- Underline highlight variant -->
<h2>Building Sites That <span class="text-highlight-underline">Convert</span></h2>
```
## Quick Decision Guide

**Need to show services/features?** → `card-service` (light) or `card-glass` (dark)

**Need horizontal feature list?** → `card-feature` (uses h5!)

**Need simple boxes?** → `card-benefit` (remember utility classes!)

**Need stats?** → `metric-item` (must have icon)

**Need process steps?** → `process-timeline` + variant

**Need pricing?** → `commerce-card` or `pricing-table`

**Need before/after?** → `performance-split`

**Need transitions?** → `section-wave`, `section-angle`, or `section-divider` (only between contrasting sections!)

**Need background texture?** → `section-pattern`, `section-gradient`, or `section-overlay`

**Dark background?** → Use `-dark` variants, `card-glass`, `glass-badge`, `icon-badge`

## Component File Locations
- Cards: `css/components/_cards.css`
- Badges: `css/components/_badges.css`
- Timeline: `css/components/_timeline.css`
- Metrics: `css/components/_metrics.css`
- Heroes: `css/components/_hero.css`
- Transitions: `css/components/_section-transitions.css`
- Tables: `css/components/_tables.css`
