# Navigation Design System

## Overview

The Navigation Design System provides comprehensive navigation solutions including:

- **Navbar Component**: Desktop dropdowns, mobile panels, theme variants
- **Tab Navigation**: Content organization, state management, accessibility
- **Pagination System**: Content navigation, load more patterns, infinite scroll
- **Responsive Patterns**: Adaptive layouts across all device sizes
- **Accessibility**: Full keyboard navigation and screen reader support

All navigation systems support complex structures with nested menus, theme variants, and comprehensive accessibility features.

## Tab Navigation System

### Basic Tab Structure
```html
<div class="nav-tabs-container">
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
        Home
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
        Profile
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
        Contact
      </button>
    </li>
  </ul>

  <div class="tab-content">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <!-- Home content -->
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <!-- Profile content -->
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <!-- Contact content -->
    </div>
  </div>
</div>
```

### Tab Variants

#### Pills Style
```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#overview">Overview</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#details">Details</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#reviews">Reviews</a>
  </li>
</ul>
```

#### Underline Style
```html
<ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" href="#tab1">Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#tab2">Tab 2</a>
  </li>
</ul>
```

#### Vertical Tabs
```html
<div class="d-flex">
  <div class="nav flex-column nav-pills me-3" role="tablist">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-tab1">Tab 1</button>
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#v-tab2">Tab 2</button>
  </div>
  <div class="tab-content">
    <div class="tab-pane fade show active" id="v-tab1">Content 1</div>
    <div class="tab-pane fade" id="v-tab2">Content 2</div>
  </div>
</div>
```

### Tab States and Interactions

#### Active State
```css
.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  font-weight: 600;
}
```

#### Hover State
```css
.nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
  background-color: #f8f9fa;
}
```

#### Focus State
```css
.nav-tabs .nav-link:focus {
  outline: 2px solid #0d6efd;
  outline-offset: -2px;
}
```

### Tab Content Transitions
```css
.tab-pane {
  transition: opacity 0.15s linear;
}

.tab-pane.fade {
  opacity: 0;
}

.tab-pane.fade.show {
  opacity: 1;
}
```

### Tab Accessibility Features

#### ARIA Attributes
- `role="tablist"` for the tab container
- `role="tab"` for each tab button
- `role="tabpanel"` for each content panel
- `aria-selected="true/false"` for tab states
- `aria-controls` linking tabs to panels
- `aria-labelledby` linking panels to tabs

#### Keyboard Navigation
- **Tab**: Move between tabs
- **Arrow Keys**: Navigate within tab list
- **Enter/Space**: Activate tab
- **Home/End**: Jump to first/last tab

### Tab Integration Patterns

#### Tabs with Icons
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#dashboard">
      <i class="bi bi-house-door me-2"></i>Dashboard
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#analytics">
      <i class="bi bi-graph-up me-2"></i>Analytics
    </a>
  </li>
</ul>
```

#### Tabs with Badges
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#messages">
      Messages <span class="badge bg-primary ms-2">3</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#notifications">
      Notifications <span class="badge bg-danger ms-2">12</span>
    </a>
  </li>
</ul>
```

#### Responsive Tab Behavior
```html
<!-- Mobile: Convert to dropdown -->
<div class="d-lg-none">
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button">
      Select Section
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#tab1">Tab 1</a></li>
      <li><a class="dropdown-item" href="#tab2">Tab 2</a></li>
    </ul>
  </div>
</div>

<!-- Desktop: Show tabs -->
<div class="d-none d-lg-block">
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link active" href="#tab1">Tab 1</a></li>
    <li class="nav-item"><a class="nav-link" href="#tab2">Tab 2</a></li>
  </ul>
</div>
```

## Pagination System

### Basic Pagination Structure
```html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

### Pagination Variants

#### Simple Previous/Next
```html
<nav aria-label="Page navigation">
  <ul class="pagination pagination-sm">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&larr;</span> Previous
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        Next <span aria-hidden="true">&rarr;</span>
      </a>
    </li>
  </ul>
</nav>
```

#### Large Pagination
```html
<nav aria-label="Page navigation">
  <ul class="pagination pagination-lg">
    <li class="page-item">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item active">
      <span class="page-link">1</span>
    </li>
    <li class="page-item">
      <a class="page-link" href="?page=2">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="?page=3">3</a>
    </li>
    <li class="page-item">
      <span class="page-link">...</span>
    </li>
    <li class="page-item">
      <a class="page-link" href="?page=10">10</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="?page=2">Next</a>
    </li>
  </ul>
</nav>
```

#### Centered Pagination
```html
<div class="d-flex justify-content-center">
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="?page=1">1</a>
      </li>
      <li class="page-item active">
        <span class="page-link">2</span>
      </li>
      <li class="page-item">
        <a class="page-link" href="?page=3">3</a>
      </li>
    </ul>
  </nav>
</div>
```

### Pagination States

#### Active State
```css
.pagination .page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
  z-index: 3;
}
```

#### Disabled State
```css
.pagination .page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}
```

#### Hover State
```css
.pagination .page-link:hover {
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #adb5bd;
}
```

#### Focus State
```css
.pagination .page-link:focus {
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  outline: none;
}
```

### Load More Pattern
```html
<div class="load-more-container">
  <div class="content-grid">
    <!-- Content items -->
  </div>

  <div class="text-center mt-4">
    <button class="btn btn-primary btn-lg" id="load-more-btn">
      <span class="spinner-border spinner-border-sm d-none" role="status"></span>
      Load More Articles
    </button>
  </div>

  <div class="text-center mt-3 d-none" id="loading-indicator">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</div>
```

### Infinite Scroll Pattern
```html
<div class="infinite-scroll-container">
  <div class="content-grid" id="content-container">
    <!-- Content items -->
  </div>

  <div class="text-center mt-4 d-none" id="loading-more">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading more content...</span>
    </div>
    <p class="mt-2 text-muted">Loading more...</p>
  </div>

  <div class="text-center mt-4 d-none" id="no-more-content">
    <p class="text-muted">No more content to load</p>
  </div>
</div>
```

### Pagination Accessibility Features

#### ARIA Attributes
- `aria-label="Page navigation"` for the nav element
- `aria-label="Previous"` and `aria-label="Next"` for navigation buttons
- `aria-current="page"` for the current page link
- `aria-disabled="true"` for disabled navigation

#### Keyboard Navigation
- **Tab**: Navigate through pagination links
- **Enter/Space**: Activate pagination links
- **Arrow Keys**: Navigate within pagination (optional enhancement)

#### Screen Reader Support
- Semantic navigation structure
- Clear labeling of current page
- Announcement of page changes
- Progress indication for loading states

### Pagination Integration Patterns

#### With Search Results
```html
<div class="search-results">
  <div class="search-header">
    <p class="text-muted">Showing 1-10 of 247 results for "design systems"</p>
  </div>

  <div class="results-list">
    <!-- Search results -->
  </div>

  <nav aria-label="Search results pagination">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <span class="page-link">Previous</span>
      </li>
      <li class="page-item active">
        <span class="page-link">1</span>
      </li>
      <li class="page-item">
        <a class="page-link" href="?q=design+systems&page=2">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="?q=design+systems&page=3">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="?q=design+systems&page=2">Next</a>
      </li>
    </ul>
  </nav>
</div>
```

#### With Sorting Controls
```html
<div class="content-controls">
  <div class="row align-items-center">
    <div class="col-md-6">
      <div class="sort-controls">
        <label for="sort-select" class="form-label">Sort by:</label>
        <select class="form-select" id="sort-select">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>
    <div class="col-md-6">
      <nav aria-label="Content pagination">
        <ul class="pagination justify-content-end">
          <!-- Pagination links -->
        </ul>
      </nav>
    </div>
  </div>
</div>
```

#### With Filter Controls
```html
<div class="filtered-content">
  <div class="filters-sidebar">
    <!-- Filter controls -->
  </div>

  <div class="content-main">
    <div class="active-filters">
      <span class="badge bg-primary">Category: Design</span>
      <span class="badge bg-primary">Tag: UI/UX</span>
      <button class="btn btn-sm btn-outline-secondary ms-2">Clear All</button>
    </div>

    <div class="content-grid">
      <!-- Filtered content -->
    </div>

    <nav aria-label="Filtered content pagination">
      <ul class="pagination">
        <!-- Pagination links -->
      </ul>
    </nav>
  </div>
</div>
```

### Pagination Performance Patterns

#### Progressive Loading States
```html
<div class="pagination-loading">
  <!-- Skeleton loading -->
  <div class="skeleton-pagination">
    <div class="skeleton-item"></div>
    <div class="skeleton-item active"></div>
    <div class="skeleton-item"></div>
    <div class="skeleton-item"></div>
    <div class="skeleton-item"></div>
  </div>
</div>
```

#### URL State Management
```javascript
// URL-based pagination
function updatePagination(currentPage, totalPages) {
  const url = new URL(window.location);
  url.searchParams.set('page', currentPage);
  window.history.pushState({}, '', url);

  // Update pagination UI
  renderPagination(currentPage, totalPages);
}
```

#### Cache Management
- Implement proper cache headers for paginated content
- Use ETags for efficient cache validation
- Consider service worker caching for offline pagination

## Core Design Patterns

### Navigation Structure
```html
<nav class="navbar">
  <div class="container-fluid">
    <!-- Brand/Logo -->
    <a class="navbar-brand" href="/">
      <img src="logo.png" alt="Brand" height="32">
    </a>

    <!-- Mobile Toggle -->
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigation Items -->
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <!-- Simple Link -->
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>

        <!-- Dropdown Menu -->
        <li class="nav-item dropdown">
          <button class="nav-link dropdown-toggle" type="button">
            Services
          </button>
          <div class="dropdown-menu">
            <!-- Nested Dropdown Structure -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Dropdown Menu System
```html
<!-- Desktop Dropdown with Nested Menus -->
<div class="dropdown-menu">
  <!-- Main Panel -->
  <div class="dropdown-panel active">
    <button class="dropdown-item nested-toggle">
      <span>Web Development</span>
      <i class="bi bi-chevron-double-right"></i>
    </button>
    <a class="dropdown-item" href="/services/design">Design</a>
  </div>

  <!-- Nested Submenu Panel -->
  <div class="dropdown-panel">
    <button class="dropdown-item back-btn">
      <i class="bi bi-chevron-double-left"></i>
      Back
    </button>
    <hr class="dropdown-divider">
    <a class="dropdown-item" href="/services/web/frontend">Frontend</a>
    <a class="dropdown-item" href="/services/web/backend">Backend</a>
  </div>
</div>
```

### Mobile Navigation Panel
```html
<!-- Mobile Panel Structure -->
<div class="mobile-nav-panel">
  <!-- Header with Back Button -->
  <div class="mobile-nav-header">
    <button class="nav-link back-btn">
      <i class="bi bi-chevron-left"></i>
      <span>Back</span>
    </button>
  </div>

  <!-- Navigation Items -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <button class="nav-link">
        <span>Services</span>
        <i class="bi bi-chevron-double-right"></i>
      </button>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
  </ul>
</div>
```

## Responsive Variants

### Collapse Mode (Default)
- Standard Bootstrap collapse behavior
- Menu slides down below navbar
- Single panel navigation

### Offcanvas Mode
- Full-screen slide-out panel
- Separate desktop and mobile navigation
- Backdrop overlay for focus management

## Theme System

### Background Variants
- **Solid**: Opaque background color
- **Glass**: Semi-transparent with backdrop blur
- **Transparent**: No background (overlay mode)

### Color Schemes
- **Light**: Dark text on light backgrounds
- **Dark**: Light text on dark backgrounds
- **Primary/Secondary/Accent**: Theme color backgrounds
- **Semantic**: Success/warning/danger/info colors

### Scroll Effects
- **Shrink**: Navbar height reduces on scroll
- **Background Change**: Color transitions on scroll
- **Shadow**: Depth effect when scrolled

## Key CSS Concepts

### Layout System
```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.navbar-collapse {
  display: flex;
  flex-basis: 100%;
  justify-content: flex-end;
}
```

### Dropdown Positioning
```css
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 240px;
}

.nested-dropdown {
  position: absolute;
  overflow: hidden;
}
```

### Mobile Navigation
```css
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
  }
}
```

### Theme Variables
```css
.navbar {
  --navbar-bg: transparent;
  --navbar-backdrop-filter: none;
  --navbar-border-color: #dee2e6;
  --dropdown-link-color: #212529;
  --dropdown-link-hover-bg: #f8f9fa;
}
```

## Accessibility Features

### ARIA Attributes
- `role="menubar"` for main navigation
- `role="menuitem"` for navigation items
- `aria-haspopup="menu"` for dropdown toggles
- `aria-expanded` for open/closed state
- `aria-label` for screen reader context

### Keyboard Navigation
- **Tab**: Navigate through items
- **Enter/Space**: Activate items
- **Arrow Keys**: Navigate dropdowns
- **Escape**: Close menus
- **Home/End**: Jump to first/last items

### Focus Management
- Visible focus indicators
- Logical tab order
- Focus trapping in mobile panels
- Return focus on menu close

## Animation Patterns

### Dropdown Transitions
- Fade in/out for panel changes
- Slide animations for nested menus
- Smooth height transitions

### Mobile Panel Animations
- Slide-in from right (offcanvas)
- Fade transitions between panels
- Back button animations

### Scroll Effects
- Smooth height reduction
- Background color transitions
- Shadow appearance

## Complementary Elements

### Brand Component
```html
<a class="navbar-brand" href="/">
  <img src="logo.png" alt="Company Name" height="32">
</a>
```

### Search Integration
```html
<div class="navbar-nav">
  <form class="d-flex">
    <input class="form-control" type="search" placeholder="Search">
    <button class="btn btn-outline-primary" type="submit">Search</button>
  </form>
</div>
```

### User Menu
```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button">
    <img src="avatar.jpg" class="rounded-circle" width="32" height="32" alt="User">
    John Doe
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/profile">Profile</a></li>
    <li><a class="dropdown-item" href="/settings">Settings</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="/logout">Logout</a></li>
  </ul>
</li>
```

### Call-to-Action Button
```html
<div class="navbar-nav">
  <a class="btn btn-primary" href="/contact">Get Started</a>
</div>
```

## Implementation Guidelines

### HTML Structure Rules
1. Always wrap navigation in `<nav>` element
2. Use semantic `<ul>` and `<li>` for menu structure
3. Include proper ARIA labels and roles
4. Maintain logical heading hierarchy

### CSS Architecture
1. Use CSS custom properties for theming
2. Implement responsive breakpoints consistently
3. Ensure proper z-index layering
4. Support both LTR and RTL layouts

### JavaScript Behavior
1. Handle keyboard navigation comprehensively
2. Manage focus states correctly
3. Support touch interactions
4. Provide smooth animations

### Performance Considerations
1. Lazy load dropdown content if needed
2. Debounce scroll event handlers
3. Use CSS transforms for animations
4. Minimize DOM manipulation

## Common Patterns

### Mega Menu Structure
```html
<div class="dropdown-menu mega-menu">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h6>Services</h6>
        <a href="/service1">Service 1</a>
        <a href="/service2">Service 2</a>
      </div>
      <div class="col-md-3">
        <h6>Resources</h6>
        <a href="/blog">Blog</a>
        <a href="/docs">Documentation</a>
      </div>
    </div>
  </div>
</div>
```

### Breadcrumb Integration
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/products">Products</a></li>
    <li class="breadcrumb-item active">Current Product</li>
  </ol>
</nav>
```

### Language Selector
```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button">
    <i class="bi bi-globe"></i> EN
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/es">Español</a></li>
    <li><a class="dropdown-item" href="/fr">Français</a></li>
    <li><a class="dropdown-item" href="/de">Deutsch</a></li>
  </ul>
</li>
```

This design system provides a foundation for creating accessible, responsive navigation components that work across all devices and input methods.</content>
<parameter name="filePath">c:\Users\mrpee\source\repos\Stonewick\_docs\navbar-design-system.md