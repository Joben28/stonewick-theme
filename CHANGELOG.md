# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-02-01

### Changed
- **BREAKING CHANGE**: Replaced all hardcoded color values with CSS custom properties throughout the theme
- Button state colors now use `color-mix()` with base variables for dynamic theming
- All `rgba(255, 255, 255, X)` values replaced with `rgba(var(--bs-white-rgb), X)`
- All `rgba(0, 0, 0, X)` values replaced with `rgba(var(--bs-black-rgb), X)`
- All standalone `#ffffff` values replaced with `var(--bs-white)`
- Background gradients now use CSS variables for colors

### Added
- `--bs-black` and `--bs-black-rgb` variables to color palette
- Social media brand colors documented in modals component (Google, Yelp, Facebook, LinkedIn)

### Fixed
- CSS syntax error in modals component (line 1576) causing build failures
- All hardcoded colors now properly reference theme variables for consistent theming

### Technical Details
- **~200+ color replacements** across 25+ CSS files
- Button hover/active states: `color-mix(in srgb, var(--bs-primary) 85%, black)`
- Navigation components: All white rgba values converted to `var(--bs-white-rgb)`
- Media components: Video theater, gallery, and channel headers updated
- Interactive components: Modals, sliders, timelines, section transitions
- Cards & commerce: All component variants updated

This release ensures all theme colors can be customized by overriding root CSS variables, enabling true theme customization without modifying component styles.

## [1.0.0] - 2026-02-01

### Added
- Initial stable release
- Full Bootstrap 5.3.2 theme with CSS custom properties
- Modular CSS architecture
- Light and dark component variants
- Interactive JavaScript components
- Comprehensive documentation

### Components
- **Cards**: card-service, card-feature, card-benefit, card-glass, card-media, card-resource, commerce-card
- **Badges**: badge-gradient, glass-badge, icon-badge
- **Navigation**: navbar (with mega menu), tabs, pagination, breadcrumbs
- **Media**: hero, gallery, media-list, video-theater, channel-header
- **Interactive**: modals, slider, comparison-slider, metrics, timeline
- **Layout**: section transitions (waves, angles), section patterns

### JavaScript
- ComparisonSlider - Before/after image comparison
- VideoTheater - YouTube-style video player
- Modal - Custom modal system with variants
- Slider - Carousel with thumbnail navigation
- Accordion - Enhanced accordion with expand all

[Unreleased]: https://github.com/Joben28/stonewick-theme/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/Joben28/stonewick-theme/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Joben28/stonewick-theme/releases/tag/v1.0.0
