# StoneWick Theme — Base Theme Instructions

> **Load for**: Component selection, file structure, CSS architecture.

---

## 🗂️ FILE STRUCTURE

```
/css/
  _variables.css      # Tokens only (:root)
  _base.css           # Element resets
  _typography.css     # Type scale, text utilities
  _bs5-overrides.css  # Bootstrap overrides
  _layout.css         # Header, footer, sections
  _components.css     # Shared components
  _utilities.css      # Custom utilities (BS5 extensions)
  _responsive.css     # ALL @media queries
  theme.css           # Entry point
  
  /components/        # Isolated components
    _cards.css, _badges.css, _tables.css, _hero.css,
    _metrics.css, _timeline.css, _modals.css, etc.
```

**Key rules**:
- ALL media queries → `_responsive.css`
- New components → `/components/_name.css`
- Always use CSS variables, never hardcode

---

## 🎨 COMPONENT CATALOG

### Cards (with own backgrounds)
| Light bg section | Dark bg section |
|------------------|-----------------|
| `card-service` | `card-service-dark` |
| `card-feature` | `card-feature-dark` |
| `card-benefit` | `card-benefit-dark` |
| `commerce-card` | `commerce-card-dark` |
| `metric-item` (always white) | `card-glass` |

### Other Components
- `process-timeline` — transparent, inherits section color
- `comparison-slider` — white bg
- `video-theater` — dark bg
- `channel-header-compact` / `channel-header-full` — light/dark variants

### Background Sections
| Background Class | Type | Text Color Required |
|------------------|------|---------------------|
| `bg-light` | Light | Dark text (default) |
| `bg-dark` | Dark | `text-white` |
| `bg-dark-gradient` | Dark | `text-white` |
| `bg-trust` | Dark gradient | `text-white` / `text-white-70` |
| `bg-packages` | Light | Dark text (default) |

**⚠️ DARK BACKGROUND SECTIONS REQUIRE EXPLICIT TEXT COLORS**
Dark sections (`bg-dark`, `bg-dark-gradient`, `bg-trust`) set `color: white` globally. All text elements must have explicit light text classes or they will be invisible.

---

## ⚠️ THE CRITICAL RULE

**Component background determines text color. Section is irrelevant.**

`metric-item` has white background. Even in `bg-dark` section, its content needs dark text.

**EXCEPTION: Direct section content on dark backgrounds**
When content is directly in a dark section (not inside a component with its own background), you MUST add explicit text colors:
- `text-white` for headings and primary text
- `text-white-70` for secondary text
- `text-white-50` for muted text

**Anti-pattern (invisible text):**
```html
<section class="bg-trust">
    <h2>Heading</h2> <!-- INVISIBLE: inherits white but bg-trust sets white text -->
    <p class="text-muted">Text</p> <!-- INVISIBLE: dark text on dark background -->
</section>

<section class="bg-trust">
    <h2 class="text-white">Heading</h2> <!-- ✅ VISIBLE -->
    <p class="text-white-70">Text</p> <!-- ✅ VISIBLE -->
</section>
```

---

## 📐 NAMING CONVENTIONS

- Component: `.card-service`
- Element: `.card-service-icon`
- Modifier: `.card-service-dark`
- State: `.card-service.featured`

---

## 🔍 CLASS VALIDATION

1. Search `/css/` for class
2. Found → theme class
3. Not found → check if BS5 utility
4. Not BS5 → garbage (delete it)
