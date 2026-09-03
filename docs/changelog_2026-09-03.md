# Changelog: UI, Layout & Component Enhancements (September 3, 2026)

This document serves as the unified summary of all structural modifications, component styling updates, responsive layout refactorings, asset additions, and mobile UX optimizations implemented across the project today.

---

## 1. Custom Vector Iconography Integration
- **`public/icons/`**: Created dedicated, scalable SVG vector icons for wellness category offerings:
  - `icon-ayurveda.svg` (Ayurvedic Healing & Consultation)
  - `icon-yoga.svg` (Yoga & Meditation Sanctuary)
  - `icon-dining.svg` (Mindful Sattvic Cuisine)
  - `icon-nature.svg` (Nature & Peaceful Surroundings)
- **`src/app/page.tsx`**: Integrated custom vector SVGs into the `wellnessOfferings` dataset on the Home landing page.

---

## 2. `WellnessOfferingCard` Luxury Crest Redesign
- **`src/components/Cards.tsx`**: Overhauled category cards into a centered luxury crest design:
  - Positioned 52px `--accent-gold` SVG icons at the top-center of each card with generous spacing (`margin-bottom: 1.5rem`).
  - Centered eyebrow, title, and description text for uniform aesthetic balance.
  - Set `minHeight: 3.75rem` and `align-items: flex-start` on title elements to guarantee consistent multi-line title heights and baseline alignment across grid rows.
  - Simplified card backdrop by removing background overlap circles for a clean, premium visual footprint.

---

## 3. "Plan Your Visit" 2-Column Layout Redesign
- **`src/app/page.tsx`**: Transformed Section 10 ("Plan Your Visit") from a centered single-column block into a modern 2-column side-by-side grid (`.plan-visit-grid`).
- **`src/app/globals.css`**: Configured responsive flexbox grid classes:
  - `.plan-visit-text-block` (`flex: 0 0 42%`, `max-width: 440px`): Displays eyebrow, editorial serif heading, and descriptive copy with clean left alignment.
  - `.plan-visit-form-block` (`flex: 1 1 54%`, `max-width: 680px`): Embeds the enquiry form in a dedicated, elevated side panel.
  - Configured `align-items: flex-start` on `.plan-visit-grid` so the left heading aligns with the top edge of the form container.
  - Added responsive `@media (max-width: 768px)` rules to collapse the 2-column grid into a single stacked column on tablet/mobile screens.

---

## 4. Enquiry Form Component & Mobile UX Polish
- **`src/components/EnquiryForm.tsx` & `src/app/globals.css`**: Complete refactoring of form architecture and responsive styling:
  - Created `.enquiry-card` with `border-radius: 12px`, `box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15)`, and responsive padding (`2.75rem 2rem` under 768px, `2.5rem 1.625rem` under 480px).
  - Created `.enquiry-field-grid` with `align-items: end` and `justify-content: flex-end` so inputs remain perfectly aligned along the bottom baseline regardless of label line count.
  - Created `.enquiry-input` and `.enquiry-textarea` classes with `border-radius: 4px`, subtle gold focus rings (`rgba(194, 155, 56, 0.15)`), and `font-size: 16px` on mobile (`max-width: 768px`) to prevent iOS Safari auto-zooming on focus.
  - Styled input placeholders (`::placeholder`) with `font-size: 0.8125rem`, muted color `#8C857B`, and `0.55` opacity.
  - Softened `.enquiry-label` CSS rules on mobile to allow multi-line labels to wrap naturally without truncation.

---

## 5. Documentation Updates & Asset Cleanup
- **`docs/progress_and_completed_works.md`**: Updated development progress report through September 3, 2026.
- **`docs/ui_ux_audit_and_recommendations.md`**: Added Implementation Status Tracker detailing completed UI/UX audit items.
- **`public/fonts/the-seasons/`**: Removed legacy `.otf` font files following the successful migration to `Playfair Display` via Next.js Google Fonts.

## 6. Site-Wide 2-Column "Plan Your Visit" & Final CTA Standardization
- **Subpage Rollout**: Standardized the 2-column side-by-side Final CTA & Enquiry layout (`.plan-visit-grid`) across all remaining core pages, replacing old centered single-column blocks:
  - `src/app/about/page.tsx` ("Our Sanctuary")
  - `src/app/experience/page.tsx` ("Discovery")
  - `src/app/stay/page.tsx` ("Direct Enquiries")
  - `src/app/wellness/page.tsx` ("Enquire Today")
- **Layout Consistency**: Unified section padding (`padding: var(--space-2xl) 0`), text block flex proportions (`.plan-visit-text-block`), and responsive mobile collapse behavior across the entire site.

