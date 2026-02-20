# StoneWick Theme — BS5 Theming Instructions

> **Load for**: Why CSS breaks, variable inheritance issues, theme-specific gotchas.

---

## ⚠️ STONEWICK-SPECIFIC GOTCHAS

### 1. Headings Don't Inherit text-white
Theme sets `color: var(--bs-heading-color)` on h1-h6.
**Fix**: Add `text-white` explicitly to headings in dark sections.

### 2. Gutter System Broken
Theme sets `--bs-gutter-y: 0` on `.row`.
**Fix**: Override in brand CSS:
```css
.brand .row.g-4 { --bs-gutter-y: 1.5rem; }
```

### 3. Card Margins Zero
Theme removes card margins.
**Fix**: Let row gaps handle spacing, don't add mb-* to cards.

### 4. Link Hovers Override Components
General `a:hover { color: orange }` beats component styles.
**Fix**: Use higher specificity: `footer .social-link:hover`

---

## 💡 DEBUGGING INVISIBLE TEXT

1. Text color = background color?
2. Opacity too low?
3. Element hidden?
4. Z-index behind something?
5. Positioned off-screen?

---

## 📐 USE OPACITY VARIANTS, NOT UTILITIES

```html
<!-- ❌ --> <p class="text-white opacity-50">
<!-- ✅ --> <p class="text-white-50">
```
