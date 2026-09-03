# Changelog: UI & Layout Enhancements (September 3, 2026)

This document details all structural modifications, component styling updates, responsive layout refactorings, and asset additions implemented across the project today.

## 1. Asset Additions & Iconography Updates
- **`public/icons/`**: Created dedicated SVG icons for wellness category cards:
  - `icon-ayurveda.svg` (Ayurvedic Healing & Consultation)
  - `icon-yoga.svg` (Yoga & Meditation Sanctuary)
  - `icon-dining.svg` (Mindful Sattvic Cuisine)
  - `icon-nature.svg` (Nature & Peaceful Surroundings)
- **`src/app/page.tsx`**: Integrated the new custom vector icons into the `wellnessOfferings` dataset on the Home landing page.

## 2. Card Design Refinements (`WellnessOfferingCard`)
- **`src/components/Cards.tsx`**: Overhauled `WellnessOfferingCard` layout and visual hierarchy:
  - Extended card height to `minHeight: 380px` and adjusted padding to `3rem 2.25rem` for generous spacing and consistent alignment.
  - Relocated the section icon into the semi-transparent overlapping background circle in the bottom-right corner (`bottom: -30px`, `right: -30px`, `width: 160px`, `height: 160px`).
  - Rendered icons in `--accent-gold` with a `38px` footprint inside the decorative circle, producing a subtle, high-end luxury resort aesthetic.

## 3. "Plan Your Visit" Side-by-Side Section Redesign
- **`src/app/page.tsx`**: Transformed Section 10 ("Plan Your Visit") from a centered single-column layout into a modern 2-column side-by-side layout (`.plan-visit-grid`).
- **`src/app/globals.css`**: Defined CSS classes for the 2-column grid:
  - `.plan-visit-text-block` (`flex: 0 0 42%`): Displays section eyebrow, editorial heading, and description with clean line height and left alignment.
  - `.plan-visit-form-block` (`flex: 1 1 54%`): Embeds the enquiry form in a dedicated side panel.
  - Added responsive `@media (max-width: 768px)` breakdown to stack text above the form seamlessly on mobile viewports.

## 4. Enquiry Form Container Refinements
- **`src/components/EnquiryForm.tsx`**: Refactored the form wrapper styling to support side-by-side section placement:
  - Removed fixed `maxWidth: '720px'` constraint in favor of `maxWidth: '100%'` and `margin: '0'`.
  - Added elevated depth with `box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15)` and updated `border-radius` to `4px`.

## 5. Card Iconography & Layout Polish (`WellnessOfferingCard`)
- **`src/components/Cards.tsx`**: Simplified `WellnessOfferingCard` bottom-right icon container by removing the faint background circle. Positioned gold icons neatly in the bottom right corner (`bottom: 2rem`, `right: 2rem`, `64px x 64px`).
- **`src/app/page.tsx`**: Updated SVG icon viewBox rendering scale from `42px` to `64px` for high-dpi clarity and sharper visual impact.

## 6. Centered Crest Card Design & Enquiry Form Alignment Polish
- **`src/components/Cards.tsx` (`WellnessOfferingCard`)**: Redesigned category cards into a centered luxury crest aesthetic:
  - Positioned 52px `--accent-gold` icons at the top-center of each card.
  - Centered all text typography (`eyebrow`, `h3`, `p`) with uniform text alignment.
  - Set `minHeight: 3.75rem` and `align-items: flex-start` on title elements to ensure perfect baseline alignment across card rows.
- **`src/components/EnquiryForm.tsx` & `src/app/globals.css`**: Refactored enquiry form layout and input elements:
  - Created `.enquiry-field-grid` with `align-items: end` to align all text inputs along the bottom baseline regardless of label length.
  - Added `.enquiry-label`, `.enquiry-input`, and `.enquiry-textarea` classes with subtle gold focus rings (`rgba(194, 155, 56, 0.15)`).
  - Styled input placeholders (`::placeholder`) with refined font size (`0.8125rem`), muted color (`#8C857B`), and subtle opacity (`0.55`).
- **`src/app/globals.css`**: Adjusted `.plan-visit-grid` to `align-items: flex-start` to align the left editorial title block cleanly with the top edge of the enquiry form.


