# Changelog: UI Refinements (September 2, 2026 - Part 2)

This document summarizes the additional component-level UI/UX refinements applied to the project.

## 1. Typography & Hierarchy Refinements
- **`src/components/Cards.tsx` (BlogCard)**: Reduced the visual weight of the "Read Article" link by changing `font-weight` from `700` to `400`, size to `--fs-caption`, and increasing `letter-spacing` to `0.12em` for a more elegant editorial look.
- **`src/components/Footer.tsx`**: Softened the column headers ("Explore", "Connect") by reducing `font-weight` to `400` and increasing `letter-spacing` to `0.2em`.
- **`src/components/LocationBlock.tsx`**: Replaced heavy `<strong>` tags with semantic `<span>` elements, utilizing `--text-primary` for labels and `--text-muted` for values to create a softer typographic contrast.

## 2. Component Layout & Styling
- **`src/components/EnquiryForm.tsx`**: Redesigned the submit action area. Replaced the stacked vertical layout and "— OR —" divider with a cleaner, side-by-side grid (`1fr 1fr`), refining the padding on both the Email and WhatsApp buttons.
- **`src/components/Buttons.tsx` (WhatsAppCTA)**: Updated the WhatsApp SVG icon path for improved crispness and set `flexShrink: 0` to prevent icon distortion.
- **`src/components/Header.tsx`**: Added a smooth transition to the "Wellness Resort" subtitle, scaling it down to `0.55rem` when the header enters its scrolled, compact state.
