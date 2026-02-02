# Interactive Components

> **Component Library**: StoneWick Theme  
> **Version**: 1.1.0  
> **Category**: Interactive Elements  
> **Last Updated**: 2026-02-01

Comprehensive documentation for testimonials, modals, sliders, comparison tools, timelines, metrics, event cards, accordions, and form elements.

---

## Table of Contents

1. [Testimonials](#testimonials)
2. [Modals](#modals)
3. [Sliders & Carousels](#sliders--carousels)
4. [Comparison Slider](#comparison-slider)
5. [Timeline Components](#timeline-components)
6. [Metrics & Stats](#metrics--stats)
7. [Event Cards](#event-cards)
8. [Accordions](#accordions)
9. [Form Elements](#form-elements)
10. [Alerts & Notifications](#alerts--notifications)
11. [JavaScript Integration](#javascript-integration)

---

## Testimonials

### Overview

Testimonial cards display customer reviews with avatars, ratings, quotes, and source platform badges (Google, LinkedIn, Yelp, etc.). Available in both light and dark variants.

### Components

#### `card-testimonial` (Light Background)

Standard testimonial card with white background for light sections.

```html
<div class="card-testimonial">
    <div class="testimonial-header">
        <div class="avatar avatar-lg avatar-primary">
            <span class="avatar-initials">JD</span>
        </div>
        <div class="testimonial-info">
            <div class="testimonial-name">John Davidson</div>
            <div class="testimonial-title">Owner, Davidson Plumbing</div>
            <div class="rating-stars rating-stars-sm">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
        </div>
    </div>
    <div class="testimonial-body">
        <blockquote>Best investment I've made for my business. My new website brings in 3x the leads we used to get. Highly recommend!</blockquote>
    </div>
    <div class="testimonial-footer">
        <span class="testimonial-source google"><i class="bi bi-google"></i> Google</span>
        <span class="testimonial-date">2 weeks ago</span>
    </div>
</div>
```

#### Avatar Variants

Testimonials support multiple avatar styles:

**Image Avatar:**
```html
<div class="avatar avatar-lg">
    <img src="avatar.jpg" alt="Sarah M." class="avatar-img">
</div>
```

**Initials Avatar (with color):**
```html
<div class="avatar avatar-lg avatar-primary">
    <span class="avatar-initials">JD</span>
</div>

<!-- Color options: avatar-primary, avatar-success, avatar-info, etc. -->
```

#### Source Platform Badges

Display review source with branded styling:

```html
<!-- Google Reviews -->
<span class="testimonial-source google"><i class="bi bi-google"></i> Google</span>

<!-- LinkedIn -->
<span class="testimonial-source linkedin"><i class="bi bi-linkedin"></i> LinkedIn</span>

<!-- Yelp -->
<span class="testimonial-source yelp"><i class="bi bi-yelp"></i> Yelp</span>

<!-- Facebook -->
<span class="testimonial-source facebook"><i class="bi bi-facebook"></i> Facebook</span>
```

**Available Platforms**: `google`, `linkedin`, `yelp`, `facebook`

#### Rating Stars

```html
<!-- Full 5-star rating -->
<div class="rating-stars rating-stars-sm">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
</div>

<!-- 4-star rating (1 empty star) -->
<div class="rating-stars rating-stars-sm">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
</div>
```

#### Featured Variant

Highlight important testimonials with a featured border and gradient background:

```html
<div class="card-testimonial featured">
    <!-- Same structure as above -->
</div>
```

**Visual Effect**: Blue primary border, subtle gradient background, enhanced shadow on hover.

#### `card-testimonial-dark` (Dark Background)

Dark variant for dark sections (`.bg-dark-gradient`, `.bg-trust`, etc.)

```html
<div class="card-testimonial-dark">
    <div class="testimonial-header">
        <div class="avatar avatar-lg">
            <img src="avatar.jpg" alt="Lisa K." class="avatar-img">
        </div>
        <div class="testimonial-info">
            <div class="testimonial-name">Lisa Kowalski</div>
            <div class="testimonial-title">Marketing Director</div>
            <div class="rating-stars rating-stars-sm">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
        </div>
    </div>
    <div class="testimonial-body">
        <blockquote>Outstanding work! The attention to detail and focus on performance really shows in the final product.</blockquote>
    </div>
    <div class="testimonial-footer">
        <span class="testimonial-source google"><i class="bi bi-google"></i> Google</span>
        <span class="testimonial-date">1 week ago</span>
    </div>
</div>
```

#### Compact Variant

Smaller testimonials for sidebars or footer sections:

```html
<div class="card-testimonial-compact">
    <!-- Same structure, automatically adjusts sizing -->
</div>
```

### Grid Layouts

Display multiple testimonials in responsive grids:

```html
<!-- 3-column layout on large screens -->
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <div class="card-testimonial">...</div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="card-testimonial">...</div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="card-testimonial">...</div>
    </div>
</div>
```

### Usage Notes

- **Background Requirements**: Use `.card-testimonial` on light backgrounds, `.card-testimonial-dark` on dark backgrounds
- **Quote Styling**: The `<blockquote>` automatically adds opening quotation marks
- **Height Consistency**: Cards automatically adjust to fill container height with `height: 100%`
- **Hover Effects**: Subtle lift animation on hover (4px translateY)

---

## Modals

### Overview

StoneWick provides two modal systems:
1. **Bootstrap Modals** - Standard Bootstrap 5 dialogs
2. **Custom Modal System** - Specialized variants for galleries, videos, content, downloads, confirmations, and testimonials

### Bootstrap Modals

Standard Bootstrap 5 modal dialogs with theme styling.

#### Standard Modal

```html
<!-- Trigger Button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#standardModal">
    Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="standardModal" tabindex="-1" aria-labelledby="standardModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="standardModalLabel">Standard Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>This is a standard Bootstrap modal with custom StoneWick styling.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```

#### Large Modal

```html
<div class="modal fade" id="largeModal" tabindex="-1" aria-labelledby="largeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!-- header, body, footer -->
        </div>
    </div>
</div>
```

#### Centered Modal

Vertically center the modal:

```html
<div class="modal fade" id="centeredModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="badge-gradient mx-auto mb-3"><i class="bi bi-check-lg"></i></div>
                <h4>Success!</h4>
                <p class="text-muted">Your action has been completed successfully.</p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Got it!</button>
            </div>
        </div>
    </div>
</div>
```

### Custom Modal System

Advanced modal variants with specialized functionality.

#### Base Structure

All custom modals use `.modal-custom` with variant classes and JavaScript control via `is-active` class:

```html
<div id="my-modal" class="modal-custom modal-VARIANT">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <!-- Content varies by variant -->
    </div>
</div>
```

**Opening**: Add `is-active` class  
**Closing**: Remove `is-active` class or click overlay

#### Lightbox Modal (Gallery Viewer)

Full-screen image gallery with navigation, zoom, and thumbnails.

```html
<div id="lightbox-demo" class="modal-custom modal-lightbox">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
            <i class="bi bi-x-lg"></i>
        </button>
        
        <div class="lightbox-image-container">
            <img src="image.jpg" alt="Mountain landscape" class="lightbox-image">
            
            <!-- Navigation Arrows -->
            <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
                <i class="bi bi-chevron-left"></i>
            </button>
            <button class="lightbox-nav lightbox-next" aria-label="Next image">
                <i class="bi bi-chevron-right"></i>
            </button>
            
            <!-- Caption -->
            <div class="lightbox-caption">
                <p class="lightbox-caption-text">Majestic mountain peaks at sunrise</p>
                <p class="lightbox-caption-credit">Photo by John Doe</p>
            </div>
            
            <!-- Zoom Controls -->
            <div class="lightbox-zoom-controls">
                <button class="lightbox-zoom" aria-label="Zoom in">
                    <i class="bi bi-zoom-in"></i>
                </button>
                <button class="lightbox-zoom" aria-label="Zoom out">
                    <i class="bi bi-zoom-out"></i>
                </button>
            </div>
        </div>
        
        <!-- Thumbnails -->
        <div class="lightbox-thumbnails">
            <button class="lightbox-thumb is-active">
                <img src="thumb1.jpg" alt="Thumbnail 1">
            </button>
            <button class="lightbox-thumb">
                <img src="thumb2.jpg" alt="Thumbnail 2">
            </button>
            <button class="lightbox-thumb">
                <img src="thumb3.jpg" alt="Thumbnail 3">
            </button>
            <button class="lightbox-thumb">
                <img src="thumb4.jpg" alt="Thumbnail 4">
            </button>
        </div>
    </div>
</div>
```

**Features**:
- Full-screen image display
- Previous/Next navigation
- Thumbnail strip
- Zoom in/out controls
- Image captions and credits
- Active thumbnail indicator (`.is-active`)

#### Video Modal

Custom video player with controls and progress bar.

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
                Your browser does not support the video tag.
            </video>
            
            <div class="video-controls">
                <button class="video-control-btn" aria-label="Play">
                    <i class="bi bi-play-fill"></i>
                </button>
                <div class="video-progress">
                    <div class="video-progress-fill" style="width: 35%;"></div>
                </div>
                <span class="video-time">1:23 / 3:45</span>
                <button class="video-control-btn" aria-label="Mute">
                    <i class="bi bi-volume-up-fill"></i>
                </button>
                <button class="video-control-btn" aria-label="Fullscreen">
                    <i class="bi bi-fullscreen"></i>
                </button>
            </div>
        </div>
    </div>
</div>
```

**Controls**:
- Play/Pause button
- Progress bar with fill indicator
- Time display (current / total)
- Volume/Mute toggle
- Fullscreen toggle

#### Content Modal (Article Viewer)

Display full articles or long-form content.

```html
<div id="content-demo" class="modal-custom modal-content-type">
    <div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>
    <div class="modal-content-custom">
        <div class="modal-header-custom">
            <h2 class="modal-title-custom">Understanding Web Performance</h2>
            <button class="modal-close" onclick="this.closest('.modal-custom').classList.remove('is-active')" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="modal-body-custom">
            <div class="content-full">
                <p>Web performance refers to the speed in which web pages are downloaded and displayed on the user's web browser.</p>
                
                <h3>Why Performance Matters</h3>
                <p>Performance is crucial for user experience. Studies show that users expect pages to load in under 3 seconds.</p>
                
                <h4>Key Metrics</h4>
                <ul>
                    <li><strong>First Contentful Paint (FCP)</strong> - When the first content appears</li>
                    <li><strong>Largest Contentful Paint (LCP)</strong> - When the main content loads</li>
                    <li><strong>Time to Interactive (TTI)</strong> - When the page becomes interactive</li>
                    <li><strong>Cumulative Layout Shift (CLS)</strong> - Visual stability</li>
                </ul>
                
                <p>By focusing on these metrics, you can significantly improve user experience.</p>
            </div>
        </div>
        <div class="modal-footer-custom">
            <button class="btn btn-outline-secondary" onclick="this.closest('.modal-custom').classList.remove('is-active')">Close</button>
            <a href="#" class="btn btn-primary">Read Full Article</a>
        </div>
    </div>
</div>
```

**Features**:
- Scrollable content area
- Full HTML formatting support (headings, lists, etc.)
- Header with title and close button
- Footer with action buttons

#### Download Modal

File format selection and download options.

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
                <h3 class="download-options-title">Web Performance Guide</h3>
                
                <p class="text-muted small">Select your preferred format:</p>
                
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
                    <button class="format-option">
                        <i class="bi bi-file-earmark-text"></i>
                        <span>TXT</span>
                        <small>(156 KB)</small>
                    </button>
                    <button class="format-option">
                        <i class="bi bi-file-earmark-code"></i>
                        <span>EPUB</span>
                        <small>(1.2 MB)</small>
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

**Features**:
- Multiple format options (PDF, DOCX, TXT, EPUB, etc.)
- File size display
- Selected state indicator (`.is-selected`)
- Download action button

#### Confirmation Modal

User confirmation dialogs with icons and clear actions.

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

**Icon Options**: Use Bootstrap Icons for different confirmation types:
- `bi-exclamation-triangle` - Warning/Danger
- `bi-question-circle` - Question
- `bi-info-circle` - Information
- `bi-check-circle` - Success

#### Testimonial Modal

Full testimonial view with author details and rating.

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
                    "Working with this team transformed our entire business. The attention to detail, 
                    commitment to excellence, and deep understanding of our needs resulted in a 
                    website that not only looks beautiful but drives real results. We've seen a 
                    300% increase in qualified leads since launch."
                </blockquote>
                
                <div class="testimonial-author-full">
                    <div class="avatar avatar-md">
                        <img src="avatar.jpg" alt="Sarah Mitchell" class="avatar-img">
                    </div>
                    <div class="testimonial-author-info">
                        <div class="testimonial-author-name">Sarah Mitchell</div>
                        <div class="testimonial-author-title">CEO, Mitchell Consulting</div>
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

### Modal JavaScript Control

```javascript
// Open modal
document.getElementById('my-modal').classList.add('is-active');

// Close modal
document.getElementById('my-modal').classList.remove('is-active');

// Close on overlay click (already included in markup)
<div class="modal-overlay" onclick="this.parentElement.classList.remove('is-active')"></div>

// Close button
<button onclick="this.closest('.modal-custom').classList.remove('is-active')">Close</button>
```

### Modal Variants Summary

| Variant | Class | Purpose |
|---------|-------|---------|
| Lightbox | `.modal-lightbox` | Image gallery with navigation and zoom |
| Video | `.modal-video` | Video player with custom controls |
| Content | `.modal-content-type` | Full article/content viewer |
| Download | `.modal-download` | File format selection |
| Confirm | `.modal-confirm` | Confirmation dialogs |
| Testimonial | `.modal-testimonial` | Full testimonial view |

---

## Sliders & Carousels

### Overview

Enhanced carousel/slider component with multiple features: thumbnails, autoplay, progress tracking, and navigation controls.

### Basic Slider Structure

```html
<div class="slider-container">
    <div class="slider-track">
        <!-- Slide 1 -->
        <div class="slide">
            <img src="image1.jpg" alt="Slide 1" class="slide-image">
            <div class="slide-content">
                <h3 class="slide-title">Slide Title 1</h3>
                <p class="slide-description">Description of the slide content.</p>
            </div>
        </div>
        
        <!-- Slide 2 -->
        <div class="slide">
            <img src="image2.jpg" alt="Slide 2" class="slide-image">
            <div class="slide-content">
                <h3 class="slide-title">Slide Title 2</h3>
                <p class="slide-description">Another slide description.</p>
            </div>
        </div>
        
        <!-- Additional slides... -->
    </div>
    
    <!-- Navigation Controls -->
    <button class="slider-control slider-prev" aria-label="Previous">
        <i class="bi bi-chevron-left"></i>
    </button>
    <button class="slider-control slider-next" aria-label="Next">
        <i class="bi bi-chevron-right"></i>
    </button>
    
    <!-- Dot Indicators -->
    <div class="slider-dots">
        <button class="slider-dot is-active" aria-label="Slide 1"></button>
        <button class="slider-dot" aria-label="Slide 2"></button>
        <button class="slider-dot" aria-label="Slide 3"></button>
    </div>
    
    <!-- Progress Bar (Optional) -->
    <div class="slider-progress">
        <div class="slider-progress-fill"></div>
    </div>
</div>
```

### Slide Components

#### Slide Image
```html
<div class="slide">
    <img src="image.jpg" alt="Description" class="slide-image">
</div>
```

**Aspect Ratio**: 16:9 by default

#### Slide with Content Overlay
```html
<div class="slide">
    <img src="image.jpg" alt="Description" class="slide-image">
    <div class="slide-content">
        <h3 class="slide-title">Feature Headline</h3>
        <p class="slide-description">Brief description of this slide's content.</p>
    </div>
</div>
```

**Content Positioning**: Absolute positioned at bottom with gradient overlay

### Navigation Controls

#### Arrow Controls
```html
<button class="slider-control slider-prev" aria-label="Previous">
    <i class="bi bi-chevron-left"></i>
</button>
<button class="slider-control slider-next" aria-label="Next">
    <i class="bi bi-chevron-right"></i>
</button>
```

#### Hide Controls Until Hover
```html
<div class="slider-container hide-controls">
    <!-- Slider content -->
</div>
```

**Behavior**: Controls fade in on hover

### Indicators

#### Dot Indicators (Overlaying Slides)
```html
<div class="slider-dots">
    <button class="slider-dot is-active" aria-label="Slide 1"></button>
    <button class="slider-dot" aria-label="Slide 2"></button>
    <button class="slider-dot" aria-label="Slide 3"></button>
</div>
```

#### Dots Outside Slider
```html
<div class="slider-dots slider-dots-outside">
    <button class="slider-dot is-active"></button>
    <button class="slider-dot"></button>
    <button class="slider-dot"></button>
</div>
```

### Progress Bar

#### Overlay Progress (Inside Slider)
```html
<div class="slider-progress">
    <div class="slider-progress-fill"></div>
</div>
```

**Position**: Absolute at bottom edge, 4px height

#### Animated Progress for Autoplay
```html
<div class="slider-progress">
    <div class="slider-progress-fill is-playing"></div>
</div>
```

**Animation**: Fills from 0% to 100% over 5 seconds (customizable)

#### Outside Progress Bar
```html
<div class="slider-progress slider-progress-outside">
    <div class="slider-progress-fill"></div>
</div>
```

### JavaScript Requirements

Sliders require custom JavaScript for:
- Slide navigation (previous/next)
- Dot indicator clicks
- Autoplay functionality
- Progress bar updates
- Touch/swipe support

**Basic example** (simplified):
```javascript
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    const track = document.querySelector('.slider-track');
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
    });
}

document.querySelector('.slider-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
```

---

## Comparison Slider

### Overview

Interactive before/after comparison slider with draggable handle. Supports both mouse and touch input for revealing the "after" image.

### Basic Structure

```html
<div class="comparison-slider">
    <!-- Before Image -->
    <div class="comparison-before">
        <img src="before.jpg" alt="Before" class="comparison-image">
        <div class="comparison-label comparison-label-before">Before</div>
    </div>
    
    <!-- After Image -->
    <div class="comparison-after">
        <img src="after.jpg" alt="After" class="comparison-image">
        <div class="comparison-label comparison-label-after">After</div>
    </div>
    
    <!-- Draggable Handle -->
    <div class="comparison-handle" data-position="50">
        <div class="comparison-handle-line"></div>
        <div class="comparison-handle-circle">
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
        </div>
    </div>
</div>
```

### Components

#### Before/After Images

Both images should be the same dimensions:

```html
<div class="comparison-before">
    <img src="before.jpg" alt="Before optimization" class="comparison-image">
    <div class="comparison-label comparison-label-before">Before</div>
</div>

<div class="comparison-after">
    <img src="after.jpg" alt="After optimization" class="comparison-image">
    <div class="comparison-label comparison-label-after">After</div>
</div>
```

**Labels**: Positioned at top corners with dark semi-transparent background

#### Draggable Handle

```html
<div class="comparison-handle" data-position="50">
    <div class="comparison-handle-line"></div>
    <div class="comparison-handle-circle">
        <i class="bi bi-chevron-left"></i>
        <i class="bi bi-chevron-right"></i>
    </div>
</div>
```

**Features**:
- Vertical white line spanning full height
- Circular handle with left/right chevrons
- Primary color accent on hover
- `data-position` attribute tracks position (0-100)

### Functionality

#### Clip Path Behavior

The "after" image uses `clip-path: inset(0 50% 0 0)` to reveal based on handle position:
- Position 0% = Before image fully visible
- Position 50% = Even split (default)
- Position 100% = After image fully visible

#### JavaScript Requirements

Requires custom JS for:
- Mouse drag events
- Touch drag events (mobile)
- Updating clip-path on drag
- Updating handle position

**Basic implementation** (simplified):
```javascript
const slider = document.querySelector('.comparison-slider');
const handle = slider.querySelector('.comparison-handle');
const afterImage = slider.querySelector('.comparison-after');

let isDragging = false;

function updatePosition(x) {
    const rect = slider.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position)); // Clamp 0-100
    
    afterImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    handle.style.left = `${position}%`;
    handle.dataset.position = position;
}

// Mouse events
handle.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mousemove', (e) => {
    if (isDragging) updatePosition(e.clientX);
});
document.addEventListener('mouseup', () => isDragging = false);

// Touch events
handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
});
document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        updatePosition(e.touches[0].clientX);
        e.preventDefault();
    }
});
document.addEventListener('touchend', () => isDragging = false);
```

### Styling Features

- **Border Radius**: `--bs-border-radius-lg`
- **Shadow**: `--bs-shadow-lg`
- **Cursor**: Changes to `grab` on hover, `grabbing` when dragging
- **Handle Hover**: Scales up 1.1x, changes to primary color
- **Responsive**: Handle size reduces on mobile (2.5rem vs 3rem)

### Use Cases

- Website redesigns (before/after)
- Image optimization results
- Design improvements
- Performance comparisons
- Photo editing showcases

---

## Timeline Components

### Overview

Comprehensive vertical timeline system with multiple variants for process flows, roadmaps, and step-by-step guides. Highly customizable with color themes, sizes, and layout options.

### Base Timeline

Default numbered vertical timeline:

```html
<ol class="process-timeline">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <h3 class="process-title">Discovery Phase</h3>
        <p class="process-text">We start by understanding your business goals, target audience, and project requirements through detailed consultations.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">2</div>
        <h3 class="process-title">Design & Planning</h3>
        <p class="process-text">Our team creates wireframes and mockups, planning the site structure and user experience before development begins.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">3</div>
        <h3 class="process-title">Development</h3>
        <p class="process-text">We build your website using modern technologies, ensuring it's fast, secure, and optimized for all devices.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">4</div>
        <h3 class="process-title">Launch & Support</h3>
        <p class="process-text">After thorough testing, we launch your site and provide ongoing support to ensure continued success.</p>
    </li>
</ol>
```

**Key Features**:
- Vertical connecting line
- Circular numbered markers
- Hover effects on markers and titles
- Consistent spacing between items
- Semantic HTML (`<ol>` with `<li>`)

### Timeline Variants

#### Filled Markers

Solid filled markers instead of outlined:

```html
<ol class="process-timeline timeline-filled">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <h3 class="process-title">Step Title</h3>
        <p class="process-text">Step description.</p>
    </li>
    <!-- More items -->
</ol>
```

**Visual**: Filled primary color background, white text

#### Gradient Markers

Gradient-filled markers with no border:

```html
<ol class="process-timeline timeline-gradient">
    <!-- Items -->
</ol>
```

**Visual**: Primary to info gradient, no border, gradient connecting line

#### Size Variants

**Large Timeline**:
```html
<ol class="process-timeline timeline-lg">
    <!-- Items -->
</ol>
```
- Markers: 3rem diameter
- Larger title (1.25rem)
- More spacing (3rem between items)

**Small Timeline**:
```html
<ol class="process-timeline timeline-sm">
    <!-- Items -->
</ol>
```
- Markers: 2rem diameter
- Smaller title (1rem)
- Tighter spacing (1.75rem)

#### Icon Markers

Use icons instead of numbers:

```html
<ol class="process-timeline timeline-icon">
    <li class="process-timeline-item">
        <div class="process-marker"><i class="bi bi-search"></i></div>
        <h3 class="process-title">Research</h3>
        <p class="process-text">Conduct market research.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker"><i class="bi bi-lightbulb"></i></div>
        <h3 class="process-title">Ideate</h3>
        <p class="process-text">Brainstorm solutions.</p>
    </li>
    <!-- More icon steps -->
</ol>
```

#### Card-Style Content

Wrap content in elevated cards:

```html
<ol class="process-timeline timeline-cards">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <div class="process-content">
            <h3 class="process-title">Step Title</h3>
            <p class="process-text">Content wrapped in a card with border and background.</p>
        </div>
    </li>
    <!-- More items -->
</ol>
```

**Visual**: Light gray background, border, hover effects

#### Accent Line

Add left accent border to each item:

```html
<ol class="process-timeline timeline-accent">
    <!-- Items -->
</ol>
```

**Visual**: Transparent left border becomes primary on hover, slight padding shift

### Color Variants

Change marker and line color:

```html
<!-- Success (Green) -->
<ol class="process-timeline timeline-success">...</ol>

<!-- Info (Blue) -->
<ol class="process-timeline timeline-info">...</ol>

<!-- Warning (Yellow) -->
<ol class="process-timeline timeline-warning">...</ol>

<!-- Secondary (Gray) -->
<ol class="process-timeline timeline-secondary">...</ol>
```

**Combine with Filled**:
```html
<ol class="process-timeline timeline-success timeline-filled">
    <!-- Green filled markers -->
</ol>
```

### Layout Variants

#### Horizontal Timeline (Desktop)

```html
<ol class="process-timeline timeline-horizontal">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <h3 class="process-title">Step One</h3>
        <p class="process-text">Description.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">2</div>
        <h3 class="process-title">Step Two</h3>
        <p class="process-text">Description.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">3</div>
        <h3 class="process-title">Step Three</h3>
        <p class="process-text">Description.</p>
    </li>
</ol>
```

**Behavior**:
- Desktop (≥992px): Horizontal layout with top connecting line
- Mobile: Reverts to vertical layout

#### Alternating Timeline (Desktop)

Zigzag layout with items alternating left/right:

```html
<ol class="process-timeline timeline-alternating">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <h3 class="process-title">Left Side</h3>
        <p class="process-text">Odd items appear on the left.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">2</div>
        <h3 class="process-title">Right Side</h3>
        <p class="process-text">Even items appear on the right.</p>
    </li>
    <!-- More items -->
</ol>
```

**Behavior**:
- Desktop (≥768px): Alternating sides, centered line
- Mobile: Vertical layout

### State Classes

#### Active State

Highlight the current step:

```html
<li class="process-timeline-item active">
    <div class="process-marker">2</div>
    <h3 class="process-title">Current Step</h3>
    <p class="process-text">This step is currently in progress.</p>
</li>
```

**Visual**: Filled primary marker with ring shadow, primary title color

#### Completed State

Mark steps as finished with checkmark:

```html
<li class="process-timeline-item completed">
    <div class="process-marker">1</div>
    <h3 class="process-title">Completed Step</h3>
    <p class="process-text">This step is done.</p>
</li>
```

**Visual**: Green filled marker with checkmark (✓), success border

#### Pending State

Dim future steps:

```html
<li class="process-timeline-item pending">
    <div class="process-marker">4</div>
    <h3 class="process-title">Future Step</h3>
    <p class="process-text">This step hasn't started yet.</p>
</li>
```

**Visual**: 50% opacity on marker and text

### Navigable Timeline (Tab-Based)

Interactive timeline using Bootstrap tabs - markers act as clickable tabs:

```html
<ol class="process-timeline timeline-navigable">
    <li class="process-timeline-item">
        <button class="process-marker" data-bs-toggle="tab" data-bs-target="#step1" role="tab" aria-selected="true">1</button>
        <div class="process-content">
            <h3 class="process-title">Step One</h3>
            <p class="process-text">Click markers to navigate between steps.</p>
        </div>
    </li>
    <li class="process-timeline-item">
        <button class="process-marker" data-bs-toggle="tab" data-bs-target="#step2" role="tab">2</button>
        <div class="process-content">
            <h3 class="process-title">Step Two</h3>
            <p class="process-text">Navigable timeline content.</p>
        </div>
    </li>
</ol>

<!-- Tab content panels -->
<div class="tab-content mt-4">
    <div class="tab-pane fade show active" id="step1" role="tabpanel">
        <h4>Step 1 Details</h4>
        <p>Detailed content for step one.</p>
    </div>
    <div class="tab-pane fade" id="step2" role="tabpanel">
        <h4>Step 2 Details</h4>
        <p>Detailed content for step two.</p>
    </div>
</div>
```

**Features**:
- Markers are clickable buttons
- Uses Bootstrap 5 tab system (no custom JS required)
- Active marker styling
- Completed markers remain green with checkmark
- Accessible with keyboard navigation

**With Completed State**:
```html
<li class="process-timeline-item completed">
    <button class="process-marker" data-bs-toggle="tab" data-bs-target="#step1">1</button>
    <!-- Displays green checkmark -->
</li>
```

### Spacing Utilities

```html
<!-- Compact spacing -->
<ol class="process-timeline timeline-compact">
    <!-- Items closer together -->
</ol>

<!-- Spacious layout -->
<ol class="process-timeline timeline-spacious">
    <!-- More space between items -->
</ol>
```

### Dark Mode Support

Timelines automatically adapt on dark backgrounds:

```html
<div class="bg-dark">
    <ol class="process-timeline">
        <!-- Automatically adjusts colors for dark background -->
    </ol>
</div>
```

### Combining Variants

Variants can be combined:

```html
<!-- Large gradient timeline with cards -->
<ol class="process-timeline timeline-lg timeline-gradient timeline-cards">
    <!-- Items -->
</ol>

<!-- Small success-colored filled timeline -->
<ol class="process-timeline timeline-sm timeline-success timeline-filled">
    <!-- Items -->
</ol>

<!-- Navigable alternating timeline (desktop) -->
<ol class="process-timeline timeline-navigable timeline-alternating">
    <!-- Items -->
</ol>
```

### Timeline Summary Table

| Variant | Class | Description |
|---------|-------|-------------|
| Filled | `.timeline-filled` | Solid filled markers |
| Gradient | `.timeline-gradient` | Gradient markers and line |
| Large | `.timeline-lg` | Bigger markers and spacing |
| Small | `.timeline-sm` | Smaller markers and spacing |
| Icons | `.timeline-icon` | Use icons instead of numbers |
| Cards | `.timeline-cards` | Content in bordered cards |
| Accent | `.timeline-accent` | Left border accent |
| Success | `.timeline-success` | Green color scheme |
| Info | `.timeline-info` | Blue color scheme |
| Warning | `.timeline-warning` | Yellow color scheme |
| Secondary | `.timeline-secondary` | Gray color scheme |
| Horizontal | `.timeline-horizontal` | Horizontal layout (desktop) |
| Alternating | `.timeline-alternating` | Zigzag layout (desktop) |
| Navigable | `.timeline-navigable` | Clickable tab navigation |
| Compact | `.timeline-compact` | Tighter spacing |
| Spacious | `.timeline-spacious` | Looser spacing |

---

## Metrics & Stats

### Overview

Display key statistics, performance metrics, and data points with icons, large values, and labels.

### Basic Metric Item

```html
<div class="metric-item">
    <i class="bi bi-speedometer2"></i>
    <div class="metric-value">&lt;1s</div>
    <div class="metric-label">Load Time</div>
</div>
```

**Structure**:
- Icon (2.5rem, primary color)
- Value (2.5rem, bold, heading color)
- Label (uppercase, small, gray)

### With Explanation

Add additional context text:

```html
<div class="metric-item">
    <i class="bi bi-graph-up-arrow"></i>
    <div class="metric-value">350%</div>
    <div class="metric-label">Traffic Increase</div>
    <p class="metric-explanation">Average growth in the first 6 months</p>
</div>
```

### Metric Grid Layout

Display multiple metrics in a responsive grid:

```html
<div class="row g-4">
    <div class="col-md-3 col-6">
        <div class="metric-item">
            <i class="bi bi-speedometer2"></i>
            <div class="metric-value">&lt;1s</div>
            <div class="metric-label">Load Time</div>
        </div>
    </div>
    <div class="col-md-3 col-6">
        <div class="metric-item">
            <i class="bi bi-phone"></i>
            <div class="metric-value">100%</div>
            <div class="metric-label">Mobile Optimized</div>
        </div>
    </div>
    <div class="col-md-3 col-6">
        <div class="metric-item">
            <i class="bi bi-shield-check"></i>
            <div class="metric-value">A+</div>
            <div class="metric-label">Security Score</div>
        </div>
    </div>
    <div class="col-md-3 col-6">
        <div class="metric-item">
            <i class="bi bi-graph-up"></i>
            <div class="metric-value">98%</div>
            <div class="metric-label">Uptime</div>
        </div>
    </div>
</div>
```

### Dark Background Variant

Metrics automatically adapt colors on dark backgrounds:

```html
<section class="bg-dark-gradient py-section">
    <div class="container">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="metric-item">
                    <i class="bi bi-trophy"></i>
                    <div class="metric-value">500+</div>
                    <div class="metric-label">Projects Completed</div>
                </div>
            </div>
            <!-- More metrics -->
        </div>
    </div>
</section>
```

**Automatic Styling**:
- Icons: Warning yellow
- Values: White
- Labels: Gray-400

**Applies to**: `.bg-dark-gradient`, `.bg-trust`, `.hero`

### Common Metric Icons

| Metric | Icon Class | Example Value |
|--------|------------|---------------|
| Speed/Performance | `bi-speedometer2` | &lt;1s, 95/100 |
| Traffic/Growth | `bi-graph-up-arrow` | +250%, 10K |
| Mobile | `bi-phone` | 100% |
| Security | `bi-shield-check` | A+, Secure |
| Uptime | `bi-activity` | 99.9% |
| Users | `bi-people` | 5,000+ |
| Revenue | `bi-currency-dollar` | +$50K |
| Awards | `bi-trophy` | 15 |
| Time | `bi-clock` | 24/7 |
| Conversion | `bi-graph-up` | 3x |

### Value Formatting Tips

- **Performance scores**: Use ratings (A+, 95/100)
- **Speed metrics**: Include units (&lt;1s, 150ms)
- **Growth**: Use +/- prefix (+250%)
- **Large numbers**: Use K/M suffixes (5K, 2.5M)
- **Percentages**: Include % symbol
- **Comparisons**: Use multipliers (3x, 10x)

---

## Event Cards

### Overview

Event cards display upcoming events, webinars, conferences, and meetings with dates, times, locations, and RSVP actions.

### Standard Event Card

```html
<article class="card-event">
    <div class="event-image">
        <img src="conference.jpg" alt="Conference">
        <div class="event-date-badge">
            <span class="event-date-day">15</span>
            <span class="event-date-month">Mar</span>
        </div>
        <span class="event-category">Conference</span>
    </div>
    <div class="event-body">
        <h3 class="event-title"><a href="#">Web Development Summit 2026</a></h3>
        <p class="event-description">Join industry leaders for a day of insights, networking, and innovation in web technologies.</p>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>9:00 AM - 5:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Portland, OR</span>
            </div>
        </div>
        <div class="event-actions">
            <a href="#" class="btn btn-primary btn-sm">Register</a>
            <button class="add-to-calendar">
                <i class="bi bi-calendar-plus"></i>
                Add to Calendar
            </button>
        </div>
    </div>
</article>
```

### Event Components

#### Event Image with Overlays

```html
<div class="event-image">
    <img src="event.jpg" alt="Event name">
    
    <!-- Date Badge (top left) -->
    <div class="event-date-badge">
        <span class="event-date-day">22</span>
        <span class="event-date-month">Mar</span>
    </div>
    
    <!-- Category Badge (top right) -->
    <span class="event-category">Workshop</span>
</div>
```

**Image Ratio**: 16:9 aspect ratio with hover scale effect

#### Event Body

```html
<div class="event-body">
    <!-- Title with link -->
    <h3 class="event-title">
        <a href="#">Event Name</a>
    </h3>
    
    <!-- Description -->
    <p class="event-description">
        Brief description of the event and what attendees can expect.
    </p>
    
    <!-- Meta information -->
    <div class="event-meta">
        <div class="event-meta-item">
            <i class="bi bi-clock"></i>
            <span>2:00 PM - 6:00 PM</span>
        </div>
        <div class="event-meta-item">
            <i class="bi bi-camera-video"></i>
            <span>Online Event</span>
        </div>
    </div>
    
    <!-- Actions -->
    <div class="event-actions">
        <a href="#" class="btn btn-primary btn-sm">Register</a>
        <button class="add-to-calendar">
            <i class="bi bi-calendar-plus"></i>
            Add to Calendar
        </button>
    </div>
</div>
```

#### Meta Icons

Common event metadata icons:

```html
<!-- Time -->
<div class="event-meta-item">
    <i class="bi bi-clock"></i>
    <span>9:00 AM - 5:00 PM</span>
</div>

<!-- Location -->
<div class="event-meta-item">
    <i class="bi bi-geo-alt"></i>
    <span>Portland, OR</span>
</div>

<!-- Online Event -->
<div class="event-meta-item">
    <i class="bi bi-camera-video"></i>
    <span>Online Event</span>
</div>

<!-- Attendees -->
<div class="event-meta-item">
    <i class="bi bi-people"></i>
    <span>50 attending</span>
</div>
```

### Event Card Variants

#### Featured Event

Highlight important events with primary border:

```html
<article class="card-event featured">
    <!-- Event content -->
</article>
```

**Visual**: 2px primary border, primary date badge background

#### Compact Event Card

Horizontal compact layout for lists:

```html
<article class="card-event card-event-compact">
    <div class="event-date-badge">
        <span class="event-date-day">10</span>
        <span class="event-date-month">Apr</span>
    </div>
    <div class="event-body">
        <h4 class="event-title"><a href="#">Code Review Best Practices</a></h4>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>1:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Online</span>
            </div>
        </div>
    </div>
    <div class="event-actions">
        <a href="#" class="btn btn-outline-primary btn-sm">Join</a>
    </div>
</article>
```

**Differences**:
- Horizontal flex layout
- No image shown
- Date badge inline (not overlaying)
- No description text
- Single action button

#### Horizontal Event Card

Wide horizontal layout:

```html
<article class="card-event card-event-horizontal">
    <div class="event-image">
        <img src="event.jpg" alt="Event">
        <!-- Date badge positioned relatively -->
    </div>
    <div class="event-body">
        <!-- Event details -->
    </div>
</article>
```

**Layout**: Image left (200px fixed width), content right

#### Dark Event Card

For dark backgrounds:

```html
<article class="card-event-dark">
    <!-- Same structure as standard card -->
</article>
```

**Styling**:
- Dark semi-transparent background
- Light text colors
- Blue-light accent color for icons/links
- Glassmorphic date badge with backdrop blur

### Event Layouts

#### Event Grid

```html
<div class="event-grid">
    <article class="card-event">...</article>
    <article class="card-event">...</article>
    <article class="card-event">...</article>
</div>
```

**Behavior**: Auto-fill grid with min 320px columns

#### Fixed Column Grids

```html
<!-- 2 columns -->
<div class="event-grid event-grid-2">
    <article class="card-event">...</article>
    <article class="card-event">...</article>
</div>

<!-- 3 columns -->
<div class="event-grid event-grid-3">
    <article class="card-event">...</article>
    <article class="card-event">...</article>
    <article class="card-event">...</article>
</div>
```

#### Event List (Vertical)

```html
<div class="event-list">
    <article class="card-event card-event-compact">...</article>
    <article class="card-event card-event-compact">...</article>
    <article class="card-event card-event-compact">...</article>
</div>
```

**Best with**: Compact event cards

### Upcoming Events Widget

Sidebar/widget display of upcoming events:

```html
<div class="upcoming-events">
    <div class="upcoming-events-header">
        <h3 class="upcoming-events-title">Upcoming Events</h3>
        <a href="#" class="btn btn-link btn-sm">View All</a>
    </div>
    <div class="upcoming-events-body">
        <article class="card-event-compact">...</article>
        <article class="card-event-compact">...</article>
        <article class="card-event-compact">...</article>
    </div>
</div>
```

**Dark Variant**:
```html
<div class="upcoming-events upcoming-events-dark">
    <!-- Content -->
</div>
```

### Category Examples

```html
<!-- Conference -->
<span class="event-category">Conference</span>

<!-- Workshop -->
<span class="event-category">Workshop</span>

<!-- Networking -->
<span class="event-category">Networking</span>

<!-- Webinar -->
<span class="event-category">Webinar</span>

<!-- Meetup -->
<span class="event-category">Meetup</span>
```

**Styling**: Primary color pill badge in top right of image

---

## Accordions

### Overview

Bootstrap 5 accordion component for collapsible content panels with StoneWick theme styling.

### Basic Accordion

```html
<div class="accordion" id="accordionExample">
    <!-- Item 1 -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What services do you offer?
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                We offer comprehensive web development services including custom website design, e-commerce solutions, web applications, and ongoing maintenance and support.
            </div>
        </div>
    </div>
    
    <!-- Item 2 -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How long does a typical project take?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Project timelines vary based on complexity, but most websites take 6-12 weeks from initial consultation to launch. We provide detailed timelines during the planning phase.
            </div>
        </div>
    </div>
    
    <!-- Item 3 -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Do you provide hosting and maintenance?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Yes! We offer reliable hosting solutions and maintenance packages to keep your website secure, updated, and performing optimally. Our support team is always available to help.
            </div>
        </div>
    </div>
</div>
```

### Accordion Features

- **Auto-collapse**: Only one item open at a time (via `data-bs-parent`)
- **Initial State**: Add `.show` to first collapse div to have it open by default
- **Button State**: Use `.collapsed` class on buttons that start closed
- **Icons**: Chevron automatically rotates on open/close

### Flush Accordion (No Borders)

Remove borders and background:

```html
<div class="accordion accordion-flush" id="accordionFlush">
    <div class="accordion-item">
        <!-- Same structure -->
    </div>
</div>
```

### Always Open Accordion

Allow multiple items open simultaneously (remove `data-bs-parent`):

```html
<div class="accordion" id="accordionAlwaysOpen">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelOne">
                Panel 1
            </button>
        </h2>
        <div id="panelOne" class="accordion-collapse collapse show">
            <div class="accordion-body">Content 1</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelTwo">
                Panel 2
            </button>
        </h2>
        <div id="panelTwo" class="accordion-collapse collapse show">
            <div class="accordion-body">Content 2</div>
        </div>
    </div>
</div>
```

**Note**: No `data-bs-parent` attribute allows independent toggling

### Accordion with Icons

Add custom icons to accordion items:

```html
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIcon">
            <i class="bi bi-question-circle me-2"></i>
            Question with Icon
        </button>
    </h2>
    <div id="collapseIcon" class="accordion-collapse collapse">
        <div class="accordion-body">
            Answer content here.
        </div>
    </div>
</div>
```

---

## Form Elements

### Overview

Bootstrap 5 form controls with StoneWick theme styling: inputs, selects, textareas, checkboxes, radios, switches, and more.

### Text Inputs

```html
<div class="mb-3">
    <label for="firstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstName" placeholder="John">
</div>

<div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="john@example.com">
</div>
```

### Textareas

```html
<div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
</div>
```

### Select Dropdowns

```html
<div class="mb-3">
    <label for="subject" class="form-label">Subject</label>
    <select class="form-select" id="subject">
        <option selected>Choose a subject...</option>
        <option value="1">General Inquiry</option>
        <option value="2">Project Quote</option>
        <option value="3">Support</option>
    </select>
</div>
```

### Input Groups

```html
<!-- Icon prefix -->
<div class="input-group mb-2">
    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
    <input type="email" class="form-control" placeholder="Email address">
</div>

<!-- Button suffix -->
<div class="input-group mb-2">
    <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
    <input type="text" class="form-control" placeholder="https://">
    <button class="btn btn-primary" type="button">Go</button>
</div>

<!-- Prefix and suffix text -->
<div class="input-group">
    <span class="input-group-text">$</span>
    <input type="text" class="form-control" placeholder="Amount">
    <span class="input-group-text">.00</span>
</div>
```

### Checkboxes

```html
<!-- Single checkbox -->
<div class="form-check mb-2">
    <input class="form-check-input" type="checkbox" id="newsletter">
    <label class="form-check-label" for="newsletter">
        Subscribe to newsletter
    </label>
</div>

<!-- Multiple checkboxes -->
<div class="form-check">
    <input class="form-check-input" type="checkbox" id="check1" checked>
    <label class="form-check-label" for="check1">HTML</label>
</div>
<div class="form-check">
    <input class="form-check-input" type="checkbox" id="check2" checked>
    <label class="form-check-label" for="check2">CSS</label>
</div>
<div class="form-check">
    <input class="form-check-input" type="checkbox" id="check3">
    <label class="form-check-label" for="check3">JavaScript</label>
</div>
```

### Radio Buttons

```html
<!-- Inline radios -->
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="planRadio" id="plan1" checked>
    <label class="form-check-label" for="plan1">Monthly</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="planRadio" id="plan2">
    <label class="form-check-label" for="plan2">Yearly</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="planRadio" id="plan3">
    <label class="form-check-label" for="plan3">Lifetime</label>
</div>
```

### Switches

Toggle switches for boolean settings:

```html
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch1" checked>
    <label class="form-check-label" for="switch1">Notifications enabled</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch2">
    <label class="form-check-label" for="switch2">Dark mode</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch3" disabled>
    <label class="form-check-label" for="switch3">Disabled switch</label>
</div>
```

### Range Sliders

```html
<!-- Basic range -->
<div class="mb-4">
    <label for="basicRange" class="form-label">Basic Range</label>
    <input type="range" class="form-range" id="basicRange">
</div>

<!-- Range with value display -->
<div class="mb-4">
    <label for="rangeWithValue" class="form-label">
        Range with Value: <span id="rangeValue">50</span>
    </label>
    <input type="range" class="form-range" id="rangeWithValue" min="0" max="100" value="50">
</div>

<!-- Range with steps -->
<div class="mb-4">
    <label for="rangeSteps" class="form-label">Range with Steps</label>
    <input type="range" class="form-range" id="rangeSteps" min="0" max="5" step="1">
</div>

<!-- Disabled range -->
<div class="mb-4">
    <label for="disabledRange" class="form-label">Disabled Range</label>
    <input type="range" class="form-range" id="disabledRange" disabled>
</div>
```

**JavaScript for value display**:
```javascript
const rangeInput = document.getElementById('rangeWithValue');
const rangeValueDisplay = document.getElementById('rangeValue');
rangeInput.addEventListener('input', function() {
    rangeValueDisplay.textContent = this.value;
});
```

### Floating Labels

```html
<!-- Text input -->
<div class="form-floating mb-2">
    <input type="text" class="form-control" id="floatingName" placeholder="Name">
    <label for="floatingName">Your Name</label>
</div>

<!-- Select -->
<div class="form-floating">
    <select class="form-select" id="floatingSelect">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Select an option</label>
</div>
```

### Validation States

```html
<!-- Valid input -->
<input type="text" class="form-control is-valid mb-2" value="Valid input">
<div class="valid-feedback d-block mb-2">Looks good!</div>

<!-- Invalid input -->
<input type="text" class="form-control is-invalid" value="Invalid input">
<div class="invalid-feedback d-block">Please provide a valid value.</div>
```

### Complete Contact Form Example

```html
<form>
    <div class="row g-3">
        <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="John">
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Doe">
        </div>
        <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="john@example.com">
        </div>
        <div class="col-12">
            <label for="subject" class="form-label">Subject</label>
            <select class="form-select" id="subject">
                <option selected>Choose a subject...</option>
                <option value="1">General Inquiry</option>
                <option value="2">Project Quote</option>
                <option value="3">Support</option>
            </select>
        </div>
        <div class="col-12">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="newsletter">
                <label class="form-check-label" for="newsletter">
                    Subscribe to newsletter
                </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
        </div>
    </div>
</form>
```

---

## Alerts & Notifications

### Overview

Bootstrap 5 alerts for displaying messages, notifications, and feedback.

### Alert Variants

```html
<!-- Primary -->
<div class="alert alert-primary" role="alert">
    <i class="bi bi-info-circle me-2"></i>
    <strong>Info:</strong> This is a primary alert with important information.
</div>

<!-- Success -->
<div class="alert alert-success" role="alert">
    <i class="bi bi-check-circle me-2"></i>
    <strong>Success:</strong> Your changes have been saved successfully.
</div>

<!-- Warning -->
<div class="alert alert-warning" role="alert">
    <i class="bi bi-exclamation-triangle me-2"></i>
    <strong>Warning:</strong> Please review the highlighted fields.
</div>

<!-- Danger -->
<div class="alert alert-danger" role="alert">
    <i class="bi bi-x-circle me-2"></i>
    <strong>Error:</strong> Something went wrong. Please try again.
</div>

<!-- Info -->
<div class="alert alert-info" role="alert">
    <i class="bi bi-bell me-2"></i>
    <strong>Notice:</strong> System maintenance scheduled for tonight.
</div>
```

### Dismissible Alerts

```html
<div class="alert alert-info alert-dismissible fade show" role="alert">
    <i class="bi bi-bell me-2"></i>
    <strong>Dismissible:</strong> Click the X to close this alert.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### Alert Icons

Recommended icons for each variant:

| Variant | Icon | Bootstrap Icon Class |
|---------|------|---------------------|
| Primary | Info | `bi-info-circle` |
| Success | Check | `bi-check-circle` |
| Warning | Warning | `bi-exclamation-triangle` |
| Danger | Error | `bi-x-circle` |
| Info | Bell | `bi-bell` |

### Alert Links

Style links within alerts:

```html
<div class="alert alert-primary" role="alert">
    A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

### Alert with Additional Content

```html
<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>You successfully completed the process. Your account is now active and ready to use.</p>
    <hr>
    <p class="mb-0">To get started, check out our <a href="#" class="alert-link">quick start guide</a>.</p>
</div>
```

---

## JavaScript Integration

### Required Libraries

StoneWick interactive components rely on:

1. **Bootstrap 5.3.2 Bundle** (includes Popper.js)
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
   ```

2. **Bootstrap Icons** (for icons)
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
   ```

### Bootstrap Components (No Custom JS)

These work out-of-the-box with Bootstrap 5:
- Standard Modals
- Accordions
- Alerts (dismissible)
- Form validation
- Tabs (used in navigable timeline)

### Custom JavaScript Required

These components need custom implementation:

#### 1. Custom Modal System

```javascript
// Open modal
function openModal(modalId) {
    document.getElementById(modalId).classList.add('is-active');
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('is-active');
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-custom.is-active').forEach(modal => {
            modal.classList.remove('is-active');
        });
    }
});
```

#### 2. Comparison Slider

```javascript
function initComparisonSlider(sliderElement) {
    const handle = sliderElement.querySelector('.comparison-handle');
    const afterImage = sliderElement.querySelector('.comparison-after');
    let isDragging = false;

    function updatePosition(x) {
        const rect = sliderElement.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(100, position));
        
        afterImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
        handle.style.left = `${position}%`;
        handle.dataset.position = position;
    }

    // Mouse events
    handle.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mousemove', (e) => {
        if (isDragging) updatePosition(e.clientX);
    });
    document.addEventListener('mouseup', () => isDragging = false);

    // Touch events
    handle.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            updatePosition(e.touches[0].clientX);
            e.preventDefault();
        }
    });
    document.addEventListener('touchend', () => isDragging = false);
}

// Initialize all comparison sliders
document.querySelectorAll('.comparison-slider').forEach(slider => {
    initComparisonSlider(slider);
});
```

#### 3. Slider/Carousel

```javascript
function initSlider(sliderElement) {
    const track = sliderElement.querySelector('.slider-track');
    const slides = sliderElement.querySelectorAll('.slide');
    const dots = sliderElement.querySelectorAll('.slider-dot');
    const prevBtn = sliderElement.querySelector('.slider-prev');
    const nextBtn = sliderElement.querySelector('.slider-next');
    
    let currentIndex = 0;
    let autoplayInterval;
    
    function showSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === index);
        });
    }
    
    function nextSlide() {
        showSlide((currentIndex + 1) % slides.length);
    }
    
    function prevSlide() {
        showSlide((currentIndex - 1 + slides.length) % slides.length);
    }
    
    // Navigation
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });
    
    // Autoplay (optional)
    function startAutoplay(interval = 5000) {
        autoplayInterval = setInterval(nextSlide, interval);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Pause on hover
    sliderElement.addEventListener('mouseenter', stopAutoplay);
    sliderElement.addEventListener('mouseleave', () => startAutoplay());
    
    // Start autoplay
    startAutoplay();
}

// Initialize all sliders
document.querySelectorAll('.slider-container').forEach(slider => {
    initSlider(slider);
});
```

#### 4. Range Slider Value Display

```javascript
// Show range value in real-time
const rangeInput = document.getElementById('rangeWithValue');
const rangeValueDisplay = document.getElementById('rangeValue');

rangeInput.addEventListener('input', function() {
    rangeValueDisplay.textContent = this.value;
});
```

#### 5. Lightbox Gallery Navigation

```javascript
function initLightbox(lightboxElement) {
    const mainImage = lightboxElement.querySelector('.lightbox-image');
    const thumbnails = lightboxElement.querySelectorAll('.lightbox-thumb');
    const prevBtn = lightboxElement.querySelector('.lightbox-prev');
    const nextBtn = lightboxElement.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const images = Array.from(thumbnails).map(thumb => 
        thumb.querySelector('img').src.replace(/w=120&h=80/, 'w=1400&h=900')
    );
    
    function showImage(index) {
        currentIndex = index;
        mainImage.src = images[index];
        
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('is-active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        showImage((currentIndex - 1 + images.length) % images.length);
    });
    
    nextBtn.addEventListener('click', () => {
        showImage((currentIndex + 1) % images.length);
    });
    
    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener('click', () => showImage(i));
    });
}
```

### Header Scroll Effect

Add shadow to header on scroll:

```javascript
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
```

---

## Best Practices

### Component Selection

1. **Testimonials**
   - Use `.card-testimonial` on light backgrounds
   - Use `.card-testimonial-dark` on dark backgrounds
   - Include platform badges for credibility
   - Show star ratings prominently

2. **Modals**
   - Use Bootstrap modals for simple dialogs
   - Use custom modal system for specialized content (galleries, videos)
   - Always provide close mechanisms (X button, overlay click, ESC key)
   - Disable body scroll when modal is open

3. **Timelines**
   - Use default vertical timeline for processes
   - Consider horizontal timeline for desktop-focused content
   - Use alternating timeline for visual interest
   - Mark completed/active/pending states for clarity
   - Use navigable timeline for interactive step-by-step guides

4. **Event Cards**
   - Use standard cards in grids for featured events
   - Use compact cards for sidebar widgets
   - Include clear date badges
   - Provide "Add to Calendar" functionality

### Accessibility

- Always include `aria-label` on icon-only buttons
- Use semantic HTML (`<ol>` for timelines, `<article>` for cards)
- Ensure sufficient color contrast
- Keyboard navigation support for interactive elements
- Proper heading hierarchy
- Form labels associated with inputs

### Performance

- Lazy load images in galleries and sliders
- Debounce scroll and resize event handlers
- Use CSS transforms for animations (not position properties)
- Minimize DOM queries in JavaScript
- Use event delegation for dynamic content

### Responsive Design

- All components are mobile-first responsive
- Test on various screen sizes
- Consider touch targets (min 44x44px)
- Horizontal timelines revert to vertical on mobile
- Slider controls adapt for mobile

---

## Version History

**v1.1.0** (2026-02-01)
- Added comprehensive interactive components
- Testimonial cards with platform badges
- Custom modal system with 6 variants
- Comparison slider with touch support
- Full timeline system with 15+ variants
- Event cards and layouts
- Complete form elements
- JavaScript integration guidelines

---

## Related Documentation

- [01-cards-badges.md](01-cards-badges.md) - Service cards, feature cards, badges
- [02-heroes-layout.md](02-heroes-layout.md) - Hero sections and layout components
- [03-navigation.md](03-navigation.md) - Navigation components
- [04-media.md](04-media.md) - Video theater, media lists, galleries

---

*StoneWick Theme © 2026 - Interactive Components Documentation*
