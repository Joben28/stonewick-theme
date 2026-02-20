# StoneWick Theme — Script Instructions

> **Load for**: Interactive component JS requirements.

---

## 🎬 COMPONENTS REQUIRING JS

### comparison-slider
- Drag/touch to reveal before/after
- `data-position="50"` sets initial position
- Handle mouse + touch events

### video-theater
- `.playing` class hides overlay, shows video
- Direct video: call `video.play()`, hide overlay
- Iframe: no custom JS needed

### modal-custom
- `.is-active` toggles visibility
- Click overlay or close button removes `.is-active`

### modal-lightbox
- Track current index
- Update `.is-active` on thumbnails
- Handle prev/next navigation

---

## 📐 STATE CLASSES

| Component | State | Effect |
|-----------|-------|--------|
| `.modal-custom` | `.is-active` | Visible |
| `.slider-dot` | `.is-active` | Current slide |
| `.lightbox-thumb` | `.is-active` | Current image |
| `.format-option` | `.is-selected` | Selected format |
| `.video-theater` | `.playing` | Video active |

---

## 🔧 KEY PATTERNS

- Always pair mousedown/touchstart, mousemove/touchmove, mouseup/touchend
- Use `{ passive: false }` when preventing scroll
- Initialize on `DOMContentLoaded`
- Use event delegation for dynamic content
