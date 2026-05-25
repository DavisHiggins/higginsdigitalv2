# TASK: Higgins Digital V2 Brand, Homepage, Background, and Cursor Fixes

## Project Context

You are working inside the new Higgins Digital V2 project:

```txt
Downloads/higginsdv2
```

This site is for the GitHub repo:

```txt
higginsdigitalv2
```

The current V2 build needs major corrections. This is a focused update task: fix the missing homepage, update the global logo system, use the new background inspiration asset, implement the white cursor from the pasted cursor files, and make the homepage concise, aesthetic, useful, and impressive.

The key assets are located in:

```txt
higginsdv2/inspiration
```

Use the logo file and background file in that folder as the official visual direction for this update.

---

## Critical Instructions

Before editing code:

1. Inspect the full project structure.
2. Locate the `inspiration` folder.
3. Identify the logo asset inside `higginsdv2/inspiration`.
4. Identify the background asset inside `higginsdv2/inspiration`.
5. Identify the current routing system.
6. Identify the current header/nav component.
7. Identify every place the logo is currently used.
8. Locate the two pasted cursor files and understand how they should be integrated.
9. Check whether original Higgins Digital homepage content/assets are available in this project.
10. Create an internal implementation plan, then execute carefully.

Do not stop until:

```bash
npm run build
```

passes successfully.

---

## 1. Use the New Logo From `higginsdv2/inspiration` Across the Entire Site

Use the attached/new Higgins Digital logo located in:

```txt
higginsdv2/inspiration
```

as the official logo asset throughout the entire V2 site.

Replace old/incorrect logos across the site with this new logo wherever the full brand logo is appropriate, including but not limited to:

- Footer
- Homepage hero
- Services sections
- Pricing page
- Payments page
- Contact page
- Scorecard page
- How It Works page
- Contractor landing page
- CTA sections
- Any brand/loading/decorative logo placements

### Logo Sizing

Make the logo approximately **3x larger** in every place it currently appears, unless doing so would break layout or mobile responsiveness.

Requirements:

- The logo should feel confident and premium, not tiny.
- Increase the visual presence while keeping tasteful spacing.
- On mobile, scale down gracefully so it does not overflow.
- Use the highest-quality available asset.
- Use `object-fit: contain` where needed.
- Never stretch or distort the logo.

---

## 2. Header Logo Treatment

The header should not use the full stacked logo.

In the header:

1. Use only the **H mark / emblem** part of the logo.
2. Add this text to the right of the H mark:

```txt
Higgins Digital
```

3. Increase the size of both the H mark and the “Higgins Digital” text in the header.

### Header Requirements

The header brand area should look premium and readable:

- H mark on the left
- “Higgins Digital” text directly to the right
- Both vertically centered
- Larger than the current header branding
- Crisp on desktop and mobile
- Proper spacing between the H mark and text
- No cramped alignment
- No tiny logo
- No full stacked wordmark in the header

If the H mark is not already available as a separate file:

- Create a clean cropped asset from the full inspiration logo if needed, or
- Use CSS/object-position/clipping only if it stays crisp and reliable, or
- Prefer adding a dedicated mark asset in the project if that is easiest and cleanest.

The result should look intentional, not like an awkward cropped screenshot.

---

## 3. Fix the Missing Homepage

There is currently no proper homepage. Build a real Higgins Digital homepage at `/`.

Use the information, features, and positioning from the original Higgins Digital homepage as the foundation, but make the V2 homepage much cleaner, more premium, more concise, and more impressive.

### Homepage Goal

The homepage should quickly communicate:

- What Higgins Digital is
- What Higgins Digital builds
- Why it is different
- Why businesses should trust it
- What actions visitors should take next

The homepage should not be extremely long. It should be concise, productive, and visually strong.

---

## 4. Homepage Required Structure

Create a polished homepage with these sections.

### A. Hero Section

The hero should immediately feel like a premium web studio.

Use this core headline:

```txt
High-performance websites for real businesses.
```

Support the message with concise copy around:

- Premium web design and development
- Conversion-focused business websites
- Fast, modern, ownership-friendly builds
- Agency-level execution without agency overhead

Primary CTA:

```txt
Request a Quote
```

Secondary CTA:

```txt
Get a Free Website Scorecard
```

Optional subtle third link:

```txt
View Work
```

Include the new logo prominently in the hero, using the full logo if appropriate.

The hero should use the animated background system described later in this task.

### B. What Higgins Digital Does

Create a concise section that previews the core offerings:

- Custom website builds
- Website redesigns
- Managed monthly website plans
- Website care plans
- Custom portals / internal tools
- Website modifications and transformations

Each item should be short, clean, and business-owner friendly.

### C. Why Higgins Digital

Add a section that clearly explains the differentiators:

- Fast, modern builds
- Clean UI/UX
- Full source-code ownership
- No platform lock-in
- Performance-focused development
- Flexible one-time or monthly paths
- Optional support, not forced support

Use premium card styling and strong hierarchy.

### D. Featured Proof / Work Preview

Preview the real project/case study angle.

Use this section title:

```txt
Built for real businesses, not demo screens.
```

Include Higgins Building Group if the assets/content exist.

Use this framing for Higgins Building Group:

```txt
Transformed an outdated contractor website into a faster, cleaner, more credible digital presence built to create trust before the first phone call.
```

Show concise details:

- Before problem
- What was built
- What improved
- Link or CTA to view work

If other projects exist, preview them as compact cards.

### E. Productive Link Grid

Add a clean grid or row of important homepage links:

- Services
- Pricing
- How It Works
- Free Website Scorecard
- Start a Project
- Payments
- Work / Projects

Each link should have:

- Clear title
- One-line explanation
- Subtle arrow/CTA treatment

This makes the homepage useful, not just decorative.

### F. Final CTA

End with a concise CTA.

Title idea:

```txt
Ready to upgrade your digital presence?
```

CTA buttons:

```txt
Request a Quote
Get a Free Website Scorecard
```

Small note:

```txt
Quotes and scorecards are typically sent within 48 hours.
```

---

## 5. Use the Background File From `higginsdv2/inspiration`

Use the background image from the `inspiration` folder as the basis for the site’s background design.

This background should influence the entire website, especially:

- Homepage hero
- Page headers
- CTA sections
- Empty/dark sections
- Major visual breaks

### Background Direction

Preserve the inspiration file’s look:

- Deep navy/black premium base
- Electric blue lines
- Gold accent lines
- Subtle tech/grid/hex/data texture
- Clean futuristic energy
- Not cluttered
- Not distracting from text

---

## 6. Animate the Background Cleanly

The background should not feel like a flat static image everywhere. Add a clean, minimal animation system inspired by the background asset.

### Animation Requirements

Animate the cuts, colors, and light streak design on:

- The far left side of the viewport
- The far right side of the viewport

The animation should include:

1. Blue line/light accents softly lighting up.
2. Gold line/light accents softly lighting up.
3. Subtle glow pulses along angled line areas.
4. Star-like blue dots in the middle with clean, minimal animation.
5. Very subtle movement/parallax or opacity shifts.
6. No distracting flashing.
7. No heavy performance cost.
8. Respect reduced motion preferences.

### Technical Requirements

Implement this as a reusable background component if possible, for example:

```txt
AnimatedBrandBackground
```

The component should:

- Sit behind content.
- Not block clicks.
- Use `pointer-events: none`.
- Be responsive.
- Use CSS animations or lightweight Framer Motion.
- Avoid expensive canvas/WebGL unless already present and performant.
- Respect `prefers-reduced-motion`.

Suggested layers:

- Base dark radial/linear gradient
- Background image layer from the inspiration file
- Left animated light streak layer
- Right animated light streak layer
- Center small star/dot layer
- Subtle blue/gold glow layers
- Optional noise/grain overlay if already in the design system

The result should feel like the inspiration image is alive, but still minimal and premium.

---

## 7. Implement the Custom Cursor From the Two Cursor Files

I pasted two cursor files into the project. Locate them and implement that cursor across the site.

### Cursor Requirements

- Use the cursor design from the two pasted files.
- Make the cursor white.
- It should be visible across all pages.
- It should work on hover states.
- It should not hide or break the default pointer on interactive elements unless the custom cursor replaces it cleanly.
- It should not interfere with clicking, selecting, forms, or mobile behavior.
- Disable or simplify it on touch devices/mobile.
- Respect reduced motion preferences.

### Cursor Behavior

The cursor should feel subtle and premium:

- White cursor
- Smooth motion
- Slight hover change over links/buttons/cards
- No huge distracting blob
- No laggy animation
- No broken cursor visibility bug

If the existing cursor files use blue or another color, update the implementation/styling so the cursor is white.

---

## 8. Homepage Design Quality

The homepage must be aesthetic, useful, and impressive.

### Required Feel

- Premium
- Minimal
- Modern
- Business-facing
- High-performance
- Trustworthy
- Sharp
- Clean
- Not generic
- Not template-looking

### Typography

Improve typography:

- Strong hero headline
- Clean heading hierarchy
- Readable body text
- Proper line-height
- Better text contrast
- No cramped paragraphs
- No awkward line breaks
- Consistent font usage

### Layout

Make the homepage concise but complete:

- Strong hero
- Clear offering preview
- Strong differentiators
- Real proof/work preview
- Useful navigation links
- Final CTA

Avoid making it unnecessarily long.

### Animations

Add clean, swift animations:

- Hero content entrance
- Cards rising/fading in
- Button hover states
- Link hover states
- Background light movement
- Optional subtle logo reveal

Do not overdo it.

---

## 9. Navigation / Routes

Make sure all homepage links point to existing routes.

If a route does not exist but was already required in the V2 task, create it or connect to the correct existing page.

Important routes to support:

```txt
/
 /services
 /pricing
 /work
 /projects
 /contact
 /start-project
 /scorecard
 /how-it-works
 /payments
```

If the project uses different route names, keep existing route conventions but ensure the homepage CTAs work.

No dead buttons.

---

## 10. Preserve Important Existing Work

Do not remove the V2 pages/features already created unless they are broken and must be fixed.

Preserve and integrate with:

- Pricing page
- Payments page
- Start Project intake flow
- Free Website Scorecard page
- How It Works page
- Contractor landing page
- Services page
- Work/projects page
- Footer
- Header
- Stripe checkout API route
- Payment success page

This task is to fix/improve the brand system and homepage, not to undo previous implementation.

---

## 11. Responsive Requirements

All changes must look excellent on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile requirements:

- Header logo/text must not overflow.
- Full logo must scale properly.
- Homepage sections must stack cleanly.
- Background animations should not clutter the small screen.
- Cards should have proper padding.
- Text should not run close to the edge.
- CTAs should be easy to tap.
- Custom cursor should be disabled on touch/mobile.

---

## 12. Asset Requirements

Use these assets from:

```txt
higginsdv2/inspiration
```

- New logo asset
- New background asset

If these files have names like:

```txt
logo-inspo.png
background-inspo.png
```

or similar, use the actual file names found in the folder.

Do not hardcode absolute local paths. Import or reference assets properly through the project’s source/public asset system.

Recommended:

- If using Vite/React, import assets from `src/assets` or place static assets in `public`.
- Keep naming clean, such as:
  - `higgins-logo-main.png`
  - `higgins-logo-mark.png`
  - `higgins-background-tech.png`

If you create cropped or derived assets, place them in a logical folder and name them clearly.

---

## 13. Specific Copy to Use or Adapt

Use/adapt these lines where appropriate:

```txt
High-performance websites for real businesses.
```

```txt
Agency-level execution without agency overhead.
```

```txt
Premium custom websites, redesigns, and web systems built for speed, clarity, conversion, and long-term ownership.
```

```txt
You own the code. You own the site. You own the future.
```

```txt
Built for real businesses, not demo screens.
```

```txt
Because Higgins Digital is lean, technical, and build-focused, clients get premium custom work without paying for bloated agency layers.
```

```txt
Quotes and scorecards are typically sent within 48 hours.
```

---

## 14. QA Checklist

Before stopping, verify:

- The homepage exists at `/`.
- The homepage is not blank or missing.
- The homepage uses content/features from the original Higgins Digital homepage.
- The homepage is concise, impressive, and productive.
- Header uses only the H mark with “Higgins Digital” text to the right.
- Header logo/text are larger and properly aligned.
- New inspiration logo is used across the site.
- Logos are roughly 3x larger where appropriate.
- Background inspiration file is used in the global/page background system.
- Left and right background light/cut areas animate cleanly.
- Gold and blue lines have subtle light-up animation.
- Center blue star-like dots have subtle minimal animation.
- Custom cursor is implemented from the pasted cursor files.
- Cursor is white.
- Cursor does not break forms, links, buttons, or mobile.
- All homepage CTAs route correctly.
- No old/incorrect logos remain unless intentionally kept as project/client assets.
- No missing asset imports.
- No console errors from undefined variables.
- No mobile overflow.
- No broken routes.
- No broken Stripe/payment files.
- No unrelated pages were deleted.
- `npm run build` passes.

---

## 15. Final Response Required From Claude Code

When complete, summarize:

1. Files changed
2. Assets used from `inspiration`
3. Any cropped/derived assets created
4. Homepage sections created
5. Header/logo changes made
6. Background animation changes made
7. Cursor implementation details
8. Routes/buttons to manually verify
9. Build result

Do not stop until the build passes.
