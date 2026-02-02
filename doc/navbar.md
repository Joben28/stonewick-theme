# Navbar Components

## Overview
Comprehensive navbar system with 10+ variants including solid, glass, transparent, mega menus, user menus, and mobile-optimized offcanvas panels. All navbars support Bootstrap responsive breakpoints and automatic dark/light theme adaptation.

---

## Table of Contents
- [Quick Start](#quick-start)
- [Navbar Variants](#navbar-variants)
  - [Solid Dark (Default)](#solid-dark)
  - [Solid Light](#solid-light)
  - [Primary Color](#primary-color)
  - [Glass Effect](#glass-effect)
  - [Transparent](#transparent)
- [Advanced Features](#advanced-features)
  - [Search Integration](#search-integration)
  - [User Menu](#user-menu)
  - [Nested Dropdowns](#nested-dropdowns)
  - [Mega Menu](#mega-menu)
  - [Offcanvas Drill Panel](#offcanvas-drill-panel)
- [Scroll Effects](#scroll-effects)
- [Responsive Behavior](#responsive-behavior)
- [JavaScript Integration](#javascript-integration)
- [Best Practices](#best-practices)

---

## Quick Start {#quick-start}

### Basic Navbar Structure
```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <!-- Brand -->
        <a class="navbar-brand" href="#">Brand</a>

        <!-- Mobile Toggle -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
            </ul>

            <!-- CTA Button -->
            <div class="nav-cta">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </div>
</nav>
```

**Key Classes**:
- `.navbar-expand-lg` - Responsive breakpoint (sm/md/lg/xl/xxl)
- `.navbar-dark` - Dark text/links for light backgrounds
- `.navbar-light` - Light text/links for dark backgrounds
- `.navbar-solid` - Solid background variant
- `.me-auto` - Push CTA to right side

---

## Navbar Variants {#navbar-variants}

### Solid Dark (Default) {#solid-dark}
**Description**: Dark navbar with solid background, perfect for most layouts.  
**Classes**: `.navbar-dark.navbar-solid`  
**Background**: Any background (fixed navbar)

```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
            </ul>
            <div class="nav-cta">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </div>
</nav>
```

**Common Patterns**:
- `.navbar-nav.me-auto` - Left-aligned nav items
- `.navbar-nav.ms-auto` - Right-aligned nav items
- `.nav-cta` - CTA button wrapper

---

### Solid Light {#solid-light}
**Description**: Light navbar for light-themed layouts.  
**Classes**: `.navbar-light.navbar-solid-light`  
**Background**: Light backgrounds

```html
<nav class="navbar navbar-expand-lg navbar-light navbar-solid-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
            </ul>
            <div class="nav-cta">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </div>
</nav>
```

**Note**: Dropdowns, mega menus, and user menus automatically adapt to light styling on light navbars.

---

### Primary Color {#primary-color}
**Description**: Primary brand color navbar.  
**Classes**: `.navbar-dark.navbar-primary`  
**Background**: Any background (fixed navbar)

```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
            </ul>
            <div class="nav-cta">
                <a href="#" class="btn btn-light">Get Started</a>
            </div>
        </div>
    </div>
</nav>
```

**CTA Recommendation**: Use `.btn-light` for better contrast on primary background.

---

### Glass Effect {#glass-effect}
**Description**: Glassmorphic navbar with backdrop blur. Available in dark and light variants.  
**Classes**: `.navbar-glass` (dark) or `.navbar-glass-light` (light)  
**Background**: Should be placed over gradient/image backgrounds for best effect

**Dark Glass**:
```html
<!-- Use on dark gradient backgrounds -->
<div class="p-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%);">
    <nav class="navbar navbar-expand-lg navbar-glass">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Brand</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                </ul>
                <div class="nav-cta">
                    <a href="#" class="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    </nav>
</div>
```

**Light Glass**:
```html
<!-- Use on light gradient backgrounds -->
<div class="p-4" style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);">
    <nav class="navbar navbar-expand-lg navbar-glass-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Brand</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                </ul>
                <div class="nav-cta">
                    <a href="#" class="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    </nav>
</div>
```

**Best Practice**: Use over gradients or images for full glassmorphic effect.

---

### Transparent {#transparent}
**Description**: Transparent navbar that becomes solid on scroll. Perfect for hero overlays.  
**Classes**: `.navbar-transparent`  
**JavaScript**: Add `.scrolled` class when `window.scrollY > 50`

```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-transparent">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            </ul>
        </div>
    </div>
</nav>

<script>
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-transparent');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
</script>
```

---

## Advanced Features {#advanced-features}

### Search Integration {#search-integration}
**Description**: Navbar with integrated search input.  
**Classes**: `.nav-search` (wrapper), `.nav-search-input` (input)

```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            </ul>
            <div class="nav-search me-3">
                <i class="bi bi-search nav-search-icon"></i>
                <input type="search" class="nav-search-input" placeholder="Search...">
            </div>
            <div class="nav-cta">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </div>
</nav>
```

**Structure**:
- `.nav-search` - Wrapper with icon + input
- `.nav-search-icon` - Search icon (left side)
- `.nav-search-input` - Search input field

---

### User Menu {#user-menu}
**Description**: Navbar with user avatar dropdown menu.  
**Classes**: `.nav-user`, `.nav-user-avatar`, `.nav-user-name`, `.nav-user-header`  
**Auto-Adapts**: Dropdown styling matches navbar theme (dark/light)

```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            </ul>
            <div class="navbar-divider d-none d-lg-block"></div>
            <li class="nav-item dropdown list-unstyled">
                <a class="nav-link dropdown-toggle nav-user" href="#" role="button" data-bs-toggle="dropdown">
                    <img src="avatar.jpg" alt="User" class="nav-user-avatar">
                    <span class="nav-user-name">John Doe</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <li>
                        <div class="nav-user-header">
                            <div class="nav-user-header-name">John Doe</div>
                            <div class="nav-user-header-email">john@example.com</div>
                        </div>
                    </li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
                </ul>
            </li>
        </div>
    </div>
</nav>
```

**Components**:
- `.navbar-divider` - Visual separator before user menu
- `.nav-user` - User menu trigger
- `.nav-user-avatar` - User avatar image
- `.nav-user-name` - User display name
- `.nav-user-header` - Dropdown header with name/email
- `.nav-user-header-name` - Full name in header
- `.nav-user-header-email` - Email in header

**Auto-Styling**:
- Dark navbar (`.navbar-dark`) → `.dropdown-menu-dark`
- Light navbar (`.navbar-light`) → Light dropdown (default)

---

### Nested Dropdowns {#nested-dropdowns}
**Description**: Multi-level dropdown menus with automatic viewport detection.  
**Classes**: `.dropdown-submenu`  
**JavaScript**: Auto-detects edges and opens left/right accordingly

```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        Services
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Overview</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li class="dropdown-submenu">
                            <a class="dropdown-item" href="#">Web Development</a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Frontend</a></li>
                                <li><a class="dropdown-item" href="#">Backend</a></li>
                                <li><a class="dropdown-item" href="#">Full Stack</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item" href="#">Frameworks</a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><a class="dropdown-item" href="#">React</a></li>
                                        <li><a class="dropdown-item" href="#">Vue</a></li>
                                        <li><a class="dropdown-item" href="#">Angular</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a class="dropdown-item" href="#">Mobile Apps</a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">iOS</a></li>
                                <li><a class="dropdown-item" href="#">Android</a></li>
                                <li><a class="dropdown-item" href="#">Cross-Platform</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Required JavaScript**:
```javascript
document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
    submenu.addEventListener('mouseenter', function() {
        const nestedMenu = this.querySelector(':scope > .dropdown-menu');
        if (!nestedMenu) return;

        const rect = nestedMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        // Check right edge overflow - open to left instead
        if (rect.right > viewportWidth - 10) {
            this.classList.add('submenu-left');
            this.classList.remove('submenu-right');
        }
    });
});
```

**Right-Aligned Nested Dropdowns**:
For right-aligned parent dropdowns, add `.dropdown-menu-end` to parent and nested menus automatically open left:

```html
<ul class="navbar-nav ms-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            Account
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
            <li class="dropdown-submenu">
                <a class="dropdown-item" href="#">Settings</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Security</a></li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```

---

### Mega Menu {#mega-menu}
**Description**: Full-width dropdown with grid layout for complex navigation.  
**Classes**: `.mega-menu`, `.mega-menu-dark` (dark variant), `.mega-menu-featured`  
**Required**: Parent `<li>` must have `.position-static`

**Dark Mega Menu** (on dark navbar):
```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item position-static">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        Products
                    </a>
                    <div class="mega-menu mega-menu-dark">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <h6>Services</h6>
                                    <a href="#">Web Development</a>
                                    <a href="#">Mobile Apps</a>
                                    <a href="#">Cloud Solutions</a>
                                </div>
                                <div class="col-md-3">
                                    <h6>Resources</h6>
                                    <a href="#">Documentation</a>
                                    <a href="#">API Reference</a>
                                    <a href="#">Blog</a>
                                </div>
                                <div class="col-md-3">
                                    <h6>Company</h6>
                                    <a href="#">About Us</a>
                                    <a href="#">Careers</a>
                                    <a href="#">Contact</a>
                                </div>
                                <div class="col-md-3">
                                    <div class="mega-menu-featured">
                                        <h6>Featured</h6>
                                        <p class="small text-white-50">Latest product release with amazing features.</p>
                                        <a href="#" class="btn btn-sm btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Light Mega Menu** (on light navbar):
```html
<nav class="navbar navbar-expand-lg navbar-light navbar-solid-light">
    <!-- ... navbar structure ... -->
    <li class="nav-item position-static">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            Products
        </a>
        <div class="mega-menu">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h6>Services</h6>
                        <a href="#">Web Development</a>
                        <a href="#">Mobile Apps</a>
                    </div>
                    <div class="col-md-3">
                        <div class="mega-menu-featured">
                            <h6>Featured</h6>
                            <p class="small text-muted">New offering for enterprise.</p>
                            <a href="#" class="btn btn-sm btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</nav>
```

**Structure**:
- `.position-static` on parent `<li>` - Allows full-width positioning
- `.mega-menu` - Base class (light variant)
- `.mega-menu-dark` - Dark variant for dark navbars
- `.mega-menu-featured` - Highlighted section with CTA
- Use Bootstrap grid (`.row`, `.col-md-*`) for layout

**Auto-Styling**: Light navbar automatically gets light mega menu styling.

**Hover Behavior**: Mega menu stays open when hovering over the menu content itself, preventing flicker when moving mouse from nav item to menu. Positioned to account for navbar padding to eliminate gaps, with extended hover area to ensure smooth transitions.

---

### Offcanvas Drill Panel {#offcanvas-drill-panel}
**Description**: Mobile-optimized offcanvas menu with drill-down navigation, branding, contact info, and social links.  
**Classes**: `.offcanvas-navbar` (dark), `.offcanvas-navbar-light` (light)  
**Features**: Multi-level navigation, back buttons, footer with contact/social/CTA

**Dark Offcanvas** (full structure):
```html
<!-- Trigger Button (in navbar) -->
<nav class="navbar navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

<!-- Offcanvas Panel -->
<div class="offcanvas offcanvas-start offcanvas-navbar" tabindex="-1" id="offcanvasDark">
    <div class="offcanvas-header">
        <a href="#" class="offcanvas-brand">
            <span class="brand-text">StoneWick</span>
        </a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="offcanvas-drill-container">
            <!-- Main Panel -->
            <div class="offcanvas-drill-panel active" id="mainPanel">
                <ul class="offcanvas-menu">
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link active">
                            <span><i class="bi bi-house-door"></i>Home</span>
                        </a>
                    </li>
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link" data-panel="servicesPanel">
                            <span><i class="bi bi-grid"></i>Services</span>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                    </li>
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link">
                            <span><i class="bi bi-envelope"></i>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Services Sub-Panel -->
            <div class="offcanvas-drill-panel" id="servicesPanel">
                <button class="offcanvas-back-btn" data-back="mainPanel">
                    <i class="bi bi-chevron-left"></i>Back
                </button>
                <div class="offcanvas-panel-title">Services</div>
                <ul class="offcanvas-menu">
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link" data-panel="webDevPanel">
                            <span><i class="bi bi-code-slash"></i>Web Development</span>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                    </li>
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link">
                            <span><i class="bi bi-phone"></i>Mobile Apps</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Third Level Panel -->
            <div class="offcanvas-drill-panel" id="webDevPanel">
                <button class="offcanvas-back-btn" data-back="servicesPanel">
                    <i class="bi bi-chevron-left"></i>Back to Services
                </button>
                <div class="offcanvas-panel-title">Web Development</div>
                <ul class="offcanvas-menu">
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link">
                            <span><i class="bi bi-laptop"></i>Frontend</span>
                        </a>
                    </li>
                    <li class="offcanvas-menu-item">
                        <a href="#" class="offcanvas-menu-link">
                            <span><i class="bi bi-server"></i>Backend</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Footer Section -->
        <div class="offcanvas-footer">
            <!-- Contact Info -->
            <div class="offcanvas-contact">
                <a href="tel:+15551234567" class="offcanvas-contact-item">
                    <i class="bi bi-telephone"></i>
                    <div>
                        <div class="offcanvas-contact-label">Call Us</div>
                        <div class="offcanvas-contact-value">+1 (555) 123-4567</div>
                    </div>
                </a>
                <a href="mailto:hello@example.com" class="offcanvas-contact-item">
                    <i class="bi bi-envelope"></i>
                    <div>
                        <div class="offcanvas-contact-label">Email</div>
                        <div class="offcanvas-contact-value">hello@example.com</div>
                    </div>
                </a>
            </div>

            <!-- Social Links -->
            <div class="offcanvas-social">
                <a href="#" class="offcanvas-social-link" aria-label="Facebook">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="offcanvas-social-link" aria-label="Twitter">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="offcanvas-social-link" aria-label="LinkedIn">
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>

            <!-- CTA Button -->
            <div class="offcanvas-cta">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </div>
</div>
```

**Required JavaScript**:
```javascript
document.querySelectorAll('.offcanvas-navbar').forEach(offcanvas => {
    const container = offcanvas.querySelector('.offcanvas-drill-container');

    // Forward navigation
    offcanvas.querySelectorAll('[data-panel]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPanelId = this.getAttribute('data-panel');
            const targetPanel = container.querySelector(`#${targetPanelId}`);
            const currentPanel = container.querySelector('.offcanvas-drill-panel.active');

            if (targetPanel && currentPanel) {
                currentPanel.classList.remove('active');
                currentPanel.classList.add('parent');
                targetPanel.classList.add('active');
            }
        });
    });

    // Back navigation
    offcanvas.querySelectorAll('[data-back]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPanelId = this.getAttribute('data-back');
            const targetPanel = container.querySelector(`#${targetPanelId}`);
            const currentPanel = container.querySelector('.offcanvas-drill-panel.active');

            if (targetPanel && currentPanel) {
                currentPanel.classList.remove('active');
                targetPanel.classList.remove('parent');
                targetPanel.classList.add('active');
            }
        });
    });

    // Reset on close
    offcanvas.addEventListener('hidden.bs.offcanvas', function() {
        const panels = container.querySelectorAll('.offcanvas-drill-panel');
        panels.forEach(panel => panel.classList.remove('active', 'parent'));
        panels[0].classList.add('active');
    });
});
```

**Light Offcanvas Variant**:
Replace `.offcanvas-navbar` with `.offcanvas-navbar.offcanvas-navbar-light`

```html
<div class="offcanvas offcanvas-start offcanvas-navbar offcanvas-navbar-light" tabindex="-1" id="offcanvasLight">
    <!-- Same structure as dark variant -->
</div>
```

**Component Classes**:
- `.offcanvas-brand` - Brand link in header
- `.offcanvas-drill-container` - Panels wrapper
- `.offcanvas-drill-panel` - Individual panel
- `.offcanvas-drill-panel.active` - Currently visible panel
- `.offcanvas-menu` - Menu list
- `.offcanvas-menu-item` - Menu item
- `.offcanvas-menu-link` - Menu link
- `.offcanvas-menu-link.active` - Active link
- `.offcanvas-back-btn` - Back button
- `.offcanvas-panel-title` - Panel heading
- `.offcanvas-footer` - Footer container
- `.offcanvas-contact` - Contact info section
- `.offcanvas-contact-item` - Contact item
- `.offcanvas-social` - Social links
- `.offcanvas-social-link` - Social link
- `.offcanvas-cta` - CTA button wrapper

**Data Attributes**:
- `data-panel="panelId"` - Forward navigation target
- `data-back="panelId"` - Back navigation target

---

## Scroll Effects {#scroll-effects}

### Available Classes

| Class | Effect |
|-------|--------|
| `.navbar-shrink` | Reduces height on scroll |
| `.navbar-transparent` | Transparent → solid on scroll |
| `.navbar-autohide` | Hides on scroll down, shows on scroll up |

### Usage
Apply `.scrolled` class via JavaScript when page scrolls:

```javascript
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
```

---

## Responsive Behavior {#responsive-behavior}

### Breakpoints
- `.navbar-expand-sm` - Expand on small screens (≥576px)
- `.navbar-expand-md` - Expand on medium screens (≥768px)
- `.navbar-expand-lg` - Expand on large screens (≥992px) - **Recommended**
- `.navbar-expand-xl` - Expand on extra large screens (≥1200px)
- `.navbar-expand-xxl` - Expand on extra extra large screens (≥1400px)

### Mobile Behavior
- Below breakpoint: Hamburger menu with collapsible navigation
- Above breakpoint: Horizontal navigation
- Offcanvas panels work on all screen sizes

---

## JavaScript Integration {#javascript-integration}

### Bootstrap Dependencies
All navbar functionality requires Bootstrap JavaScript:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Custom JavaScript Required For:
- Scroll effects (transparent → solid)
- Nested dropdown positioning
- Offcanvas drill panel navigation
- Mega menu interactions (if enhanced)

### Event Listeners
```javascript
// Scroll effects
window.addEventListener('scroll', handleScroll);

// Dropdown positioning
document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
    submenu.addEventListener('mouseenter', positionDropdown);
});

// Offcanvas navigation
document.querySelectorAll('[data-panel]').forEach(link => {
    link.addEventListener('click', navigatePanel);
});
```

---

## Best Practices {#best-practices}

### Choosing the Right Variant

| Use Case | Recommended Navbar |
|----------|-------------------|
| Standard website | `.navbar-dark.navbar-solid` |
| Light theme | `.navbar-light.navbar-solid-light` |
| Brand-focused | `.navbar-dark.navbar-primary` |
| Hero overlay | `.navbar-transparent` |
| Modern design | `.navbar-glass` or `.navbar-glass-light` |
| Complex navigation | Mega menu or nested dropdowns |
| Mobile-first | Offcanvas drill panel |

### Layout Guidelines

**Navigation Links**:
- Limit to 5-7 main navigation items
- Use clear, concise labels
- Group related items in dropdowns

**CTA Buttons**:
- Use `.btn-primary` on dark navbars
- Use `.btn-light` on primary/colored navbars
- One primary CTA maximum

**User Menus**:
- Place on right side with `.ms-auto`
- Include avatar + name for logged-in users
- Use `.dropdown-menu-end` for right alignment

### Performance Tips

- Use CSS-only variants when possible (avoid heavy JavaScript)
- Lazy load offcanvas content if navigation is large
- Minimize nested dropdown levels (max 3 levels)
- Use appropriate responsive breakpoints

### Accessibility

- Always include `aria-label` on icon-only buttons
- Use semantic HTML (`<nav>`, proper heading hierarchy)
- Ensure sufficient color contrast
- Test keyboard navigation
- Include focus indicators

### Common Mistakes to Avoid

❌ **Don't** mix light components on dark navbars  
❌ **Don't** use too many navigation levels (keep it simple)  
❌ **Don't** forget mobile testing (offcanvas behavior)  
❌ **Don't** use small breakpoints (causes poor mobile UX)  
❌ **Don't** place CTAs in dropdown menus (use navbar level)  

---

## Complete Examples

### E-commerce Navbar
```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">All Products</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Electronics</a></li>
                        <li><a class="dropdown-item" href="#">Clothing</a></li>
                        <li><a class="dropdown-item" href="#">Home & Garden</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
            <div class="nav-search me-3">
                <i class="bi bi-search nav-search-icon"></i>
                <input type="search" class="nav-search-input" placeholder="Search products...">
            </div>
            <div class="nav-cta">
                <a href="#" class="btn btn-primary">Cart (3)</a>
            </div>
        </div>
    </div>
</nav>
```

### SaaS Application Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light navbar-solid-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">SaaS App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Dashboard</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Team</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Reports</a></li>
            </ul>
            <div class="navbar-divider d-none d-lg-block"></div>
            <li class="nav-item dropdown list-unstyled">
                <a class="nav-link dropdown-toggle nav-user" href="#" data-bs-toggle="dropdown">
                    <img src="avatar.jpg" alt="User" class="nav-user-avatar">
                    <span class="nav-user-name">John Doe</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <div class="nav-user-header">
                            <div class="nav-user-header-name">John Doe</div>
                            <div class="nav-user-header-email">john@company.com</div>
                        </div>
                    </li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
                </ul>
            </li>
        </div>
    </div>
</nav>
```

---

## Version
**StoneWick Theme v1.1.0**  
**Last updated**: February 1, 2026
