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

## 5. New Components & Pages Integration
- **`src/components/PinnedTestimonials.tsx`**: Created a new `PinnedTestimonials` carousel component to showcase guest feedback.
- **Page Integrations**: Integrated the new `PinnedTestimonials` component into multiple pages to build trust and social proof:
  - `src/app/page.tsx` (Home)
  - `src/app/about/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/enquire/page.tsx`
  - `src/app/experience/page.tsx`
  - `src/app/stay/page.tsx`

## 6. Further Component Refinements
- **`src/components/Cards.tsx` (TestimonialCard)**: Updated styling to support horizontal scrolling (`scrollSnapAlign: 'start'`, `flex: '0 0 auto'`, `width: 'min(450px, 85vw)'`). Softened author typography by changing `font-weight` from `700` to `500`.
- **`src/components/Cards.tsx` (PackageCard)**: Replaced heavy `<strong>` tags with `span` elements set to `font-weight: 500` for a softer appearance.
- **`src/components/EnquiryForm.tsx`**: Softened all form field labels by changing `font-weight` from `700` to `500` and enforcing `--text-primary` color.
- **`src/components/Header.tsx` & `src/app/globals.css`**: Refined header typography by reducing the "Gold Mountain" `font-weight` from `700` to `600`, and "Wellness Resort" from `700` to `500`. Extracted the inline styling of the header's "Enquire" button into a cleaner `.btn-nav` class in `globals.css` triggered via a `data-scrolled` attribute on the header.

## 7. Responsive Layout Fixes & Mobile Refinements
- **`src/components/PinnedTestimonials.tsx`**: Added mobile detection (`window.innerWidth <= 768`). On mobile, the desktop pinned-scroll animation is bypassed in favor of a native, touch-friendly horizontal scrolling layout with `scrollSnapType: 'x mandatory'`.
- **`src/components/EditorialSection.tsx` & `src/app/globals.css`**: Added `.editorial-image-block` and `.editorial-text-block` classes to ensure the image always stacks *above* the text on mobile breakpoints (`max-width: 768px`), regardless of the desktop alternating order.
- **`src/app/contact/page.tsx` & `src/app/enquire/page.tsx`**: Upgraded hardcoded grid columns (e.g., `1fr 1fr`) in the booking form to responsive grids (`repeat(auto-fit, minmax(200px, 1fr))`) to prevent layout breakage on narrow screens.
- **`src/components/Footer.tsx`**: Extracted the bottom bar styling into a `.footer-bottom-bar` class to center-align the text and stack items vertically on mobile (`max-width: 600px`).
## 8. Mindful Dining Section Refactor & Ambient Layout
- **`src/components/EditorialSection.tsx`**: Enhanced the `EditorialSection` component to support full-width background images (`backgroundImage`), ambient dark overlays, and `dark` mode props for flexible high-impact visual sections.
- **`src/app/page.tsx`**: Refactored Section 07 ("Food that nourishes.") into a centered ambient section with `/images/food_background.png` as a full-width background, maintaining clean centered typography and preserving all original copy and action buttons.
- **Asset Cleanup**: Removed design reference template `food_section_template.png` from production public asset paths to maintain repository cleanliness.

## 9. Testimonial Section Alignment & Pinned Scroll Perfecting
- **`src/components/PinnedTestimonials.tsx`**: Restored and perfected the pinned horizontal scrolling track. Fixed container-boundary math so that the default state displays 3 equal columns aligned flush inside `.container`, eliminating empty left gaps and preventing the 3rd review from being cut off on initial render.
- **`src/components/Cards.tsx` (TestimonialCard)**: Replaced the thick gold left border with delicate vertical divider lines (`borderRight: 1px solid var(--border-subtle)`), providing a sophisticated editorial divider between horizontal cards.
- **`src/app/page.tsx`**: Restored all 5 guest reflections to allow continuous, fluid horizontal scrolling across the full testimonial set.

## 10. Asset Renaming & Photography Organization
- **`temp/images/`**: Organized and renamed raw WhatsApp images to production-ready descriptive identifiers:
  - `mindful_dining_sattvic_breakfast.jpeg` (Traditional South Indian sattvic meal)
  - `meditation_buddha_sanctuary.jpeg` (Meditating Buddha stone statue altar)
  - `resort_aerial_golden_hour_view.jpeg` (Aerial drone shot of resort and landscape)
  - `resort_building_exterior_front.jpeg` (Front facade of resort accommodation block)
