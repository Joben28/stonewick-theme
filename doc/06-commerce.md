# Commerce Components

E-commerce and blog components including product cards, pricing tables, blog cards, and commerce UI elements.

---

## Table of Contents

1. [Blog Cards](#blog-cards)
   - [Standard Blog Cards](#standard-blog-cards)
   - [Featured Blog Card](#featured-blog-card)
   - [Minimal Blog Cards](#minimal-blog-cards)
2. [Blog List Items](#blog-list-items)
   - [Standard Blog List](#standard-blog-list)
   - [Compact Blog List](#compact-blog-list)
3. [Product Cards](#product-cards)
   - [Standard Product Cards](#standard-product-cards)
   - [Product Cards with Hover Effects](#product-cards-with-hover-effects)
4. [Product List Items](#product-list-items)
   - [Standard Product List](#standard-product-list)
   - [Compact Product List](#compact-product-list)
5. [Product Badges](#product-badges)
6. [Rating System](#rating-system)
7. [Pricing Display](#pricing-display)

---

## Blog Cards

### Standard Blog Cards

Vertical card layout for blog posts with image, metadata, title, excerpt, author info, and reading time.

```html
<article class="blog-card">
    <a href="#" class="blog-card-image">
        <img src="https://picsum.photos/seed/blog1/800/500" alt="Blog post">
    </a>
    <div class="blog-card-body">
        <div class="blog-card-meta">
            <span class="blog-card-category">Technology</span>
            <span class="blog-card-date">Jan 28, 2026</span>
        </div>
        <h4 class="blog-card-title">
            <a href="#">Getting Started with Modern Web Development</a>
        </h4>
        <p class="blog-card-excerpt">Learn the essential tools and frameworks needed to build modern, responsive websites in 2026.</p>
        <div class="blog-card-footer">
            <div class="blog-card-author">
                <img src="https://i.pravatar.cc/32?img=12" alt="Author" class="blog-card-author-avatar">
                <span class="blog-card-author-name">Sarah Chen</span>
            </div>
            <span class="blog-card-reading-time">
                <i class="bi bi-clock"></i> 5 min read
            </span>
        </div>
    </div>
</article>
```

**Usage in Grid**:
```html
<div class="row g-4">
    <div class="col-md-6 col-lg-4">
        <article class="blog-card">...</article>
    </div>
    <div class="col-md-6 col-lg-4">
        <article class="blog-card">...</article>
    </div>
    <div class="col-md-6 col-lg-4">
        <article class="blog-card">...</article>
    </div>
</div>
```

**Structure**:
- `.blog-card` - Main card container
- `.blog-card-image` - Featured image wrapper (linked)
- `.blog-card-body` - Content container
- `.blog-card-meta` - Category and date metadata
- `.blog-card-category` - Category label
- `.blog-card-date` - Publication date
- `.blog-card-title` - Post title (h4 with linked anchor)
- `.blog-card-excerpt` - Post summary text
- `.blog-card-footer` - Author and reading time row
- `.blog-card-author` - Author info container
- `.blog-card-author-avatar` - Author profile image
- `.blog-card-author-name` - Author display name
- `.blog-card-reading-time` - Reading duration with icon

### Featured Blog Card

Large horizontal layout for featured posts with enhanced styling.

```html
<article class="blog-card-featured">
    <div class="row g-0">
        <div class="col-lg-6">
            <a href="#" class="blog-card-featured-image">
                <img src="https://picsum.photos/seed/featured1/1200/800" alt="Featured post">
                <span class="blog-card-featured-badge">Featured</span>
            </a>
        </div>
        <div class="col-lg-6">
            <div class="blog-card-featured-body">
                <div class="blog-card-meta">
                    <span class="blog-card-category">Featured</span>
                    <span class="blog-card-date">Jan 30, 2026</span>
                </div>
                <h3 class="blog-card-featured-title">
                    <a href="#">The Future of Web Development: AI and Beyond</a>
                </h3>
                <p class="blog-card-featured-excerpt">Artificial intelligence is revolutionizing how we build websites and applications. Discover the tools and techniques that are shaping the next generation of web development and what it means for developers worldwide.</p>
                <div class="blog-card-footer">
                    <div class="blog-card-author">
                        <img src="https://i.pravatar.cc/40?img=22" alt="Author" class="blog-card-author-avatar">
                        <div>
                            <div class="blog-card-author-name">Dr. Emily Watson</div>
                            <div class="blog-card-author-role">Chief Technology Officer</div>
                        </div>
                    </div>
                    <span class="blog-card-reading-time">
                        <i class="bi bi-clock"></i> 15 min read
                    </span>
                </div>
                <a href="#" class="btn btn-primary mt-3">Read Full Article</a>
            </div>
        </div>
    </div>
</article>
```

**Structure**:
- `.blog-card-featured` - Main featured card container
- `.blog-card-featured-image` - Image container (50% width on desktop)
- `.blog-card-featured-badge` - "Featured" overlay badge
- `.blog-card-featured-body` - Content container (50% width on desktop)
- `.blog-card-featured-title` - Larger h3 heading
- `.blog-card-featured-excerpt` - Longer excerpt text
- `.blog-card-author-role` - Additional author title/role field

### Minimal Blog Cards

Simplified layout without images, focusing on text content.

```html
<article class="blog-card-minimal">
    <span class="blog-card-category-minimal">Tutorial</span>
    <h4 class="blog-card-title-minimal">
        <a href="#">Building Responsive Layouts with CSS Grid</a>
    </h4>
    <p class="blog-card-excerpt-minimal">Master the art of creating flexible, responsive layouts using modern CSS Grid techniques.</p>
    <div class="blog-card-meta-minimal">
        <span>Feb 1, 2026</span>
        <span>·</span>
        <span>6 min read</span>
    </div>
</article>
```

**Usage in Grid**:
```html
<div class="row g-4">
    <div class="col-md-6 col-lg-4">
        <article class="blog-card-minimal">...</article>
    </div>
    <div class="col-md-6 col-lg-4">
        <article class="blog-card-minimal">...</article>
    </div>
    <div class="col-md-6 col-lg-4">
        <article class="blog-card-minimal">...</article>
    </div>
</div>
```

**Structure**:
- `.blog-card-minimal` - Main container
- `.blog-card-category-minimal` - Category badge/label
- `.blog-card-title-minimal` - Post title (h4)
- `.blog-card-excerpt-minimal` - Post excerpt
- `.blog-card-meta-minimal` - Date and reading time (inline, dot-separated)

---

## Blog List Items

### Standard Blog List

Horizontal layout for blog archives and search results.

```html
<div class="blog-list">
    <article class="blog-list-item">
        <a href="#" class="blog-list-image">
            <img src="https://picsum.photos/seed/list1/400/300" alt="Blog post">
        </a>
        <div class="blog-list-content">
            <div class="blog-card-meta">
                <span class="blog-card-category">Development</span>
                <span class="blog-card-date">Jan 31, 2026</span>
            </div>
            <h4 class="blog-list-title">
                <a href="#">Complete Guide to React Hooks</a>
            </h4>
            <p class="blog-list-excerpt">Learn how to use React Hooks to manage state and side effects in your functional components with practical examples.</p>
            <div class="blog-card-footer">
                <div class="blog-card-author">
                    <img src="https://i.pravatar.cc/32?img=25" alt="Author" class="blog-card-author-avatar">
                    <span class="blog-card-author-name">David Kim</span>
                </div>
                <span class="blog-card-reading-time">
                    <i class="bi bi-clock"></i> 14 min read
                </span>
            </div>
        </div>
    </article>

    <article class="blog-list-item">
        <a href="#" class="blog-list-image">
            <img src="https://picsum.photos/seed/list2/400/300" alt="Blog post">
        </a>
        <div class="blog-list-content">
            <div class="blog-card-meta">
                <span class="blog-card-category">Design</span>
                <span class="blog-card-date">Jan 28, 2026</span>
            </div>
            <h4 class="blog-list-title">
                <a href="#">Color Theory for Web Designers</a>
            </h4>
            <p class="blog-list-excerpt">Understanding color psychology and how to create harmonious color schemes for your web projects.</p>
            <div class="blog-card-footer">
                <div class="blog-card-author">
                    <img src="https://i.pravatar.cc/32?img=28" alt="Author" class="blog-card-author-avatar">
                    <span class="blog-card-author-name">Lisa Park</span>
                </div>
                <span class="blog-card-reading-time">
                    <i class="bi bi-clock"></i> 9 min read
                </span>
            </div>
        </div>
    </article>
</div>
```

**Structure**:
- `.blog-list` - Container for list items
- `.blog-list-item` - Individual list item (horizontal layout)
- `.blog-list-image` - Thumbnail image (fixed width)
- `.blog-list-content` - Main content area
- `.blog-list-title` - Post title (h4)
- `.blog-list-excerpt` - Post summary

### Compact Blog List

Minimal horizontal layout with date badge and no images.

```html
<div class="blog-list-compact">
    <article class="blog-list-compact-item">
        <span class="blog-list-compact-date">Feb 1</span>
        <div class="blog-list-compact-content">
            <h5 class="blog-list-compact-title">
                <a href="#">Introducing Our New Design System</a>
            </h5>
            <p class="blog-list-compact-excerpt">We've been working on a comprehensive design system to streamline our development process.</p>
        </div>
    </article>

    <article class="blog-list-compact-item">
        <span class="blog-list-compact-date">Jan 30</span>
        <div class="blog-list-compact-content">
            <h5 class="blog-list-compact-title">
                <a href="#">5 Tips for Better Code Reviews</a>
            </h5>
            <p class="blog-list-compact-excerpt">Make your code reviews more effective with these practical tips from our engineering team.</p>
        </div>
    </article>

    <article class="blog-list-compact-item">
        <span class="blog-list-compact-date">Jan 27</span>
        <div class="blog-list-compact-content">
            <h5 class="blog-list-compact-title">
                <a href="#">Migrating to TypeScript: Lessons Learned</a>
            </h5>
            <p class="blog-list-compact-excerpt">Our experience transitioning a large JavaScript codebase to TypeScript.</p>
        </div>
    </article>
</div>
```

**Structure**:
- `.blog-list-compact` - Container for compact list items
- `.blog-list-compact-item` - Individual compact item (horizontal flex)
- `.blog-list-compact-date` - Date badge (fixed width, styled box)
- `.blog-list-compact-content` - Title and excerpt container
- `.blog-list-compact-title` - Post title (h5)
- `.blog-list-compact-excerpt` - Brief description

---

## Product Cards

### Standard Product Cards

Vertical product card with image, badges, quick actions, rating, pricing, and add to cart button.

```html
<article class="product-card">
    <div class="product-card-image">
        <img src="https://picsum.photos/seed/prod1/600/600" alt="Product">
        <div class="product-card-badges">
            <span class="product-badge product-badge-sale">Sale</span>
        </div>
        <div class="product-card-actions">
            <button class="product-action-btn" aria-label="Add to wishlist">
                <i class="bi bi-heart"></i>
            </button>
            <button class="product-action-btn" aria-label="Quick view">
                <i class="bi bi-eye"></i>
            </button>
        </div>
    </div>
    <div class="product-card-body">
        <span class="product-card-category">Electronics</span>
        <h4 class="product-card-title">
            <a href="#">Wireless Bluetooth Headphones</a>
        </h4>
        <div class="product-card-rating">
            <div class="product-stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
            </div>
            <span class="product-rating-count">(127)</span>
        </div>
        <div class="product-card-price">
            <span class="product-price-current">$79.99</span>
            <span class="product-price-original">$119.99</span>
        </div>
        <button class="btn btn-primary w-100 mt-3">Add to Cart</button>
    </div>
</article>
```

**Usage in Grid**:
```html
<div class="row g-4">
    <div class="col-md-6 col-lg-3">
        <article class="product-card">...</article>
    </div>
    <div class="col-md-6 col-lg-3">
        <article class="product-card">...</article>
    </div>
    <div class="col-md-6 col-lg-3">
        <article class="product-card">...</article>
    </div>
    <div class="col-md-6 col-lg-3">
        <article class="product-card">...</article>
    </div>
</div>
```

**Structure**:
- `.product-card` - Main card container
- `.product-card-image` - Image container with overlay elements
- `.product-card-badges` - Badge container (top-left)
- `.product-card-actions` - Quick action buttons (hover overlay)
- `.product-action-btn` - Icon button (wishlist, quick view)
- `.product-card-body` - Content container
- `.product-card-category` - Product category label
- `.product-card-title` - Product name (h4 with linked anchor)
- `.product-card-rating` - Star rating and count container
- `.product-card-price` - Price display container

### Product Cards with Hover Effects

Enhanced product card with image swap on hover and quick add button.

```html
<article class="product-card product-card-hover">
    <div class="product-card-image">
        <img src="https://picsum.photos/seed/hover1/600/600" alt="Product" class="product-image-primary">
        <img src="https://picsum.photos/seed/hover1b/600/600" alt="Product alternate" class="product-image-secondary">
        <div class="product-card-actions">
            <button class="product-action-btn" aria-label="Add to wishlist">
                <i class="bi bi-heart"></i>
            </button>
            <button class="product-action-btn" aria-label="Quick view">
                <i class="bi bi-eye"></i>
            </button>
        </div>
        <button class="product-quick-add">Quick Add</button>
    </div>
    <div class="product-card-body">
        <span class="product-card-category">Tech</span>
        <h4 class="product-card-title">
            <a href="#">Smart Watch Pro</a>
        </h4>
        <div class="product-card-rating">
            <div class="product-stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
            </div>
            <span class="product-rating-count">(312)</span>
        </div>
        <div class="product-card-price">
            <span class="product-price-current">$299.00</span>
        </div>
    </div>
</article>
```

**Features**:
- `.product-card-hover` - Modifier class for hover effects
- `.product-image-primary` - Default visible image
- `.product-image-secondary` - Alternate image (shows on hover)
- `.product-quick-add` - Quick add to cart button (appears on hover)

**Behavior**:
- Hover reveals secondary image with smooth fade
- Quick Add button slides up from bottom on hover
- Action buttons remain visible on hover

---

## Product List Items

### Standard Product List

Horizontal layout for product listings with detailed information.

```html
<div class="product-list">
    <article class="product-list-item">
        <div class="product-list-image">
            <img src="https://picsum.photos/seed/plist1/300/300" alt="Product">
            <div class="product-card-badges">
                <span class="product-badge product-badge-sale">Sale</span>
            </div>
        </div>
        <div class="product-list-content">
            <span class="product-card-category">Electronics</span>
            <h4 class="product-list-title">
                <a href="#">4K Ultra HD Smart TV - 55 Inch</a>
            </h4>
            <div class="product-card-rating">
                <div class="product-stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
                <span class="product-rating-count">(456 reviews)</span>
            </div>
            <p class="product-list-description">
                Experience stunning picture quality with HDR support, smart streaming capabilities, and a sleek modern design. Includes voice control and built-in apps.
            </p>
            <div class="product-list-features">
                <span class="product-feature-tag"><i class="bi bi-check-circle"></i> Free Shipping</span>
                <span class="product-feature-tag"><i class="bi bi-shield-check"></i> 2-Year Warranty</span>
                <span class="product-feature-tag"><i class="bi bi-truck"></i> Fast Delivery</span>
            </div>
        </div>
        <div class="product-list-actions">
            <div class="product-card-price mb-3">
                <span class="product-price-current">$799.99</span>
                <span class="product-price-original">$1,199.99</span>
            </div>
            <button class="btn btn-primary w-100 mb-2">Add to Cart</button>
            <button class="btn btn-outline-secondary w-100">
                <i class="bi bi-heart"></i> Wishlist
            </button>
        </div>
    </article>
</div>
```

**Structure**:
- `.product-list` - Container for list items
- `.product-list-item` - Individual product (3-column layout: image | content | actions)
- `.product-list-image` - Product thumbnail (fixed width)
- `.product-list-content` - Main content area (flexible width)
- `.product-list-title` - Product name (h4)
- `.product-list-description` - Detailed product description
- `.product-list-features` - Feature tags container
- `.product-feature-tag` - Individual feature badge with icon
- `.product-list-actions` - Right column for price and buttons (fixed width)

### Compact Product List

Minimal horizontal layout for sidebars or small spaces.

```html
<div class="product-list-compact">
    <article class="product-list-compact-item">
        <img src="https://picsum.photos/seed/compact1/100/100" alt="Product" class="product-list-compact-image">
        <div class="product-list-compact-content">
            <h5 class="product-list-compact-title">
                <a href="#">Stainless Steel Water Bottle</a>
            </h5>
            <div class="product-card-rating">
                <div class="product-stars product-stars-sm">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                </div>
                <span class="product-rating-count">(89)</span>
            </div>
            <div class="product-card-price">
                <span class="product-price-current">$29.99</span>
            </div>
        </div>
        <div class="product-list-compact-action">
            <button class="btn btn-sm btn-primary">Add</button>
        </div>
    </article>

    <article class="product-list-compact-item">
        <img src="https://picsum.photos/seed/compact2/100/100" alt="Product" class="product-list-compact-image">
        <div class="product-list-compact-content">
            <h5 class="product-list-compact-title">
                <a href="#">Organic Cotton Tote Bag</a>
            </h5>
            <div class="product-card-rating">
                <div class="product-stars product-stars-sm">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <span class="product-rating-count">(156)</span>
            </div>
            <div class="product-card-price">
                <span class="product-price-current">$19.99</span>
            </div>
        </div>
        <div class="product-list-compact-action">
            <button class="btn btn-sm btn-primary">Add</button>
        </div>
    </article>
</div>
```

**Structure**:
- `.product-list-compact` - Container for compact list items
- `.product-list-compact-item` - Individual product (horizontal flex)
- `.product-list-compact-image` - Small thumbnail (100x100px)
- `.product-list-compact-content` - Title, rating, and price
- `.product-list-compact-title` - Product name (h5)
- `.product-stars-sm` - Small star rating variant
- `.product-list-compact-action` - Add button container

---

## Product Badges

Product status badges that appear on product card images.

### Badge Variants

```html
<!-- Sale Badge -->
<span class="product-badge product-badge-sale">Sale</span>
<span class="product-badge product-badge-sale">-30%</span>

<!-- New Badge -->
<span class="product-badge product-badge-new">New</span>

<!-- Trending Badge -->
<span class="product-badge product-badge-trending">Trending</span>

<!-- Low Stock Badge -->
<span class="product-badge product-badge-stock">Low Stock</span>
```

**Badge Usage in Product Card**:
```html
<div class="product-card-image">
    <img src="product.jpg" alt="Product">
    <div class="product-card-badges">
        <span class="product-badge product-badge-sale">Sale</span>
    </div>
</div>
```

**Badge Variants**:
- `.product-badge-sale` - Red/pink badge for sales and discounts
- `.product-badge-new` - Blue badge for new products
- `.product-badge-trending` - Purple/violet badge for trending items
- `.product-badge-stock` - Orange/amber badge for low stock warnings

**Positioning**: Badges appear in top-left corner of product image via `.product-card-badges` container.

---

## Rating System

Star rating display for products and reviews.

### Standard Rating

```html
<div class="product-card-rating">
    <div class="product-stars">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
    </div>
    <span class="product-rating-count">(127)</span>
</div>
```

### Small Rating (for compact layouts)

```html
<div class="product-card-rating">
    <div class="product-stars product-stars-sm">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
    </div>
    <span class="product-rating-count">(89)</span>
</div>
```

**Structure**:
- `.product-card-rating` - Container for stars and count
- `.product-stars` - Star icons container
- `.product-stars-sm` - Modifier for smaller stars
- `.product-rating-count` - Review count (parentheses)

**Star Icons**:
- `.bi-star-fill` - Filled star (full rating)
- `.bi-star-half` - Half-filled star (0.5 rating)
- `.bi-star` - Empty star (0 rating)

**Rating Examples**:
- 5 stars: 5x `bi-star-fill`
- 4.5 stars: 4x `bi-star-fill` + 1x `bi-star-half`
- 4 stars: 4x `bi-star-fill` + 1x `bi-star`
- 3.5 stars: 3x `bi-star-fill` + 1x `bi-star-half` + 1x `bi-star`

---

## Pricing Display

Price formatting for products with sale pricing support.

### Current Price Only

```html
<div class="product-card-price">
    <span class="product-price-current">$45.00</span>
</div>
```

### Sale Pricing (Current + Original)

```html
<div class="product-card-price">
    <span class="product-price-current">$79.99</span>
    <span class="product-price-original">$119.99</span>
</div>
```

**Structure**:
- `.product-card-price` - Price container
- `.product-price-current` - Current/sale price (bold, prominent)
- `.product-price-original` - Original price (strikethrough, muted)

**Styling**:
- Current price: Bold, larger font, primary color
- Original price: Strikethrough, smaller font, muted color
- Automatically calculates visual discount percentage via contrast

---

## Interactive Features

### Wishlist Toggle

Product cards include wishlist buttons that toggle between outline and filled heart icons.

```javascript
// Wishlist toggle (included in demo)
document.querySelectorAll('.product-action-btn').forEach(btn => {
    if (btn.querySelector('.bi-heart')) {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('bi-heart');
            icon.classList.toggle('bi-heart-fill');
        });
    }
});
```

### Quick Add Button

Product cards with hover effects include a Quick Add button with feedback animation.

```javascript
// Quick add with feedback (included in demo)
document.querySelectorAll('.product-quick-add').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Added!';
        this.style.backgroundColor = 'var(--bs-success)';
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 1500);
    });
});
```

---

## Component Guidelines

### Blog Components

**Best Practices**:
- Use standard blog cards for main content areas and archives
- Use featured card for hero/promotional posts
- Use minimal cards for sidebars or dense layouts
- Use blog list items for search results and category pages
- Use compact list for "recent posts" widgets
- Always include reading time for better UX
- Include author avatars for credibility and personality

**Responsive Behavior**:
- Cards stack vertically on mobile (col-md-6 col-lg-4 for 3-column)
- Featured card image stacks above content on mobile
- Blog list items stack vertically on mobile
- Compact list remains horizontal but scales down

### Product Components

**Best Practices**:
- Use standard product cards for main shop/category pages
- Add `.product-card-hover` for enhanced shopping experience
- Use product list items for search results with filters
- Use compact list for cart sidebars or related products
- Always include product ratings for social proof
- Show original price on sale items for perceived value
- Use clear, descriptive product titles

**Responsive Behavior**:
- Product cards: 1 column mobile, 2 columns tablet, 3-4 columns desktop
- Product list items stack to vertical layout on mobile
- Action buttons go full-width on mobile
- Images scale proportionally

### Accessibility

- All action buttons include `aria-label` attributes
- Images include descriptive `alt` text
- Links are keyboard accessible
- Color contrast meets WCAG AA standards
- Focus states visible on all interactive elements

### Performance

- Use appropriately sized images (800x500 for blog cards, 600x600 for product cards)
- Lazy load images below the fold
- Optimize images with modern formats (WebP with fallbacks)
- Consider implementing image CDN for product catalogs

---

## Related Components

- **Commerce Cards** (light/dark): See [01-cards-badges.md](01-cards-badges.md)
- **Pricing Tables**: See [01-cards-badges.md](01-cards-badges.md)
- **Hero Sections**: See [02-heroes-layout.md](02-heroes-layout.md)
- **Navigation**: See [03-navigation.md](03-navigation.md)

---

## Demo Page

View all commerce components: [ks-commerce.html](../ks-commerce.html)
