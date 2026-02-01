# StoneWick BS5 Theme — LLM Development Guidelines

> **Purpose**: This document provides strict conventions for AI/LLM assistants working on this Bootstrap 5 theme. Follow these rules to maintain consistency and prevent regressions.

---

## 1. Core Principles

### 1.1 Variable-First Approach
**NEVER hardcode values. ALWAYS use CSS custom properties.**

```css
/* ❌ WRONG */
.my-component {
  color: #2563eb;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

/* ✅ CORRECT */
.my-component {
  color: var(--bs-primary);
  padding: var(--bs-space-4);
  border-radius: var(--bs-border-radius-lg);
}
```

### 1.2 BS5 Variable Naming Convention
All theme variables use the `--bs-` prefix to align with Bootstrap's system:

| Category | Pattern | Example |
|----------|---------|---------|
| Colors | `--bs-{color}` | `--bs-primary`, `--bs-gray-600` |
| Color RGB | `--bs-{color}-rgb` | `--bs-primary-rgb` |
| Spacing | `--bs-space-{n}` | `--bs-space-4` |
| Typography | `--bs-font-size-{size}` | `--bs-font-size-lg` |
| Borders | `--bs-border-radius-{size}` | `--bs-border-radius-lg` |
| Shadows | `--bs-shadow-{size}` | `--bs-shadow-md` |

### 1.3 Component Variables
When overriding BS5 components, use their native CSS variable system:

```css
/* ✅ CORRECT - Uses BS5's component variable system */
.btn-primary {
  --bs-btn-bg: var(--bs-primary);
  --bs-btn-border-color: var(--bs-primary);
  --bs-btn-hover-bg: #1d4ed8;
}

/* ❌ WRONG - Overrides properties directly */
.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
```

---

## 2. File Structure

```
/css/
  _variables.css      # Theme tokens only (no selectors except :root)
  _base.css           # Element resets, base HTML elements
  _typography.css     # Type scale, heading styles, text utilities
  _bs5-overrides.css  # Bootstrap component overrides
  _layout.css         # Header, footer, section containers
  
  /components/        # Isolated component files
    _cards.css        # card-service, card-feature, card-benefit, card-glass, commerce-card
    _badges.css       # badge-gradient, glass-badge, icon-badge
    _tables.css       # pricing-table-container, pricing-table
    _hero.css         # hero, hero-light, hero-centered, hero-compact
    _metrics.css      # metric-item, metric-value, metric-label, comparison-slider
    _timeline.css     # timeline-step
  
  _components.css     # Complex/shared: feature-list, price-tag, process-marker, process-timeline
  _utilities.css      # Custom utility classes (BS5 extensions ONLY)
  _responsive.css     # All media queries in one place
  theme.css           # Entry point - imports all partials
```

### File Responsibilities

| File | Contains | Does NOT Contain |
|------|----------|------------------|
| `_variables.css` | `:root` with all CSS custom properties | Any selectors besides `:root` |
| `_base.css` | `html`, `body`, `a`, `p`, `img` resets | Component styles |
| `_typography.css` | `h1-h6`, `.lead`, `.display-*`, text utilities, `.bg-*` theming | Layout or component styles |
| `_bs5-overrides.css` | `.btn-*`, `.card`, `.navbar` overrides | Custom components |
| `_layout.css` | `.main-header`, `footer`, `.py-section` | Individual component styles |
| `/components/*` | Isolated components (one type per file) | Cross-component dependencies |
| `_components.css` | Shared/complex: `.feature-list`, `.price-tag` | Isolated components |
| `_utilities.css` | Legitimate BS5 extensions ONLY | BS5 duplicates or components |
| `_responsive.css` | All `@media` queries | Base styles |

### Utility Rules (Critical)

**VALID extensions** (not in BS5):
- `.max-w-readable`, `.max-w-content`, `.max-w-prose`
- `.aspect-*` (simpler than BS5's `.ratio`)
- `.z-*` numeric utilities
- `.hover-lift`, `.hover-scale`, `.hover-shadow`
- `.backdrop-blur-*`
- `.shadow-primary`, `.shadow-secondary`
- `.transition-*`
- `.cursor-*` (pointer, grab, not-allowed)

**INVALID** (already in BS5 or breaks convention):
- ❌ `.object-cover` → use `.object-fit-cover`
- ❌ `.object-contain` → use `.object-fit-contain`
- ❌ `.gap-6`, `.gap-7` → breaks BS5's 0-5 scale
- ❌ `.overflow-x-auto` → already in BS5
- ❌ `.rounded-circle` duplicates

---

## 3. HTML Usage Patterns

### 3.1 Sections
```html
<!-- Standard section with theme spacing -->
<section class="py-section">
  <div class="container">
    <!-- Section header pattern -->
    <div class="text-center mb-5">
      <p class="eyebrow text-primary">Section Label</p>
      <h2 class="section-heading">Section Title</h2>
      <p class="section-intro mx-auto">Description text...</p>
    </div>
    <!-- Content -->
  </div>
</section>

<!-- Dark section -->
<section class="py-section bg-dark-gradient">
  <!-- Use text-white classes, .card-trust, .commerce-card-dark -->
</section>
```

### 3.2 Component Selection Guide

| Context | Use These Components |
|---------|---------------------|
| Light backgrounds | `.card-service`, `.commerce-card`, `.card-feature`, `.card-benefit` |
| Dark backgrounds | `.card-glass`, `.commerce-card-dark`, `.glass-badge` |
| Icons (light bg) | `.bg-soft-{color}` + `.rounded-circle` for circle |
| Icons (dark bg) | `.icon-badge.{color}` |
| Badges (dark bg) | `.glass-badge.{color}` |
| Badges (gradient) | `.badge-gradient` |
| Stats/Metrics | `.metric-item`, `.metric-value`, `.metric-label` |
| Timeline | `.process-timeline` + `.process-timeline-item` |
| Tables (dark) | `.pricing-table-container` + `.pricing-table` |
| Hero sections | `.hero`, `.hero-light`, `.hero-centered`, `.hero-compact` |

### 3.3 Utility Class Usage
```html
<!-- Spacing: Use BS5 utilities + theme extensions -->
<div class="py-section">      <!-- Theme section padding -->
<div class="py-5">            <!-- BS5 padding -->
<div class="gap-4">           <!-- BS5 gap -->

<!-- Colors: Use BS5 utilities -->
<p class="text-primary">      <!-- Theme primary color -->
<p class="text-muted">        <!-- Theme muted color -->
<div class="bg-dark-gradient"> <!-- Theme gradient -->

<!-- Typography: Combine BS5 + theme classes -->
<p class="lead">              <!-- Theme lead style -->
<p class="eyebrow text-primary"> <!-- Theme eyebrow -->
```

---

## 4. Creating New Components

### 4.1 Naming Convention
```css
/* Component: kebab-case */
.my-component { }

/* Component elements: component-element */
.my-component-header { }
.my-component-body { }

/* Component modifiers: component-modifier */
.my-component-dark { }
.my-component-lg { }

/* State: component.state */
.my-component.active { }
.my-component.featured { }
```

### 4.2 Component Template
```css
/* -------------------------------------------
   COMPONENT NAME
   Brief description of the component
   ------------------------------------------- */
.component-name {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing - USE VARIABLES */
  padding: var(--bs-space-4);
  gap: var(--bs-space-3);
  
  /* Visual - USE VARIABLES */
  background: var(--bs-card-bg);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius-lg);
  box-shadow: var(--bs-shadow-sm);
  
  /* Typography - USE VARIABLES */
  color: var(--bs-body-color);
  font-size: var(--bs-body-font-size);
  
  /* Interaction */
  transition: all 0.3s ease;
}

/* Hover state */
.component-name:hover {
  transform: translateY(-4px);
  box-shadow: var(--bs-shadow-md);
}

/* Dark variant */
.component-name-dark {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* Child elements */
.component-name h4 {
  font-size: var(--bs-font-size-h4);
  font-weight: var(--bs-heading-font-weight);
  color: var(--bs-heading-color);
}

.component-name-dark h4 {
  color: #ffffff;
}
```

---

## 5. Variable Reference (Quick Reference)

### Colors
```css
--bs-primary        /* Main brand color */
--bs-secondary      /* Secondary/muted */
--bs-success        /* Success states */
--bs-warning        /* Warning/accent */
--bs-danger         /* Error states */
--bs-dark           /* Dark backgrounds */
--bs-light          /* Light backgrounds */
--bs-teal           /* Extended: teal accent */
--bs-purple         /* Extended: purple accent */
```

### Typography Scale
```css
--bs-font-size-hero   /* 3.5rem - Hero headlines */
--bs-font-size-h1     /* 2.5rem */
--bs-font-size-h2     /* 2.25rem */
--bs-font-size-h3     /* 1.5rem */
--bs-font-size-h4     /* 1.25rem */
--bs-font-size-lg     /* 1.25rem - Large body */
--bs-font-size-md     /* 1.125rem - Medium body */
--bs-font-size-sm     /* 0.875rem - Small */
--bs-font-size-xs     /* 0.75rem - Extra small */
```

### Spacing Scale
```css
--bs-space-1    /* 0.25rem */
--bs-space-2    /* 0.5rem */
--bs-space-3    /* 1rem */
--bs-space-4    /* 1.5rem */
--bs-space-5    /* 2rem */
--bs-space-6    /* 3rem */
--bs-space-section     /* 7.5rem - Section padding */
--bs-space-section-sm  /* 5rem */
```

### Borders & Radii
```css
--bs-border-radius      /* 0.375rem - Default */
--bs-border-radius-sm   /* 0.25rem */
--bs-border-radius-lg   /* 0.5rem */
--bs-border-radius-xl   /* 0.75rem */
--bs-border-radius-pill /* 50rem - Pills */
```

### Shadows
```css
--bs-shadow-sm   /* Subtle shadow */
--bs-shadow-md   /* Medium shadow */
--bs-shadow-lg   /* Large shadow */
--bs-shadow-xl   /* Extra large */
```

---

## 6. Do's and Don'ts

### ✅ DO

- **Use CSS custom properties** for all values
- **Follow BS5 component variable patterns** when overriding components
- **Place new components in `_components.css`**
- **Place new utilities in `_utilities.css`**
- **Place all media queries in `_responsive.css`**
- **Use semantic color names** (primary, success) not hex values
- **Test both light and dark section contexts**
- **Provide hover/focus states** for interactive elements
- **Use `rgba(var(--bs-{color}-rgb), 0.X)` for opacity** 

### ❌ DON'T

- **Never hardcode colors, spacing, or sizes**
- **Never add media queries in component files** (put in `_responsive.css`)
- **Never use `!important`** unless absolutely necessary
- **Never create duplicate selectors** across files
- **Never skip the section comment header** for new components
- **Never mix BS5 overrides with custom components** in the same file
- **Never use legacy variable names** (use `--bs-` prefix)

---

## 7. Responsive Breakpoints

All media queries go in `_responsive.css`, organized by breakpoint:

```css
/* Large (992px+) */
@media (min-width: 992px) { }

/* Medium (768px and down) */
@media (max-width: 768px) { }

/* Small (576px and down) */
@media (max-width: 576px) { }

/* Extra small (480px and down) */
@media (max-width: 480px) { }
```

**Responsive variable overrides** go at the TOP of `_responsive.css`:
```css
@media (max-width: 768px) {
  :root {
    --bs-font-size-hero: 2.75rem;
    --bs-space-section: var(--bs-space-section-sm);
  }
}
```

---

## 8. Testing Checklist

Before considering work complete, verify:

- [ ] All values use CSS custom properties
- [ ] Component works on light backgrounds
- [ ] Component works on dark backgrounds (if applicable)
- [ ] Hover/focus states are present
- [ ] Responsive behavior at 768px, 576px breakpoints
- [ ] No CSS syntax errors
- [ ] No duplicate selectors introduced
- [ ] File is in correct location per structure
- [ ] Section comment header is present

---

## 9. Creating a New Theme

To create a new theme from this foundation:

1. **Copy the `/css/` folder** to your new project
2. **Modify `_variables.css`** with your new color palette, typography, spacing
3. **Keep `_base.css` and `_bs5-overrides.css`** largely intact
4. **Customize `_components.css`** for your specific needs
5. **Add new utilities** to `_utilities.css` as needed
6. **Adjust breakpoints** in `_responsive.css` if needed

The foundation enforces consistency through variables—change the tokens, keep the structure.
