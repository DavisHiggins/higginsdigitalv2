# TASK: Higgins Digital V2 Header, Home, Cursor, Footer, and Work Page Fixes

## Objective

Implement the next round of Higgins Digital V2 updates exactly. These changes focus on fixing the header navigation, making the homepage clearly accessible, matching the header logo style to the inspiration asset, improving the footer logo size, fixing the custom cursor behavior, improving the homepage quick-link bubbles, and upgrading the Higgins Building Group before/after work section with the correct screenshots and image pop-up/zoom functionality.

This task should be implemented carefully without breaking the existing V2 site structure, pricing system, payments system, scorecard page, start project flow, or any other existing pages/routes.

---

## Important Project Context

Project folder:

```txt
Downloads/higginsdv2
```

Inspiration/assets folder:

```txt
Downloads/higginsdv2/inspiration
```

Required inspiration files expected inside the inspiration folder:

```txt
logoheader-inspo
hbgbefore
hbgafter
hbgbefore1
hbgafter1
```

The exact file extensions may vary, so search the `inspiration/` folder for matching filenames. Use the actual filenames that exist.

Do not use placeholder images if these assets exist. Do not keep old Higgins Building Group screenshots if these new files are present.

---

# 1. Add Home to Header Navigation

## Problem

The homepage currently appears in the footer, but it is missing from the header tab line.

## Required Change

Add a header navigation tab titled exactly:

```txt
Home
```

The Home tab should link to the root homepage route:

```txt
/
```

## Requirements

- The header navigation must include `Home` as a visible tab.
- The Home tab should appear naturally with the other header tabs.
- It should use the same active/hover styling as the rest of the nav.
- It must not duplicate existing Home links elsewhere in the header.
- It must work on desktop and mobile navigation.
- It must not break any existing routes.
- If the current nav is generated from a data array, add Home to that array.
- If desktop and mobile nav are separate, add Home to both.

## QA

After implementation, verify:

- Header shows `Home`.
- Clicking `Home` routes to `/`.
- Active state works on `/`.
- Mobile menu also includes `Home`.

---

# 2. Match Header Logo to `logoheader-inspo`

## Problem

The header logo and text do not match the intended inspiration design.

## Required Change

Use the file in the inspiration folder named:

```txt
logoheader-inspo
```

as the visual reference/source for the header brand styling.

The header brand should look exactly like the inspiration file, with one intentional change:

```txt
DIGITAL should be gold instead of white.
```

## Requirements

- Recreate or implement the header logo/wordmark so it visually matches `logoheader-inspo`.
- If `logoheader-inspo` is a full usable image and already has the right layout except the color change, use it as the basis where possible.
- If color editing is easier in code, use the logo mark plus HTML/CSS text to match the inspiration layout.
- The header should show the Higgins Digital brand clearly, not tiny.
- Keep the header professional and balanced.
- The logo mark and word text should be aligned cleanly.
- `Higgins` should remain white or match the inspiration design.
- `Digital` must be gold.
- Do not stretch or blur the logo.
- Use `object-fit: contain` where image assets are used.
- Preserve responsiveness.
- Avoid making the header excessively tall.

## Suggested Implementation Options

### Preferred if possible
Use the H mark/image from the inspiration or existing logo asset, then render the brand text using HTML/CSS:

- Left: H logo mark
- Right: stacked or styled brand text matching `logoheader-inspo`
- `Higgins` in white
- `Digital` in gold

This gives control over the gold color while matching the design.

### Acceptable
If an edited version of the header logo can be created or if the asset already supports the correct color, use an optimized image.

## QA

After implementation, verify:

- Header brand visually matches `logoheader-inspo`.
- `Digital` is gold.
- Header brand is larger and more premium than before.
- It looks good on desktop.
- It does not overflow on mobile.
- It remains clickable back to `/`.

---

# 3. Increase Footer Logo Size by 1.5x

## Problem

The footer logo is too small.

## Required Change

Increase the footer logo size by approximately:

```txt
1.5x
```

## Requirements

- Make the footer logo visibly larger, but do not let it dominate the footer.
- Keep footer spacing balanced.
- Do not distort or stretch the logo.
- Ensure the footer still looks clean on mobile.
- If the footer uses a CSS variable or shared logo class, do not accidentally make header logos too large unless intended.

## QA

After implementation, verify:

- Footer logo is about 1.5x larger than before.
- Footer still has clean spacing.
- No overlap or layout break on mobile.

---

# 4. Fix Custom Cursor Page Exit/Re-Entry Behavior

## Problem

When the cursor moves above the webpage into browser bookmarks/tabs, the custom cursor darts extremely fast to the top-left of the page and disappears. When the user brings the cursor back onto the page, it darts from the left corner to the cursor location.

This creates an unprofessional and distracting effect.

## Required Behavior

When the user moves the cursor outside the webpage:

- The custom cursor should remain visually frozen at the exact last position where the cursor exited the page.
- It should not move to the top-left corner.
- It should not disappear abruptly because of a forced top-left reset.
- It should not animate or lerp toward any fake coordinate.

When the user moves the cursor back onto the webpage:

- The custom cursor should instantly appear/teleport at the actual cursor position.
- There should be no visible darting from the previous position.
- There should be no laggy travel animation.
- There should be no screen movement.
- The transition should feel instantaneous and seamless.

## Implementation Requirements

Inspect the current custom cursor implementation. It likely uses `mousemove`, `mouseleave`, `mouseenter`, animation frame lerping, Framer Motion, or transform state.

Fix it using these rules:

1. Track the latest valid cursor coordinates only from real pointer/mouse movement events inside the document/window.
2. On `mouseleave` or when the pointer leaves the document:
   - Do not set coordinates to `0,0`.
   - Do not set coordinates to `null` if that causes a reset to `0,0`.
   - Freeze the cursor at the last known valid coordinate.
   - Optionally set an `isOutside` state, but do not use that state to move the cursor.
3. On `mouseenter` or first `pointermove` after re-entry:
   - Immediately set both the rendered cursor position and any internal animated position to the new real pointer coordinate.
   - Disable interpolation for that frame if the cursor normally uses smoothing/lerping.
   - Prevent the cursor from animating from the old/frozen coordinate to the new coordinate.
4. If using Framer Motion springs:
   - Use direct `.set()` behavior on re-entry instead of spring animation for the first frame.
   - Avoid initial values of `{ x: 0, y: 0 }` showing after re-entry.
5. If using CSS transform with requestAnimationFrame smoothing:
   - Reset both target and current positions to the real pointer position on re-entry.
6. Keep the cursor white as previously requested.
7. Disable the custom cursor on touch/mobile devices.
8. Ensure forms, buttons, links, and hover interactions still work correctly.

## QA

After implementation, manually verify:

- Move cursor from page into browser tabs/bookmarks area.
- Cursor does not dart to top-left.
- Cursor remains at last page-edge position if visible.
- Move cursor back onto page.
- Cursor instantly appears where the real cursor is.
- No lag or animated travel occurs on re-entry.
- Cursor remains white.
- Cursor is disabled on touch/mobile if appropriate.

---

# 5. Improve Homepage Four Quick Links / Checkmark Items

## Problem

On the Home tab, the four links/checkmark items need stronger styling.

The user referred to them as:

```txt
[Pasted text #1 +3 lines]
```

Interpret this as the four existing homepage quick links or checkmark-based links/features currently shown on the Home page.

## Required Change

Make those four home-page links/features:

- Have visible bubble/card styling.
- Be larger.
- Have increased spacing between the check marks/items above.
- Feel more premium and intentional.

## Requirements

- Locate the four existing homepage links/checkmark items.
- Wrap or style each item as a clean bubble/card/pill.
- Increase font size slightly.
- Increase spacing/gap between the items.
- Increase spacing around check marks so they are not cramped.
- Use Higgins Digital styling: dark glass, subtle border, white text, blue/gold accent, clean hover state.
- The bubbles should look good on desktop and stack or wrap cleanly on mobile.
- Do not make this section too large or cluttered.
- The links should remain clickable if they are links.
- Preserve the content unless there is a clear typo or broken wording.

## QA

After implementation, verify:

- The four items are visually larger.
- They have bubble/card styling.
- Check mark spacing is improved.
- Mobile layout is clean.
- Links still work.

---

# 6. Replace Higgins Building Group Before/After Images on Work Page

## Problem

The Work tab currently has incorrect or outdated before/after screenshots for Higgins Building Group.

## Required Assets

Use the following files from the inspiration folder:

```txt
hbgbefore
hbgafter
hbgbefore1
hbgafter1
```

Search for the actual extensions, for example:

```txt
hbgbefore.png
hbgafter.png
hbgbefore1.png
hbgafter1.png
```

or `.jpg`, `.jpeg`, `.webp`, etc.

## Required Layout

On the Work tab, in the Higgins Building Group before/after section, show two comparison rows/sets:

### Top Comparison: About Pages

Use:

- Before image: `hbgbefore`
- After image: `hbgafter`

Include visible text labeling this comparison as the About pages.

Required text meaning:

```txt
Before and after comparison of the About pages.
```

Make it clear that:

- `hbgbefore` shows the old Higgins Building Group About page.
- `hbgafter` shows the new Higgins Building Group About page.

Suggested labels:

```txt
Old Site — About Page
New Site — About Page
```

### Bottom Comparison: Contact Pages

Use:

- Before image: `hbgbefore1`
- After image: `hbgafter1`

Include visible text labeling this comparison as the Contact pages.

Required text meaning:

```txt
Before and after comparison of the Contact pages.
```

Make it clear that:

- `hbgbefore1` shows the old Higgins Building Group Contact page.
- `hbgafter1` shows the new Higgins Building Group Contact page.

Suggested labels:

```txt
Old Site — Contact Page
New Site — Contact Page
```

## Before/After Text Requirements

Still include the before and after text. Do not remove the comparison framing.

Use clear labels such as:

```txt
BEFORE
AFTER
```

Also include the tab/page name being displayed:

```txt
About Page
Contact Page
```

Example structure:

```txt
About Page Comparison
BEFORE — Old Site About Page
AFTER — New Site About Page

Contact Page Comparison
BEFORE — Old Site Contact Page
AFTER — New Site Contact Page
```

---

# 7. Add Click-to-Enlarge Pop-Up and Zoom for Work Page Images

## Required Change

The before/after screenshots on the Work tab must be clickable.

When the user clicks an image:

- The image should open in a modal/lightbox/pop-up.
- The image should display larger.
- The user should be able to zoom in to inspect the screenshot closely.
- The user should be able to close the pop-up easily.

## Requirements

- Implement a clean image modal/lightbox component if one does not exist.
- The modal should support all four Higgins Building Group images:
  - `hbgbefore`
  - `hbgafter`
  - `hbgbefore1`
  - `hbgafter1`
- Include a close button.
- Allow closing with the Escape key.
- Allow closing by clicking outside the image if appropriate.
- Prevent background scroll while the modal is open.
- Show a caption/label inside the modal so the user knows what they are viewing.
- Implement zoom functionality.

## Zoom Options

Any of these are acceptable as long as the experience is clean:

1. Click/tap image to toggle zoom.
2. Use plus/minus zoom controls.
3. Use mouse wheel zoom within the modal.
4. Use browser-friendly CSS scale with controls.

Preferred simple implementation:

- Modal opens at a large fit-to-screen size.
- Add controls:
  - Zoom In
  - Zoom Out
  - Reset
  - Close
- Use CSS transform scale.
- Keep image draggable/pannable only if easy and stable. If not, allow scroll inside modal when zoomed.

## Accessibility / UX Requirements

- Close button must be visible.
- Escape key closes modal.
- Focus should not become trapped in a broken way.
- Modal overlay should look premium and consistent with site design.
- Image should not overflow awkwardly on mobile.
- On mobile, allow pinch/scroll behavior naturally if possible.

## QA

After implementation, verify:

- Clicking each of the four images opens the modal.
- Modal displays the correct image.
- Captions are correct.
- Zoom in works.
- Zoom out works.
- Reset works if implemented.
- Close button works.
- Escape closes modal.
- Background scroll is prevented while modal is open.
- Layout is clean on mobile.

---

# 8. Preserve Existing Site Functionality

Do not break the existing Higgins Digital V2 features.

## Must Preserve

- Pricing page
- Payments page
- Stripe checkout API structure
- Payment success page
- Start a Project flow
- Website Scorecard page
- How It Works page
- Services page
- Work page
- Contact page
- Footer links
- Responsive design
- Existing animations unless they conflict with this task

---

# 9. Implementation Steps Claude Code Should Follow

1. Inspect the project structure.
2. Locate routing setup.
3. Locate header/nav component.
4. Locate footer component.
5. Locate homepage component.
6. Locate Work page / Higgins Building Group case study section.
7. Locate global CSS and cursor component.
8. Locate all assets inside `inspiration/`.
9. Confirm the exact filenames/extensions for:
   - `logoheader-inspo`
   - `hbgbefore`
   - `hbgafter`
   - `hbgbefore1`
   - `hbgafter1`
10. Add `Home` to header navigation.
11. Update header branding to match `logoheader-inspo`, with `Digital` in gold.
12. Increase footer logo size by 1.5x.
13. Fix custom cursor exit/re-entry behavior.
14. Improve the four homepage quick links/checkmark items with bubble styling.
15. Replace Higgins Building Group Work screenshots with the new inspiration assets.
16. Add the second before/after comparison row for Contact pages.
17. Implement image click-to-enlarge modal/lightbox with zoom.
18. Verify desktop layout.
19. Verify mobile layout.
20. Run build.
21. Fix all errors.

---

# 10. Build Requirement

After all changes, run:

```bash
npm run build
```

Do not stop until the build passes.

If the build fails, fix all errors before stopping.

---

# 11. Final Response Required from Claude Code

When complete, summarize:

1. Files changed
2. Header navigation changes
3. Header logo/branding changes
4. Footer logo size change
5. Cursor fix details
6. Homepage quick-link styling changes
7. Work page image replacement details
8. Modal/zoom implementation details
9. Routes/buttons/images the user should manually test
10. Build result

