# Changelog: UI/UX & Layout Updates (September 2, 2026)

This document summarizes all code modifications and design improvements applied across the project today, extracted directly from the system logs.

## 1. Typography Improvements
- **`src/app/layout.tsx`**: Integrated and configured `Playfair_Display` via `next/font/google` for optimized, zero-layout-shift font loading.
- **`src/app/globals.css`**: Replaced all instances of "The Seasons" font with `Playfair Display`.
- **`src/app/globals.css`**: Adjusted the font-weight of buttons and eyebrows from `700` (Garet Heavy) to `500/600` to fix overly thick, blocky text, resulting in a sleeker, more elegant typography hierarchy.
- **`src/app/globals.css`**: Updated button styling to increase `border-radius` (to `6px`) and refine padding, giving CTAs a softer, more modern appearance.

## 2. Header & Navigation Refactoring
- **`src/components/Header.tsx`**: Overhauled the Header component to support a state-aware design:
  - Added a scroll listener to transition between a transparent header at the top of the page and a compact glassmorphic header on scroll.
  - Implemented the `transparentOnTop` prop to allow page-specific header behavior.
- **`src/app/page.tsx` (Home)**: Passed `transparentOnTop={true}` to the Header to maintain the beautiful transparent-to-solid effect over the full-bleed dark hero image.
- **`src/components/Breadcrumb.tsx`**: Updated Breadcrumb layout padding (`paddingTop: calc(4.25rem + var(--space-md))`) to cleanly accommodate the newly fixed header on all subpages, preventing messy content overlap.

## 3. Hero Section Fixes
- **`src/app/page.tsx` (Home)**: Changed the Home hero `minHeight` from `85vh` to `100vh` to create a true full-screen hero and eliminate the unintended white bar at the bottom of the screen.
- **`src/app/page.tsx` (Home)**: Adjusted Hero padding to gracefully account for the fixed header over the 100vh full-bleed container.

## 4. Subpage Alignment & Container Fixes
Identified and resolved a critical left-alignment issue where the narrow `maxWidth: '800px'` constraint was applied directly to the outer `.container` block, causing the text to forcefully center and break alignment with the site navigation and breadcrumbs. Fixed by moving the constraint to an inner wrapper `div` across all subpages:
- **`src/app/wellness/page.tsx`**
- **`src/app/stay/page.tsx`**
- **`src/app/enquire/page.tsx`**
- **`src/app/experience/page.tsx`**
- **`src/app/contact/page.tsx`**
- **`src/app/about/page.tsx`**
- **`src/app/blog/page.tsx`**
