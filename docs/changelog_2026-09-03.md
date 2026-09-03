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
