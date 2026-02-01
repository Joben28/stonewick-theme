# StoneWick Navigation Component Roadmap

> Implementation guide for navigation components: navbar, tabs, pagination, breadcrumbs.

---

## Status: ✅ COMPLETE

All navigation components have been implemented and are ready for use.

---

## Implemented Components

### Phase 0: Navbar System ✅

**File**: `css/components/_navbar.css` (836 lines)

#### Theme Variants
| Class | Description | Background |
|-------|-------------|------------|
| `.navbar-solid` / `.navbar-dark` | Default dark navbar | Dark solid |
| `.navbar-solid-light` / `.navbar-light` | Light navbar | White solid |
| `.navbar-primary` | Primary brand color | Primary solid |
| `.navbar-glass` | Glassmorphic dark | Dark frosted |
| `.navbar-glass-light` | Glassmorphic light | White frosted |
| `.navbar-transparent` | Overlay mode | Transparent → solid on scroll |

#### Scroll Effects
| Class | Behavior |
|-------|----------|
| `.scrolled` | Applied via JS when scrolled |
| `.navbar-shrink` | Height reduction on scroll |
| `.navbar-autohide` | Hide on scroll down, show on scroll up |

#### Advanced Features

**Mega Menu**
```html
<li class="nav-item position-static">
    <a class="nav-link dropdown-toggle" href="#">Products</a>
    <div class="mega-menu"><!-- Auto-inherits navbar colors --></div>
</li>
```
- `.mega-menu` - Full-width dropdown container
- `.mega-menu-dark` - Explicit dark (or auto from navbar)
- `.mega-menu-featured` - Highlight box
- Auto-inherits colors from parent navbar variant

**Nested Dropdowns**
```html
<li class="dropdown-submenu">
    <a class="dropdown-item" href="#">Submenu</a>
    <ul class="dropdown-menu">...</ul>
</li>
```
- Supports unlimited nesting depth
- Auto-flips to left when using `.dropdown-menu-end`
- Viewport-aware via JS helper (adds `.submenu-left` / `.submenu-right`)
- Mobile: stacks vertically

**Dropdown Color Inheritance**
- Dark navbars (`.navbar-dark`, `.navbar-solid`, `.navbar-primary`, `.navbar-glass`) → dark dropdowns
- Light navbars (`.navbar-light`, `.navbar-solid-light`, `.navbar-glass-light`) → light dropdowns
- Override with `.dropdown-menu-dark` if needed

**User Menu**
```html
<a class="nav-link dropdown-toggle nav-user" href="#">
    <img class="nav-user-avatar" src="...">
    <span class="nav-user-name">Name</span>
</a>
<ul class="dropdown-menu dropdown-menu-end">
    <li><div class="nav-user-header">
        <div class="nav-user-header-name">Name</div>
        <div class="nav-user-header-email">email@example.com</div>
    </div></li>
    ...
</ul>
```
- Auto-contrast for header text based on navbar/dropdown variant

**Search Integration**
```html
<div class="nav-search">
    <i class="bi bi-search nav-search-icon"></i>
    <input type="search" class="nav-search-input" placeholder="Search...">
</div>
```

**Helper Components**
- `.nav-cta` - CTA button wrapper
- `.navbar-divider` - Vertical separator

**Offcanvas Navbar** 🆕
```html
<button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="offcanvas offcanvas-start offcanvas-navbar" id="offcanvasNav">
    <div class="offcanvas-header">
        <a href="#" class="offcanvas-brand">Brand</a>
        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <div class="offcanvas-drill-container">
            <!-- Drill panels here -->
        </div>
        <div class="offcanvas-footer">
            <!-- Contact, social, CTA -->
        </div>
    </div>
</div>
```

**Features**:
- `.offcanvas-navbar` - Dark variant (default)
- `.offcanvas-navbar-light` - Light variant
- **Drill Panel Navigation** - Hierarchical menu system with smooth slide transitions
- **Branding** - `.offcanvas-brand` with logo support
- **Menu Items** - `.offcanvas-menu-link` with icons and chevrons
- **Back Buttons** - `.offcanvas-back-btn` for reverse navigation
- **Contact Info** - `.offcanvas-contact-item` for phone/email
- **Social Links** - `.offcanvas-social-link` with icon buttons
- **CTA Area** - `.offcanvas-cta` for primary action button

**Drill Panel System**:
- Panels slide in from right with `.offcanvas-drill-panel`
- Parent panel slides left slightly (30%) when child opens
- Use `data-panel="targetId"` to navigate forward
- Use `data-back="targetId"` to navigate back
- Auto-resets to main panel on close

---

### Phase 1: Tab Navigation ✅

**File**: `css/components/_tabs.css`

#### Variants
- `.nav-tabs` - Standard tabs (themed)
- `.nav-pills` - Pill buttons
- `.nav-underline` - Minimal underline
- Dark variants: `.nav-tabs-dark`, `.nav-pills-dark`, `.nav-underline-dark`

#### Features
- Icon support with `.bi` icons
- Badge support in tabs
- Vertical tabs with flex layout
- Proper state handling (active, hover, focus, disabled)

---

### Phase 2: Pagination ✅

**File**: `css/components/_pagination.css`

#### Variants
- `.pagination` - Standard (themed)
- `.pagination-sm` - Small
- `.pagination-lg` - Large
- `.pagination-dark` - Dark background variant

#### States
- Active, disabled, hover, focus all styled

---

### Phase 3: Breadcrumbs ✅

**File**: `css/components/_breadcrumbs.css`

#### Variants
- `.breadcrumb` - Standard (themed)
- `.breadcrumb-dark` - Dark background variant
- Icon support with `.bi` icons

---

## Kitchen Sink Demos

**Location**: `kitchen-sink-2.html`

### Navbar Demos
1. Solid Dark (default)
2. Solid Light
3. Primary Color
4. Glass Effect (Dark)
5. Glass Effect (Light)
6. With Search
7. With User Menu
8. Nested Dropdowns
9. Right-Aligned Nested Dropdowns (edge prevention)
10. Light Navbar with Mega Menu
11. User Menu Variants (dark/light auto-contrast)
12. Mega Menu (dark navbar)
13. **Offcanvas Navbar (Dark)** 🆕
14. **Offcanvas Navbar (Light)** 🆕

### Tab Demos
- Standard Tabs
- Pill Navigation
- Underline Navigation
- Tabs with Icons
- Pills with Badges
- Vertical Tabs
- Dark Background variants

### Pagination Demos
- Basic Pagination
- Large and Small sizes
- With Prev/Next text
- First/Last buttons
- Icon-only navigation
- Dark Background variant

### Breadcrumb Demos
- Basic Breadcrumb
- With Home Icon
- Dark Background variant

---

## JavaScript Helpers

### Scroll Effects
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

### Viewport-Aware Nested Dropdowns
```javascript
// Included in kitchen-sink-2.html
// Auto-adds .submenu-left when nested menu would overflow viewport
document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
  submenu.addEventListener('mouseenter', function() {
    const rect = nestedMenu.getBoundingClientRect();
    if (rect.right > window.innerWidth - 10) {
      this.classList.add('submenu-left');
    }
  });
});
```

### Offcanvas Drill Panel Navigation 🆕
```javascript
// Included in kitchen-sink-2.html
// Handles hierarchical drill-in/drill-out panel navigation
document.querySelectorAll('.offcanvas-navbar').forEach(offcanvas => {
  // Forward navigation
  offcanvas.querySelectorAll('[data-panel]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPanel = container.querySelector(`#${this.dataset.panel}`);
      currentPanel.classList.remove('active');
      currentPanel.classList.add('parent');
      targetPanel.classList.add('active');
    });
  });
  
  // Back navigation
  offcanvas.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPanel = container.querySelector(`#${this.dataset.back}`);
      currentPanel.classList.remove('active');
      targetPanel.classList.remove('parent');
      targetPanel.classList.add('active');
    });
  });
  
  // Auto-reset to main panel on close
  offcanvas.addEventListener('hidden.bs.offcanvas', function() {
    // Reset all panels to initial state
  });
});
```

---

## Responsive Behavior

All navigation components have mobile-first responsive behavior defined in `_responsive.css`:

- **Navbar**: Search full-width, user name hidden, CTA centered
- **Mega Menu**: Stacks vertically on mobile
- **Offcanvas**: Full mobile support with touch-friendly drill panels
- **Nested Dropdowns**: Stack vertically, indented
- **Vertical Tabs**: Remain vertical, full width
- **Pagination**: Wraps naturally
  --bs-nav-tabs-border-radius: 0;
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.75rem;
  
  /* Pagination */
  --bs-pagination-padding-x: 0.75rem;
  --bs-pagination-padding-y: 0.5rem;
  --bs-pagination-border-radius: var(--bs-border-radius);
  
  /* Breadcrumbs */
  --bs-breadcrumb-divider: "›";
  --bs-breadcrumb-divider-color: var(--bs-gray-400);
}
```

---

## Implementation Checklist

### Phase 0: Navbar Enhancements ✅
- [x] Create `_navbar.css` with theme variants
- [x] Add scroll effects (shrink, shadow, background)
- [x] Add mega menu component
- [x] Add mobile nav panel
- [x] Add search bar integration
- [x] Add user menu pattern
- [x] Add navbar demos to kitchen-sink-2.html

### Phase 1: Core Components ✅
- [x] Create `_tabs.css` with nav-tabs, nav-pills, nav-underline
- [x] Create `_pagination.css` with sizes and states
- [x] Create `_breadcrumbs.css` with variants
- [x] Add new variables to `_variables.css`

### Phase 2: Enhancements ✅
- [x] Add tab icons and badge patterns
- [x] Add vertical tabs layout
- [x] Add load more / infinite scroll patterns
- [x] Add dark variants for all components

### Phase 3: Integration ✅
- [x] Update theme.css imports
- [x] Add responsive rules to `_responsive.css`
- [x] Create kitchen-sink-2.html demos
- [x] Document state demonstrations

---

## Kitchen Sink Structure (kitchen-sink-2.html)

### Sections to Include

0. **Navbar Variants**
   - Default navbar
   - Glass navbar (transparent with blur)
   - Solid navbar variants (light/dark/primary)
   - Scroll effects demo
   - Mega menu dropdown
   - Mobile nav panel
   - Search integration
   - User menu with avatar

1. **Tab Navigation**
   - Basic tabs with content
   - Pills variant
   - Underline variant
   - Vertical tabs
   - Tabs with icons
   - Tabs with badges
   - Dark variants
   - State demonstrations (active, hover, focus, disabled)

2. **Pagination**
   - Basic pagination
   - Small/Large sizes
   - With first/last buttons
   - Centered pagination
   - Simple prev/next
   - Dark variant
   - State demonstrations

3. **Load More Patterns**
   - Load more button
   - Loading spinner state
   - Infinite scroll indicator
   - "No more content" state

4. **Breadcrumbs**
   - Basic breadcrumb
   - With icons
   - Custom separators
   - Dark variant

---

## Notes

- All components follow BS5 naming conventions
- Override existing BS5 classes rather than creating new ones where possible
- All values use CSS custom properties (`--bs-*`)
- All media queries go in `_responsive.css`
- Light/dark variants follow established pattern (`-dark` suffix)
- State classes follow BS5 conventions (`.active`, `.disabled`)
- Test keyboard navigation for accessibility compliance
