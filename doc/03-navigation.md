# Navigation Components

## Overview
Navigation components including navbar variants, tabs, pagination, and breadcrumbs. All components available in both light and dark variants to work across different background colors.

---

## Table of Contents
- [Navbar Variants](#navbar-variants)
  - [Solid Dark](#navbar-solid-dark)
  - [Solid Light](#navbar-solid-light)
  - [Primary Color](#navbar-primary)
  - [Glass Effect](#navbar-glass)
  - [Transparent](#navbar-transparent)
  - [With Search](#navbar-with-search)
  - [With User Menu](#navbar-with-user-menu)
  - [Nested Dropdowns](#nested-dropdowns)
  - [Mega Menu](#mega-menu)
  - [Offcanvas Drill Panel](#offcanvas-navbar)
- [Tabs](#tabs)
  - [Standard Tabs](#standard-tabs)
  - [Pills](#pill-navigation)
  - [Underline](#underline-navigation)
  - [Dark Variants](#tabs-dark)
- [Pagination](#pagination)
- [Breadcrumbs](#breadcrumbs)
- [Load More Patterns](#load-more-patterns)

---

## Navbar Variants

### Navbar Solid Dark (Default) {#navbar-solid-dark}
**Description**: Dark navbar with solid background, perfect for most layouts.  
**Class**: `.navbar-dark.navbar-solid`  
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

### Navbar Solid Light {#navbar-solid-light}
**Description**: Light navbar for light-themed layouts.  
**Class**: `.navbar-light.navbar-solid-light`  
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

### Navbar Primary Color {#navbar-primary}
**Description**: Primary brand color navbar.  
**Class**: `.navbar-dark.navbar-primary`  
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

### Navbar Glass Effect {#navbar-glass}
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

### Navbar Transparent {#navbar-transparent}
**Description**: Transparent navbar that becomes solid on scroll. Perfect for hero overlays.  
**Class**: `.navbar-transparent`  
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

### Scroll Effects {#scroll-effects}
**Available Classes**:

| Class | Effect |
|-------|--------|
| `.navbar-shrink` | Reduces height on scroll |
| `.navbar-transparent` | Transparent → solid on scroll |
| `.navbar-autohide` | Hides on scroll down, shows on scroll up |

**Usage**: Apply `.scrolled` class via JavaScript when page scrolls.

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

### Navbar with Search {#navbar-with-search}
**Description**: Navbar with integrated search input.  
**Class**: `.nav-search` (wrapper), `.nav-search-input` (input)

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

### Navbar with User Menu {#navbar-with-user-menu}
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
**Class**: `.dropdown-submenu`  
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

**Required JavaScript** (included in ks-navigation.html):
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
**Class**: `.mega-menu`, `.mega-menu-dark` (dark variant), `.mega-menu-featured`  
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

### Offcanvas Navbar (Drill Panel) {#offcanvas-navbar}
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

**Required JavaScript** (included in ks-navigation.html):
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

## Tabs {#tabs}

### Standard Tabs {#standard-tabs}
**Description**: Default tab navigation with underline indicator.  
**Class**: `.nav-tabs`  
**Background**: Light backgrounds

```html
<ul class="nav nav-tabs mb-3" id="myTabs" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link disabled" type="button" role="tab" aria-disabled="true">Disabled</button>
    </li>
</ul>
<div class="tab-content" id="myTabsContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="p-4">
            <h4>Home Content</h4>
            <p>Tab content goes here.</p>
        </div>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="p-4">
            <h4>Profile Content</h4>
            <p>Profile information.</p>
        </div>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="p-4">
            <h4>Contact Content</h4>
            <p>Contact details.</p>
        </div>
    </div>
</div>
```

**States**:
- `.active` - Active tab
- `.disabled` - Disabled tab
- Default - Inactive/hoverable tab

---

### Pill Navigation {#pill-navigation}
**Description**: Button-style navigation pills.  
**Class**: `.nav-pills`  
**Background**: Light backgrounds

```html
<ul class="nav nav-pills mb-3" id="pillTabs" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pill-home-tab" data-bs-toggle="tab" data-bs-target="#pill-home" type="button" role="tab">Overview</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="pill-features-tab" data-bs-toggle="tab" data-bs-target="#pill-features" type="button" role="tab">Features</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link disabled" type="button" role="tab" aria-disabled="true">Coming Soon</button>
    </li>
</ul>
<div class="tab-content" id="pillTabsContent">
    <div class="tab-pane fade show active" id="pill-home" role="tabpanel">
        <div class="p-4">Content...</div>
    </div>
    <div class="tab-pane fade" id="pill-features" role="tabpanel">
        <div class="p-4">Features...</div>
    </div>
</div>
```

---

### Underline Navigation {#underline-navigation}
**Description**: Minimal underline-style navigation.  
**Class**: `.nav-underline`  
**Background**: Light backgrounds

```html
<ul class="nav nav-underline mb-3" id="underlineTabs" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab">All Items</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="active-tab" data-bs-toggle="tab" data-bs-target="#active" type="button" role="tab">Active</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="archived-tab" data-bs-toggle="tab" data-bs-target="#archived" type="button" role="tab">Archived</button>
    </li>
</ul>
<div class="tab-content" id="underlineTabsContent">
    <div class="tab-pane fade show active" id="all" role="tabpanel">
        <div class="p-4">All items...</div>
    </div>
    <!-- ... -->
</div>
```

---

### Tabs with Icons {#tabs-with-icons}
**Description**: Tabs with icon + text labels.  
**Works with**: Any tab style (`.nav-tabs`, `.nav-pills`, `.nav-underline`)

```html
<ul class="nav nav-tabs mb-3" id="iconTabs" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="dashboard-tab" data-bs-toggle="tab" data-bs-target="#dashboard" type="button" role="tab">
            <i class="bi bi-speedometer2 me-2"></i>Dashboard
        </button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab">
            <i class="bi bi-cart me-2"></i>Orders
        </button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab">
            <i class="bi bi-gear me-2"></i>Settings
        </button>
    </li>
</ul>
```

---

### Pills with Badges {#pills-with-badges}
**Description**: Pills with notification badges.  
**Best with**: `.nav-pills`

```html
<ul class="nav nav-pills mb-3" id="badgeTabs" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="inbox-tab" data-bs-toggle="tab" data-bs-target="#inbox" type="button" role="tab">
            Inbox <span class="badge bg-light text-primary ms-2">12</span>
        </button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="sent-tab" data-bs-toggle="tab" data-bs-target="#sent" type="button" role="tab">
            Sent <span class="badge bg-primary ms-2">5</span>
        </button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="drafts-tab" data-bs-toggle="tab" data-bs-target="#drafts" type="button" role="tab">
            Drafts <span class="badge bg-primary ms-2">3</span>
        </button>
    </li>
</ul>
```

**Badge Colors**:
- Active pill: `.badge.bg-light.text-primary`
- Inactive pill: `.badge.bg-primary`

---

### Vertical Tabs {#vertical-tabs}
**Description**: Side-by-side vertical tab layout.  
**Class**: `.nav.flex-column` (with `.d-flex.align-items-start` wrapper)

```html
<div class="d-flex align-items-start">
    <div class="nav flex-column nav-pills me-4" id="verticalTabs" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="general-tab" data-bs-toggle="pill" data-bs-target="#general" type="button" role="tab">General</button>
        <button class="nav-link" id="security-tab" data-bs-toggle="pill" data-bs-target="#security" type="button" role="tab">Security</button>
        <button class="nav-link" id="notifications-tab" data-bs-toggle="pill" data-bs-target="#notifications" type="button" role="tab">Notifications</button>
        <button class="nav-link disabled" type="button" role="tab" aria-disabled="true">Billing</button>
    </div>
    <div class="tab-content flex-grow-1" id="verticalTabsContent">
        <div class="tab-pane fade show active" id="general" role="tabpanel">
            <div class="p-4">
                <h5>General Settings</h5>
                <p>Configure general account settings.</p>
            </div>
        </div>
        <div class="tab-pane fade" id="security" role="tabpanel">
            <div class="p-4">
                <h5>Security Settings</h5>
                <p>Manage passwords and 2FA.</p>
            </div>
        </div>
        <div class="tab-pane fade" id="notifications" role="tabpanel">
            <div class="p-4">
                <h5>Notification Settings</h5>
                <p>Configure email preferences.</p>
            </div>
        </div>
    </div>
</div>
```

**Layout**:
- Wrapper: `.d-flex.align-items-start`
- Tabs: `.nav.flex-column.nav-pills.me-4`
- Content: `.tab-content.flex-grow-1`

---

### Tabs Dark Variants {#tabs-dark}
**Description**: Dark versions for dark backgrounds.  
**Classes**: `.nav-tabs-dark`, `.nav-pills-dark`  
**Background**: Dark backgrounds only

**Dark Standard Tabs**:
```html
<ul class="nav nav-tabs nav-tabs-dark mb-3" id="darkTabs" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="dark-home-tab" data-bs-toggle="tab" data-bs-target="#dark-home" type="button" role="tab">Home</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="dark-about-tab" data-bs-toggle="tab" data-bs-target="#dark-about" type="button" role="tab">About</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link disabled" type="button" role="tab" aria-disabled="true">Disabled</button>
    </li>
</ul>
<div class="tab-content" id="darkTabsContent">
    <div class="tab-pane fade show active" id="dark-home" role="tabpanel">
        <div class="p-4">Content...</div>
    </div>
    <div class="tab-pane fade" id="dark-about" role="tabpanel">
        <div class="p-4">About content...</div>
    </div>
</div>
```

**Dark Pills**:
```html
<ul class="nav nav-pills nav-pills-dark mb-3" id="darkPills" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="dpill-one-tab" data-bs-toggle="tab" data-bs-target="#dpill-one" type="button" role="tab">Option One</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="dpill-two-tab" data-bs-toggle="tab" data-bs-target="#dpill-two" type="button" role="tab">Option Two</button>
    </li>
</ul>
```

---

## Pagination {#pagination}

### Basic Pagination
**Description**: Standard page navigation with numbered pages and arrows.  
**Class**: `.pagination`  
**Background**: Light backgrounds

```html
<nav aria-label="Page navigation">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
    </ul>
</nav>
```

**States**:
- `.active` - Current page
- `.disabled` - Disabled link (e.g., prev on first page)

---

### Pagination with First/Last
**Description**: Extended pagination with first/last page controls.

```html
<nav aria-label="Page navigation">
    <ul class="pagination">
        <li class="page-item disabled"><a class="page-link" href="#"><i class="bi bi-chevron-double-left"></i></a></li>
        <li class="page-item disabled"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">...</a></li>
        <li class="page-item"><a class="page-link" href="#">10</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-double-right"></i></a></li>
    </ul>
</nav>
```

**Icons**:
- First: `bi-chevron-double-left`
- Previous: `bi-chevron-left`
- Next: `bi-chevron-right`
- Last: `bi-chevron-double-right`

---

### Pagination Sizes
**Classes**: `.pagination-lg`, `.pagination-sm`

```html
<!-- Large -->
<nav aria-label="Large pagination">
    <ul class="pagination pagination-lg">
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
    </ul>
</nav>

<!-- Small -->
<nav aria-label="Small pagination">
    <ul class="pagination pagination-sm">
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
    </ul>
</nav>
```

---

### Centered Pagination
**Description**: Center-aligned pagination.  
**Class**: `.justify-content-center` on `.pagination`

```html
<nav aria-label="Centered pagination">
    <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
    </ul>
</nav>
```

---

### Simple Previous/Next
**Description**: Text-based prev/next navigation without page numbers.

```html
<nav aria-label="Simple pagination">
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="#"><i class="bi bi-arrow-left me-2"></i>Previous</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">Next<i class="bi bi-arrow-right ms-2"></i></a>
        </li>
    </ul>
</nav>
```

---

### Pagination Dark Variant
**Description**: Dark pagination for dark backgrounds.  
**Class**: `.pagination-dark`  
**Background**: Dark backgrounds only

```html
<nav aria-label="Dark pagination">
    <ul class="pagination pagination-dark">
        <li class="page-item disabled"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
    </ul>
</nav>
```

---

## Load More Patterns {#load-more-patterns}

### Load More Button
**Description**: Button that loads additional content with loading state.  
**Class**: `.load-more-btn`  
**JavaScript**: Toggle `.load-more-text` and `.load-more-spinner`

```html
<!-- Content Grid -->
<div class="row g-3 mb-4">
    <div class="col-md-4">
        <div class="card">Content Item 1</div>
    </div>
    <div class="col-md-4">
        <div class="card">Content Item 2</div>
    </div>
    <div class="col-md-4">
        <div class="card">Content Item 3</div>
    </div>
</div>

<!-- Load More Button -->
<div class="text-center">
    <button type="button" class="btn btn-outline-primary load-more-btn">
        <span class="load-more-text">Load More</span>
        <span class="load-more-spinner d-none">
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
        </span>
    </button>
</div>
```

**JavaScript Example**:
```javascript
document.querySelector('.load-more-btn').addEventListener('click', function() {
    const text = this.querySelector('.load-more-text');
    const spinner = this.querySelector('.load-more-spinner');
    
    text.classList.add('d-none');
    spinner.classList.remove('d-none');
    
    // Load content...
    setTimeout(() => {
        text.classList.remove('d-none');
        spinner.classList.add('d-none');
    }, 1500);
});
```

---

### Load More Button States
**Description**: Visual states for load more functionality.

```html
<!-- Default State -->
<button type="button" class="btn btn-outline-primary load-more-btn">
    Load More
</button>

<!-- Loading State -->
<button type="button" class="btn btn-outline-primary load-more-btn" disabled>
    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
    Loading...
</button>

<!-- End State -->
<button type="button" class="btn btn-outline-secondary" disabled>
    No More Items
</button>
```

---

### Infinite Scroll Indicators
**Description**: Loading indicators for infinite scroll patterns.

```html
<!-- Loading State -->
<div class="infinite-scroll-trigger">
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <p class="small text-muted mt-2 mb-0">Loading more content...</p>
</div>

<!-- End of Content -->
<div class="no-more-content">
    <i class="bi bi-check-circle text-success fs-3"></i>
    <p class="small text-muted mt-2 mb-0">You've reached the end</p>
</div>
```

---

### Progress Indicator
**Description**: Shows loading progress with count and percentage.

```html
<div class="d-flex justify-content-between align-items-center mb-2">
    <span class="small text-muted">Showing 12 of 48 items</span>
    <span class="small text-muted">25%</span>
</div>
<div class="progress" style="height: 4px;">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

---

## Breadcrumbs {#breadcrumbs}

### Basic Breadcrumb
**Description**: Standard breadcrumb navigation.  
**Class**: `.breadcrumb`  
**Background**: Light backgrounds

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Category</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
    </ol>
</nav>
```

**Structure**:
- Use `<nav aria-label="breadcrumb">` wrapper
- Use `<ol class="breadcrumb">` list
- Active item: `.breadcrumb-item.active` with `aria-current="page"`

---

### Breadcrumb with Icons
**Description**: Breadcrumbs with icon + text labels.

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="bi bi-house-door me-1"></i>Home</a></li>
        <li class="breadcrumb-item"><a href="#"><i class="bi bi-folder me-1"></i>Products</a></li>
        <li class="breadcrumb-item"><a href="#"><i class="bi bi-tag me-1"></i>Category</a></li>
        <li class="breadcrumb-item active" aria-current="page"><i class="bi bi-file-earmark me-1"></i>Item</li>
    </ol>
</nav>
```

---

### Icon-Only Home
**Description**: Icon for home, text for other levels.

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" aria-label="Home"><i class="bi bi-house-door"></i></a></li>
        <li class="breadcrumb-item"><a href="#">Services</a></li>
        <li class="breadcrumb-item"><a href="#">Web Development</a></li>
        <li class="breadcrumb-item active" aria-current="page">Custom Solutions</li>
    </ol>
</nav>
```

**Accessibility**: Add `aria-label="Home"` to icon-only link.

---

### Custom Separators
**Description**: Change breadcrumb divider using CSS variable.  
**Variable**: `--bs-breadcrumb-divider`

```html
<!-- Arrow separator -->
<nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '→';">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>

<!-- Slash separator -->
<nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '/';">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>
```

**Common Separators**:
- Default: `'>'` (chevron)
- Arrow: `'→'`
- Slash: `'/'`
- Double angle: `'»'`

---

### Breadcrumb Dark Variant
**Description**: Dark breadcrumbs for dark backgrounds.  
**Class**: `.breadcrumb-dark`  
**Background**: Dark backgrounds only

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-dark">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Products</a></li>
        <li class="breadcrumb-item"><a href="#">Category</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Item</li>
    </ol>
</nav>
```

**Dark with Icons**:
```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-dark">
        <li class="breadcrumb-item"><a href="#"><i class="bi bi-house-door"></i></a></li>
        <li class="breadcrumb-item"><a href="#">Documentation</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
    </ol>
</nav>
```

---

## Component Summary Table

### Navbar Variants

| Component | Classes | Background | Auto-Adapts |
|-----------|---------|------------|-------------|
| Solid Dark | `.navbar-dark.navbar-solid` | Any | Dropdowns, mega menu, user menu |
| Solid Light | `.navbar-light.navbar-solid-light` | Light | Dropdowns, mega menu, user menu |
| Primary | `.navbar-dark.navbar-primary` | Any | Dropdowns |
| Glass Dark | `.navbar-glass` | Dark gradient | - |
| Glass Light | `.navbar-glass-light` | Light gradient | - |
| Transparent | `.navbar-transparent` | Over hero | Add `.scrolled` on scroll |

### Tabs

| Component | Classes | Background |
|-----------|---------|------------|
| Standard Tabs | `.nav-tabs` | Light |
| Pills | `.nav-pills` | Light |
| Underline | `.nav-underline` | Light |
| Dark Tabs | `.nav-tabs.nav-tabs-dark` | Dark |
| Dark Pills | `.nav-pills.nav-pills-dark` | Dark |
| Vertical | `.nav.flex-column.nav-pills` | Any |

### Pagination

| Component | Classes | Background |
|-----------|---------|------------|
| Default | `.pagination` | Light |
| Large | `.pagination.pagination-lg` | Light |
| Small | `.pagination.pagination-sm` | Light |
| Dark | `.pagination.pagination-dark` | Dark |

### Breadcrumbs

| Component | Classes | Background |
|-----------|---------|------------|
| Default | `.breadcrumb` | Light |
| Dark | `.breadcrumb.breadcrumb-dark` | Dark |

---

## Common Patterns

### Fixed Header with Hero
```html
<header class="main-header">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <!-- navbar content -->
    </nav>
</header>

<section class="hero pt-header">
    <!-- Add .pt-header to first section for fixed header spacing -->
</section>
```

### Navbar with Multiple Features
```html
<nav class="navbar navbar-expand-lg navbar-dark navbar-solid">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarFull">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarFull">
            <!-- Main nav -->
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Web Dev</a></li>
                    </ul>
                </li>
            </ul>
            <!-- Search -->
            <div class="nav-search me-3">
                <i class="bi bi-search nav-search-icon"></i>
                <input type="search" class="nav-search-input" placeholder="Search...">
            </div>
            <!-- Divider before user -->
            <div class="navbar-divider d-none d-lg-block"></div>
            <!-- User menu -->
            <li class="nav-item dropdown list-unstyled">
                <a class="nav-link dropdown-toggle nav-user" href="#" data-bs-toggle="dropdown">
                    <img src="avatar.jpg" alt="User" class="nav-user-avatar">
                    <span class="nav-user-name">User</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <li>
                        <div class="nav-user-header">
                            <div class="nav-user-header-name">User Name</div>
                            <div class="nav-user-header-email">user@email.com</div>
                        </div>
                    </li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
            </li>
        </div>
    </div>
</nav>
```

### Tabbed Content Sections
```html
<!-- Tabs on light background -->
<section class="py-5 bg-light">
    <div class="container">
        <h2>Features</h2>
        <ul class="nav nav-tabs mb-4" id="featureTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#feature1" type="button" role="tab">
                    <i class="bi bi-lightning me-2"></i>Speed
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#feature2" type="button" role="tab">
                    <i class="bi bi-shield me-2"></i>Security
                </button>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="feature1" role="tabpanel">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Lightning Fast</h4>
                        <p>Content about speed...</p>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="feature2" role="tabpanel">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Secure by Default</h4>
                        <p>Content about security...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Content with Pagination
```html
<!-- Content Grid -->
<section class="py-5">
    <div class="container">
        <h2>Blog Posts</h2>
        
        <!-- Breadcrumb for navigation context -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Blog</a></li>
                <li class="breadcrumb-item active" aria-current="page">Articles</li>
            </ol>
        </nav>
        
        <!-- Content items -->
        <div class="row g-4 mb-5">
            <!-- Card items here -->
        </div>
        
        <!-- Pagination -->
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
            </ul>
        </nav>
    </div>
</section>
```

---

## Usage Notes

### Navbar Auto-Styling
- **Dark navbar** (`.navbar-dark`): All child components (dropdowns, mega menu, user menu) automatically inherit dark styling
- **Light navbar** (`.navbar-light`): All child components automatically use light styling
- **No manual class additions needed** for dropdowns when using navbar variants

### Tab Accessibility
- Always use proper `role` attributes: `role="tablist"`, `role="presentation"`, `role="tab"`, `role="tabpanel"`
- Include `aria-controls`, `aria-selected`, `aria-current` attributes
- Use `<button>` elements for tab triggers, not `<a>`

### Pagination Best Practices
- Always wrap in `<nav aria-label="Page navigation">`
- Use `.active` and `.disabled` states appropriately
- Include `aria-current="page"` on active page item
- Use icons from Bootstrap Icons for arrows

### Breadcrumb Accessibility
- Always wrap in `<nav aria-label="breadcrumb">`
- Use `<ol>` for semantic list structure
- Mark active/current page with `.active` and `aria-current="page"`
- Icon-only links need `aria-label` attribute

### Mobile Considerations
- All navbars include responsive collapse behavior via `.navbar-toggler`
- Offcanvas drill panel provides mobile-optimized navigation
- Tabs automatically stack on mobile
- Consider using `.pagination-sm` for mobile views

### Z-Index Requirements
- Navbar: Higher z-index for fixed positioning
- Dropdowns: Higher than navbar when open
- Mega menu: `position-static` on parent `<li>` for full-width effect
- Nested dropdowns: Automatic viewport detection prevents overflow

---

## File Locations

**CSS Files**:
- `/css/components/_navbar.css` - All navbar variants and components
- `/css/components/_tabs.css` - Tab navigation styles
- `/css/components/_pagination.css` - Pagination styles
- `/css/components/_breadcrumbs.css` - Breadcrumb styles

**JavaScript**:
- Bootstrap 5.3.2 includes all interactive functionality
- Custom JS for nested dropdowns and offcanvas drill navigation included in component demos
- Load more functionality requires custom implementation

---

**Last Updated**: v1.1.0
