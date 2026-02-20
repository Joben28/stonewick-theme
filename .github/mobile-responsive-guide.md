# Mobile Responsive Guide for Demos & Brand Sites

> **CRITICAL**: Read this file completely before making ANY mobile responsive changes to demo sites or brand implementations.

## Mobile-First Philosophy

All demos and brand sites MUST be fully responsive from mobile (320px) through desktop (1920px+). Mobile users are the priority—never ship a demo that breaks on mobile.

## Responsive Grid Pattern

### The Golden Rule: col-12 → col-sm-6 → col-md/lg-*

**ALWAYS** use this progression for card grids and content columns:

```html
<!-- ✅ CORRECT: Mobile full width, tablet 2-up, desktop 3-4 columns -->
<div class="col-12 col-sm-6 col-lg-3">...</div>
<div class="col-12 col-sm-6 col-lg-4">...</div>
<div class="col-12 col-sm-6 col-md-4">...</div>

<!-- ❌ WRONG: Breaks on mobile with 2 columns -->
<div class="col-md-6 col-lg-3">...</div>
<div class="col-md-6 col-lg-4">...</div>
```

**Breakpoints:**
- Mobile: `<576px` - Full width (col-12)
- Tablet: `576px-767px` - 2 columns (col-sm-6)
- Desktop: `768px+` - 3-4 columns (col-md-4, col-lg-3/4)

### Common Grid Patterns

| Layout | Classes | Mobile | Tablet | Desktop |
|--------|---------|--------|--------|---------|
| Service cards | `col-12 col-sm-6 col-lg-3` | 1-up | 2-up | 4-up |
| Feature grid | `col-12 col-sm-6 col-lg-4` | 1-up | 2-up | 3-up |
| Contact cards | `col-12 col-sm-6 col-md-4` | 1-up | 2-up | 3-up |
| Stats/metrics | `col-12 col-sm-6 col-lg-3` | 1-up | 2-up | 4-up |

### When col-md-6 is OK

Form fields and side-by-side content sections can use `col-md-6` **without** col-12 prefix because they naturally stack on mobile:

```html
<!-- ✅ CORRECT: Form fields can start at col-md-6 -->
<div class="col-md-6">
    <input type="text" class="form-control">
</div>

<!-- ✅ CORRECT: Content split layouts -->
<div class="col-lg-6">
    <h2>Heading</h2>
    <p>Content...</p>
</div>
```

**When to add col-12:**
- ✅ Card components (service cards, feature cards, contact cards)
- ✅ Product/pricing cards
- ✅ Testimonial cards
- ✅ Icon/badge grids
- ✅ Any "grid of items" layout

**When col-md-6 is fine:**
- ✅ Form input fields
- ✅ Text content sections
- ✅ Image/text splits (col-lg-6 + col-lg-6)

## Button Responsive Patterns

### CTA Button Groups

**ALWAYS** stack buttons vertically on mobile:

```html
<!-- ✅ CORRECT: Buttons stack on mobile, horizontal on tablet+ -->
<div class="d-flex flex-column flex-sm-row gap-3">
    <a href="#" class="btn btn-primary btn-lg">Primary Action</a>
    <a href="#" class="btn btn-secondary btn-lg">Secondary Action</a>
</div>

<!-- ✅ CORRECT: Centered button groups -->
<div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
    <a href="#" class="btn btn-primary btn-lg">Call Now</a>
    <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
</div>

<!-- ❌ WRONG: Buttons side-by-side on mobile, text wraps ugly -->
<div>
    <a href="#" class="btn btn-primary btn-lg me-3">Call Now</a>
    <a href="#" class="btn btn-secondary btn-lg">Learn More</a>
</div>
```

**Key points:**
- Use `d-flex flex-column flex-sm-row` for mobile stacking
- Use `gap-3` instead of margin classes (`me-3`, `ms-2`)
- Add `justify-content-center` for centered layouts
- Buttons are full-width on mobile by default via CSS

### Hero Button Patterns

```html
<!-- Hero CTA buttons -->
<div class="hero-actions d-flex flex-column flex-sm-row gap-3">
    <a href="#" class="btn btn-primary btn-lg">Get Started</a>
    <a href="#" class="btn btn-outline-light btn-lg">Learn More</a>
</div>
```

## Mobile CSS Rules

### Consistent Padding

**ALL** sections, containers, and content areas must use `1.5rem` horizontal padding on mobile:

```css
@media (max-width: 575.98px) {
    /* Sections */
    section.py-section,
    section.py-section-sm {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    
    /* Containers */
    .container,
    .container-fluid {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    /* Cards and components */
    .card,
    .card-body,
    .card-service,
    .card-feature {
        padding: 1.5rem;
    }
}
```

### Full-Width Buttons on Mobile

```css
@media (max-width: 575.98px) {
    .btn,
    .btn-lg,
    .btn-primary,
    .btn-secondary {
        width: 100%;
        display: block;
    }
}
```

### Responsive Typography

```css
@media (max-width: 575.98px) {
    /* Hero headings */
    .hero h1,
    .hero .display-1,
    .hero .display-2 {
        font-size: 2rem;
        line-height: 1.2;
    }
    
    /* Section headings */
    h2, .h2 {
        font-size: 1.75rem;
    }
    
    /* Lead text */
    .lead {
        font-size: 1.125rem;
    }
}
```

### Navigation Mobile Styles

```css
@media (max-width: 991.98px) {
    /* Full-width mobile nav */
    .navbar-collapse {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--navbar-bg);
        padding: 1rem 1.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    /* Stack nav links */
    .navbar-nav {
        gap: 0.5rem;
    }
    
    .navbar-nav .nav-link {
        padding: 0.75rem 1rem;
        border-radius: 0.25rem;
    }
}
```

## Common Mobile Mistakes to Avoid

### ❌ Problem: Cards appear 2-up on mobile
**Symptom:** User sees cramped 50-50 card layout on phone
**Cause:** `col-md-6` or `col-lg-6` without `col-12` prefix
**Fix:** Add `col-12 col-sm-6` before `col-md-6`

```html
<!-- ❌ WRONG -->
<div class="col-md-6 col-lg-3">
    <div class="card-service">...</div>
</div>

<!-- ✅ CORRECT -->
<div class="col-12 col-sm-6 col-lg-3">
    <div class="card-service">...</div>
</div>
```

### ❌ Problem: Buttons don't stack on mobile
**Symptom:** Two buttons side-by-side, text truncated or wrapped
**Cause:** Missing flex-column directive or using margin classes
**Fix:** Use `d-flex flex-column flex-sm-row gap-3`

```html
<!-- ❌ WRONG -->
<div>
    <a href="#" class="btn btn-primary me-3">Button 1</a>
    <a href="#" class="btn btn-secondary">Button 2</a>
</div>

<!-- ✅ CORRECT -->
<div class="d-flex flex-column flex-sm-row gap-3">
    <a href="#" class="btn btn-primary">Button 1</a>
    <a href="#" class="btn btn-secondary">Button 2</a>
</div>
```

### ❌ Problem: Inconsistent padding on mobile
**Symptom:** Some sections have 15px padding, others 24px, looks janky
**Cause:** Not using consistent CSS custom properties
**Fix:** Use `1.5rem` everywhere in mobile @media queries

```css
/* ❌ WRONG - hardcoded values */
@media (max-width: 575.98px) {
    .section { padding: 20px 15px; }
    .card { padding: 24px; }
}

/* ✅ CORRECT - consistent rem values */
@media (max-width: 575.98px) {
    .section { padding: 1.5rem; }
    .card { padding: 1.5rem; }
}
```

### ❌ Problem: Footer not centered on mobile
**Symptom:** Footer contact section left-aligned on mobile, looks weird
**Cause:** Missing responsive text-alignment classes
**Fix:** Use `text-center text-lg-start` pattern

```html
<!-- ❌ WRONG -->
<div class="footer-contact">
    <h4>Contact Us</h4>
    <p>Phone: (555) 123-4567</p>
</div>

<!-- ✅ CORRECT -->
<div class="footer-contact text-center text-lg-start">
    <h4>Contact Us</h4>
    <p>Phone: (555) 123-4567</p>
</div>
```

### ❌ Problem: Text contrast issues on mobile
**Symptom:** Dark text on dark background in hero sections
**Cause:** Forgot to add `text-white` or `text-dark` utility classes
**Fix:** Always explicitly set text color on dark/light backgrounds

```html
<!-- ❌ WRONG -->
<section class="bg-dark">
    <h2>Heading</h2>
</section>

<!-- ✅ CORRECT -->
<section class="bg-dark text-white">
    <h2 class="text-white">Heading</h2>
</section>
```

## Mobile Testing Checklist

Before considering ANY demo complete, test ALL of these:

### Visual Testing
- [ ] Test at 320px (iPhone SE)
- [ ] Test at 375px (iPhone 12/13/14)
- [ ] Test at 390px (iPhone 14 Pro)
- [ ] Test at 576px (tablet breakpoint)
- [ ] Test at 768px (desktop breakpoint)

### Functional Testing
- [ ] All cards stack to full-width on mobile (<576px)
- [ ] All button groups stack vertically on mobile
- [ ] All buttons are full-width on mobile (not cramped)
- [ ] Padding is consistent (1.5rem) across all sections
- [ ] Typography scales down appropriately (hero h1 = 2rem on mobile)
- [ ] Navigation menu works (hamburger, dropdown, close)
- [ ] Footer content is centered on mobile
- [ ] All images responsive (max-width: 100%, height: auto)
- [ ] No horizontal scrolling on any viewport
- [ ] Touch targets are 44px minimum (buttons, links)

### Content Testing
- [ ] Headings don't wrap awkwardly
- [ ] Lead text is readable (not too small)
- [ ] Phone numbers are tappable (`<a href="tel:">`)
- [ ] Email addresses are tappable (`<a href="mailto:">`)
- [ ] Forms work properly (inputs full-width, labels visible)

## Quick Reference: Finding Mobile Issues

### Search for common problems:

```bash
# Find cards without col-12 prefix
grep -r 'col-md-[3-6]"' *.html | grep -v 'col-12'

# Find buttons without flex stacking
grep -r 'btn.*btn' *.html | grep -v 'flex-column'

# Find sections without mobile padding
grep -r 'py-section' *.html
```

### Common grep patterns:

```bash
# Find all col-md instances
grep -r 'class="col-md' *.html

# Find all button groups
grep -r '<div>.*btn.*btn.*</div>' *.html

# Find hero sections
grep -r 'class="hero' *.html
```

## Mobile-First Development Workflow

1. **Start with mobile layout first**
   - Design the mobile view (320-575px)
   - Use full-width cards, stacked buttons
   - Test on actual mobile device or Chrome DevTools

2. **Add tablet breakpoints (576px+)**
   - Introduce `col-sm-6` for 2-up grids
   - Make buttons horizontal with `flex-sm-row`
   - Test at 576px and 768px

3. **Add desktop breakpoints (992px+)**
   - Add `col-lg-3` or `col-lg-4` for multi-column grids
   - Adjust padding and spacing for larger screens
   - Test at 1024px, 1440px, 1920px

4. **Verify all breakpoints**
   - Use Chrome DevTools responsive mode
   - Test on real devices (phone, tablet, laptop)
   - Check all pages, not just home page

## Brand-Specific Mobile CSS Template

When creating brand CSS files (e.g., `handyman-brand.css`, `realtor-brand.css`), ALWAYS include this mobile section:

```css
/* ========================================
   MOBILE RESPONSIVE STYLES
   ======================================== */

/* Mobile: <576px */
@media (max-width: 575.98px) {
    /* Consistent padding */
    section.py-section,
    section.py-section-sm {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    
    .container,
    .container-fluid {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    /* Full-width buttons */
    .btn,
    .btn-lg {
        width: 100%;
        display: block;
    }
    
    /* Hero typography */
    .hero h1,
    .hero .display-1 {
        font-size: 2rem;
        line-height: 1.2;
    }
    
    /* Card components */
    .card-service,
    .card-feature,
    .card-benefit {
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }
    
    /* Footer centering */
    footer .text-start {
        text-align: center !important;
    }
}

/* Tablet: 576px-767px */
@media (min-width: 576px) and (max-width: 767.98px) {
    /* Adjust spacing for 2-up layouts */
    .row.g-4 {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 1.5rem;
    }
}

/* Desktop: 768px+ */
@media (min-width: 768px) {
    /* Reset button widths */
    .btn,
    .btn-lg {
        width: auto;
        display: inline-block;
    }
}
```

## Final Rule: Test on Real Mobile

**ALWAYS** test on actual mobile devices before marking work complete:
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad or Android tablet)

Chrome DevTools is good for initial testing, but real devices catch issues like:
- Touch target sizes
- Font rendering
- Safari-specific bugs
- Android keyboard overlap
- Actual loading performance

---

## Summary: The Mobile Responsive Commandments

1. **Thou shalt always use col-12 col-sm-6 col-lg-* for card grids**
2. **Thou shalt stack buttons with d-flex flex-column flex-sm-row gap-3**
3. **Thou shalt use 1.5rem padding consistently on mobile**
4. **Thou shalt make all buttons full-width on mobile**
5. **Thou shalt center footer content with text-center text-lg-start**
6. **Thou shalt explicitly set text color on dark backgrounds**
7. **Thou shalt test at 320px, 375px, 576px, 768px, 1024px**
8. **Thou shalt test on real mobile devices, not just DevTools**
9. **Thou shalt verify no horizontal scrolling on any viewport**
10. **Thou shalt not ship a demo that breaks on mobile**

**Remember:** Mobile users are NOT second-class citizens. If it doesn't work on mobile, it doesn't work. Period.
