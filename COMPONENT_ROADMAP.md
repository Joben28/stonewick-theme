# StoneWick Component Roadmap

> Implementation guide for extending the theme with collection/grid components using existing BS5 architecture.

---

## Inventory: What We Have

### Existing Card Components (`/css/components/_cards.css`)
| Component | Use Case | Background |
|-----------|----------|------------|
| `.card-service` | Vertical icon + title + text | Light |
| `.card-service-dark` | Dark variant | Dark |
| `.card-feature` | Horizontal icon + content | Light |
| `.card-feature-dark` | Horizontal dark variant | Dark |
| `.card-benefit` | Simple elevated box | Light |
| `.card-benefit-dark` | Dark variant | Dark |
| `.card-glass` | Glassmorphic card | Dark |
| `.card-glass.featured` | Highlighted glass card | Dark |
| `.commerce-card` | Pricing/product card | Light |
| `.commerce-card-dark` | Dark pricing card | Dark |

### Existing Support Components
| Component | File | Purpose |
|-----------|------|---------|
| `.badge-gradient` | `_badges.css` | Circular gradient badges |
| `.glass-badge` | `_badges.css` | Pill badges for dark BG |
| `.icon-badge` | `_badges.css` | Icon containers (color variants) |
| `.pricing-table` | `_tables.css` | Comparison tables |
| `.metric-item` | `_metrics.css` | Stats display |
| `.process-timeline` | `_timeline.css` | Step sequences |

### Bootstrap 5 Components (Override in `_bs5-overrides.css`)
- Accordion (`.accordion`)
- Carousel (`.carousel`)
- Cards (`.card`) - base only, we use custom cards
- Tables (`.table`)
- List Group (`.list-group`)

---

## Gap Analysis: What We Need

### Priority 1: High Value / Frequently Needed

#### 1. Card with Media (Image + Content)
**Need**: Cards with fixed-aspect images, content area, optional footer metadata.
**Maps to**: Content Card Grid, Event Grid patterns
**Implementation**: Extend `.card-service` with `.card-media` variant

```
.card-media
  .card-media-image (aspect-ratio container)
  .card-media-body (existing card content pattern)
  .card-media-footer (meta icons + text)
```

**File**: `_cards.css` (add variant)

---

#### 2. Review/Testimonial Card
**Need**: Avatar, rating stars, quote text, attribution, source badge.
**Maps to**: Review Collection pattern
**Implementation**: New `.card-testimonial` component

```
.card-testimonial
  .testimonial-header
    .testimonial-avatar (img or initials fallback)
    .testimonial-rating (star icons)
  .testimonial-body (blockquote)
  .testimonial-footer
    .testimonial-name
    .testimonial-source (badge)
```

**File**: New `_testimonials.css` in `/css/components/`

---

#### 3. Resource/Download Card
**Need**: Icon + title + meta + description + action button, horizontal layout.
**Maps to**: Resource Grid pattern
**Implementation**: Variant of `.card-feature` → `.card-resource`

```
.card-resource
  .resource-icon (icon-badge)
  .resource-content
    .resource-title
    .resource-meta (file type, size)
    .resource-desc
    .resource-action (btn-sm)
```

**File**: `_cards.css` (add variant)

---

### Priority 2: Medium Value / Situational

#### 4. Gallery Grid
**Need**: Responsive image grid with captions, lightbox trigger.
**Maps to**: Image Gallery Grid pattern
**Implementation**: New `.gallery-grid` component

```
.gallery-grid (CSS Grid, auto-fill)
  .gallery-item (button for a11y)
    .gallery-figure
      .gallery-image
      .gallery-caption (overlay on hover)
```

**Variants**: `gallery-grid-dense`, `gallery-grid-masonry`
**File**: New `_gallery.css` in `/css/components/`

---

#### 5. Media List (Podcast/Video)
**Need**: Horizontal layout with media thumbnail, meta (date, duration), description, player embed space.
**Maps to**: Media List pattern
**Implementation**: New `.media-list` component

```
.media-list
  .media-item
    .media-thumb (fixed width)
    .media-content
      .media-title
      .media-meta (date + duration badges)
      .media-desc
      .media-player (embed container)
```

**Variants**: `.media-list-compact`, `.media-list-grid`
**File**: New `_media-list.css` in `/css/components/`

---

#### 6. Data Table Enhancement
**Need**: Rich cell content (title + description + badge), action column, responsive wrapper.
**Maps to**: Data Table pattern
**Implementation**: Extend `.pricing-table` patterns

```
.data-table-container (responsive scroll)
  .data-table
    .data-cell-rich (multi-line content)
      .cell-title
      .cell-badge
      .cell-desc
    .data-cell-actions
```

**File**: `_tables.css` (extend)

---

### Priority 3: Lower Priority / As Needed

#### 7. Accordion Styling
**Status**: BS5 accordion exists, needs theme override
**Implementation**: Style overrides only

```css
/* In _bs5-overrides.css */
.accordion-button { /* theme colors, focus states */ }
.accordion-body { /* spacing, typography */ }
```

**Variants**: `.accordion-flush`, `.accordion-bordered`
**File**: `_bs5-overrides.css`

---

#### 8. Carousel/Slider Enhancement
**Status**: BS5 carousel exists, needs theme styling + thumbnail nav
**Implementation**: Overrides + optional thumbnail component

```
.carousel-thumbnails
  .carousel-thumb (synced to slides)
```

**File**: `_bs5-overrides.css` + potential `_carousel.css`

---

## Implementation Specifications

### Shared Patterns (Reuse Across Components)

#### Rating Stars
```html
<div class="rating-stars">
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-half"></i>
</div>
```
```css
.rating-stars { color: var(--bs-warning); }
.rating-stars .bi { font-size: var(--bs-font-size-sm); }
```

#### Meta Row (Icons + Text)
```html
<div class="meta-row">
  <span class="meta-item"><i class="bi bi-calendar3"></i> Jan 15, 2026</span>
  <span class="meta-item"><i class="bi bi-geo-alt"></i> Portland, OR</span>
</div>
```
```css
.meta-row { display: flex; gap: var(--bs-space-3); flex-wrap: wrap; }
.meta-item { display: inline-flex; align-items: center; gap: var(--bs-space-1); }
.meta-item i { color: var(--bs-primary); opacity: 0.7; }
```

#### Avatar with Fallback
```html
<div class="avatar avatar-md">
  <img src="..." alt="..." class="avatar-img" />
  <!-- OR fallback -->
  <span class="avatar-initials">JD</span>
</div>
```
```css
.avatar { border-radius: 50%; overflow: hidden; background: var(--bs-gray-200); }
.avatar-sm { width: 2rem; height: 2rem; }
.avatar-md { width: 3rem; height: 3rem; }
.avatar-lg { width: 4rem; height: 4rem; }
.avatar-img { width: 100%; height: 100%; object-fit: cover; }
.avatar-initials { /* centered text, bg color */ }
```

#### Aspect Ratio Container
```html
<div class="aspect-ratio aspect-ratio-16x9">
  <img src="..." class="aspect-ratio-content" />
</div>
```
```css
.aspect-ratio { position: relative; }
.aspect-ratio-16x9 { aspect-ratio: 16/9; }
.aspect-ratio-4x3 { aspect-ratio: 4/3; }
.aspect-ratio-1x1 { aspect-ratio: 1/1; }
.aspect-ratio-content { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
```

---

## File Organization

### New Files to Create
```
/css/components/
  _testimonials.css    # card-testimonial, rating-stars
  _gallery.css         # gallery-grid, gallery-item
  _media-list.css      # media-list, media-item
  _avatars.css         # avatar system (or add to _utilities.css)
```

### Files to Extend
```
_cards.css           # card-media, card-resource variants
_tables.css          # data-table enhancements
_utilities.css       # meta-row, aspect-ratio helpers
_bs5-overrides.css   # accordion, carousel theming
```

### Import Order (theme.css)
```css
/* After existing component imports */
@import 'components/_avatars.css';
@import 'components/_testimonials.css';
@import 'components/_gallery.css';
@import 'components/_media-list.css';
```

---

## Grid Layout Patterns

### Responsive Card Grids (Use BS5 Grid)
```html
<!-- 3-column responsive -->
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  <div class="col"><div class="card-service">...</div></div>
</div>

<!-- 2-column with featured -->
<div class="row g-4">
  <div class="col-lg-7"><div class="card-glass featured">...</div></div>
  <div class="col-lg-5"><div class="card-glass">...</div></div>
</div>
```

### CSS Grid for Galleries (Custom)
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--bs-space-3);
}
.gallery-grid-dense { grid-auto-flow: dense; }
```

---

## Variable Requirements

### New Variables (Add to `_variables.css`)
```css
:root {
  /* Avatars */
  --bs-avatar-sm: 2rem;
  --bs-avatar-md: 3rem;
  --bs-avatar-lg: 4rem;
  
  /* Ratings */
  --bs-rating-color: var(--bs-warning);
  
  /* Gallery */
  --bs-gallery-gap: var(--bs-space-3);
  --bs-gallery-min-col: 200px;
  
  /* Transitions */
  --bs-transition-base: 0.2s ease;
  --bs-transition-transform: 0.3s ease;
}
```

---

## Implementation Checklist

### Phase 1: Foundations ✅
- [x] Add shared utilities (meta-row, aspect-ratio, avatar) to `_utilities.css`
- [x] Add rating-stars to `_utilities.css`
- [x] Add new variables to `_variables.css`

### Phase 2: Priority Components ✅
- [x] Create `card-media` variant in `_cards.css`
- [x] Create `_testimonials.css` with card-testimonial
- [x] Create `card-resource` variant in `_cards.css`

### Phase 3: Extended Components ✅
- [x] Create `_gallery.css`
- [x] Create `_media-list.css`
- [x] Extend `_tables.css` with data-table patterns

### Phase 4: BS5 Enhancements ✅
- [x] Add accordion overrides to `_bs5-overrides.css`
- [x] Add carousel overrides to `_bs5-overrides.css`

### Phase 5: Documentation ✅
- [x] Add all components to kitchen-sink.html
- [x] Add responsive rules to _responsive.css
- [x] Update theme.css imports

### Phase 6: Collection Ecosystem ✅
- [x] Create `_modals.css` with base modal, lightbox, video, content, download variants
- [x] Create `_events.css` with event cards (light/dark)
- [x] Create `_slider.css` with thumbnail nav, autoplay, progress
- [x] Add accordion enhancements (expand all, hash linking)
- [x] Add all ecosystem components to kitchen-sink.html
- [x] Add responsive rules for new components

### Phase 7: Navigation System ✅
- [x] Create `_tabs.css` with nav-tabs, nav-pills, nav-underline, dark variants
- [x] Create `_pagination.css` with sizes, states, load more patterns
- [x] Create `_breadcrumbs.css` with variants and separators
- [x] Create `_navbar.css` with theme variants, scroll effects, mega menu
- [x] Add navigation variables to `_variables.css`
- [x] Create `kitchen-sink-2.html` for navigation demos
- [x] Add responsive rules for navigation components

---

## Notes

- All components follow existing naming: `component-element`, `component-modifier`
- All values use CSS custom properties (`--bs-*`)
- All media queries go in `_responsive.css`
- Light/dark variants follow established pattern (`-dark` suffix)
- Test on both light and dark backgrounds before shipping
