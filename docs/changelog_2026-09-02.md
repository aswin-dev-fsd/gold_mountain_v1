# Changelog: UI/UX & Component Updates (September 2, 2026)

This document serves as the unified summary of all code modifications, design improvements, and UI refinements applied across the project today.

## 1. Typography & Hierarchy Refinements
- **`src/app/layout.tsx`**: Integrated and configured `Playfair_Display` via `next/font/google` for optimized, zero-layout-shift font loading.
- **`src/app/globals.css`**: Replaced all instances of "The Seasons" font with `Playfair Display`.
- **`src/app/globals.css`**: Adjusted the font-weight of buttons and eyebrows from `700` (Garet Heavy) to `500/600` to fix overly thick, blocky text, resulting in a sleeker, more elegant typography hierarchy.
- **`src/components/Cards.tsx` (BlogCard)**: Reduced the visual weight of the "Read Article" link by changing `font-weight` from `700` to `400`, size to `--fs-caption`, and increasing `letter-spacing` to `0.12em` for a more elegant editorial look.
- **`src/components/Footer.tsx`**: Softened the column headers ("Explore", "Connect") by reducing `font-weight` to `400` and increasing `letter-spacing` to `0.2em`.
- **`src/components/LocationBlock.tsx`**: Replaced heavy `<strong>` tags with semantic `<span>` elements, utilizing `--text-primary` for labels and `--text-muted` for values to create a softer typographic contrast.

## 2. Header & Navigation Overhaul
- **`src/components/Header.tsx`**: Overhauled the Header component to support a state-aware design:
  - Added a scroll listener to transition between a transparent header at the top of the page and a compact glassmorphic header on scroll.
  - Implemented the `transparentOnTop` prop to allow page-specific header behavior.
  - Removed the image logo in favor of a pure typographic brand mark ("Gold Mountain").
  - Fixed the header height to a constant `4.25rem` to prevent layout jumping, and disabled the backdrop blur when the mobile nav is open.
- **`src/app/page.tsx` (Home)**: Passed `transparentOnTop={true}` to the Header to maintain the beautiful transparent-to-solid effect over the full-bleed dark hero image.
- **`src/components/Breadcrumb.tsx`**: Updated Breadcrumb layout padding (`paddingTop: calc(4.25rem + var(--space-md))`) to cleanly accommodate the newly fixed header on all subpages, preventing messy content overlap.
- **`src/components/MobileNav.tsx`**: Implemented a `useEffect` hook to apply `overflow: hidden` to the document body when the mobile nav is open, preventing background scrolling.

## 3. Component Layout & Styling
- **`src/components/Cards.tsx` (WellnessOfferingCard)**: Redesigned the card layout with a clean white background, subtle `box-shadow` (`0 8px 32px rgba(0, 0, 0, 0.08)`), rounded corners (`4px`), and added a decorative absolute-positioned overlapping circle in the bottom right corner for a modern, layered look.
- **`src/components/EnquiryForm.tsx`**: Redesigned the submit action area. Replaced the stacked vertical layout and "— OR —" divider with a cleaner, side-by-side grid (`1fr 1fr`), refining the padding on both the Email and WhatsApp buttons.
- **`src/components/Buttons.tsx`**: Updated button global styling (`globals.css`) to increase `border-radius` (to `6px`) and refine padding. Specifically for `WhatsAppCTA`, updated the SVG icon path for improved crispness and set `flexShrink: 0` to prevent distortion.

## 4. Layout Fixes & Alignment
- **`src/app/page.tsx` (Home)**: Changed the Home hero `minHeight` from `85vh` to `100vh` to create a true full-screen hero and eliminate the unintended white bar at the bottom of the screen. Adjusted Hero padding to gracefully account for the fixed header over the 100vh container.
- **Subpage Alignment Fix**: Identified and resolved a critical left-alignment issue where a narrow `maxWidth: '800px'` constraint was applied directly to the outer `.container` block, causing text to forcefully center and break alignment with the site navigation. Fixed by moving the constraint to an inner wrapper `div` across all subpages:
  - `src/app/wellness/page.tsx`
  - `src/app/stay/page.tsx`
  - `src/app/enquire/page.tsx`
  - `src/app/experience/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/blog/page.tsx`
