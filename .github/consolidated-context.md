# StoneWick Theme — Comprehensive LLM Context

## Overview
StoneWick is a Bootstrap 5 custom theme for building websites, particularly for service businesses like handymen, ministries, and real estate. It emphasizes component-based design with strict rules for text colors based on component backgrounds, not section backgrounds.

## Core Philosophy
- **Component Backgrounds Override Sections**: Text color is determined by the component's own background, not the parent section.
- **Verify Everything**: Always search for all instances before changes, verify after.
- **Custom Classes Are Garbage Unless Defined**: Only use classes found in /css/ or brand CSS.
- **Behavioral Focus**: Instructions prioritize correct working patterns over technical details.

## File Architecture
- `/css/theme.css`: Entry point
- `/css/_variables.css`: CSS custom properties
- `/css/_base.css`: Element resets
- `/css/_typography.css`: Type scale and text utilities
- `/css/_bs5-overrides.css`: Bootstrap modifications
- `/css/_layout.css`: Header, footer, sections
- `/css/_components.css`: Shared components
- `/css/_utilities.css`: BS5 extensions
- `/css/_responsive.css`: All media queries
- `/css/components/`: Isolated component files

## Component Catalog

### Cards (Background Determines Text Color)
| Component | Light Section | Dark Section | Notes |
|-----------|---------------|--------------|-------|
| card-service | White bg, dark text | card-service-dark (dark bg, light text) | Use h4 |
| card-feature | White bg, dark text | card-feature-dark | Use h5 |
| card-benefit | White bg, dark text | card-benefit-dark | Requires flex utilities |
| commerce-card | White bg, dark text | commerce-card-dark | E-commerce focused |
| metric-item | Always white bg, dark text | card-glass (transparent) | Always include icon |
| card-glass | Transparent, inherits section | Transparent, light text | For dark sections |

### Other Components
- process-timeline: Transparent, inherits section color
- comparison-slider: White bg
- video-theater: Dark bg
- channel-header-compact/full: Light/dark variants

### Background Sections
| Class | Type | Required Text Colors |
|-------|------|---------------------|
| bg-light | Light | Default dark text |
| bg-dark | Dark | text-white, text-white-70, text-white-50 |
| bg-dark-gradient | Dark gradient | text-white, text-white-70, text-white-50 |
| bg-trust | Dark gradient | text-white, text-white-70, text-white-50 |
| bg-packages | Light | Default dark text |

## State Classes and Modifiers
- .featured: Highlight border/gradient
- .featured-premium: Amber/gold highlight
- .is-active: Current/visible state
- .is-selected: Selected option
- .completed: Checkmark state
- .has-banner: Avatar overlaps banner
- .has-image: Zero padding for images
- .playing: Video active

## Page Building Rules
- Use .section-title for main section headings
- Apply section padding classes (.py-section, .section-dense) unless custom design
- Use cards for featured/itemized content
- Avoid performative badges
- Stripe sections with alternating backgrounds
- For 4+ sections, use emotional flow with background shifts

## Text Color Rules
- Dark sections require explicit light text classes
- Components with white/light backgrounds need dark text even in dark sections
- Use opacity variants: text-white-70, not text-white opacity-50

## BS5 Gotchas
- Headings don't inherit text-white automatically
- Gutter system overridden (fix in brand CSS)
- Card margins zeroed (use row gaps)
- Link hovers can override component styles

## Garbage Class Replacements
| Garbage | Replacement |
|---------|-------------|
| bg-navy | bg-secondary |
| text-subdued | text-muted |
| section-eyebrow | eyebrow |
| info-card | card-feature or commerce-card |
| info-card-dark | commerce-card-dark or card-glass |
| letter-spacing-* | Remove or define in brand CSS |

## Page Design Philosophy
- Every page fulfills a specific user intent completely before conversion
- Match CTA emotional tone to built momentum
- Show, don't tell: Visual decisions communicate more than words
- Complete fulfillment before escalation

## Verification Workflow
1. Search for ALL instances with exact patterns
2. List results with file:line
3. Read actual file content
4. Plan changes with reasoning
5. Execute with multi_replace_string_in_file
6. Verify old pattern returns 0, new returns expected count

## Interactive Components (JS Required)
- comparison-slider: Drag/touch handling
- video-theater: Toggle .playing class
- modal-custom: Toggle .is-active
- modal-lightbox: Navigation and thumbnail states

## Critical Rules
1. Component bg > Section bg for text colors
2. Verify before and after all changes
3. Custom classes garbage unless defined
4. Use CSS variables, never hardcode
5. All media queries in _responsive.css
6. New components in /components/_name.css