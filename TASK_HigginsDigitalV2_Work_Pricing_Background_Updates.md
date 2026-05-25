# TASK: Higgins Digital V2 — Work Page, Pricing, Background, Cursor, and Project Updates

## Objective

Implement the following Higgins Digital V2 updates exactly as described. Every task below must be completed correctly, verified immediately after implementation, and checked again before the final build.

This task file is the source of truth. Do not partially implement these instructions. Do not skip any task. Do not stop until `npm run build` passes.

---

## Mandatory Implementation Rule

After completing each numbered task, Claude Code must pause internally and verify:

1. The task was actually implemented.
2. The implementation matches the instruction exactly.
3. No existing route, component, style, or feature was broken.
4. No missing imports, undefined variables, or broken asset paths were introduced.
5. The result is responsive and visually clean.

At the end, run the full build and fix every error before stopping.

---

## Important Project Context

Project folder:

```txt
Downloads/higginsdv2
```

Important asset folder:

```txt
Downloads/higginsdv2/inspiration
```

All referenced screenshots/files are located inside the `inspiration` folder. Search this folder for the exact file extensions instead of assuming extensions.

The current screenshot attachment shows these Higgins Building Group comparison asset names:

```txt
hbgafter-gallery
hbgbefore-gallery
hbgafter-about
hbgbefore-contact
hbgafter-contact
hbgbefore-about
```

Use the matching files from the `inspiration` folder.

Also use these project image files from the `inspiration` folder:

```txt
wyatt1
wyatt2
wyatt3
```

---

# 1. Update Higgins Building Group “View Live Site” Link

On the Work page / Higgins Building Group project card or section, update the `View Live Site` button/bubble/link so it points to exactly:

```txt
https://higginsbuildinggroup.vercel.app
```

Requirements:

- The link must open the correct live site.
- Do not leave the old link anywhere on the Higgins Building Group project CTA.
- Preserve the existing button/bubble styling unless it needs minor cleanup.
- Verify the link target after implementation.

---

# 2. Replace Large Before/After Images with Dropdown Comparison Links

The Higgins Building Group before/after screenshots should no longer be displayed directly on the Work tab page taking up large space.

Instead, add a dropdown/accordion under the Higgins Building Group website transformation picture titled exactly:

```txt
Before & After Comparison
```

When the dropdown is pressed/opened, it should display six mini links inside clean bubbles.

## Layout Requirements

Inside the open dropdown:

- Use a two-column comparison layout.
- Left column: three `Before` Higgins Building Group screenshot links.
- Right column: three `After` Higgins Building Group screenshot links.
- Each `Before` item should line up horizontally with its matching `After` item.
- Use bubbles/pills/cards for each mini link.
- The dropdown should be clean, compact, premium, and not take up unnecessary space when closed.
- It must work on desktop and mobile.

## Required Before/After Pairings

Use the six files from the `inspiration` folder:

### About Page Row

Before:

```txt
hbgbefore-about
```

After:

```txt
hbgafter-about
```

Bubble/link titles:

```txt
Before — About Page
After — About Page
```

### Contact Page Row

Before:

```txt
hbgbefore-contact
```

After:

```txt
hbgafter-contact
```

Bubble/link titles:

```txt
Before — Contact Page
After — Contact Page
```

### Gallery Page Row

Before:

```txt
hbgbefore-gallery
```

After:

```txt
hbgafter-gallery
```

Bubble/link titles:

```txt
Before — Gallery Page
After — Gallery Page
```

## Click Behavior

When a bubble/link is clicked:

- It should open the corresponding image in a modal/lightbox or a clean enlarged viewer.
- The user should be able to view the screenshot larger.
- Preserve or reuse the existing image modal/zoom behavior if already implemented.
- Include a clear close button.
- Escape key should close if practical.
- Clicking outside should close if practical.
- Prevent background scroll while the modal is open if practical.
- Include a caption showing the title of the selected screenshot.

## Closed State

When the dropdown is closed:

- The page should only show the compact `Before & After Comparison` dropdown trigger.
- The six screenshots should not be visible directly on the page.

---

# 3. Make the Cursor Automatically Stay Visible Against Backgrounds

Update the custom cursor so it changes color relative to the background it is hovering over, always making it visible.

Requirements:

- The cursor should remain visible on dark, light, blue, gold, white, glass, image, and gradient sections.
- Prefer a reliable CSS blend mode solution such as `mix-blend-mode: difference` if it works cleanly with the current design.
- If blend mode is not reliable, implement a JavaScript/CSS fallback that changes the cursor color based on hovered section/background classes.
- The cursor must remain smooth and premium.
- Do not reintroduce the old bug where the cursor darts to the top-left on page leave/re-entry.
- The cursor should not interfere with clicking links, buttons, inputs, forms, or modals.
- Disable or simplify the custom cursor on touch/mobile devices if needed.

Verification:

- Test cursor visibility over dark backgrounds.
- Test cursor visibility over bright/white/gold sections.
- Test cursor visibility over cards/buttons.
- Test cursor exit/re-entry behavior remains fixed.

---

# 4. Spread Stars Across Background and Add Glowing Constellations

Update the animated site background.

Current issue:

- The stars are mainly concentrated in the middle.

Required update:

- Spread the stars across the entire background.
- Add glowing constellations in:
  - Bottom right
  - Top left

Design requirements:

- The constellations should be subtle, premium, and clean.
- They should glow softly.
- They should fit the Higgins Digital dark navy/electric blue/gold visual identity.
- Do not make them cartoonish, childish, or too bright.
- Keep the background minimal and readable.
- Make sure text remains highly readable on all pages.
- Respect `prefers-reduced-motion` by reducing or disabling animation if the user prefers reduced motion.

Animation requirements:

- Stars may gently twinkle/pulse.
- Constellation points/lines may softly glow.
- Movement should be subtle and not distracting.
- Do not create performance-heavy animations.

---

# 5. Update Pricing Across the Entire Site

Update the following prices everywhere they appear across the entire site, including but not limited to:

- Home page
- Pricing page
- Services page
- Payments page
- Work/project CTAs if applicable
- Any data files
- Any cards
- Any comparison sections
- Any final CTA text
- Any payment option labels or descriptions

Do not leave old prices anywhere.

## One-Time Website Builds

Change:

```txt
Launch Site: Starting at $1,000
Growth Site: Starting at $2,000
Custom Platform: $4,000+
```

## Managed Monthly Plans

Change:

```txt
Managed Starter: $150/mo
Managed Growth: $300/mo
```

If Managed Custom has custom quote language, keep it as custom quote unless the site currently shows a conflicting fixed price.

## Modifications & Transformations

Change:

```txt
Quick Fix: $100–$225
Standard Mod: $225–$500
Advanced Mod: $500–$1K
Full Transformation: $1K–$2K
```

Important spelling/naming:

- Use `Advanced Mod`, not `Advance Mod`, in the site UI unless an existing component intentionally uses a shorter label.
- Use `Full Transformation`, not `Full Tranformation`.

## Payment System Note

If Stripe payment products currently use old amounts in visible UI, update the visible UI copy.

Do not invent live Stripe Price IDs.
Do not hardcode Stripe secret keys.
Do not change environment variable names unless required.
If fixed checkout amounts need new Stripe Price IDs later, document that manual Stripe/Vercel updates may be required.

---

# 6. Separate Home Page Gold Links from Checkmark Bubbles

On the Home page, there are four link tabs:

```txt
View Work →
View Pricing →
How It Works →
Make a Payment →
```

There are also checkmark bubbles:

```txt
✓ Optional care plans
✓ Direct communication
✓ Real business focus
```

Required update:

- The four link tabs must be visually separated from the checkmark bubbles.
- The four link tabs should be styled as gold links.
- They should not look merged with the checkmark bubbles.
- Increase clarity and spacing between the link area and checkmark bubble area.
- Preserve all link destinations.
- Keep the section clean, premium, and responsive.

Design guidance:

- Gold links should feel refined, not loud.
- Use hover states such as subtle underline, glow, or arrow movement.
- Checkmark bubbles should remain separate as trust/benefit pills.
- Do not cram both groups into the same visual cluster.

---

# 7. Update Chaplain Platform Home Page Card

On the Home page, for the Chaplain Platform project/card:

## Add Live Site Button

Add a `View Live Site` button/bubble matching the Higgins Building Group button style.

The button must link to exactly:

```txt
https://phideltchaplain.vercel.app/
```

Requirements:

- The button should look consistent with the Higgins Building Group live site button.
- It should be clearly visible.
- It should not break the card layout.
- Verify the link target after implementation.

## Update Chaplain Screenshot

Update the Chaplain Platform picture/screenshot so it shows the top/home page rather than the middle of the page.

Implementation guidance:

- Search the existing project assets and `inspiration` folder for a better Chaplain/homepage screenshot.
- If the screenshot is currently displayed with bad object-position/cropping, adjust `object-position` so the top/home portion of the screenshot is visible.
- If there is a more appropriate image asset available, use it.
- Do not use a random unrelated placeholder.

---

# 8. Add New Work Project: Professional Photography Portfolio

Add a new project section/card to the Work tab between:

1. Higgins Building Group
2. Chaplain Platform

The new project should use the same general format/style as the other two Work page projects.

## Project Title

Use exactly:

```txt
Professional Photography Portfolio
```

## Project Subtext

Use exactly:

```txt
wy_not_pics
```

## Images

Use these three screenshots from the `inspiration` folder:

```txt
wyatt1
wyatt2
wyatt3
```

Requirements:

- Display the three screenshots cleanly to the right of the description on desktop.
- On mobile, stack the screenshots cleanly under or above the description.
- Keep image sizing consistent and polished.
- Do not distort screenshots.
- Use object-fit/object-contain or object-cover appropriately.
- The layout must feel intentional and consistent with the Higgins Digital visual system.

## Description Guidance

Write concise, professional copy consistent with Higgins Digital’s tone.

Recommended framing:

```txt
A polished photography portfolio experience built to showcase visual work with a minimal, immersive interface, clean navigation, and a premium presentation for client-facing credibility.
```

Include concise bullets similar to the other projects, such as:

- Immersive portfolio structure
- Clean category-based browsing
- Mobile-first visual presentation
- Premium minimal UI/UX
- Conversion-friendly contact path

If the existing Work page has a specific data structure for projects, add this project to that structure instead of hardcoding it randomly.

---

# Final QA Checklist

Before stopping, verify every item below:

## Header / Navigation

- Home still appears in header navigation.
- Header branding still works.
- All header routes work.

## Work Page

- Higgins Building Group `View Live Site` points to `https://higginsbuildinggroup.vercel.app`.
- Higgins Building Group before/after images are no longer taking up large page space directly.
- `Before & After Comparison` dropdown appears under the transformation picture.
- Dropdown opens and closes correctly.
- Six bubbles appear inside the dropdown.
- Three Before links appear on the left.
- Three After links appear on the right.
- About row pairs correctly.
- Contact row pairs correctly.
- Gallery row pairs correctly.
- Clicking each bubble opens the correct screenshot.
- Modal/lightbox works and closes correctly.
- Professional Photography Portfolio project appears between Higgins Building Group and Chaplain Platform.
- Wyatt screenshots display cleanly.
- Chaplain Platform live site button works.
- Chaplain screenshot shows the top/home page area.

## Cursor

- Cursor remains visible on different backgrounds.
- Cursor color/visibility adapts properly.
- Cursor does not jump to the top-left.
- Cursor does not interfere with interaction.

## Background

- Stars are spread across the full background.
- Top-left glowing constellation exists.
- Bottom-right glowing constellation exists.
- Background is subtle and premium.
- Background does not hurt readability.

## Pricing

- Launch Site shows `Starting at $1,000` everywhere.
- Growth Site shows `Starting at $2,000` everywhere.
- Custom Platform shows `$4,000+` everywhere.
- Managed Starter shows `$150/mo` everywhere.
- Managed Growth shows `$300/mo` everywhere.
- Quick Fix shows `$100–$225` everywhere.
- Standard Mod shows `$225–$500` everywhere.
- Advanced Mod shows `$500–$1K` everywhere.
- Full Transformation shows `$1K–$2K` everywhere.
- No old prices remain in visible UI.

## Home Page

- `View Work →`, `View Pricing →`, `How It Works →`, and `Make a Payment →` are separated from checkmark bubbles.
- Those four links are gold links.
- The checkmark bubbles remain visually separate.
- Home page layout remains clean and responsive.

## Build

Run:

```bash
npm run build
```

Fix every build error before stopping.

---

# Final Response Required from Claude Code

When finished, summarize:

1. Files changed
2. Work page changes
3. Higgins Building Group dropdown/lightbox changes
4. New Professional Photography Portfolio project changes
5. Chaplain Platform changes
6. Cursor visibility changes
7. Background constellation/star changes
8. Pricing changes and where they were updated
9. Home page link/checkmark section changes
10. Any Stripe/Vercel manual follow-up needed because of price changes
11. Routes/images/buttons I should manually test
12. Build result

Do not stop until `npm run build` passes.
