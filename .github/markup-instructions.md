# StoneWick Theme — Markup Instructions

> **Load for**: HTML structure, component-specific modifiers, states, and non-obvious patterns.
> 
> **NOT for**: Basic light/dark variants (BS5 convention), obvious utility classes.

---

## 🎨 TEXT COLORS IN DARK SECTIONS

**CRITICAL:** Dark background sections require explicit text colors.

| Section Background | Required Text Classes |
|-------------------|----------------------|
| `bg-dark`, `bg-dark-gradient`, `bg-trust` | `text-white` (headings), `text-white-70` (body), `text-white-50` (muted) |

**Example for dark sections:**
```html
<section class="bg-trust">
    <h2 class="section-title text-white">Title</h2>
    <p class="lead text-white-70">Description</p>
    <div class="card-glass"> <!-- Component has its own background -->
        <h3>Card Title</h3> <!-- Dark text (component background) -->
    </div>
</section>
```

---

## 📦 COMPONENT STATES & MODIFIERS

### Global State Classes
| State | Used On | Effect |
|-------|---------|--------|
| `.featured` | cards, media-item, commerce-card | Primary highlight border, gradient bg |
| `.featured-premium` | commerce-card-dark | Amber/gold highlight |
| `.is-active` | modal, slider-dot, slider-thumb, lightbox-thumb | Current/visible state |
| `.is-selected` | format-option | Selected option in download modal |
| `.completed` | process-timeline-item | Checkmark replaces number |
| `.has-banner` | channel-header-full | Avatar overlaps banner image |
| `.has-image` | card-service | Zero padding, image at top |
| `.playing` | video-theater | Hides overlay/thumbnail |

### card-service with Image
```html
<div class="card-service has-image">
    <img src="..." class="card-service-image">
    <div class="service-icon">...</div>
    <div class="card-service-content">
        <h4>Title</h4>
        <p>Description</p>
    </div>
</div>
```
**Key**: `.has-image` removes padding, requires `.card-service-content` wrapper.

### commerce-card Featured Variants
- `.featured` — Primary color border/glow
- `.featured-premium` — Amber/gold (dark variant only)

### channel-header Banner Mode
```html
<div class="channel-header-full has-banner">
    <div class="channel-banner"><img src="..."></div>
    <div class="channel-content">
        <div class="channel-avatar">...</div>
        ...
    </div>
</div>
```
**Key**: `.has-banner` pulls avatar up over banner. Without it, avatar sits normally.

---

## 🎯 TIMELINE VARIANTS

Base: `.process-timeline` with `.process-timeline-item` children.

### Appearance Modifiers
| Modifier | Effect |
|----------|--------|
| `.timeline-filled` | Solid filled markers |
| `.timeline-gradient` | Gradient markers |
| `.timeline-icon` | Larger icon-ready markers |
| `.timeline-cards` | Card-style content boxes |
| `.timeline-accent` | Accent line on left |

### Size Modifiers
| Modifier | Effect |
|----------|--------|
| `.timeline-lg` | Large markers/text |
| `.timeline-sm` | Compact markers/text |
| `.timeline-compact` | Tight spacing |
| `.timeline-spacious` | Generous spacing |

### Layout Modifiers
| Modifier | Effect |
|----------|--------|
| `.timeline-horizontal` | Horizontal (desktop) |
| `.timeline-alternating` | Alternating sides |

### Color Modifiers
`.timeline-success`, `.timeline-info`, `.timeline-warning`, `.timeline-secondary`

### Item States
- `.completed` on `.process-timeline-item` — Shows checkmark
- `.timeline-navigable` on parent — Makes items clickable

---

## 🎬 VIDEO THEATER

### State Classes
| Class | Effect |
|-------|--------|
| `.playing` | Hides thumbnail + overlay, shows video |
| `.video-theater-full` | Full viewport width |
| `.video-theater-compact` | Minimal (hides description/actions) |
| `.video-theater-light` | Light background variant |

**Key**: JS toggles `.playing` on `.video-theater` when video starts.

---

## 🖼️ MODAL SYSTEM

### Opening/Closing
- Add `.is-active` to `.modal-custom` → visible
- Remove `.is-active` → hidden

### Modal Variants
| Variant | Purpose |
|---------|---------|
| `.modal-lightbox` | Gallery with nav/zoom/thumbnails |
| `.modal-video` | Video player with controls |
| `.modal-content-type` | Article/content viewer |
| `.modal-download` | File format selection |
| `.modal-confirm` | Confirmation dialogs |
| `.modal-testimonial` | Full testimonial view |

### Lightbox Thumbnails
`.lightbox-thumb.is-active` — Current thumbnail highlighted

### Download Options
`.format-option.is-selected` — Currently selected format

---

## 🌊 SECTION TRANSITIONS

Only between clearly different background colors.

### Wave
```html
<div class="section-wave wave-{color}">
    <svg>...</svg>
</div>
```

### Angle
```html
<div class="section-angle angle-{color}"></div>
```

**Colors**: `light`, `white`, `dark`, `trust`, `primary`

---

## 📐 SPECIAL REQUIREMENTS

### card-benefit
Requires utility classes for layout:
```html
<div class="card-benefit d-flex flex-column justify-content-center align-items-center text-center p-4 h-100">
```

### card-feature
Uses `h5`, not `h4`:
```html
<div class="card-feature">
    <i class="..."></i>
    <div>
        <h5>Title</h5>
        <p>...</p>
    </div>
</div>
```

### metric-item
Always include icon:
```html
<div class="metric-item">
    <i class="bi bi-..."></i>
    <div class="metric-value">...</div>
    <div class="metric-label">...</div>
</div>
```

### comparison-slider
Data attribute sets initial position:
```html
<div class="comparison-handle" data-position="50">
```

### Hero First Section
Use `.pt-header` to account for fixed header:
```html
<section class="hero pt-header">
```

---

## 📋 QUICK REFERENCE: Which Elements?

| Component | Heading Level |
|-----------|---------------|
| card-service | h4 |
| card-feature | h5 |
| card-glass | h4 |
| commerce-card | h4 |
| modal-title-custom | h2 |
| confirm-title | h3 |

| Component | Icon Class |
|-----------|------------|
| icon-badge | `blue`, `teal`, `purple`, `amber`, `gray`, `green` |
| glass-badge | `blue`, `teal`, `purple`, `amber`, `gray`, `green` |
