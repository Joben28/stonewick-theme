# StoneWick Theme - Quick Reference

## Component Cheat Sheet

### Cards & Badges

| Component | Background | Heading | Grid |
|-----------|------------|---------|------|
| card-service | Light | h4 | col-md-4 |
| card-feature | Light | h5 | col-md-6 |
| card-benefit | Light | h6 + utilities | col-md-3 |
| card-glass | Dark | h4 | col-md-4 |
| card-service-dark | Dark | h4 | col-md-4 |
| card-feature-dark | Dark | h5 | col-md-6 |
| card-benefit-dark | Dark | h6 + utilities | col-md-3 |

**Badges**: badge-gradient (any), glass-badge (dark), icon-badge (dark)

---

### Heroes

```html
<!-- Default Dark -->
<section class="hero pt-header">
  <div class="container">
    <div class="col-lg-10 hero-content">
      <p class="eyebrow text-primary">LABEL</p>
      <h1>Heading</h1>
      <p class="lead">Lead text.</p>
      <a href="#" class="btn btn-primary btn-lg">CTA</a>
    </div>
  </div>
</section>
```

**Variants**: hero-light, hero-centered, hero-compact

---

### Navigation

| Component | Usage |
|-----------|-------|
| navbar-dark | Default navbar |
| navbar-light | Light navbar |
| navbar-primary | Primary color navbar |
| navbar-glass | Glass effect (dark bg) |
| navbar-glass-light | Glass effect (light bg) |

**See [navbar.md](navbar.md) for comprehensive navbar documentation**

```html
<!-- Basic Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            </ul>
            <div class="nav-cta">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </div>
</nav>
```

**Additional**: tabs, pills, pagination, breadcrumbs (add -dark suffix for dark variants)

---

### Media

```html
<!-- Video Theater -->
<div class="video-theater video-theater-full">
  <div class="video-theater-container">
    <div class="video-theater-player">
      <iframe src="https://www.youtube.com/embed/ID"></iframe>
    </div>
    <div class="video-theater-info">
      <h3>Video Title</h3>
      <div class="video-theater-meta">...</div>
    </div>
  </div>
</div>

<!-- Channel Header Compact -->
<div class="channel-header-compact">
  <div class="channel-avatar">
    <img src="avatar.jpg" alt="Channel">
  </div>
  <div class="channel-info">...</div>
  <div class="channel-actions">...</div>
</div>
```

---

### Interactive

```html
<!-- Testimonial -->
<div class="card-testimonial">
  <div class="testimonial-header">
    <div class="avatar avatar-lg">
      <img src="..." class="avatar-img">
    </div>
    <div class="testimonial-info">...</div>
  </div>
  <div class="testimonial-body">
    <blockquote>Quote...</blockquote>
  </div>
  <div class="testimonial-footer">
    <span class="testimonial-source google">...</span>
  </div>
</div>

<!-- Modal (Custom) -->
<div id="modal-id" class="modal-custom modal-lightbox">
  <div class="modal-overlay"></div>
  <div class="modal-content-custom">
    <button class="modal-close">×</button>
    <!-- Content -->
  </div>
</div>

<!-- Comparison Slider -->
<div class="comparison-slider">
  <div class="comparison-before">
    <img src="before.jpg" class="comparison-image">
    <div class="comparison-label comparison-label-before">Before</div>
  </div>
  <div class="comparison-after">
    <img src="after.jpg" class="comparison-image">
    <div class="comparison-label comparison-label-after">After</div>
  </div>
  <div class="comparison-handle" data-position="50">...</div>
</div>

<!-- Timeline -->
<ol class="process-timeline">
  <li class="process-timeline-item">
    <div class="process-marker">1</div>
    <h3 class="process-title">Title</h3>
    <p class="process-text">Text.</p>
  </li>
</ol>
```

**Timeline Modifiers**: timeline-filled, timeline-gradient, timeline-lg, timeline-sm, timeline-icon, timeline-cards, timeline-accent, timeline-horizontal, timeline-alternating

---

### Commerce

```html
<!-- Commerce Card (Light) -->
<div class="commerce-card">
  <div class="commerce-header">
    <h3>Basic</h3>
    <div class="price-tag">
      <span class="price-amount">$49</span>
      <span class="price-period">/mo</span>
    </div>
  </div>
  <ul class="commerce-features">
    <li><i class="bi bi-check"></i> Feature 1</li>
    <li><i class="bi bi-check"></i> Feature 2</li>
  </ul>
  <a href="#" class="btn btn-primary w-100">Get Started</a>
</div>

<!-- Product Card -->
<div class="card-product">
  <div class="product-image">
    <img src="..." alt="Product">
    <span class="product-badge sale">Sale</span>
  </div>
  <div class="product-content">
    <h5>Product Name</h5>
    <div class="product-rating">...</div>
    <div class="product-price">
      <span class="price-sale">$39.99</span>
      <span class="price-original">$49.99</span>
    </div>
  </div>
</div>
```

---

### Data & Tables

```html
<!-- Pricing Table -->
<div class="pricing-table-container">
  <table class="pricing-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Basic</th>
        <th class="featured">Pro</th>
        <th>Enterprise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Storage</td>
        <td>10 GB</td>
        <td>100 GB</td>
        <td>Unlimited</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Metric Item -->
<div class="metric-item">
  <i class="bi bi-speedometer2"></i>
  <div class="metric-value">&lt;1s</div>
  <div class="metric-label">Load Time</div>
</div>
```

---

## Common Patterns

### Three-Column Feature Section
```html
<section class="py-section bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <p class="eyebrow text-primary">FEATURES</p>
      <h2>Why Choose Us</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card-service">...</div>
      </div>
      <!-- Repeat -->
    </div>
  </div>
</section>
```

---

### Testimonials Section
```html
<section class="py-section bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <p class="eyebrow text-primary">TESTIMONIALS</p>
      <h2>What Our Clients Say</h2>
    </div>
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="card-testimonial">...</div>
      </div>
      <!-- Repeat -->
    </div>
  </div>
</section>
```

---

### Dark Section with Glass Cards
```html
<section class="py-section bg-dark-gradient">
  <div class="container">
    <div class="text-center mb-5">
      <p class="eyebrow text-warning">SERVICES</p>
      <h2 class="text-white">Our Expertise</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card-glass">
          <div class="icon-badge blue">
            <i class="bi bi-code"></i>
          </div>
          <h4>Development</h4>
          <p>Description...</p>
          <div class="card-footer">
            <span class="glass-badge blue">Badge</span>
          </div>
        </div>
      </div>
      <!-- Repeat -->
    </div>
  </div>
</section>
```

---

### Section with Wave Transition
```html
<section class="py-section">
  <!-- Content -->
</section>

<!-- Wave to next dark section -->
<div class="section-wave wave-dark">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
</div>

<section class="py-section bg-dark">
  <!-- Dark section content -->
</section>
```

---

## Critical Rules

### Background Requirements
✅ Light background: card-service, card-feature, card-benefit  
✅ Dark background: card-glass, *-dark variants  
❌ Never mix light components on dark or vice versa

### Typography
✅ card-feature uses **h5**, not h4  
✅ card-service uses **h4**  
✅ card-benefit uses **h6** with `.fw-bold`

### Buttons
✅ Heroes: Always use **btn-lg**  
✅ CTA sections: Use **btn-light** and **btn-outline-light**  
✅ Regular sections: Standard button sizes

### Layout
✅ First hero: Add **pt-header** class  
✅ Sections: Use **py-section** for padding  
✅ Cards: Use **g-4** for row gaps  
✅ Equal heights: Add **h-100** to cards

---

## JavaScript Requirements

### Interactive Components
- **Comparison Slider**: ComparisonSlider class
- **Video Theater**: VideoTheater class  
- **Custom Modals**: Modal class
- **Carousel**: Slider class
- **Accordion**: Accordion class

### Bootstrap Components (No Custom JS)
- Standard modals
- Tabs
- Accordions
- Dropdowns
- Collapse

---

## Color Variables

```css
--bs-primary: #2563eb
--bs-secondary: #64748b
--bs-success: #10b981
--bs-warning: #f59e0b
--bs-danger: #ef4444
--bs-dark: #0f172a
--bs-light: #f8fafc
--bs-white: #ffffff
```

---

## Spacing Scale

```css
--bs-space-1: 0.25rem   (4px)
--bs-space-2: 0.5rem    (8px)
--bs-space-3: 1rem      (16px)
--bs-space-4: 1.5rem    (24px)
--bs-space-5: 3rem      (48px)
--bs-space-6: 4.5rem    (72px)
```

---

## Grid Breakpoints

```css
sm: 576px
md: 768px
lg: 992px
xl: 1200px
xxl: 1400px
```

---

## Common Icon Classes

```html
<!-- Bootstrap Icons (bi) -->
<i class="bi bi-check"></i>
<i class="bi bi-x"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-heart"></i>
<i class="bi bi-lightning"></i>
<i class="bi bi-shield-check"></i>
<i class="bi bi-speedometer2"></i>
<i class="bi bi-code-slash"></i>
```

---

**Version**: StoneWick Theme v1.1.0  
**Date**: February 1, 2026
