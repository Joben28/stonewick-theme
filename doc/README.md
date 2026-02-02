# StoneWick Theme - Component Documentation Index

## Overview
Comprehensive documentation for all StoneWick theme components. Each file contains full markup examples, variants, usage guidelines, and best practices for building pages.

---

## Documentation Files

### [01-cards-badges.md](01-cards-badges.md)
**Card and Badge Components**

Light background cards:
- `card-service` - Vertical card with centered icon
- `card-feature` - Horizontal card (uses h5, not h4!)
- `card-benefit` - Simple elevated box (requires utility classes)

Dark background cards:
- `card-glass` - Glassmorphic cards with icon-badge and glass-badge
- `card-service-dark`, `card-feature-dark`, `card-benefit-dark`

Media & Resource cards:
- `card-media` - Image + content (supports iframe embeds)
- `card-resource` - Downloadable resources

Badges:
- `badge-gradient` - Circular gradient badge
- `glass-badge` - Glassmorphic pill badge
- `icon-badge` - Circular icon container

---

### [02-heroes-layout.md](02-heroes-layout.md)
**Heroes, Typography, Layout, Transitions**

Hero variants:
- `hero` (default dark)
- `hero-light`
- `hero-centered`
- `hero-compact`

Typography:
- Headings (h1-h6)
- Eyebrow text
- Lead paragraphs
- Text highlights
- Dark theme text colors

Layout components:
- Content callout
- CTA section
- Background utilities
- Section transitions (waves, angles)
- Spacing utilities

---

### [03-navigation.md](03-navigation.md)
**Navigation Components**

Navbar variants, tabs, pagination, and breadcrumbs. All components available in both light and dark variants to work across different background colors.

### [navbar.md](navbar.md)
**Dedicated Navbar Documentation**

Comprehensive navbar system with 10+ variants:
- Solid dark/light navbars
- Primary color navbar
- Glass effect navbars
- Transparent navbar with scroll effects
- Search integration
- User menu with avatar
- Nested dropdowns
- Mega menu
- Offcanvas drill panel for mobile

---

### [04-media.md](04-media.md)
**Media & Content Components**

Video components:
- `video-theater` - Full-width YouTube-style player (with iframe support)
- `video-theater-compact` - Minimal video player
- `video-theater-light` - Light background variant

Channel components:
- `channel-header-compact` - YouTube-style channel cards
- `channel-header-full` - Full layout with optional banner

Lists & galleries:
- `media-list-grid` - Video/media grid with thumbnails
- `media-list-rows` - Horizontal media lists
- `gallery-grid` - Image galleries with captions

Blog components:
- Standard blog cards
- Featured blog card
- Minimal blog cards
- Blog list items
- Compact blog list

Event components:
- Standard event cards
- Featured, horizontal, compact variants
- Event grid layouts
- Upcoming events widget

**All video/media components support iframe embeds (YouTube, Vimeo, etc.)**

---

### [05-interactive.md](05-interactive.md)
**Interactive & Dynamic Components**

Testimonials:
- `card-testimonial` (light)
- `card-testimonial-dark`
- With avatars, ratings, source badges
- Featured and compact variants

Modals (Bootstrap + Custom):
- Bootstrap modals (standard, large, centered)
- Custom modal system:
  - Lightbox (gallery with zoom, thumbnails)
  - Video (custom player with controls)
  - Content (article viewer)
  - Download (file format selection)
  - Confirmation
  - Testimonial

Sliders & Interactive:
- Carousel/slider with thumbnails
- Comparison slider (before/after with draggable handle)
- Timeline (15+ variants: filled, gradient, icons, cards, colors, layouts)
- Metrics & stats displays

Forms & UI:
- Text inputs, textareas, selects
- Input groups
- Checkboxes, radios, switches
- Range sliders with value display
- Floating labels
- Validation states

Accordions:
- Basic Bootstrap accordion
- Flush variant
- Always-open mode
- Custom icons

Alerts & notifications:
- All Bootstrap alert variants
- With icons and dismissible options

**Includes complete JavaScript integration examples**

---

### [06-commerce.md](06-commerce.md)
**Commerce & Product Components**

Product components:
- Standard product cards (with badges, ratings, pricing)
- Hover effect cards (image swap, quick add)
- Product list items (horizontal detailed)
- Compact product list (minimal sidebar)

Supporting elements:
- Product badges (sale, new, trending, low stock)
- Star ratings (standard and small)
- Pricing display (current and sale)
- Interactive features (wishlist, quick add)

Commerce cards:
- `commerce-card` (light) - Pricing/product card
- `commerce-card-dark` - Dark background variant
- Price tags and indicators

---

### [07-data-tables.md](07-data-tables.md)
**Data Display & Tables**

Pricing tables:
- `pricing-table-container` + `pricing-table`
- Dark and light variants
- Featured column highlighting
- Responsive strategies

Data tables:
- Bootstrap table variants (striped, hover, bordered, etc.)
- Responsive table wrappers
- Table utilities (sizes, alignment)

Metric displays:
- `metric-item` with icon, value, label
- Responsive grid patterns
- Dark background auto-styling

Process components:
- Timeline variants (10+ styles)
- Accordions with search/controls
- Progress indicators

**Includes complete responsive patterns for mobile/desktop**

---

## Quick Reference by Use Case

### Building a Landing Page
1. Start with hero from [02-heroes-layout.md](02-heroes-layout.md)
2. Add feature cards from [01-cards-badges.md](01-cards-badges.md)
3. Include testimonials from [05-interactive.md](05-interactive.md)
4. Add pricing table from [07-data-tables.md](07-data-tables.md)
5. End with CTA from [02-heroes-layout.md](02-heroes-layout.md)

### Building a Blog
1. Use `hero-compact` from [02-heroes-layout.md](02-heroes-layout.md)
2. Blog cards from [04-media.md](04-media.md)
3. Pagination from [03-navigation.md](03-navigation.md)
4. Sidebar with compact lists from [04-media.md](04-media.md)

### Building a Portfolio
1. Hero from [02-heroes-layout.md](02-heroes-layout.md)
2. Gallery from [04-media.md](04-media.md)
3. Video theater for case studies from [04-media.md](04-media.md)
4. Testimonials from [05-interactive.md](05-interactive.md)

### Building a Product Page
1. Hero with product images
2. Product cards from [06-commerce.md](06-commerce.md)
3. Comparison slider from [05-interactive.md](05-interactive.md)
4. Pricing table from [07-data-tables.md](07-data-tables.md)
5. Commerce CTA from [06-commerce.md](06-commerce.md)

---

## Critical Component Rules

### Background Color Requirements
- **Light background components**: card-service, card-feature, card-benefit, card-testimonial, commerce-card
- **Dark background components**: card-glass, card-*-dark variants, glass-badge, commerce-card-dark
- ❌ Never use dark components on light backgrounds
- ❌ Never use light components on dark backgrounds

### Common Mistakes to Avoid
1. ❌ Using h4 in card-feature (use h5!)
2. ❌ Forgetting utility classes on card-benefit
3. ❌ Not using btn-lg in hero sections
4. ❌ Missing pt-header on first hero
5. ❌ Using transitions between same-color sections
6. ❌ Forgetting icons in metric-item
7. ❌ Using wrong button colors in CTA sections (use btn-light)

---

## File Structure Reference

```
doc/
├── README.md (this file)
├── 01-cards-badges.md
├── 02-heroes-layout.md
├── 03-navigation.md
├── navbar.md
├── 04-media.md
├── 05-interactive.md
├── 06-commerce.md
└── 07-data-tables.md
```

---

## How to Use This Documentation with an LLM

When building pages with an LLM:

1. **Reference specific files** for component categories you need
2. **Copy exact markup** from examples - they're production-ready
3. **Check variant tables** for available options
4. **Follow background rules** strictly (light vs dark components)
5. **Use provided grid recommendations** for responsive layouts
6. **Include JavaScript** snippets where indicated
7. **Combine components** using the "Use Case" sections as templates

### Example Prompt for LLM:
```
Using the StoneWick theme documentation in doc/01-cards-badges.md 
and doc/02-heroes-layout.md, create a services landing page with:
- A hero-centered with 2 buttons
- 3 card-service components in a row
- 4 card-benefit components in a grid
- A CTA section at the bottom
```

---

## Additional Resources

- Kitchen sink demos: `ks-*.html` files in root directory
- Component CSS: `css/components/` directory
- JavaScript: `src/js/modules/` directory
- Theme variables: `css/_variables.css`

---

## Version

Documentation created for **StoneWick Theme v1.1.0**  
Last updated: February 1, 2026
