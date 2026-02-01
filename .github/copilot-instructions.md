# StoneWick Theme — Copilot Development Instructions

> **CRITICAL**: Read this file completely before making ANY changes to this codebase.

## Project Overview

This is a **Bootstrap 5.3.2 custom theme** called StoneWick. It uses a modular CSS architecture with CSS custom properties (variables). The theme has specific component naming conventions and strict rules about which components work on which backgrounds.

## File Structure

```
/css/
  _variables.css      # Theme tokens ONLY (no selectors except :root)
  _base.css           # Element resets, base HTML elements
  _typography.css     # Type scale, heading styles, text utilities, content-callout
  _bs5-overrides.css  # Bootstrap component overrides
  _layout.css         # Header, footer, section containers, social-links, CTA
  _components.css     # Complex/shared components (feature-list, price-tag)
  _utilities.css      # Custom utility classes (BS5 extensions ONLY)
  _responsive.css     # ALL media queries go here
  theme.css           # Entry point - imports all partials
  
  /components/        # Isolated component files
    _cards.css        # card-service, card-feature, card-benefit, card-glass, commerce-card, commerce-card-dark
    _badges.css       # badge-gradient, glass-badge, icon-badge
    _tables.css       # pricing-table-container, pricing-table
    _hero.css         # hero, hero-light, hero-centered, hero-compact
    _metrics.css      # metric-item, metric-value, metric-label, comparison-slider
    _timeline.css     # process-timeline + ALL variants
    _modals.css       # modal-custom, modal-lightbox, modal-video, modal-content-type, modal-download, modal-confirm, modal-testimonial
```

## CRITICAL: Component/Background Rules

### Light Background Components (default, use on white/light sections)
| Component | Description |
|-----------|-------------|
| `.card-service` | Vertical card with centered icon, title, description |
| `.card-feature` | Horizontal card with icon + content side by side |
| `.card-benefit` | Simple elevated box, requires utility classes |
| `.commerce-card` | Pricing/product card |
| `.badge-gradient` | Circular gradient badge |
| `.metric-item` | Stats display with icon, value, label |
| `.comparison-slider` | Interactive before/after image comparison with draggable handle |
| `.pricing-table-light` | Light table variant |
| `.process-timeline` | Default vertical timeline |

### Dark Background Components (*-dark or glass variants)
| Component | Description |
|-----------|-------------|
| `.card-service-dark` | Dark variant of service card |
| `.card-feature-dark` | Dark variant of feature card |
| `.card-benefit-dark` | Dark variant of benefit card |
| `.card-glass` | Glassmorphic card for dark sections |
| `.commerce-card-dark` | Pricing card for dark backgrounds |
| `.glass-badge` | Glassmorphic pill badges |
| `.icon-badge` | Icon containers (blue, teal, purple, amber, gray, green) |
| `.pricing-table` | Default is for dark backgrounds |

### Background Classes
- `.bg-light` - Light gray background
- `.bg-dark` - Dark background
- `.bg-dark-gradient` - Dark gradient background
- `.bg-trust` - Dark trust section gradient
- `.bg-packages` - Dark packages section

## Component Markup Patterns

### card-service (Light)
```html
<div class="card-service">
    <div class="service-icon"><i class="bi bi-laptop"></i></div>
    <h4>Title</h4>
    <p>Description text.</p>
</div>
```

### card-benefit (Light) - REQUIRES utility classes!
```html
<div class="card-benefit d-flex flex-column justify-content-center align-items-center text-center p-4 h-100">
    <i class="bi bi-telephone fs-1 mb-3 text-primary opacity-75"></i>
    <h5 class="h6 fw-bold text-dark mb-2">Title</h5>
    <p class="small mb-0">Description</p>
</div>
```

### card-feature (Light) - uses h5, not h4!
```html
<div class="card-feature">
    <i class="bi bi-lightning text-primary fs-4"></i>
    <div>
        <h5>Title</h5>
        <p>Description.</p>
    </div>
</div>
```

### card-glass (Dark backgrounds only!)
```html
<div class="card-glass">
    <div class="icon-badge blue"><i class="bi bi-code-slash"></i></div>
    <h4>Title</h4>
    <p>Description.</p>
    <div class="card-footer">
        <span class="glass-badge blue"><i class="bi bi-braces"></i> Label</span>
    </div>
</div>
```

### metric-item (with icon!)
```html
<div class="metric-item">
    <i class="bi bi-speedometer2"></i>
    <div class="metric-value">&lt;1s</div>
    <div class="metric-label">Load Time</div>
</div>
```

### comparison-slider
```html
<div class="comparison-slider">
    <div class="comparison-before">
        <img src="before.jpg" alt="Before" class="comparison-image">
        <div class="comparison-label comparison-label-before">Before</div>
    </div>
    <div class="comparison-after">
        <img src="after.jpg" alt="After" class="comparison-image">
        <div class="comparison-label comparison-label-after">After</div>
    </div>
    <div class="comparison-handle" data-position="50">
        <div class="comparison-handle-line"></div>
        <div class="comparison-handle-circle">
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
        </div>
    </div>
</div>
```

**Note**: Requires JavaScript to function. Drag handle or swipe to reveal comparison. Works with both mouse and touch input.

### process-timeline
```html
<ol class="process-timeline">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <h3 class="process-title">Step Title</h3>
        <p class="process-text">Description.</p>
    </li>
</ol>
```

### Timeline Variants (add as modifier class)
- `.timeline-filled` - Filled markers
- `.timeline-gradient` - Gradient markers
- `.timeline-lg` - Large size
- `.timeline-sm` - Small size
- `.timeline-icon` - Icon markers
- `.timeline-cards` - Card-style content
- `.timeline-accent` - Accent line
- `.timeline-horizontal` - Horizontal layout (desktop)
- `.timeline-alternating` - Alternating sides
- `.timeline-success`, `.timeline-info`, `.timeline-warning`, `.timeline-secondary` - Color variants
- `.timeline-compact`, `.timeline-spacious` - Spacing utilities

### video-theater (Full Width Theater Mode)
YouTube-style theater mode video player. Supports BOTH direct video and iframe embeds (YouTube, Vimeo, etc.).

```html
<!-- With direct video -->
<div class="video-theater video-theater-full">
    <div class="video-theater-container">
        <div class="video-theater-player">
            <img src="thumbnail.jpg" alt="Thumbnail" class="video-theater-thumbnail">
            <video id="my-video" poster="thumbnail.jpg">
                <source src="video.mp4" type="video/mp4">
            </video>
            <div class="video-theater-overlay" id="overlay-id">
                <button class="video-theater-play-btn" onclick="playVideo('my-video', 'overlay-id')">
                    <i class="bi bi-play-fill"></i>
                </button>
            </div>
        </div>
        <div class="video-theater-info">
            <h3 class="video-theater-title">Video Title</h3>
            <div class="video-theater-meta">...</div>
        </div>
    </div>
</div>

<!-- With YouTube iframe embed (no overlay/play button needed) -->
<div class="video-theater video-theater-full">
    <div class="video-theater-container">
        <div class="video-theater-player">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-theater-info">...</div>
    </div>
</div>
```

**Variants**:
- `.video-theater-full` - Full viewport width (100vw)
- `.video-theater-compact` - Minimal layout (hides description, tags, actions)
- `.video-theater-light` - Light background

### card-media and media-list (iframe support)
Both `card-media` and `media-list` components support iframe embeds in addition to images:

```html
<!-- card-media with YouTube -->
<div class="card-media">
    <div class="card-media-image">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card-media-body">...</div>
</div>

<!-- media-list-grid with YouTube -->
<article class="media-item">
    <div class="media-thumb">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="media-content">...</div>
</article>
```

### channel-header (YouTube-Style Channel Cards)
Channel header components for showcasing YouTube channels or creator profiles.

```html
<!-- Compact Variant (Light) -->
<div class="channel-header-compact">
    <div class="channel-avatar">
        <img src="avatar.jpg" alt="Channel">
    </div>
    <div class="channel-info">
        <div class="channel-name-row">
            <h4 class="channel-name">Channel Name</h4>
            <span class="channel-badge">YOUTUBE</span>
        </div>
        <div class="channel-stats">
            <div class="channel-stat-item">
                <span class="channel-stat-value">1.2K</span>
                <span class="channel-stat-label">subscribers</span>
            </div>
            <span class="stat-separator"></span>
            <div class="channel-stat-item">
                <span class="channel-stat-value">610</span>
                <span class="channel-stat-label">videos</span>
            </div>
        </div>
    </div>
    <div class="channel-actions">
        <a href="#" class="channel-btn-visit">
            <i class="bi bi-youtube"></i>
            <span>VISIT CHANNEL</span>
        </a>
        <a href="#" class="channel-btn-subscribe">
            <i class="bi bi-youtube"></i>
            <span>SUBSCRIBE</span>
        </a>
    </div>
</div>

<!-- Full Variant with Banner -->
<div class="channel-header-full has-banner">
    <div class="channel-banner">
        <img src="banner.jpg" alt="Banner">
    </div>
    <div class="channel-content">
        <div class="channel-avatar">
            <img src="avatar.jpg" alt="Channel">
        </div>
        <div class="channel-info">
            <div class="channel-name-row">
                <h3 class="channel-name">Channel Name</h3>
                <span class="channel-badge">YOUTUBE</span>
            </div>
            <div class="channel-stats">
                <div class="channel-stat-item">
                    <span class="channel-stat-value">2.5M</span>
                    <span class="channel-stat-label">subscribers</span>
                </div>
                <div class="channel-stat-item">
                    <span class="channel-stat-value">850</span>
                    <span class="channel-stat-label">videos</span>
                </div>
            </div>
        </div>
        <div class="channel-actions">
            <a href="#" class="channel-btn-visit">
                <i class="bi bi-youtube"></i>
                <span>VISIT CHANNEL</span>
            </a>
            <a href="#" class="channel-btn-subscribe">
                <i class="bi bi-youtube"></i>
                <span>SUBSCRIBE</span>
            </a>
        </div>
    </div>
</div>
```

**Variants**:
- `.channel-header-compact` / `.channel-header-compact-dark` - Compact layout
- `.channel-header-full` / `.channel-header-full-dark` - Full layout
- `.has-banner` - Add to full variant to include banner (avatar pulls up over banner)
- Omit `.has-banner` for full variant without banner (normal avatar positioning)

### Section Transitions (waves/angles)

Transitions use negative margins to overlap into the previous section. Just specify the NEXT section's color.

```html
<!-- Wave: just specify the next section's color -->
<div class="section-wave wave-dark">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
    </svg>
</div>

<!-- Angle: just specify the next section's color -->
<div class="section-angle angle-dark"></div>
```

**USAGE TIP**: Only use transitions between sections with clearly different colors (light→dark, dark→light). Don't use between similar backgrounds.
- Wave colors: `wave-light`, `wave-white`, `wave-dark`, `wave-trust`, `wave-primary`
- Angle colors: `angle-light`, `angle-white`, `angle-dark`, `angle-trust`, `angle-primary`

### Modal System

Custom modal variants for galleries, videos, content, downloads, and confirmations. All modals use `.modal-custom` base with specific variant classes.

#### Lightbox Modal (Gallery Viewer)
```html
<div id="lightbox-demo" class="modal-custom modal-lightbox">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
            <i class="bi bi-x-lg"></i>
        </button>
        
        <div class="lightbox-image-container">
            <img src="image.jpg" alt="Description" class="lightbox-image">
            
            <button class="lightbox-nav lightbox-prev" aria-label="Previous">
                <i class="bi bi-chevron-left"></i>
            </button>
            <button class="lightbox-nav lightbox-next" aria-label="Next">
                <i class="bi bi-chevron-right"></i>
            </button>
            
            <div class="lightbox-caption">
                <p class="lightbox-caption-text">Image description</p>
                <p class="lightbox-caption-credit">Photo by Artist</p>
            </div>
            
            <div class="lightbox-zoom-controls">
                <button class="lightbox-zoom" aria-label="Zoom in"><i class="bi bi-zoom-in"></i></button>
                <button class="lightbox-zoom" aria-label="Zoom out"><i class="bi bi-zoom-out"></i></button>
            </div>
        </div>
        
        <div class="lightbox-thumbnails">
            <button class="lightbox-thumb is-active"><img src="thumb1.jpg" alt="Thumb 1"></button>
            <button class="lightbox-thumb"><img src="thumb2.jpg" alt="Thumb 2"></button>
        </div>
    </div>
</div>
```

#### Video Modal (Video Player)
```html
<div id="video-demo" class="modal-custom modal-video">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
            <i class="bi bi-x-lg"></i>
        </button>
        
        <div class="video-player-container">
            <video class="video-player" poster="poster.jpg">
                <source src="video.mp4" type="video/mp4">
            </video>
            
            <div class="video-controls">
                <button class="video-control-btn" aria-label="Play"><i class="bi bi-play-fill"></i></button>
                <div class="video-progress">
                    <div class="video-progress-fill" style="width: 35%;"></div>
                </div>
                <span class="video-time">1:23 / 3:45</span>
                <button class="video-control-btn" aria-label="Mute"><i class="bi bi-volume-up-fill"></i></button>
                <button class="video-control-btn" aria-label="Fullscreen"><i class="bi bi-fullscreen"></i></button>
            </div>
        </div>
    </div>
</div>
```

#### Content Modal (Article/Content Viewer)
```html
<div id="content-demo" class="modal-custom modal-content-type">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <div class="modal-header-custom">
            <h2 class="modal-title-custom">Article Title</h2>
            <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="modal-body-custom">
            <div class="content-full">
                <p>Article content...</p>
                <h3>Subheading</h3>
                <p>More content...</p>
            </div>
        </div>
        <div class="modal-footer-custom">
            <button class="btn btn-outline-secondary" onclick="this.closest('.modal-custom').classList.remove('is-active')">Close</button>
            <a href="#" class="btn btn-primary">Read Full Article</a>
        </div>
    </div>
</div>
```

#### Download Modal (File Format Selection)
```html
<div id="download-demo" class="modal-custom modal-download">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <div class="modal-header-custom">
            <h2 class="modal-title-custom">Download Resource</h2>
            <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="modal-body-custom">
            <div class="download-options">
                <h3 class="download-options-title">Resource Name</h3>
                <p class="text-muted small">Select format:</p>
                
                <div class="file-formats">
                    <button class="format-option is-selected">
                        <i class="bi bi-file-earmark-pdf"></i>
                        <span>PDF</span>
                        <small>(2.4 MB)</small>
                    </button>
                    <button class="format-option">
                        <i class="bi bi-file-earmark-word"></i>
                        <span>DOCX</span>
                        <small>(1.8 MB)</small>
                    </button>
                </div>
                
                <button class="download-action">
                    <i class="bi bi-download"></i>
                    Download PDF
                </button>
            </div>
        </div>
    </div>
</div>
```

#### Confirmation Modal
```html
<div id="confirm-demo" class="modal-custom modal-confirm">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <div class="modal-body-custom">
            <div class="confirm-icon">
                <i class="bi bi-exclamation-triangle"></i>
            </div>
            <h3 class="confirm-title">Are you sure?</h3>
            <p class="confirm-message">This action cannot be undone.</p>
            <div class="confirm-actions">
                <button class="btn btn-outline-secondary" onclick="this.closest('.modal-custom').classList.remove('is-active')">Cancel</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</div>
```

#### Testimonial Modal
```html
<div id="testimonial-demo" class="modal-custom modal-testimonial">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <div class="modal-header-custom">
            <h2 class="modal-title-custom">Customer Review</h2>
            <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="modal-body-custom">
            <div class="testimonial-full">
                <blockquote class="testimonial-quote-full">
                    Full testimonial text...
                </blockquote>
                
                <div class="testimonial-author-full">
                    <div class="avatar avatar-md">
                        <img src="avatar.jpg" alt="Name" class="avatar-img">
                    </div>
                    <div class="testimonial-author-info">
                        <div class="testimonial-author-name">Name</div>
                        <div class="testimonial-author-title">Title, Company</div>
                        <div class="testimonial-rating-full">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Modal Variants**: 
- `.modal-lightbox` - Gallery with navigation, zoom, thumbnails
- `.modal-video` - Video player with custom controls
- `.modal-content-type` - Article/content viewer
- `.modal-download` - File format selection
- `.modal-confirm` - Confirmation dialogs
- `.modal-testimonial` - Full testimonial view

**Opening Modals**: Add `is-active` class to `.modal-custom` element
**Closing Modals**: Remove `is-active` class or click overlay

### Heading Highlights
```html
<h2>Sites That <span class="text-highlight">Convert</span></h2>
<h2>Built <span class="text-highlight-underline">Right</span></h2>
```

### content-callout
```html
<div class="content-callout">
    <strong>Callout Title:</strong> Callout text goes here.
</div>
```

### social-links (in footer)
```html
<div class="social-links">
    <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
    <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
    <a href="#" class="social-link"><i class="bi bi-github"></i></a>
</div>
```

## CSS Rules

### ALWAYS use CSS custom properties
```css
/* ❌ WRONG */
.my-component { color: #2563eb; padding: 1.5rem; }

/* ✅ CORRECT */
.my-component { color: var(--bs-primary); padding: var(--bs-space-4); }
```


### Variable naming: `--bs-` prefix
| Category | Pattern | Example |
|----------|---------|---------|
| Colors | `--bs-{color}` | `--bs-primary`, `--bs-gray-600` |
| Spacing | `--bs-space-{n}` | `--bs-space-4` |
| Typography | `--bs-font-size-{size}` | `--bs-font-size-lg` |
| Borders | `--bs-border-radius-{size}` | `--bs-border-radius-lg` |
| Shadows | `--bs-shadow-{size}` | `--bs-shadow-md` |

### Component naming convention
- Component: `kebab-case` (`.card-service`)
- Elements: `component-element` (`.card-service-icon`)
- Modifiers: `component-modifier` (`.card-service-dark`)
- State: `component.state` (`.card-service.featured`)

### File placement rules
- New components → `/css/components/_componentname.css`
- All `@media` queries → `_responsive.css`
- BS5 overrides → `_bs5-overrides.css`
- Custom utilities → `_utilities.css`

## Hero Section Rules

- Hero buttons should use `.btn-lg` by default
- Use `.pt-header` class on first hero to account for fixed header

```html
<section class="hero pt-header">
    <div class="container">
        <div class="col-lg-10 hero-content">
            <h1>Headline</h1>
            <p class="lead">Lead text.</p>
            <a href="#" class="btn btn-primary btn-lg me-3">Primary</a>
            <a href="#" class="btn btn-outline-light btn-lg">Secondary</a>
        </div>
    </div>
</section>
```

## Don'ts

- ❌ Never hardcode colors, spacing, or sizes
- ❌ Never put media queries in component files
- ❌ Never use `!important` unless absolutely necessary
- ❌ Never put dark components on light backgrounds
- ❌ Never put light components on dark backgrounds
- ❌ Never use h4 in card-feature (use h5)
- ❌ Never forget utility classes on card-benefit
- ❌ Never forget icons in metric-item

## Testing Checklist

Before considering work complete:
- [ ] All values use CSS custom properties
- [ ] Component works on appropriate background (light vs dark)
- [ ] Hover/focus states present
- [ ] Responsive behavior tested
- [ ] No CSS syntax errors
- [ ] File in correct location
- [ ] Component comment header present
