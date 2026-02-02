# Cards & Badges Components

## Overview
Card components for displaying services, features, benefits, and content. Available in both light and dark variants.

---

## Light Background Cards

### card-service
**Description**: Vertical card with centered icon, title (h4), and description.  
**Usage**: Services, features, or any vertically-oriented content.  
**Background**: Light backgrounds only.

```html
<div class="card-service">
    <div class="service-icon"><i class="bi bi-laptop"></i></div>
    <h4>Web Development</h4>
    <p>Custom websites built with modern technologies and best practices.</p>
</div>
```

**Common Grid**: 3 or 4 columns on desktop (`col-md-4` or `col-md-3`)

---

### card-feature
**Description**: Horizontal card with icon + content side by side.  
**Heading**: Uses `h5`, NOT `h4`!  
**Background**: Light backgrounds only.

```html
<div class="card-feature">
    <i class="bi bi-lightning text-primary fs-4"></i>
    <div>
        <h5>Lightning Fast</h5>
        <p>Optimized for speed and performance across all devices.</p>
    </div>
</div>
```

**Common Grid**: 2 columns on desktop (`col-md-6`)

---

### card-benefit
**Description**: Simple elevated box - **REQUIRES utility classes** for layout!  
**Background**: Light backgrounds only.

```html
<div class="card-benefit d-flex flex-column justify-content-center align-items-center text-center p-4 h-100">
    <i class="bi bi-telephone fs-1 mb-3 text-primary opacity-75"></i>
    <h5 class="h6 fw-bold text-dark mb-2">24/7 Support</h5>
    <p class="small mb-0">Round-the-clock assistance whenever you need it.</p>
</div>
```

**Required Classes**:
- `d-flex flex-column justify-content-center align-items-center` - Layout
- `text-center` - Center text
- `p-4` - Padding
- `h-100` - Full height

**Common Grid**: 3 or 4 columns (`col-md-3` or `col-md-4`)

---

## Dark Background Cards

### card-glass
**Description**: Glassmorphic card with icon-badge and optional glass-badge footer.  
**Background**: Dark backgrounds ONLY (bg-dark, bg-dark-gradient, etc.).

```html
<div class="card-glass">
    <div class="icon-badge blue"><i class="bi bi-code-slash"></i></div>
    <h4>Clean Code</h4>
    <p>Well-organized, maintainable code following best practices.</p>
    <div class="card-footer">
        <span class="glass-badge blue"><i class="bi bi-braces"></i> TypeScript</span>
    </div>
</div>
```

**icon-badge colors**: `blue`, `teal`, `purple`, `amber`, `gray`, `green`  
**glass-badge colors**: Same as icon-badge

---

### card-service-dark
**Description**: Dark variant of card-service.  
**Background**: Dark backgrounds only.

```html
<div class="card-service-dark">
    <div class="service-icon"><i class="bi bi-laptop"></i></div>
    <h4>Web Development</h4>
    <p>Custom websites built with modern technologies.</p>
</div>
```

---

### card-feature-dark
**Description**: Dark variant of card-feature.  
**Background**: Dark backgrounds only.

```html
<div class="card-feature-dark">
    <i class="bi bi-lightning text-primary fs-4"></i>
    <div>
        <h5>Lightning Fast</h5>
        <p>Optimized for speed and performance.</p>
    </div>
</div>
```

---

### card-benefit-dark
**Description**: Dark variant of card-benefit. Still requires utility classes!  
**Background**: Dark backgrounds only.

```html
<div class="card-benefit-dark d-flex flex-column justify-content-center align-items-center text-center p-4 h-100">
    <i class="bi bi-telephone fs-1 mb-3 text-white opacity-75"></i>
    <h5 class="h6 fw-bold text-white mb-2">24/7 Support</h5>
    <p class="small mb-0 text-white-70">Round-the-clock assistance.</p>
</div>
```

---

## Badges

### badge-gradient
**Description**: Circular gradient badge with icon.  
**Background**: Any, but typically light.

```html
<span class="badge-gradient">
    <i class="bi bi-check-circle"></i>
</span>
```

---

### glass-badge
**Description**: Glassmorphic pill badge for dark backgrounds.  
**Colors**: `blue`, `teal`, `purple`, `amber`, `gray`, `green`

```html
<span class="glass-badge blue">
    <i class="bi bi-braces"></i> TypeScript
</span>
```

---

### icon-badge
**Description**: Circular icon container for card-glass headers.  
**Colors**: `blue`, `teal`, `purple`, `amber`, `gray`, `green`

```html
<div class="icon-badge blue">
    <i class="bi bi-code-slash"></i>
</div>
```

---

## Media & Resource Cards

### card-media
**Description**: Card with image and content. Supports both images and iframe embeds (YouTube, Vimeo).

```html
<!-- With Image -->
<div class="card-media">
    <div class="card-media-image">
        <img src="image.jpg" alt="Title" class="img-fluid">
    </div>
    <div class="card-media-body">
        <h5>Card Title</h5>
        <p>Card description text goes here.</p>
        <a href="#" class="btn btn-primary btn-sm">Learn More</a>
    </div>
</div>

<!-- With YouTube Embed -->
<div class="card-media">
    <div class="card-media-image">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card-media-body">
        <h5>Video Title</h5>
        <p>Video description.</p>
    </div>
</div>
```

---

### card-resource
**Description**: Downloadable resource card with file format indicator.

```html
<div class="card-resource">
    <div class="resource-icon">
        <i class="bi bi-file-earmark-pdf"></i>
    </div>
    <div class="resource-content">
        <h6 class="resource-title">Guide to Modern Web Design</h6>
        <p class="resource-meta">PDF • 2.4 MB</p>
    </div>
    <a href="#" class="btn btn-sm btn-outline-primary" download>
        <i class="bi bi-download"></i>
    </a>
</div>
```

---

## Grid Recommendations

| Component | Grid | Example |
|-----------|------|---------|
| card-service | 3-4 cols | `col-md-4`, `col-md-3` |
| card-feature | 2 cols | `col-md-6` |
| card-benefit | 3-4 cols | `col-md-3`, `col-md-4` |
| card-glass | 3-4 cols | `col-md-4`, `col-md-3` |
| card-media | 2-3 cols | `col-md-6`, `col-md-4` |
| card-resource | Full width or 2 cols | `col-12`, `col-md-6` |

---

## Important Reminders

1. **card-feature uses h5**, not h4
2. **card-benefit REQUIRES utility classes** - it's just an elevated box
3. **Dark cards** (`-dark` suffix) only work on dark backgrounds
4. **card-glass** needs dark backgrounds to show glassmorphic effect
5. Always use **h-100** on cards in rows for equal height
6. Use **g-4** for consistent gap between cards (`<div class="row g-4">`)
