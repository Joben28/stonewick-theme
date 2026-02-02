# Heroes & Layout Components

## Overview
Hero sections, typography patterns, CTAs, section transitions, and layout utilities.

---

## Hero Sections

All heroes support `.pt-header` class on first hero to account for fixed header.

### hero (Default - Dark)
**Description**: Default dark gradient hero with large heading and buttons.  
**Button Size**: Always use `btn-lg` in heroes.

```html
<section class="hero pt-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 hero-content">
                <p class="eyebrow text-primary">EYEBROW TEXT</p>
                <h1>Build Something <span class="text-highlight">Amazing</span></h1>
                <p class="lead">This is the lead paragraph with larger text.</p>
                <p class="subtitle">Optional subtitle for additional context.</p>
                <a href="#" class="btn btn-primary btn-lg me-3">Get Started</a>
                <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
            </div>
        </div>
    </div>
</section>
```

**Elements**:
- `eyebrow` - Small uppercase label
- `h1` - Main heading
- `lead` - Larger paragraph
- `subtitle` - Secondary text
- `btn-lg` - Large buttons (required in heroes)

---

### hero-light
**Description**: Light background hero variant.

```html
<section class="hero hero-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 hero-content">
                <p class="eyebrow text-primary">LIGHT HERO</p>
                <h1>Light Hero Variant</h1>
                <p class="lead">This hero has a lighter background.</p>
                <a href="#" class="btn btn-primary btn-lg me-3">Get Started</a>
                <a href="#" class="btn btn-outline-primary btn-lg">Learn More</a>
            </div>
        </div>
    </div>
</section>
```

**Button Options**: Use `btn-primary` and `btn-outline-primary` (not outline-light)

---

### hero-centered
**Description**: Centered hero with all content centered.

```html
<section class="hero hero-centered">
    <div class="container">
        <div class="hero-content text-center mx-auto" style="max-width: 800px;">
            <p class="eyebrow text-primary">CENTERED</p>
            <h1>Centered Hero</h1>
            <p class="lead">All content is centered in this variant.</p>
            <a href="#" class="btn btn-primary btn-lg me-3">Get Started</a>
            <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
        </div>
    </div>
</section>
```

**Note**: Use `text-center mx-auto` with max-width for content container.

---

### hero-compact
**Description**: Smaller padding for compact page layouts (internal pages).

```html
<section class="hero hero-compact">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 hero-content">
                <p class="eyebrow text-primary">COMPACT</p>
                <h1>Compact Hero</h1>
                <p class="lead">Smaller padding for internal pages.</p>
                <a href="#" class="btn btn-primary btn-lg">Get Started</a>
            </div>
        </div>
    </div>
</section>
```

**Use Case**: Blog posts, documentation pages, internal landing pages

---

## Typography

### Headings
Standard HTML headings h1-h6, styled with theme variables.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

---

### Text Styles

```html
<!-- Eyebrow (uppercase label) -->
<p class="eyebrow text-primary">EYEBROW TEXT</p>

<!-- Lead paragraph -->
<p class="lead">Larger introductory text for emphasis.</p>

<!-- Regular paragraph -->
<p>Standard body text for content.</p>

<!-- Section label (alternative eyebrow) -->
<p class="section-label text-primary">SECTION LABEL</p>

<!-- Section heading -->
<h2 class="section-heading">Section Heading</h2>

<!-- Section intro -->
<p class="section-intro">Introductory text for sections, styled in gray.</p>
```

---

### Text Highlights

```html
<!-- Gradient background highlight -->
<h2>Sites That <span class="text-highlight">Convert</span></h2>

<!-- Underline highlight -->
<h2>Built <span class="text-highlight-underline">Right</span></h2>
```

---

### Dark Theme Text Colors

```html
<!-- For dark backgrounds -->
<p class="text-white-90">90% opacity white</p>
<p class="text-white-80">80% opacity white</p>
<p class="text-white-70">70% opacity white</p>
```

---

## Buttons

### Button Sizes

```html
<!-- Large (use in heroes) -->
<a href="#" class="btn btn-primary btn-lg">Primary LG</a>

<!-- Regular (use in sections) -->
<a href="#" class="btn btn-primary">Primary</a>

<!-- Small -->
<a href="#" class="btn btn-primary btn-sm">Primary SM</a>
```

---

### Button Variants

```html
<!-- Solid buttons -->
<a href="#" class="btn btn-primary">Primary</a>
<a href="#" class="btn btn-secondary">Secondary</a>
<a href="#" class="btn btn-success">Success</a>
<a href="#" class="btn btn-warning">Warning</a>
<a href="#" class="btn btn-light">Light</a>

<!-- Outline buttons -->
<a href="#" class="btn btn-outline-primary">Outline Primary</a>
<a href="#" class="btn btn-outline-secondary">Outline Secondary</a>
<a href="#" class="btn btn-outline-light">Outline Light</a>
<a href="#" class="btn btn-outline-dark">Outline Dark</a>
```

---

## Content Callout

**Description**: Highlighted box for important information.

```html
<div class="content-callout">
    <strong>Real Performance:</strong> Sites built the right way from the start, not patched together and "optimized" later.
</div>
```

**Common Grid**: `col-lg-8` or `col-lg-10`

---

## CTA Section

**Description**: Full-width call-to-action section with dark gradient background.

```html
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Ready to Build Something Great?</h2>
            <p>Let's discuss your project and create a website that drives results.</p>
            <div class="cta-buttons">
                <a href="#" class="btn btn-light btn-lg">Start Your Project</a>
                <a href="#" class="btn btn-outline-light btn-lg">Call Now</a>
            </div>
        </div>
    </div>
</section>
```

**Buttons**: Use `btn-light` and `btn-outline-light` with `btn-lg`

---

## Section Transitions

### Wave Transitions

Waves use negative margins to overlap into previous section. Specify the NEXT section's color.

```html
<!-- Wave transitioning to dark section -->
<div class="section-wave wave-dark">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
    </svg>
</div>
```

**Wave Colors**: `wave-light`, `wave-white`, `wave-dark`, `wave-trust`, `wave-primary`

**Usage**: Place at end of section, before the next section with different background.

---

### Angle Transitions

```html
<!-- Angle transitioning to dark section -->
<div class="section-angle angle-dark"></div>
```

**Angle Colors**: `angle-light`, `angle-white`, `angle-dark`, `angle-trust`, `angle-primary`

---

## Background Utilities

```html
<!-- Light backgrounds -->
<section class="bg-light">...</section>

<!-- Dark backgrounds -->
<section class="bg-dark">...</section>
<section class="bg-dark-gradient">...</section>

<!-- Gradient backgrounds -->
<section class="bg-primary-gradient">...</section>
<section class="bg-light-gradient">...</section>

<!-- Trust/packages backgrounds -->
<section class="bg-trust">...</section>
<section class="bg-packages">...</section>
```

---

## Spacing Utilities

### Section Padding

```html
<!-- Standard section padding (top and bottom) -->
<section class="py-section">...</section>

<!-- Top padding only -->
<section class="pt-section">...</section>

<!-- Bottom padding only -->
<section class="pb-section">...</section>
```

### Header Offset

```html
<!-- First hero after fixed header -->
<section class="hero pt-header">...</section>
```

---

## Layout Patterns

### Two-Column Content

```html
<section class="py-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2>Left Column</h2>
                <p>Content...</p>
            </div>
            <div class="col-lg-6">
                <h2>Right Column</h2>
                <p>Content...</p>
            </div>
        </div>
    </div>
</section>
```

---

### Centered Content with Max Width

```html
<section class="py-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="text-center">
                    <h2>Centered Heading</h2>
                    <p class="lead">Centered lead text.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## Important Reminders

1. **Always use btn-lg** in hero sections
2. **Use .pt-header** on first hero to account for fixed navigation
3. **Transitions** only work between sections with different background colors
4. **Section intro** text uses gray color, best with max-width constraint
5. **CTA section** should use `btn-light` buttons, not primary
6. **Eyebrow** text should always be uppercase and in primary/accent color
