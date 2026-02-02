# Data & Tables Components

Complete documentation for tables, metrics, timelines, and data visualization components in the StoneWick Theme.

---

## Table of Contents

1. [Pricing Tables](#pricing-tables)
2. [Bootstrap Data Tables](#bootstrap-data-tables)
3. [Metric Displays](#metric-displays)
4. [Image Comparison Slider](#image-comparison-slider)
5. [Process Timelines](#process-timelines)
6. [Accordions](#accordions)
7. [Responsive Patterns](#responsive-patterns)

---

## Pricing Tables

Feature comparison tables designed for pricing pages and service comparisons.

### Dark Variant (Default)

**Use on:** `.bg-dark`, `.bg-dark-gradient`, `.bg-trust`, `.bg-packages`

```html
<div class="pricing-table-container">
    <table class="pricing-table">
        <thead>
            <tr>
                <th>Features</th>
                <th>Starter</th>
                <th class="featured">Professional</th>
                <th>Enterprise</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Pages</td>
                <td>Up to 5</td>
                <td class="featured">Up to 15</td>
                <td>Unlimited</td>
            </tr>
            <tr>
                <td>Custom Domain</td>
                <td><i class="bi bi-check-circle text-success"></i></td>
                <td class="featured"><i class="bi bi-check-circle text-success"></i></td>
                <td><i class="bi bi-check-circle text-success"></i></td>
            </tr>
            <tr>
                <td>SSL Certificate</td>
                <td><i class="bi bi-check-circle text-success"></i></td>
                <td class="featured"><i class="bi bi-check-circle text-success"></i></td>
                <td><i class="bi bi-check-circle text-success"></i></td>
            </tr>
            <tr>
                <td>Analytics</td>
                <td>Basic</td>
                <td class="featured">Advanced</td>
                <td>Enterprise</td>
            </tr>
            <tr>
                <td>Support</td>
                <td>Email</td>
                <td class="featured">Priority</td>
                <td>Dedicated</td>
            </tr>
            <tr>
                <td>Price</td>
                <td><strong>$29/mo</strong></td>
                <td class="featured"><strong>$79/mo</strong></td>
                <td><strong>$199/mo</strong></td>
            </tr>
        </tbody>
    </table>
</div>
```

**Key Features:**
- Glassmorphic design with backdrop blur
- Featured column highlighting (`.featured` class)
- Icon support for checkmarks/crosses
- Responsive horizontal scroll on mobile

### Light Variant

**Use on:** `.bg-light`, white backgrounds

```html
<div class="pricing-table-container">
    <table class="pricing-table-light">
        <thead>
            <tr>
                <th>Features</th>
                <th>Basic</th>
                <th class="featured">Pro</th>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Users</td>
                <td>1</td>
                <td class="featured">5</td>
                <td>Unlimited</td>
            </tr>
            <tr>
                <td>Storage</td>
                <td>5 GB</td>
                <td class="featured">50 GB</td>
                <td>500 GB</td>
            </tr>
            <tr>
                <td>API Access</td>
                <td><i class="bi bi-x-circle text-muted"></i></td>
                <td class="featured"><i class="bi bi-check-circle text-success"></i></td>
                <td><i class="bi bi-check-circle text-success"></i></td>
            </tr>
            <tr>
                <td>Price</td>
                <td><strong>$9/mo</strong></td>
                <td class="featured"><strong>$29/mo</strong></td>
                <td><strong>$99/mo</strong></td>
            </tr>
        </tbody>
    </table>
</div>
```

**Styling Tips:**
- First column (`<th>`) contains feature names
- Use `.featured` on `<th>` and `<td>` to highlight recommended plan
- Use Bootstrap Icons for visual indicators:
  - `bi-check-circle` with `.text-success` for included features
  - `bi-x-circle` with `.text-muted` for excluded features
- Bold important text (like prices) with `<strong>` tags

---

## Bootstrap Data Tables

The theme includes Bootstrap 5.3.2 table utilities with custom styling.

### Default Table

```html
<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Developer</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>Designer</td>
        </tr>
    </tbody>
</table>
```

### Table Variants

#### Striped Rows
```html
<table class="table table-striped">
    <!-- table content -->
</table>
```

#### Hoverable Rows
```html
<table class="table table-hover">
    <!-- table content -->
</table>
```

#### Bordered Table
```html
<table class="table table-bordered">
    <!-- table content -->
</table>
```

#### Borderless Table
```html
<table class="table table-borderless">
    <!-- table content -->
</table>
```

#### Small/Compact Table
```html
<table class="table table-sm">
    <!-- table content -->
</table>
```

#### Combine Utilities
```html
<table class="table table-striped table-hover table-bordered">
    <!-- table content -->
</table>
```

### Table Color Variants

Use contextual classes on rows or cells:

```html
<table class="table">
    <tr class="table-primary">...</tr>
    <tr class="table-secondary">...</tr>
    <tr class="table-success">...</tr>
    <tr class="table-danger">...</tr>
    <tr class="table-warning">...</tr>
    <tr class="table-info">...</tr>
    <tr class="table-light">...</tr>
    <tr class="table-dark">...</tr>
</table>
```

---

## Metric Displays

Stats display components with icon, value, and label.

### Metric Item

**Use on:** Light backgrounds (default), white backgrounds

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
            <i class="bi bi-shield-check"></i>
            <div class="metric-value">100%</div>
            <div class="metric-label">Security Score</div>
        </div>
    </div>
    <div class="col-md-3 col-6">
        <div class="metric-item">
            <i class="bi bi-graph-up-arrow"></i>
            <div class="metric-value">3x</div>
            <div class="metric-label">Conversion Rate</div>
        </div>
    </div>
    <div class="col-md-3 col-6">
        <div class="metric-item">
            <i class="bi bi-trophy"></i>
            <div class="metric-value">A+</div>
            <div class="metric-label">Google Score</div>
        </div>
    </div>
</div>
```

**Structure:**
- `.metric-item` - Container with centered text
- Icon - Bootstrap Icon at top
- `.metric-value` - Large primary number/text
- `.metric-label` - Small descriptive label below

**Responsive Grid:**
- Mobile: 2 columns (`.col-6`)
- Tablet+: 4 columns (`.col-md-3`)
- Use `.g-4` for consistent gutter spacing

**Icon Guidelines:**
- Use thematic Bootstrap Icons that represent the metric
- Icons automatically styled with primary color
- Common icons: `bi-speedometer2`, `bi-shield-check`, `bi-graph-up-arrow`, `bi-trophy`, `bi-lightning`, `bi-check2-circle`

---

## Image Comparison Slider

Interactive before/after image comparison with draggable handle. Works with both mouse and touch input.

### Basic Implementation

```html
<div class="comparison-slider">
    <div class="comparison-label comparison-label-before">Before</div>
    <div class="comparison-label comparison-label-after">After</div>
    <div class="comparison-before">
        <img src="before.jpg" alt="Before" class="comparison-image">
    </div>
    <div class="comparison-after">
        <img src="after.jpg" alt="After" class="comparison-image">
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

### In Responsive Container

```html
<div class="row justify-content-center">
    <div class="col-lg-10">
        <div class="comparison-slider">
            <!-- slider content -->
        </div>
    </div>
</div>
```

**Component Structure:**
- `.comparison-slider` - Main container
- `.comparison-before` - Before image container
- `.comparison-after` - After image container (clipped dynamically)
- `.comparison-image` - Image styling
- `.comparison-handle` - Draggable handle
- `.comparison-handle-line` - Vertical divider line
- `.comparison-handle-circle` - Circle with chevron icons
- `.comparison-label-before` / `.comparison-label-after` - Label overlays

**Features:**
- **Mouse Support:** Click and drag handle or click anywhere to jump
- **Touch Support:** Swipe on mobile devices
- **Default Position:** 50% (set via `data-position` attribute)
- **Visual Feedback:** Labels show "Before" and "After"
- **Works on Any Background:** Automatically adjusts contrast

**JavaScript Required:**
The slider requires JavaScript to function. Script is included in `ks-data.html` (lines 622-675).

**Usage Tips:**
- Images should be the same dimensions for best results
- Use high-quality images for maximum impact
- Works great on both light and dark backgrounds
- Wrap in `.col-lg-10` or similar for optimal width

---

## Process Timelines

Vertical timeline components with numbered markers, perfect for process flows and step-by-step guides.

### Default Timeline

```html
<ol class="process-timeline">
    <li class="process-timeline-item">
        <div class="process-marker">1</div>
        <h3 class="process-title">Discovery</h3>
        <p class="process-text">We learn about your business, goals, and target audience.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">2</div>
        <h3 class="process-title">Design</h3>
        <p class="process-text">Create wireframes and visual designs for approval.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">3</div>
        <h3 class="process-title">Development</h3>
        <p class="process-text">Build your site with clean, efficient code.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker">4</div>
        <h3 class="process-title">Launch</h3>
        <p class="process-text">Deploy and optimize for performance.</p>
    </li>
</ol>
```

### Timeline Style Variants

Modify the visual appearance with these classes on `.process-timeline`:

#### Filled Markers
```html
<ol class="process-timeline timeline-filled">
    <!-- timeline items -->
</ol>
```
- Solid filled markers instead of outlined
- Bold, clean appearance

#### Gradient Markers
```html
<ol class="process-timeline timeline-gradient">
    <!-- timeline items -->
</ol>
```
- Gradient background on markers
- Eye-catching, modern look

#### Icon Markers
```html
<ol class="process-timeline timeline-icon">
    <li class="process-timeline-item">
        <div class="process-marker"><i class="bi bi-search"></i></div>
        <h3 class="process-title">Research</h3>
        <p class="process-text">Using icons instead of numbers.</p>
    </li>
    <li class="process-timeline-item">
        <div class="process-marker"><i class="bi bi-pencil"></i></div>
        <h3 class="process-title">Design</h3>
        <p class="process-text">Visual iconography.</p>
    </li>
</ol>
```
- Replace numbers with icons
- Use Bootstrap Icons inside `.process-marker`

#### Card Style
```html
<ol class="process-timeline timeline-cards">
    <!-- timeline items -->
</ol>
```
- Content in card containers
- Shadow and elevated appearance

#### Accent Line
```html
<ol class="process-timeline timeline-accent">
    <!-- timeline items -->
</ol>
```
- Colored connecting line
- Enhanced visual flow

### Size Variants

Control marker and spacing size:

```html
<!-- Large -->
<ol class="process-timeline timeline-lg">
    <!-- timeline items -->
</ol>

<!-- Default (no class needed) -->
<ol class="process-timeline">
    <!-- timeline items -->
</ol>

<!-- Small -->
<ol class="process-timeline timeline-sm">
    <!-- timeline items -->
</ol>
```

### Color Variants

Apply semantic colors:

```html
<!-- Success (green) -->
<ol class="process-timeline timeline-filled timeline-success">
    <li class="process-timeline-item">
        <div class="process-marker">✓</div>
        <h3 class="process-title">Completed</h3>
    </li>
</ol>

<!-- Info (blue) -->
<ol class="process-timeline timeline-filled timeline-info">
    <li class="process-timeline-item">
        <div class="process-marker">i</div>
        <h3 class="process-title">Information</h3>
    </li>
</ol>

<!-- Warning (yellow) -->
<ol class="process-timeline timeline-filled timeline-warning">
    <li class="process-timeline-item">
        <div class="process-marker">!</div>
        <h3 class="process-title">Warning</h3>
    </li>
</ol>

<!-- Secondary (gray) -->
<ol class="process-timeline timeline-filled timeline-secondary">
    <li class="process-timeline-item">
        <div class="process-marker">•</div>
        <h3 class="process-title">Neutral</h3>
    </li>
</ol>
```

### Spacing Variants

```html
<!-- Compact spacing -->
<ol class="process-timeline timeline-compact">
    <!-- timeline items -->
</ol>

<!-- Spacious (more breathing room) -->
<ol class="process-timeline timeline-spacious">
    <!-- timeline items -->
</ol>
```

### Layout Variants

#### Horizontal Timeline (Desktop)
```html
<ol class="process-timeline timeline-horizontal">
    <!-- timeline items -->
</ol>
```
- Horizontal layout on desktop
- Reverts to vertical on mobile
- Best for 3-5 steps

#### Alternating Sides
```html
<ol class="process-timeline timeline-alternating">
    <!-- timeline items -->
</ol>
```
- Items alternate left/right on desktop
- Creates zigzag pattern
- Vertical on mobile

### Combining Variants

You can combine multiple modifier classes:

```html
<ol class="process-timeline timeline-filled timeline-gradient timeline-lg timeline-cards">
    <!-- Large, filled, gradient markers with card-style content -->
</ol>

<ol class="process-timeline timeline-icon timeline-success timeline-sm">
    <!-- Small, green, icon-based timeline -->
</ol>
```

### Responsive Considerations

- Timelines are vertical by default (mobile-first)
- Use `.timeline-horizontal` for horizontal layout on desktop (reverts to vertical on mobile)
- Use `.col-lg-8` or similar containers to constrain width on large screens
- All variants are fully responsive

---

## Accordions

Collapsible content sections using Bootstrap's accordion component. Perfect for FAQs, documentation, and content organization.

### Basic Accordion

```html
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                What services do you offer?
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                We offer web development, mobile app development, UI/UX design, and ongoing maintenance services.
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                How long does a typical project take?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks.
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Do you provide ongoing support?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Yes! We offer maintenance packages that include updates, security patches, and support.
            </div>
        </div>
    </div>
</div>
```

**Key Elements:**
- `.accordion` - Container with unique ID
- `.accordion-item` - Each collapsible section
- `.accordion-header` - Header container (must be `<h2>`)
- `.accordion-button` - Clickable trigger button
- `.accordion-collapse` - Collapsible content wrapper
- `.accordion-body` - Content container
- `.show` - Add to first item to expand by default
- `.collapsed` - Add to closed items

**Important Attributes:**
- `data-bs-toggle="collapse"` - Required on button
- `data-bs-target="#id"` - Points to collapse element
- `data-bs-parent="#accordionId"` - Ensures only one item open at a time
- Matching IDs between button target and collapse element

### Accordion with Icons

Add icons to accordion headers:

```html
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            <i class="bi bi-rocket-takeoff me-2 text-primary"></i>
            How long does a typical project take?
        </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
            Most projects are completed within 4-8 weeks, depending on complexity.
        </div>
    </div>
</div>
```

**Icon Tips:**
- Use Bootstrap Icons with `.me-2` for spacing
- Add `.text-primary` or other color classes for visual interest
- Choose icons that represent the question/topic

### Enhanced Accordion Features

The theme includes optional enhancements for accordions:

#### Search Input
```html
<div class="accordion-search">
    <i class="bi bi-search accordion-search-icon"></i>
    <input type="text" class="accordion-search-input" placeholder="Search FAQ...">
</div>
```

#### Expand/Collapse Controls
```html
<div class="accordion-controls">
    <button class="accordion-control-btn">
        <i class="bi bi-arrows-expand"></i>
        Expand All
    </button>
    <button class="accordion-control-btn">
        <i class="bi bi-arrows-collapse"></i>
        Collapse All
    </button>
</div>
```

#### Progress Tracking
```html
<div class="accordion-progress">
    <div class="accordion-progress-bar">
        <div class="accordion-progress-fill" style="width: 40%;"></div>
    </div>
    <span class="accordion-progress-text">2 of 5 viewed</span>
</div>
```

### Complete Enhanced Accordion Example

```html
<div class="row">
    <div class="col-lg-8">
        <!-- Search -->
        <div class="accordion-search">
            <i class="bi bi-search accordion-search-icon"></i>
            <input type="text" class="accordion-search-input" placeholder="Search FAQ...">
        </div>
        
        <!-- Controls -->
        <div class="accordion-controls">
            <button class="accordion-control-btn">
                <i class="bi bi-arrows-expand"></i>
                Expand All
            </button>
            <button class="accordion-control-btn">
                <i class="bi bi-arrows-collapse"></i>
                Collapse All
            </button>
        </div>
        
        <!-- Progress -->
        <div class="accordion-progress">
            <div class="accordion-progress-bar">
                <div class="accordion-progress-fill" style="width: 40%;"></div>
            </div>
            <span class="accordion-progress-text">2 of 5 viewed</span>
        </div>
        
        <!-- Accordion with icons -->
        <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                        <i class="bi bi-rocket-takeoff me-2 text-primary"></i>
                        How long does a typical project take?
                    </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Most projects are completed within 4-8 weeks, depending on complexity.
                    </div>
                </div>
            </div>
            <!-- More items... -->
        </div>
    </div>
</div>
```

**Note:** Enhanced features (search, controls, progress) require custom JavaScript implementation. Base accordion functionality works with Bootstrap's built-in JavaScript.

### Accordion Best Practices

1. **Use Semantic HTML:** Always use `<h2>` for accordion headers (required by Bootstrap)
2. **Unique IDs:** Ensure each accordion and collapse element has a unique ID
3. **Parent Linking:** Use `data-bs-parent` to auto-close other items when one opens
4. **Default State:** Add `.show` to first item's collapse div to open by default
5. **Accessibility:** Bootstrap handles ARIA attributes automatically
6. **Width Control:** Wrap accordions in `.col-lg-8` or similar for better readability

---

## Responsive Patterns

### Pricing Tables

**Desktop (≥768px):**
- Full table with all columns visible
- Fixed layout with optimal column widths
- Featured column clearly highlighted

**Mobile (<768px):**
- Horizontal scroll enabled via `.pricing-table-container`
- Shadows indicate scrollable content
- First column (features) slightly sticky for context

```html
<div class="pricing-table-container">
    <!-- Mobile: swipe to see all columns -->
    <!-- Desktop: all columns visible -->
    <table class="pricing-table">
        <!-- table content -->
    </table>
</div>
```

### Metrics Grid

**Desktop (≥768px):**
- 4 columns: `.col-md-3`
- Horizontal layout with gutters

**Mobile (<768px):**
- 2 columns: `.col-6`
- Stacked in pairs
- Maintains visual balance

```html
<div class="row g-4">
    <div class="col-md-3 col-6">
        <div class="metric-item">...</div>
    </div>
    <!-- Repeat 3 more times -->
</div>
```

### Image Comparison Slider

**All Devices:**
- Fluid width (100% of container)
- Maintains aspect ratio
- Touch-friendly on mobile
- Mouse-friendly on desktop

**Best Practice:**
```html
<div class="row justify-content-center">
    <div class="col-lg-10">
        <!-- Constrains max width on large screens -->
        <div class="comparison-slider">
            <!-- slider content -->
        </div>
    </div>
</div>
```

### Timeline Layouts

**Vertical Timeline (Default):**
- Works on all screen sizes
- Left-aligned markers
- Content flows down

**Horizontal Timeline:**
```html
<ol class="process-timeline timeline-horizontal">
    <!-- Horizontal on desktop, vertical on mobile -->
</ol>
```

**Alternating Timeline:**
```html
<ol class="process-timeline timeline-alternating">
    <!-- Zigzag on desktop, vertical on mobile -->
</ol>
```

### Accordions

**All Devices:**
- Full width of container
- Collapsible interaction prevents long scrolling
- Touch-friendly click targets

**Recommended Container:**
```html
<div class="row justify-content-center">
    <div class="col-lg-8">
        <!-- Optimal reading width on large screens -->
        <div class="accordion" id="faqAccordion">
            <!-- accordion items -->
        </div>
    </div>
</div>
```

### General Responsive Strategy

1. **Mobile-First:** All components designed for mobile, enhanced for desktop
2. **Touch-Friendly:** Large click/tap targets (44px minimum)
3. **Readable Width:** Constrain content width on large screens (`.col-lg-8`, `.col-lg-10`)
4. **Flexible Grids:** Use Bootstrap grid classes (`.col-6`, `.col-md-4`, `.col-lg-3`)
5. **Overflow Handling:** Horizontal scroll for tables, vertical for accordions
6. **Performance:** Load appropriately sized images for device

### Breakpoints Reference

```css
/* Mobile: < 576px (default) */
/* Tablet: ≥ 576px (.col-sm-*) */
/* Desktop: ≥ 768px (.col-md-*) */
/* Large: ≥ 992px (.col-lg-*) */
/* XL: ≥ 1200px (.col-xl-*) */
/* XXL: ≥ 1400px (.col-xxl-*) */
```

---

## Component File Locations

All data display components are organized in the theme structure:

- **Pricing Tables:** `css/components/_tables.css`
- **Metrics:** `css/components/_metrics.css`
- **Timeline:** `css/components/_timeline.css`
- **Accordions:** Bootstrap core (customized in `css/_bs5-overrides.css`)
- **Comparison Slider:** `css/components/_slider.css`

---

## Testing Checklist

Before deploying data components:

- [ ] Test table overflow/scroll on mobile devices
- [ ] Verify pricing table featured column highlights correctly
- [ ] Ensure metrics display properly in 2-column mobile grid
- [ ] Test image comparison slider with mouse and touch
- [ ] Verify timeline markers align correctly
- [ ] Test accordion expand/collapse behavior
- [ ] Check that icons render correctly
- [ ] Verify color contrast meets accessibility standards
- [ ] Test on various screen sizes (320px to 1920px)
- [ ] Ensure JavaScript interactions work smoothly

---

## Related Documentation

- [Interactive Components](05-interactive.md) - Modals, tabs, sliders
- [Commerce Components](06-commerce.md) - Product cards, pricing
- [Cards & Badges](01-cards-badges.md) - Card components
- [Heroes & Layout](02-heroes-layout.md) - Section layouts

---

**Last Updated:** February 2026  
**Version:** 1.1.0
