# Page Building Rules

## Section Structure
- Subject-level content sections must have **ONE title** using the `.section-title` class (e.g., main page sections like "Services", "About", "Contact").
- All sections must use a section padding class (e.g., `.py-section`, `.section-dense`) **unless** it's a custom-designed section where the design controls padding (e.g., hero banners, footers).

## Content Presentation
- **Use cards** for featured or itemized content: services, customer options, locations, resources, products, product browsing, etc. Cards provide scannable, contained units for browsing.
- **Avoid badges** for decorative or performative elements (e.g., "Most Popular" labels that don't add substantive value).

## Text Colors & Contrast
- **Dark sections** (`bg-dark`, `bg-dark-gradient`, `bg-trust`) require explicit light text:
  - `text-white` for headings and primary text
  - `text-white-70` for body text  
  - `text-white-50` for muted text
- **Light sections** use default dark text (no classes needed)
- **Components override section colors** - cards with white backgrounds need dark text even in dark sections

## Icon Usage
- **Use icons** in contexts of ambiguity to distinguish items (e.g., payment options like "Cash Payment" vs. "Credit Card" vs. "Financing Plans" need icons for quick heuristic identification).
- Icons are for browsing scenarios where users scan to differentiate (e.g., service categories, location types).
- **Do not overuse**—icons lose value when everything has one. They can also invoke archetypes (e.g., location pins for areas).
- Icons are not a big deal; don't overthink them.

## Visual Rhythm & Emotional Flow
- **Stripe sections** with white, gray, and variant colors for basic alternation.
- **However**, for pages with 4+ sections, consider "page tones" based on user journey. If the tone shifts (e.g., from educational to trust-building to action-oriented), **emotionally invoke it** visually.
  - **Example**: On a service page, shift from brand-establishing (neutral) → educational content (white) → trust-building (light) → consumer confidence/FAQ (accent color) → call-to-action (primary).
  - This creates "feel-first" shifts: Scrolling users sense "something different here" before reading, prompting them to stop and engage if relevant.
  - Prevents emotional deadness where all sections blur together.

## General Principles
- Prefer semantic classes over inline styles for maintainability.
- Test scrolling flow: Does the visual rhythm guide attention to tone shifts?
- Never use ASCII icons, BS5 icons only.
- Avoid cheap novel designs, but not to mistake this rule as to not be creative and innovative. Just don't look for cheap designs that feel like they do something but really only make it look and sound like a good idea.
- When trying to make "circle" things be sure to lookout for mistakes that could cause ovals.
- If a section would be vertically large, consider the type of bg it has can make it look desolate if content is monolithic.
- Consider text pseudo decorations and how they might be considerate of the texts alignment position.