# Media Components Documentation

Comprehensive guide to all media components: galleries, video players, media lists, channel headers, blog cards, and event cards.

---

## Table of Contents

1. [Video Theater](#video-theater)
2. [Channel Headers](#channel-headers)
3. [Media Lists](#media-lists)
   - [Episode Player Card](#episode-player-card)
   - [Episode Grid Cards (Compact Horizontal)](#episode-grid-cards-compact-horizontal)
4. [Gallery Components](#gallery-components)
5. [Blog Cards](#blog-cards)
6. [Event Cards](#event-cards)
7. [JavaScript Integration](#javascript-integration)

---

## Video Theater

YouTube-style theater mode video player. Supports both direct video files and iframe embeds (YouTube, Vimeo, etc.).

### Full Width Theater (Default)

Full viewport-width video player with detailed metadata, tags, and action buttons.

```html
<div class="video-theater video-theater-full">
    <div class="video-theater-container">
        <div class="video-theater-player">
            <!-- Option 1: YouTube Embed (No overlay needed) -->
            <iframe 
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            
            <!-- Option 2: Direct Video with Thumbnail Overlay -->
            <!--
            <img src="thumbnail.jpg" alt="Thumbnail" class="video-theater-thumbnail">
            <video id="my-video" poster="thumbnail.jpg">
                <source src="video.mp4" type="video/mp4">
            </video>
            <div class="video-theater-overlay" id="overlay-id">
                <button class="video-theater-play-btn" onclick="playVideo('my-video', 'overlay-id')">
                    <i class="bi bi-play-fill"></i>
                </button>
            </div>
            -->
        </div>
        
        <div class="video-theater-info">
            <h3 class="video-theater-title">Building Modern Web Applications with Bootstrap 5</h3>
            
            <div class="video-theater-meta">
                <div class="video-theater-meta-item">
                    <i class="bi bi-eye"></i>
                    <span>1.2M views</span>
                </div>
                <div class="video-theater-meta-item">
                    <i class="bi bi-calendar3"></i>
                    <span>3 days ago</span>
                </div>
                <div class="video-theater-meta-item">
                    <i class="bi bi-hand-thumbs-up"></i>
                    <span>45K likes</span>
                </div>
            </div>
            
            <p class="video-theater-description">Learn how to build responsive, modern web applications using Bootstrap 5. This comprehensive tutorial covers everything from basic setup to advanced component customization.</p>
            
            <div class="video-theater-tags">
                <a href="#" class="video-theater-tag">Bootstrap</a>
                <a href="#" class="video-theater-tag">Web Development</a>
                <a href="#" class="video-theater-tag">CSS</a>
                <a href="#" class="video-theater-tag">Tutorial</a>
            </div>
            
            <div class="video-theater-actions">
                <button class="video-theater-action-btn">
                    <i class="bi bi-hand-thumbs-up"></i>
                    <span>Like</span>
                </button>
                <button class="video-theater-action-btn">
                    <i class="bi bi-share"></i>
                    <span>Share</span>
                </button>
                <button class="video-theater-action-btn">
                    <i class="bi bi-download"></i>
                    <span>Download</span>
                </button>
                <button class="video-theater-action-btn">
                    <i class="bi bi-three-dots"></i>
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
</div>
```

### Compact Theater Variant

Minimal layout without description, tags, and action buttons.

```html
<div class="video-theater video-theater-compact">
    <div class="video-theater-container">
        <div class="video-theater-player">
            <iframe 
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="YouTube video" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="video-theater-info">
            <h3 class="video-theater-title">Compact Theater Mode</h3>
            <div class="video-theater-meta">
                <span class="video-theater-views">850K views</span>
            </div>
        </div>
    </div>
</div>
```

### Video Theater Variants

| Class | Description |
|-------|-------------|
| `.video-theater` | Base component (required) |
| `.video-theater-full` | Full viewport width (100vw) with complete metadata |
| `.video-theater-compact` | Minimal layout, hides description/tags/actions |
| `.video-theater-light` | Light background variant |

### Video Theater Elements

| Element | Description |
|---------|-------------|
| `.video-theater-player` | Video container (holds iframe or video element) |
| `.video-theater-thumbnail` | Thumbnail image (for direct video only) |
| `.video-theater-overlay` | Click overlay with play button (for direct video only) |
| `.video-theater-play-btn` | Large play button (for direct video only) |
| `.video-theater-info` | Metadata container |
| `.video-theater-title` | Video title |
| `.video-theater-meta` | Metadata row (views, date, likes) |
| `.video-theater-meta-item` | Individual metadata item with icon |
| `.video-theater-description` | Video description |
| `.video-theater-tags` | Tag container |
| `.video-theater-tag` | Individual tag link |
| `.video-theater-actions` | Action buttons row |
| `.video-theater-action-btn` | Individual action button |

### iframe Embed Support

Video theater supports YouTube, Vimeo, and other iframe embeds:
- Use `<iframe>` directly in `.video-theater-player`
- No overlay or play button needed for iframes
- iframe handles playback automatically

---

## Channel Headers

YouTube-style channel cards showcasing YouTube channels or creator profiles.

### Channel Header Compact (Light)

Compact layout for light backgrounds.

```html
<div class="channel-header-compact">
    <div class="channel-avatar">
        <img src="avatar.jpg" alt="Channel Name">
    </div>
    <div class="channel-info">
        <div class="channel-name-row">
            <h4 class="channel-name">TechTutor Pro</h4>
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
```

### Channel Header Compact (Dark)

Compact layout for dark backgrounds.

```html
<div class="channel-header-compact-dark">
    <div class="channel-avatar">
        <img src="avatar.jpg" alt="Channel Name">
    </div>
    <div class="channel-info">
        <div class="channel-name-row">
            <h4 class="channel-name">Night Owl Gaming</h4>
            <span class="channel-badge">YOUTUBE</span>
        </div>
        <div class="channel-stats">
            <div class="channel-stat-item">
                <span class="channel-stat-value">890K</span>
                <span class="channel-stat-label">subscribers</span>
            </div>
            <span class="stat-separator"></span>
            <div class="channel-stat-item">
                <span class="channel-stat-value">1.2K</span>
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
```

### Channel Header Full (With Banner)

Full layout with banner image. Avatar pulls up over banner when `.has-banner` is used.

```html
<div class="channel-header-full has-banner">
    <div class="channel-banner">
        <img src="banner.jpg" alt="Channel Banner">
    </div>
    <div class="channel-content">
        <div class="channel-avatar">
            <img src="avatar.jpg" alt="Channel Name">
        </div>
        <div class="channel-info">
            <div class="channel-name-row">
                <h3 class="channel-name">Digital Creator Studio</h3>
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

### Channel Header Full (Dark, Without Banner)

Full dark layout without banner (omit `.has-banner` modifier).

```html
<div class="channel-header-full-dark">
    <div class="channel-content">
        <div class="channel-avatar">
            <img src="avatar.jpg" alt="Channel Name">
        </div>
        <div class="channel-info">
            <div class="channel-name-row">
                <h3 class="channel-name">Cosmic Adventures</h3>
                <span class="channel-badge">YOUTUBE</span>
            </div>
            <div class="channel-stats">
                <div class="channel-stat-item">
                    <span class="channel-stat-value">5.1M</span>
                    <span class="channel-stat-label">subscribers</span>
                </div>
                <div class="channel-stat-item">
                    <span class="channel-stat-value">2K</span>
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

### Channel Header Variants

| Component | Description | Background |
|-----------|-------------|------------|
| `.channel-header-compact` | Compact layout | Light |
| `.channel-header-compact-dark` | Compact layout | Dark |
| `.channel-header-full` | Full layout | Light |
| `.channel-header-full-dark` | Full layout | Dark |

### Channel Header Modifiers

| Modifier | Description |
|----------|-------------|
| `.has-banner` | Add to full variants to include banner (avatar pulls up over banner) |
| (no modifier) | Full variant without banner (normal avatar positioning) |

---

## Media Lists

List and grid layouts for podcasts, videos, articles, and media content. Supports images and iframe embeds.

### Media List (Horizontal)

List layout with thumbnail, metadata, description, and action buttons.

```html
<div class="media-list">
    <article class="media-item">
        <div class="media-thumb">
            <!-- Option 1: Image with Play Icon -->
            <img src="thumbnail.jpg" alt="Podcast">
            <div class="media-thumb-play"><i class="bi bi-play-circle-fill"></i></div>
            <span class="media-duration">45:23</span>
            
            <!-- Option 2: YouTube Embed -->
            <!--
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen></iframe>
            -->
        </div>
        <div class="media-content">
            <h5 class="media-title"><a href="#">Building a Successful Web Business</a></h5>
            <div class="media-meta">
                <span><i class="bi bi-calendar3"></i> Jan 28, 2026</span>
                <span><i class="bi bi-clock"></i> 45 min</span>
                <span><i class="bi bi-headphones"></i> Podcast</span>
            </div>
            <p class="media-desc">In this episode, we discuss strategies for building and scaling a successful web development business.</p>
            <div class="media-actions">
                <a href="#" class="btn btn-primary btn-sm"><i class="bi bi-play-fill me-1"></i> Listen</a>
                <a href="#" class="btn btn-outline-secondary btn-sm"><i class="bi bi-download me-1"></i> Download</a>
            </div>
        </div>
    </article>
    
    <!-- Featured Item (highlighted) -->
    <article class="media-item featured">
        <div class="media-thumb">
            <img src="thumbnail.jpg" alt="Tutorial">
            <div class="media-thumb-play"><i class="bi bi-play-circle-fill"></i></div>
            <span class="media-duration">1:23:45</span>
        </div>
        <div class="media-content">
            <h5 class="media-title"><a href="#">Complete CSS Grid Masterclass</a></h5>
            <div class="media-meta">
                <span><i class="bi bi-calendar3"></i> Jan 25, 2026</span>
                <span><i class="bi bi-clock"></i> 1h 23min</span>
                <span><i class="bi bi-camera-video"></i> Video</span>
            </div>
            <p class="media-desc">A comprehensive deep-dive into CSS Grid layout, covering everything from basics to advanced patterns.</p>
            <div class="media-actions">
                <a href="#" class="btn btn-primary btn-sm"><i class="bi bi-play-fill me-1"></i> Watch</a>
                <a href="#" class="btn btn-outline-secondary btn-sm"><i class="bi bi-bookmark me-1"></i> Save</a>
            </div>
        </div>
    </article>
</div>
```

### Media List Grid

Grid layout for video/article lists with thumbnails and compact metadata.

```html
<div class="media-list media-list-grid">
    <!-- Image-based Media Item -->
    <article class="media-item">
        <div class="media-thumb">
            <img src="thumbnail.jpg" alt="Design">
            <div class="media-thumb-play"><i class="bi bi-play-circle-fill"></i></div>
            <span class="media-duration">32:10</span>
        </div>
        <div class="media-content">
            <h5 class="media-title"><a href="#">Getting Started with Web Development</a></h5>
            <div class="media-meta">
                <span><i class="bi bi-clock"></i> 32 min</span>
                <span><i class="bi bi-eye"></i> 125K views</span>
            </div>
            <p class="media-desc">Essential web development principles every developer should know.</p>
        </div>
    </article>

    <!-- YouTube Embed Media Item -->
    <article class="media-item">
        <div class="media-thumb">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="media-content">
            <h5 class="media-title"><a href="#">Embedded YouTube Video</a></h5>
            <div class="media-meta">
                <span><i class="bi bi-clock"></i> 3:32</span>
                <span><i class="bi bi-eye"></i> 1M views</span>
            </div>
            <p class="media-desc">Media items support iframe embeds for YouTube and other video platforms.</p>
        </div>
    </article>

    <!-- More items... -->
</div>
```

### Media List Elements

| Element | Description |
|---------|-------------|
| `.media-list` | Container for list layout |
| `.media-list-grid` | Grid layout modifier |
| `.media-item` | Individual media item |
| `.media-item.featured` | Highlighted/featured item |
| `.media-thumb` | Thumbnail container (holds image or iframe) |
| `.media-thumb-play` | Play icon overlay (for images only) |
| `.media-duration` | Duration badge |
| `.media-content` | Content container |
| `.media-title` | Title heading |
| `.media-meta` | Metadata row |
| `.media-desc` | Description text |
| `.media-actions` | Action buttons container |

### iframe Embed Support

Both list and grid layouts support iframe embeds:
- Replace `<img>` in `.media-thumb` with `<iframe>`
- No play icon or duration needed for iframes
- iframe handles video playback automatically

### Episode Player Card

Featured episode player with thumbnail, metadata, and HTML5 audio controls. Perfect for podcast/sermon pages.

```html
<div class="card border shadow-sm">
    <div class="card-body">
        <div class="d-flex align-items-start gap-3 mb-3">
            <img src="episode-thumbnail.jpg" 
                 class="rounded" 
                 alt="Episode 147" 
                 style="width: 80px; height: 80px; object-fit: cover;">
            <div class="flex-grow-1">
                <h5 class="mb-1">Episode 147: The Art of Biblical Meditation</h5>
                <p class="text-muted small mb-0">Pastor Marcus Chen • Feb 13, 2026 • 38 min</p>
            </div>
        </div>
        <audio controls class="w-100" preload="metadata">
            <source src="episode-audio.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
</div>
```

**Usage:**
- Use for featured episode playback on podcast/sermon pages
- Thumbnail should be 80x80px minimum
- HTML5 audio controls are browser-native and fully functional
- Works with MP3, WAV, OGG audio formats

### Episode Grid Cards (Compact Horizontal)

Compact horizontal media cards in a Bootstrap grid. Each `.media-item` shows a 180×120 thumbnail beside title and metadata. Uses `.row.g-4` with `.col-lg-4.col-md-6` columns and `.media-item.h-100` cards.

```html
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <a href="#" class="text-decoration-none">
            <article class="media-item h-100">
                <div class="media-thumb">
                    <img src="episode-thumbnail.jpg" alt="Episode 147">
                    <span class="media-duration">38 min</span>
                </div>
                <div class="media-content">
                    <div class="d-flex align-items-start justify-content-between gap-2 mb-1">
                        <span class="badge bg-primary">#147</span>
                        <span class="badge bg-success">New</span>
                    </div>
                    <h5 class="media-title">The Art of Biblical Meditation</h5>
                    <div class="media-meta">
                        <span><i class="bi bi-calendar3"></i> Feb 13, 2026</span>
                    </div>
                </div>
            </article>
        </a>
    </div>
    
    <!-- Repeat col for more episodes -->
</div>
```

**Usage:**
- Bootstrap grid provides responsive 3-col (lg) / 2-col (md) / 1-col (sm) layout
- Each card is a compact horizontal flex row: 180×120 thumbnail left, content right
- Entire card wrapped in `<a>` — no nested links inside
- Duration badge via `.media-duration` overlays bottom-right of thumbnail
- Badge numbers indicate episode number
- Optional second badge for "New", "Featured", etc.
- Built-in hover: lift + shadow + primary border via `.media-item`
- `.h-100` on `.media-item` ensures equal card heights in each row
- No play button overlay (cards navigate to episode detail page)

**CSS Classes (all base theme):**
- `.media-item` - Flex card with white bg, border, rounded corners, hover lift + shadow
- `.media-thumb` - Container for thumbnail (180×120 default) + duration badge
- `.media-duration` - Absolute-positioned duration badge
- `.media-content` - Content area with padding
- `.media-title` - Title with `font-weight: 700`
- `.media-meta` - Small muted metadata row

---

### Video Items (Up Next Sidebar)

Compact video list items for "Up Next" sidebars on video watch pages. 16:9 thumbnail (120x68px) with title, channel info, and view stats. Includes subtle hover lift effect.

```html
<div class="d-flex flex-column gap-3">
    <!-- Video Item -->
    <a href="#" class="text-decoration-none">
        <div class="video-item d-flex gap-2 p-2 rounded-3 bg-dark bg-opacity-25 hover-lift">
            <div class="video-thumb position-relative flex-shrink-0">
                <img src="thumbnail.jpg" 
                     alt="Video Title"
                     class="w-100 h-100 object-fit-cover rounded-2">
                <div class="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-1 m-1 rounded-1" 
                     style="font-size: 0.65rem; font-weight: 600;">38:12</div>
            </div>
            <div class="flex-grow-1 min-w-0">
                <h6 class="text-white mb-1 fw-semibold" style="font-size: 0.875rem; line-height: 1.3;">
                    The Art of Biblical Meditation
                </h6>
                <p class="text-white-50 mb-0" style="font-size: 0.75rem;">
                    <span class="d-block">Channel Name</span>
                    <span>8.2K views • 3 days ago</span>
                </p>
            </div>
        </div>
    </a>
    
    <!-- Repeat for more videos -->
</div>
```

**Usage:**
- Designed for dark backgrounds (video watch pages)
- Thumbnail is 120x68px (16:9 aspect ratio) using `.video-thumb` class
- Video duration badge overlays bottom-right of thumbnail
- Wrap entire item in `<a>` tag for navigation
- Uses `.video-item` class for subtle hover effect (2px lift, background lightening)
- Channel name and stats use small typography for compact display
- Vertical stacking with `gap-3` spacing between items
- Typical use case: 4-5 items in a sidebar column
- Inline font sizing for this specific UI pattern is acceptable

**CSS Classes:**
- `.video-item` - Transition and hover effects (slight lift, background change)
- `.video-thumb` - Fixed 120x68px sizing (16:9 aspect ratio)

---

## Gallery Components

Responsive image galleries with hover captions and multiple layout options.

### Gallery Grid (Light)

Responsive grid layout with hover-activated captions.

```html
<div class="gallery-grid">
    <button class="gallery-item">
        <figure class="gallery-figure">
            <img src="image.jpg" alt="Gallery 1" class="gallery-image">
            <figcaption class="gallery-caption">
                <span class="caption-text">Project Alpha</span>
                <span class="caption-credit">Web Application</span>
            </figcaption>
        </figure>
    </button>
    
    <button class="gallery-item">
        <figure class="gallery-figure">
            <img src="image.jpg" alt="Gallery 2" class="gallery-image">
            <figcaption class="gallery-caption">
                <span class="caption-text">Project Beta</span>
                <span class="caption-credit">Mobile App</span>
            </figcaption>
        </figure>
    </button>
    
    <!-- More items... -->
</div>
```

### Gallery List (Horizontal Scroll)

Scrollable horizontal gallery strip.

```html
<div class="gallery-list">
    <button class="gallery-item">
        <figure class="gallery-figure">
            <img src="image.jpg" alt="Scroll 1" class="gallery-image">
            <figcaption class="gallery-caption">
                <span class="caption-text">Team Planning</span>
            </figcaption>
        </figure>
    </button>
    
    <button class="gallery-item">
        <figure class="gallery-figure">
            <img src="image.jpg" alt="Scroll 2" class="gallery-image">
            <figcaption class="gallery-caption">
                <span class="caption-text">Development</span>
            </figcaption>
        </figure>
    </button>
    
    <!-- More items... -->
</div>
```

### Gallery Components

| Component | Description |
|-----------|-------------|
| `.gallery-grid` | Responsive grid layout |
| `.gallery-list` | Horizontal scrolling list |
| `.gallery-item` | Individual gallery item (button element) |
| `.gallery-figure` | Figure container |
| `.gallery-image` | Image element |
| `.gallery-caption` | Caption overlay (shown on hover) |
| `.caption-text` | Main caption text |
| `.caption-credit` | Secondary credit/subtitle text |

### Usage Patterns

- Gallery items use `<button>` for accessibility (can be clicked to open lightbox)
- Semantic `<figure>` and `<figcaption>` elements
- Captions appear on hover
- Grid layout auto-adjusts columns based on container width
- List layout allows horizontal scrolling on overflow

---

## Blog Cards

Cards for blog posts and articles with multiple layout variants.

### Blog Card (Standard)

Vertical card with image, metadata, content, and author info.

```html
<div class="blog-card">
    <a href="#" class="blog-card-image">
        <img src="post-image.jpg" alt="Post Title">
    </a>
    <div class="blog-card-body">
        <div class="blog-card-meta">
            <span class="blog-card-category">Design</span>
            <span class="blog-card-date">Jan 28, 2026</span>
        </div>
        <h3 class="blog-card-title">
            <a href="#">The Future of Web Design: Trends to Watch in 2026</a>
        </h3>
        <p class="blog-card-excerpt">
            Explore the emerging design trends that will shape the web in 2026, from AI-assisted layouts to immersive 3D experiences.
        </p>
        <div class="blog-card-footer">
            <div class="blog-card-author">
                <img src="avatar.jpg" alt="Author" class="blog-card-author-avatar">
                <div>
                    <div class="blog-card-author-name">Sarah Johnson</div>
                    <div class="blog-card-author-role">Design Lead</div>
                </div>
            </div>
            <div class="blog-card-reading-time">
                <i class="bi bi-clock"></i>
                <span>5 min read</span>
            </div>
        </div>
    </div>
</div>
```

### Blog Card Featured

Large horizontal card for featured posts.

```html
<div class="blog-card-featured">
    <div class="row g-0">
        <div class="col-lg-6">
            <a href="#" class="blog-card-featured-image">
                <img src="featured-image.jpg" alt="Featured Post">
                <span class="blog-card-featured-badge">Featured</span>
            </a>
        </div>
        <div class="col-lg-6">
            <div class="blog-card-featured-body">
                <div class="blog-card-meta">
                    <span class="blog-card-category">Technology</span>
                    <span class="blog-card-date">Jan 25, 2026</span>
                </div>
                <h2 class="blog-card-featured-title">
                    <a href="#">Building Scalable Web Applications with Modern Architecture</a>
                </h2>
                <p class="blog-card-featured-excerpt">
                    Learn how to architect web applications that can grow with your business, using microservices, serverless functions, and cloud-native approaches.
                </p>
                <div class="blog-card-footer">
                    <div class="blog-card-author">
                        <img src="avatar.jpg" alt="Author" class="blog-card-author-avatar">
                        <div>
                            <div class="blog-card-author-name">Michael Chen</div>
                            <div class="blog-card-author-role">Tech Architect</div>
                        </div>
                    </div>
                    <div class="blog-card-reading-time">
                        <i class="bi bi-clock"></i>
                        <span>12 min read</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Blog Card Minimal

Compact card without image, perfect for sidebars or dense layouts.

```html
<div class="blog-card-minimal">
    <span class="blog-card-category-minimal">Development</span>
    <h4 class="blog-card-title-minimal">
        <a href="#">Quick Tips for Better CSS Performance</a>
    </h4>
    <p class="blog-card-excerpt-minimal">
        Simple techniques to optimize your stylesheets and reduce render times.
    </p>
    <div class="blog-card-meta-minimal">
        <span>Jan 20, 2026</span>
        <span>3 min read</span>
    </div>
</div>
```

### Blog List Item

Horizontal list layout for blog archives or search results.

```html
<div class="blog-list">
    <article class="blog-list-item">
        <a href="#" class="blog-list-image">
            <img src="post-thumbnail.jpg" alt="Post Title">
        </a>
        <div class="blog-list-content">
            <div class="blog-card-meta">
                <span class="blog-card-category">Tutorial</span>
                <span class="blog-card-date">Jan 15, 2026</span>
            </div>
            <h3 class="blog-list-title">
                <a href="#">Complete Guide to CSS Grid Layout</a>
            </h3>
            <p class="blog-list-excerpt">
                Master CSS Grid with this comprehensive guide covering everything from basic concepts to advanced layout techniques.
            </p>
            <div class="blog-card-footer">
                <div class="blog-card-author">
                    <img src="avatar.jpg" alt="Author" class="blog-card-author-avatar">
                    <div>
                        <div class="blog-card-author-name">Emma Rodriguez</div>
                        <div class="blog-card-author-role">Frontend Dev</div>
                    </div>
                </div>
                <div class="blog-card-reading-time">
                    <i class="bi bi-clock"></i>
                    <span>8 min read</span>
                </div>
            </div>
        </div>
    </article>
    
    <!-- More list items... -->
</div>
```

### Blog List Compact

Ultra-compact list for recent posts widgets or sidebars.

```html
<div class="blog-list-compact">
    <article class="blog-list-compact-item">
        <div class="blog-list-compact-date">Jan 28</div>
        <div class="blog-list-compact-content">
            <h5 class="blog-list-compact-title">
                <a href="#">New Features in Bootstrap 5.3</a>
            </h5>
            <p class="blog-list-compact-excerpt">
                Overview of the latest updates and improvements.
            </p>
        </div>
    </article>
    
    <article class="blog-list-compact-item">
        <div class="blog-list-compact-date">Jan 25</div>
        <div class="blog-list-compact-content">
            <h5 class="blog-list-compact-title">
                <a href="#">Responsive Images Best Practices</a>
            </h5>
            <p class="blog-list-compact-excerpt">
                Optimize images for all screen sizes.
            </p>
        </div>
    </article>
    
    <!-- More compact items... -->
</div>
```

### Blog Card Variants

| Component | Description |
|-----------|-------------|
| `.blog-card` | Standard vertical card with image |
| `.blog-card-featured` | Large horizontal featured post card |
| `.blog-card-minimal` | Compact card without image |
| `.blog-list` | Container for horizontal list items |
| `.blog-list-item` | Horizontal list item with thumbnail |
| `.blog-list-compact` | Container for ultra-compact list |
| `.blog-list-compact-item` | Ultra-compact list item |

---

## Event Cards

Event listing cards with date badges, location info, and RSVP actions.

### Event Card (Standard)

Vertical card for light backgrounds with date badge overlay.

```html
<div class="card-event">
    <div class="event-image">
        <img src="event-image.jpg" alt="Event Name">
        <div class="event-date-badge">
            <div class="event-date-day">15</div>
            <div class="event-date-month">FEB</div>
        </div>
        <span class="event-category">Workshop</span>
    </div>
    <div class="event-body">
        <h4 class="event-title">
            <a href="#">Modern Web Development Workshop</a>
        </h4>
        <p class="event-description">
            Join us for an intensive hands-on workshop covering the latest web development technologies and best practices.
        </p>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>2:00 PM - 5:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Tech Hub, Downtown</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-people"></i>
                <span>45 attending</span>
            </div>
        </div>
        <div class="event-actions">
            <a href="#" class="btn btn-primary">RSVP Now</a>
            <button class="add-to-calendar">
                <i class="bi bi-calendar-plus"></i>
                Add to Calendar
            </button>
        </div>
    </div>
</div>
```

### Event Card Dark

Event card for dark backgrounds with glassmorphic styling.

```html
<div class="card-event-dark">
    <div class="event-image">
        <img src="event-image.jpg" alt="Event Name">
        <div class="event-date-badge">
            <div class="event-date-day">22</div>
            <div class="event-date-month">FEB</div>
        </div>
        <span class="event-category">Conference</span>
    </div>
    <div class="event-body">
        <h4 class="event-title">
            <a href="#">Annual Developer Conference 2026</a>
        </h4>
        <p class="event-description">
            Three days of talks, workshops, and networking with industry leaders and innovators.
        </p>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Convention Center</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-people"></i>
                <span>500+ attending</span>
            </div>
        </div>
        <div class="event-actions">
            <a href="#" class="btn btn-primary">Register</a>
            <button class="add-to-calendar">
                <i class="bi bi-calendar-plus"></i>
                Add to Calendar
            </button>
        </div>
    </div>
</div>
```

### Event Card Horizontal

Horizontal layout variant.

```html
<div class="card-event card-event-horizontal">
    <div class="event-image">
        <img src="event-image.jpg" alt="Event Name">
        <div class="event-date-badge">
            <div class="event-date-day">28</div>
            <div class="event-date-month">FEB</div>
        </div>
    </div>
    <div class="event-body">
        <h4 class="event-title">
            <a href="#">Web Design Meetup</a>
        </h4>
        <p class="event-description">
            Monthly gathering of local web designers to share ideas and network.
        </p>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>6:00 PM - 9:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Coffee House</span>
            </div>
        </div>
        <div class="event-actions">
            <a href="#" class="btn btn-primary btn-sm">Join</a>
        </div>
    </div>
</div>
```

### Event Card Compact

Ultra-compact layout for event listings and sidebars.

```html
<div class="card-event card-event-compact">
    <div class="event-date-badge">
        <div class="event-date-day">05</div>
        <div class="event-date-month">MAR</div>
    </div>
    <div class="event-body">
        <h5 class="event-title">
            <a href="#">JavaScript Fundamentals</a>
        </h5>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>7:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Online</span>
            </div>
        </div>
    </div>
    <div class="event-actions">
        <a href="#" class="btn btn-primary btn-sm">RSVP</a>
    </div>
</div>
```

### Event Card Featured

Highlighted/featured event with border accent.

```html
<div class="card-event featured">
    <div class="event-image">
        <img src="featured-event.jpg" alt="Featured Event">
        <div class="event-date-badge">
            <div class="event-date-day">10</div>
            <div class="event-date-month">MAR</div>
        </div>
        <span class="event-category">Featured</span>
    </div>
    <div class="event-body">
        <h4 class="event-title">
            <a href="#">Keynote: The Future of Web Development</a>
        </h4>
        <p class="event-description">
            Special keynote presentation by industry leader discussing emerging technologies and trends.
        </p>
        <div class="event-meta">
            <div class="event-meta-item">
                <i class="bi bi-clock"></i>
                <span>1:00 PM - 3:00 PM</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-geo-alt"></i>
                <span>Main Auditorium</span>
            </div>
            <div class="event-meta-item">
                <i class="bi bi-people"></i>
                <span>1K+ attending</span>
            </div>
        </div>
        <div class="event-actions">
            <a href="#" class="btn btn-primary">Reserve Seat</a>
            <button class="add-to-calendar">
                <i class="bi bi-calendar-plus"></i>
                Add to Calendar
            </button>
        </div>
    </div>
</div>
```

### Upcoming Events Widget

Sidebar widget with compact event list.

```html
<div class="upcoming-events">
    <div class="upcoming-events-header">
        <h3 class="upcoming-events-title">Upcoming Events</h3>
        <a href="#" class="btn btn-sm btn-link">View All</a>
    </div>
    <div class="upcoming-events-body">
        <div class="card-event card-event-compact">
            <div class="event-date-badge">
                <div class="event-date-day">12</div>
                <div class="event-date-month">FEB</div>
            </div>
            <div class="event-body">
                <h5 class="event-title">
                    <a href="#">CSS Workshop</a>
                </h5>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i class="bi bi-clock"></i>
                        <span>3:00 PM</span>
                    </div>
                </div>
            </div>
            <div class="event-actions">
                <a href="#" class="btn btn-primary btn-sm">Join</a>
            </div>
        </div>
        
        <!-- More compact events... -->
    </div>
</div>
```

### Upcoming Events Widget (Dark)

Dark variant for dark backgrounds.

```html
<div class="upcoming-events upcoming-events-dark">
    <div class="upcoming-events-header">
        <h3 class="upcoming-events-title">Upcoming Events</h3>
        <a href="#" class="btn btn-sm btn-link text-white">View All</a>
    </div>
    <div class="upcoming-events-body">
        <!-- Compact event items... -->
    </div>
</div>
```

### Event Grid Layouts

```html
<!-- Auto-fill Grid -->
<div class="event-grid">
    <div class="card-event">...</div>
    <div class="card-event">...</div>
    <div class="card-event">...</div>
</div>

<!-- 2-Column Grid -->
<div class="event-grid event-grid-2">
    <div class="card-event">...</div>
    <div class="card-event">...</div>
</div>

<!-- 3-Column Grid -->
<div class="event-grid event-grid-3">
    <div class="card-event">...</div>
    <div class="card-event">...</div>
    <div class="card-event">...</div>
</div>
```

### Event List (Vertical)

```html
<div class="event-list">
    <div class="card-event">...</div>
    <div class="card-event">...</div>
    <div class="card-event">...</div>
</div>
```

### Event Card Variants

| Component | Description | Background |
|-----------|-------------|------------|
| `.card-event` | Standard vertical card | Light |
| `.card-event-dark` | Standard vertical card | Dark |
| `.card-event-horizontal` | Horizontal layout | Light/Dark |
| `.card-event-compact` | Ultra-compact layout | Light/Dark |
| `.card-event.featured` | Featured/highlighted card | Light |
| `.upcoming-events` | Widget with compact list | Light |
| `.upcoming-events-dark` | Widget with compact list | Dark |

### Event Layout Classes

| Class | Description |
|-------|-------------|
| `.event-grid` | Auto-fill responsive grid |
| `.event-grid-2` | 2-column grid |
| `.event-grid-3` | 3-column grid |
| `.event-list` | Vertical list layout |

---

## JavaScript Integration

### Video Theater JavaScript

Initialize video theater components with JavaScript for enhanced playback control.

#### ES6 Module Import

```javascript
import { VideoTheater } from '@stonewick/theme';

// Initialize single instance
const theaterElement = document.querySelector('.video-theater');
const theater = new VideoTheater(theaterElement);

// Initialize all instances
VideoTheater.initAll('.video-theater');
```

#### Simple Playback Function

For direct video elements (not iframes):

```javascript
function playVideo(videoId, overlayId) {
    const video = document.getElementById(videoId);
    const overlay = document.getElementById(overlayId);
    
    if (video && overlay) {
        video.play();
        overlay.classList.add('is-hidden');
        
        video.addEventListener('ended', function() {
            overlay.classList.remove('is-hidden');
        });
    }
}
```

#### VideoTheater Class API

```javascript
// Create instance
const theater = new VideoTheater(element, {
    autoplay: false,  // Auto-play video on load
    muted: false,     // Mute audio
    loop: false,      // Loop video
    preload: 'metadata' // Preload setting
});

// Methods
theater.play();     // Play video
theater.pause();    // Pause video
theater.toggle();   // Toggle play/pause
theater.destroy();  // Clean up event listeners

// Events
element.addEventListener('sw:video:play', () => {
    console.log('Video started playing');
});

element.addEventListener('sw:video:pause', () => {
    console.log('Video paused');
});

element.addEventListener('sw:video:end', () => {
    console.log('Video ended');
});
```

#### Feature Detection

The VideoTheater class automatically detects iframe embeds:

```javascript
// Automatically sets 'is-iframe' class if iframe detected
// No play button functionality needed for iframes
```

#### Data Attributes

Configure via HTML data attributes:

```html
<div class="video-theater" 
     data-sw-autoplay="true" 
     data-sw-muted="true" 
     data-sw-loop="false">
    <!-- video content -->
</div>
```

### Gallery Lightbox Integration

Gallery items are designed to work with lightbox libraries:

```javascript
// Example: Using with a lightbox library
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('.gallery-image');
        // Open lightbox with img.src
        openLightbox(img.src);
    });
});
```

---

## Usage Guidelines

### Video Theater
- Use `.video-theater-full` for main content videos
- Use `.video-theater-compact` for embedded videos in articles
- iframe embeds automatically handle playback (no overlay needed)
- Direct video files require overlay and play button

### Channel Headers
- Use compact variants in sidebars or card layouts
- Use full variants for dedicated channel pages
- `.has-banner` modifier on full variants positions avatar over banner
- Omit `.has-banner` for normal avatar positioning

### Media Lists
- Use horizontal list (`.media-list`) for featured content
- Use grid (`.media-list-grid`) for video archives
- Add `.featured` to highlight important items
- Support both images and iframe embeds in `.media-thumb`

### Galleries
- `.gallery-grid` for portfolio/project galleries
- `.gallery-list` for horizontal scrolling strips
- Use semantic `<button>` elements for accessibility
- Captions appear on hover

### Blog Cards
- `.blog-card` for standard blog grids
- `.blog-card-featured` for hero/featured posts
- `.blog-card-minimal` for sidebars
- `.blog-list-item` for archives/search results
- `.blog-list-compact` for recent posts widgets

### Event Cards
- `.card-event` for standard event listings
- `.card-event-dark` for dark backgrounds
- `.card-event-horizontal` for list views
- `.card-event-compact` for dense layouts/widgets
- `.featured` modifier for highlighted events
- Use `.event-grid` and `.event-list` for layouts

---

## Browser Support

All media components support modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Video theater iframe embeds require browser support for iframe elements.

---

## Accessibility

- Gallery items use `<button>` elements for keyboard navigation
- Semantic HTML5 elements (`<figure>`, `<figcaption>`, `<article>`)
- ARIA labels on video controls
- Proper heading hierarchy
- Focus states on interactive elements
- Alt text required on all images

---

## Performance Tips

1. **Lazy load images**: Use `loading="lazy"` on gallery images
2. **Optimize thumbnails**: Use appropriately sized thumbnails for media lists
3. **Defer iframe embeds**: Consider loading iframes on user interaction
4. **Preload critical videos**: Use `preload="metadata"` for direct videos
5. **Compress images**: Optimize gallery images for web delivery

---

## Related Components

- [Cards & Badges](01-cards-badges.md) - Card components and badge styles
- [Heroes & Layout](02-heroes-layout.md) - Hero sections and page layouts
- [Navigation](03-navigation.md) - Navigation components
- [Interactive](ks-interactive.html) - Interactive components like modals and sliders
