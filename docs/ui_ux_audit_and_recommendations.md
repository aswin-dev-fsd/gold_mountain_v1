# UI/UX Audit & Recommendations

**Project:** Gold Mountain Wellness Resort Website
**Scope:** Full site review — typography, color, spacing, navigation, and structural/content consistency across all pages and shared components.
**Status:** Open — pending prioritization and implementation.

---

## 1. Duplicated / Repetitive Sections

- **"Final CTA + Enquiry Form" block copy-pasted across 5 pages** (`page.tsx` home, `wellness`, `stay`, `experience`, `about`) with near-identical markup: same dark background, same eyebrow/h2/p structure, same inline `margin: '0 auto 3rem auto'` hack. Only text content differs.
  - **Fix:** Extract into a shared `<FinalCTASection />` component with props for `eyebrow`, `title`, `subtitle`.
- **`contact/page.tsx` and `enquire/page.tsx` are ~90% duplicate pages.** Both hand-roll a full booking form (name/email/phone/dates/guests/message) instead of reusing the existing `EnquiryForm` component. Field sets differ subtly (`dates` vs `arrivalDate`/`departureDate`, `enquiryType` vs `interest`) — confusing for users and a maintenance hazard.
  - **Fix:** Merge the two pages or have both consume the single `EnquiryForm` component.
- **Hero pattern duplicated verbatim** across wellness/stay/experience/about/contact/enquire/blog pages — same dark bg, same `padding: var(--space-2xl) 0`, same eyebrow + editorial h1 + italic gold span + light-muted paragraph, implemented as copy-pasted inline styles rather than a shared component. Inconsistencies already visible (some have `overflow: hidden`, others don't).
  - **Fix:** Extract into a shared `<PageHero />` component.
- **`ImageGallery.tsx` and `ImageReveal.tsx` are built but never imported/used anywhere** — dead code bloating the codebase and bundle.
  - **Fix:** Remove, or integrate into a relevant page (e.g., a resort/property gallery on Stay or Experience).
- Home page and Wellness page both feature overlapping "wellness offerings" content (e.g., "Ayurvedic Practices" vs "Ayurveda" card) — near-duplicate copy shown to users who visit both pages.

---

## 2. Typography Issues

- **Inconsistent heading font-weight:** `globals.css` sets `h1–h6 { font-weight: 400 }` (The Seasons), but the Header logo overrides with inline `fontWeight: 700` on `.editorial-serif`, creating a heavier logo relative to all other editorial headings on the site, which stay at 400.
- **Nav links use `fontWeight: 500`**, but the Garet `@font-face` only defines weights 400 and 700 — the browser will synthetically bold/fake the missing weight, causing blurry or inconsistent rendering across browsers. Audit all inline `fontWeight` usages against the declared font-face weights.
- **Ad hoc heading sizes instead of design tokens:** headings use scattered inline `fontSize` values (`1.5rem`, `1.35rem`, `1.25rem`, `1.4rem`, `1.6rem`, `1.75rem`, etc.) instead of consistently using `--fs-h3`/`--fs-h4` tokens. Examples: `RoomCard` h3 = 1.5rem, `WellnessOfferingCard` h3 = 1.35rem, `BlogCard` h3 = 1.35rem — no consistent scale between conceptually similar cards.
- **Footer column headers (`<h4>` "Explore"/"Connect")** are styled entirely inline, overriding the global h4 rule with `font-family: var(--font-primary)` and `fontWeight: 700` — diverges from the serif heading convention used elsewhere.
- **Blog article `<h1>`** is set at `--fs-hero` size — identical scale to the homepage hero — making article pages visually indistinguishable from landing pages rather than reading as article titles.

---

## 3. Color Usage

- `--accent-red` / `--accent-red-hover` tokens are defined (per the documented "50% Warm White / 25% Deep Green / 15% Gold / 10% Red" palette) but **never used anywhere** in the UI — dead token, and the actual UI does not reflect the documented color ratio.
- **WhatsApp green (`#25D366`) is hardcoded** in multiple places (`Buttons.tsx`, `contact/page.tsx`, `enquire/page.tsx`) instead of being a CSS variable — inconsistent with the token-driven design system.
- On the Contact page, the "Instant WhatsApp" card overrides its eyebrow color to `#25D366` while its sibling cards use the standard gold eyebrow — breaks visual consistency across a set of 3 cards that should match.

---

## 4. Navbar / Header Issues

- Nav link `fontWeight: 500` font-synthesis issue (see Typography section).
- **No active/current-page indicator** on nav links — users have no visual cue which page they're on.
- **No defined hover/focus state** for desktop nav links beyond the generic `a { transition }` rule in `globals.css` — no actual color change on hover, so links may feel unresponsive.
- `--header-height: 90px` is defined but only used to size the header itself — there is **no `scroll-margin-top`/anchor offset compensation**, so any in-page `#enquire` anchor jump lands underneath the sticky header.
- Mobile nav breakpoint (`900px`) is higher than most content grid breakpoints (`768px`) — worth confirming this is intentional, since tablet-width users get the hamburger menu while content still renders in a desktop-like grid.
- Desktop header uses a logo image, but the mobile nav drawer header uses plain text ("Gold Mountain") instead of the logo — inconsistent branding between desktop and mobile.

---

## 5. Spacing Issues

- **Repeated dead-code CSS bug:** `style={{ ... marginBottom: 'var(--space-xl)', maxWidth: '720px', margin: '0 auto 3rem auto' }}` — the `margin` shorthand overwrites `marginBottom`, making that declaration a no-op. This exact bug appears identically on 5 pages (home, wellness, stay, experience, about).
- Section vertical padding is standardized via the `.section` class (which reduces padding responsively under 768px), but many hero sections instead use raw inline `padding: 'var(--space-2xl) 0'` — these **do not** get the responsive padding reduction, causing inconsistent spacing rhythm between hero and body sections on mobile.
- Grid gaps vary arbitrarily across similar card grids with no clear system: `1.5rem`, `var(--space-lg)`, `var(--space-md)`, `1.25rem`, `1rem` are all used for conceptually equivalent layouts on different pages.

---

## 6. Structural / Semantic Issues

- The header's "Enquire" nav CTA links to `#enquire`, which only resolves correctly on pages that render `EnquiryForm` (home, wellness, stay, experience, about). On `/contact` and `/enquire` themselves — which don't render `EnquiryForm` — this is a **broken/no-op anchor link**, not just a cosmetic issue.
- Unfinished placeholder copy is shipped directly into live UI text: `[FOUNDER PROFILE TO BE PROVIDED]` (About page) and `[PRICE TO BE PROVIDED]` (Wellness page) — reads as broken/unfinished to real visitors.
  - **Fix:** Replace with properly styled "details available on request" treatment, or supply final content before launch.

---

## Recommended Implementation Plan

1. Audit and fix all inline `fontWeight` usages against declared `@font-face` weights (Garet: 400/700 only).
2. Add `scroll-margin-top: var(--header-height)` to `#enquire` and other anchor targets.
3. Fix the broken `#enquire` anchor on Contact/Enquire pages (add the form/anchor there, or adjust the header CTA behavior contextually).
4. Extract shared `<PageHero />` and `<FinalCTASection />` components; replace all copy-pasted instances across the 5–7 affected pages.
5. Fix the `margin`/`marginBottom` shorthand conflict everywhere it appears.
6. Merge or clearly differentiate `/contact` and `/enquire`; have both use the single `EnquiryForm` component.
7. Remove unused `ImageGallery`/`ImageReveal` components, or integrate them into a relevant page.
8. Add visible hover/active/current-page states to header nav links.
9. Standardize card heading sizes to `--fs-h3`/`--fs-h4` tokens instead of ad hoc rem values.
10. Replace bracketed placeholder copy with finished content or a proper "on request" UI treatment.
11. Introduce a CSS variable for WhatsApp green; replace hardcoded hex values.
12. Decide the fate of the unused `--accent-red` token — use it per the documented brand ratio, or remove it from tokens/docs.
13. Reduce blog article `<h1>` size relative to page hero sections to restore correct content hierarchy.

### Risks & Considerations

- Merging `/contact` and `/enquire` changes site routes — confirm neither is depended on by existing external links, marketing campaigns, or SEO before removing/redirecting.
- Extracting shared Hero/CTA components touches 5–7 files; regression risk is moderate and requires visual QA per page post-refactor.
- Placeholder content replacement (pricing, founder bio) requires final copy from the client/stakeholder, not just a styling fix.

### Estimated Effort

Medium-to-large (~3–5 hours), given the number of duplicated sections across 7+ pages, two near-duplicate full pages, and several component-level refactors.
