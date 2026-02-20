# StoneWick Theme — Override Instructions

> **Load for**: Evaluating custom classes, legitimate vs garbage CSS, brand scoping.

---

## 🔍 EVALUATING UNKNOWN CLASSES

1. **Search `/css/`** → Found? Theme class.
2. **Search `*-brand.css`** → Found with definition? Brand override.
3. **Is it BS5 utility?** → Yes? Use it.
4. **None of above** → GARBAGE. Delete it.

---

## ✅ LEGITIMATE OVERRIDES

- Scoped to brand class (`.handyman-brand .component`)
- Has actual CSS definition
- Uses theme variables (not hardcoded)
- Extends, doesn't arbitrarily replace

---

## ❌ GARBAGE (DELETE THESE)

- Class in HTML with no CSS definition
- Duplicates BS5 utility (`center-text` → use `text-center`)
- Hardcoded values (`#ff6600` → use `var(--bs-primary)`)
- Unscoped globals

---

## 🧹 COMMON REPLACEMENTS

| Garbage | Use Instead |
|---------|-------------|
| `bg-navy` | `bg-secondary` |
| `text-subdued` | `text-muted` |
| `section-eyebrow` | `eyebrow` |
| `info-card` | `card-feature` or `commerce-card` |
| `info-card-dark` | `commerce-card-dark` or `card-glass` |
| `letter-spacing-*` | Define in brand CSS or remove |

---

## 🏗️ CREATING BRAND OVERRIDES

```css
/* Scoped, uses variables, documented */
.handyman-brand .accordion-button {
    text-transform: uppercase;
    border-left: 4px solid var(--bs-primary);
}
```
