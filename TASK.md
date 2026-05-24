# TASK: Higgins Digital V2 Complete Website Rebuild

## Project Target

Rebuild the Higgins Digital website inside this local folder:

```txt
Downloads/higginsdv2
```

and prepare it for the GitHub repository:

```txt
higginsdigitalv2
```

This is a full V2 rebuild, not a small visual refresh. Keep the same brand, same assets, same overall tab/route structure from the current Higgins Digital site, and the same core business offering, but redesign the experience so it feels significantly more premium, intentional, modern, fast, and trustworthy.

The final site should feel like a lean, high-performance web studio for real businesses, not a template agency site.

---

## Core Direction

Higgins Digital should be positioned as:

```txt
Agency-level execution without agency overhead.
```

The site should communicate:

- Premium custom websites for real businesses
- Fast front-end performance
- Clean UI/UX
- Conversion-focused structure
- Strong ownership model
- Flexible pricing paths
- Stripe-supported payment options
- No unnecessary platform lock-in
- Optional support, not forced support

The site should avoid sounding cheap. Do not repeatedly say “fraction of agency pricing” everywhere. Use it sparingly and with context. The stronger positioning is:

```txt
Because Higgins Digital is lean, technical, and build-focused, clients get premium custom work without paying for bloated agency layers.
```

---

## Non-Negotiable Requirements

1. Use the existing Higgins Digital assets, logos, visual identity, project screenshots, and content wherever possible.
2. Keep every current tab/route that exists in the current site.
3. Add the new pages and flows listed in this file.
4. Preserve the current brand identity: electric blue, gold, black, white, and deep navy.
5. Rebuild the UI with high-level minimalism, strong spacing, better hierarchy, better typography, better backgrounds, and clean swift animations.
6. Do not remove existing project proof, pricing concepts, footer content, or contact paths unless replacing them with better V2 versions.
7. The site must build successfully with `npm run build` before stopping.
8. Do not expose Stripe secret keys in frontend code.
9. Payment routes must use Stripe Checkout through server-side Vercel API routes/functions.
10. Mobile layout must be excellent, not just passable.

---

## Provided Visual Assets / References

Use these assets if they are already in the repo or if they are placed into the project folder before implementation:

```txt
hdlogotrans(1).png
logo-mark-transparent.png
higgins-digital-style-reference.png
ChatGPT Image May 24, 2026, 04_26_58 PM.png
```

Recommended organization:

```txt
public/
  assets/
    brand/
      hd-logo-full.png
      hd-logo-mark.png
      hd-style-reference.png
      hd-background-reference.png
```

Use the logos as actual brand assets. Use the background references as visual inspiration for the site background system. Do not simply drop a huge flat image behind every page. Instead, create a custom scalable web background using gradients, subtle grids, animated light streaks, glow layers, noise texture, and diagonal line work inspired by the references.

---

## Visual Identity System

### Primary Colors

Use these as the approximate palette. Adjust slightly as needed for contrast and polish.

```css
--hd-black: #02040a;
--hd-navy-950: #030817;
--hd-navy-900: #06111f;
--hd-navy-800: #0a1b31;
--hd-blue: #0677ff;
--hd-electric-blue: #00aaff;
--hd-cyan: #16d7ff;
--hd-gold: #d9a441;
--hd-soft-gold: #f0c66d;
--hd-white: #f7fbff;
--hd-muted: #9aa8bc;
--hd-border: rgba(255, 255, 255, 0.11);
--hd-card: rgba(5, 13, 27, 0.74);
```

### Typography

Use a cleaner, more premium font stack than the current site if needed.

Recommended:

- Headings: `Sora`, `Space Grotesk`, or `General Sans`
- Body: `Inter`
- Micro labels: `IBM Plex Mono`, `Geist Mono`, or letter-spaced Inter

If adding Google Fonts, use import/preconnect correctly and avoid loading too many weights.

Suggested type feel:

- Large, calm hero headlines
- Tight letter spacing on big headings
- Uppercase micro labels with subtle tracking
- Body text with generous line height
- No cramped cards
- No tiny unreadable muted text

---

## Global Design Requirements

### Background System

Build a reusable background system used across the site.

Create something like:

```txt
src/components/Background/HigginsBackground.jsx
src/components/Background/HigginsBackground.css
```

The background should include:

- Dark navy / black base
- Electric-blue glow zones
- Gold accent streaks
- Subtle diagonal line work
- Very faint hex/grid texture
- Soft vignette around edges
- Optional low-opacity noise overlay
- Animated light sweep on hero sections
- CSS-only or lightweight animation where possible

Design notes:

- The background should feel futuristic and premium, but not distracting.
- Do not overpower the content.
- Text readability always wins.
- Use `pointer-events: none` for background layers.
- Respect `prefers-reduced-motion`.

### Cards

All major cards should share a consistent V2 style:

```txt
Dark glass surface
Subtle white/blue border
Soft shadow
Controlled electric-blue glow on hover
2xl border radius
Generous padding
Strong heading hierarchy
Clean bullet spacing
No awkward line breaks
```

Recommended cards should have a tasteful glow or top accent line. Do not make recommended cards look gimmicky.

### Buttons

Create consistent button variants:

```txt
Primary: electric blue gradient / strong glow / white text
Secondary: transparent glass / subtle border / white text
Gold accent: gold outline or soft gold fill for special CTAs only
Text link: subtle arrow animation
```

Button hover:

- Slight lift
- Slight glow increase
- Smooth transform
- No bouncy cartoon effects

### Animation Style

Use clean, swift animations.

Requirements:

- Page sections fade/slide in subtly on scroll.
- Cards lift slightly on hover.
- CTA buttons glimmer lightly.
- Background has very slow, subtle motion.
- Page transitions should feel smooth if the current site already has route transitions.
- Avoid heavy animation that slows the site.
- Respect reduced motion.

Preferred duration:

```txt
0.18s–0.35s for interactions
0.45s–0.75s for page/section entrance
```

---

## Suggested Technical Structure

Adapt to the current repo structure. If the project is Vite/React, use this direction:

```txt
api/
  create-checkout-session.js
  stripe-webhook.js

src/
  assets/
  components/
    Background/
      HigginsBackground.jsx
      HigginsBackground.css
    layout/
      Header.jsx
      Footer.jsx
    ui/
      Button.jsx
      SectionHeader.jsx
      GlassCard.jsx
      StepFlow.jsx
      ComparisonTable.jsx
      PricingCard.jsx
      PaymentCard.jsx
  data/
    pricingData.js
    paymentOptions.js
    processSteps.js
    projectProof.js
  pages/
    Home.jsx
    Work.jsx
    Services.jsx
    Pricing.jsx
    Contact.jsx
    StartProject.jsx
    Scorecard.jsx
    HowItWorks.jsx
    ContractorWebsites.jsx
    Payments.jsx
    PaymentSuccess.jsx
```

Do not force this exact structure if the existing repo is different. Use the existing conventions when possible.

---

## Navigation / Tab Structure

First inspect the current Higgins Digital navigation and routes.

Keep all existing top-level tabs exactly as they currently exist unless a small naming improvement is clearly necessary. Add new routes without cluttering the header.

Preferred V2 nav if it fits cleanly:

```txt
Work
Services
Pricing
Process
Scorecard
Contact
```

Add `Payments` only if it does not clutter the header. If the header is already tight, put `Payments` in the footer and inside pricing/payment CTAs instead.

Footer should include:

```txt
Navigate
Services
Start a Project
Free Website Scorecard
Pricing
Make a Payment
Contact
```

---

## Required New Routes / Pages

Add these routes:

```txt
/start-project
/scorecard
/how-it-works
/contractor-websites
/payments
/payment-success
```

Also support:

```txt
/payments?canceled=true
```

The canceled state should display a notice on the payments page.

---

# Page-by-Page Requirements

## 1. Homepage V2

The homepage should instantly look more impressive than the current version while keeping the Higgins Digital identity.

### Homepage Hero

Hero should communicate premium web execution quickly.

Suggested headline options. Choose the best fit or refine slightly:

```txt
High-performance websites for real businesses.
```

or

```txt
Premium websites built to earn trust before the first call.
```

Hero subcopy:

```txt
Higgins Digital builds fast, modern, conversion-focused websites and custom digital systems for businesses that need more than a template.
```

Primary CTA:

```txt
Request a Quote
```

Secondary CTA:

```txt
Get a Free Website Scorecard
```

Small trust line under CTAs:

```txt
Quotes and website scorecards typically sent within 48 hours.
```

Hero visual ideas:

- Use the HD logo mark as a subtle 3D/glass centerpiece or floating corner element.
- Use animated diagonal blue/gold streaks behind the hero.
- Add small premium metric pills like:
  - Custom code ownership
  - Fast static delivery
  - No platform lock-in
  - Optional care plans

### Homepage Section Order

Use a structure like this:

1. Hero
2. Premium service paths
3. Built for real businesses, not demo screens
4. Featured transformation / project proof
5. Ownership pillar
6. Compare your options
7. Process preview
8. Final CTA

### Premium Service Paths

Cards:

1. Website Builds
2. Website Redesigns
3. Managed Monthly Plans
4. Care Plans
5. Custom Portals / Platforms
6. Performance / Conversion Improvements

Each card should have a concise description and link to the relevant page/section.

### Built for Real Businesses Section

Section title:

```txt
Built for real businesses, not demo screens.
```

Purpose:

Show that Higgins Digital work is practical, business-facing, and trust-building.

For each project card show:

- Before problem
- What was built
- What improved
- Tech/approach
- Link

Higgins Building Group framing:

```txt
Transformed an outdated contractor website into a faster, cleaner, more credible digital presence built to create trust before the first phone call.
```

Use before/after visual proof if screenshots already exist in the current site.

### Ownership Pillar

Section title:

```txt
You own the code. You own the site. You own the future.
```

Cards:

- Full source-code transfer
- No platform lock-in
- No forced monthly dependency
- Portable deployment
- Optional support, not required support

### Compare Your Options Section

Columns:

```txt
DIY Builder
Traditional Agency
Higgins Digital
```

Rows:

```txt
Cost
Speed
Custom Design
Ownership
Performance
Ongoing Support
Flexibility
```

Tone should be confident but not arrogant. Higgins Digital should win clearly through clarity, ownership, performance, and flexibility.

---

## 2. Start a Project Flow

Create a polished intake flow instead of only a basic contact form.

Route:

```txt
/start-project
```

Page title:

```txt
Start a Project
```

Subtitle:

```txt
Answer a few quick questions so Higgins Digital can recommend the cleanest path for your goals, timeline, and budget.
```

### Flow Steps

#### Step 1: What do you need?

Options:

```txt
Website build
Redesign
Monthly plan
Care plan
Custom portal
Not sure
```

#### Step 2: What type of business?

Options:

```txt
Service business
Creator
Contractor
Real estate
Local business
Startup
Other
```

#### Step 3: Budget range

Options:

```txt
Under $1,500
$1,500–$3,000
$3,000–$5,000
$5,000+
```

#### Step 4: Timeline

Options:

```txt
ASAP
2–4 weeks
1–2 months
Flexible
```

#### Step 5: Contact info

Fields:

```txt
Name
Business name
Email
Phone optional
Website URL optional
Project notes
```

### Behavior

- Multi-step card layout.
- Progress indicator.
- Back/Next buttons.
- Smooth transitions between steps.
- Final review screen before submit if easy to implement.
- Submit through existing contact/form infrastructure if current repo has one.
- If no backend/form provider exists, use a clean `mailto:` fallback that pre-fills the selected answers and clearly leaves a TODO for production form endpoint.
- After submission, show a success state:

```txt
Project request received. Higgins Digital will review your answers and follow up with the cleanest next step.
```

---

## 3. Free Website Scorecard Page

Route:

```txt
/scorecard
```

Page title:

```txt
Free Website Scorecard
```

Primary CTA:

```txt
Get a free website scorecard within 48 hours.
```

Page purpose:

Give low-intent visitors a reason to engage before they are ready for a quote.

### Form Fields

```txt
Website URL
Business name
Email
Main goal
```

Main goal options:

```txt
More leads
More trust
Better mobile experience
Faster site
Better design
More bookings
Not sure
```

### Score Categories Displayed on Page

Show these as cards or a visual score grid:

```txt
First impression
Mobile experience
Speed
Trust
Calls to action
SEO structure
Conversion clarity
```

### Copy

Use:

```txt
Submit your website and Higgins Digital will review the areas that matter most: first impression, mobile experience, speed, trust, calls to action, SEO structure, and conversion clarity.
```

CTA button:

```txt
Request My Scorecard
```

Success state:

```txt
Scorecard request received. A short review will be sent within 48 hours.
```

---

## 4. How It Works / Process Page

Route:

```txt
/how-it-works
```

Page title:

```txt
How It Works
```

Subtitle:

```txt
A clear process from first conversation to launch, support, and ownership transfer.
```

### Process Steps

1. Discovery
2. Strategy & scope
3. Design direction
4. Build
5. Review
6. Launch
7. Support / ownership transfer

### Step Details

#### Discovery

Understand the business, goals, audience, current website, timeline, and constraints.

#### Strategy & Scope

Define the pages, features, integrations, payment path, support needs, and launch plan.

#### Design Direction

Create the visual direction, page hierarchy, content structure, and trust-building layout.

#### Build

Develop the site with clean front-end architecture, responsive layouts, performance focus, and conversion paths.

#### Review

Refine content, visuals, mobile behavior, forms, links, and final client feedback.

#### Launch

Deploy the site, connect the domain, verify forms, test performance, and confirm production readiness.

#### Support / Ownership Transfer

Transfer source code and files after the agreed project balance is complete, or continue with an optional care plan.

---

## 5. Contractor / Service Business Landing Page

Route:

```txt
/contractor-websites
```

Page title:

```txt
Websites for Contractors & Service Businesses
```

Purpose:

Create a focused niche landing page that can convert contractor/service-business prospects and use Higgins Building Group as a visual proof point.

### Page Sections

1. Hero
2. Why contractor websites lose trust
3. What a modern contractor site needs
4. Before/after example
5. Packages
6. Quote CTA

### Hero Copy

Headline:

```txt
Contractor websites built to create trust before the first phone call.
```

Subtitle:

```txt
Higgins Digital builds clean, fast, credibility-focused websites for contractors and service businesses that need to look established, reliable, and easy to contact.
```

CTA buttons:

```txt
Request a Quote
View Website Scorecard
```

### Why Contractor Websites Lose Trust

Cards:

- Outdated visuals
- Weak mobile layouts
- Hidden contact information
- Slow loading pages
- Unclear services
- No proof or credibility

### What a Modern Contractor Site Needs

Cards:

- Clear services
- Strong first impression
- Fast mobile experience
- Simple quote path
- Project proof
- Trust signals

### Before/After Proof

Use Higgins Building Group if assets/links exist.

Copy:

```txt
Transformed an outdated contractor website into a faster, cleaner, more credible digital presence built to create trust before the first phone call.
```

---

## 6. Pricing Page Full Redesign

Route:

```txt
/pricing
```

The pricing page must be fully reorganized into this exact structure:

1. Hero / Pricing Overview
2. Pricing Path Selector
3. One-Time Website Builds
4. Managed Monthly Website Plans
5. Website Care Plans
6. Modifications & Transformations
7. Why Higgins Digital Wins
8. Ownership / No Lock-In Statement
9. Final CTA

### Pricing Hero

Headline:

```txt
Flexible website pricing built around how your business wants to grow.
```

Subtitle:

```txt
From polished five-page sites to custom platforms with integrations and portals, Higgins Digital builds fast, modern, conversion-focused websites at a fraction of typical agency pricing — with flexible payment options and full source-code ownership available at launch.
```

Hero highlight cards:

```txt
ONE-TIME BUILDS — Starting at $1,500
MANAGED MONTHLY — Starting at $249/mo
CARE PLANS — Starting at $75/mo
MODIFICATIONS — Starting at $150
```

### Pricing Path Selector

Badge:

```txt
PART ONE
```

Title:

```txt
Choose the pricing path that fits your business.
```

Subtitle:

```txt
Whether you want to pay once and fully own the site, spread the build into a managed monthly plan, or keep an existing site supported after launch, Higgins Digital gives you a clear path without unnecessary platform lock-in.
```

Cards:

#### Pay Once

Subtitle:

```txt
Best for businesses that want full ownership after launch.
```

Bullets:

```txt
One-time project payment
Custom website designed and built around your business
Source-code ownership transferred at launch
Optional monthly care after delivery
```

CTA:

```txt
View One-Time Builds
```

#### Managed Monthly

Subtitle:

```txt
Best for businesses that want a professional site without a large upfront payment.
```

Bullets:

```txt
Lower upfront commitment
Website build, launch support, and ongoing care included
Small monthly edits and maintenance
12-month minimum recommended
```

CTA:

```txt
View Monthly Plans
```

#### Ongoing Care

Subtitle:

```txt
Best for businesses that already have a site and want support after launch.
```

Bullets:

```txt
Website monitoring
Minor content updates
Performance checks
Priority support options
```

CTA:

```txt
View Care Plans
```

### One-Time Website Builds

Badge:

```txt
PART TWO
```

Title:

```txt
One-Time Website Builds
```

Subtitle:

```txt
From-scratch builds for businesses that want a professional website, full ownership, and no ongoing platform dependency.
```

#### Launch Site

Category:

```txt
STATIC / HEADLESS
```

Price:

```txt
Starting at $1,500
```

Description:

```txt
A lean, fast, professional website for small businesses establishing or upgrading their digital presence.
```

Included:

```txt
4–6 page custom website
Responsive mobile-first UI/UX
Fast static deployment setup
Basic SEO foundations
Contact form integration
Domain and launch support
30-day post-launch support
Full source-code ownership at launch
```

Note:

```txt
Best for service businesses, personal brands, and small companies that need a clean professional presence.
```

Primary CTA:

```txt
Pay Deposit
```

Secondary CTA:

```txt
Request Quote
```

#### Growth Site

Recommended badge:

```txt
★ MOST POPULAR ★
```

Category:

```txt
BUSINESS GROWTH
```

Price:

```txt
Starting at $2,500
```

Description:

```txt
A stronger digital presence for businesses ready to convert traffic, support content, and look more established online.
```

Included:

```txt
8–12 page custom website
Advanced responsive UI/UX
Blog, news, or CMS integration if needed
Advanced lead capture
Custom animation and motion
Technical SEO structure
Performance optimization
60-day post-launch support
Full source-code ownership at launch
```

Note:

```txt
Best for businesses that want a more complete website with stronger credibility, conversion paths, and room to grow.
```

Primary CTA:

```txt
Pay Deposit
```

Secondary CTA:

```txt
Request Quote
```

#### Custom Platform

Category:

```txt
CUSTOM API & PORTALS
```

Price:

```txt
Starting at $5,000+
```

Description:

```txt
Custom data, portals, dashboards, integrations, and internal tools for businesses that need real engineering beyond a standard website.
```

Included:

```txt
Custom application or platform architecture
Client, user, or internal portals
API development
Dashboard or data integration
Authentication or protected pages if needed
Scalable deployment setup
Priority engineering support
90-day post-launch support
Full source-code ownership at launch
```

Note:

```txt
Best for businesses that need software, not just pages.
```

CTA:

```txt
Request Quote
```

Do not send Custom Platform directly to fixed checkout.

### Managed Monthly Website Plans

Badge:

```txt
PART THREE
```

Title:

```txt
Managed Monthly Website Plans
```

Subtitle:

```txt
For businesses that want a professional website without a large upfront payment. Higgins Digital builds, launches, maintains, and supports the site through a simple monthly plan.
```

Highlight box:

```txt
Not a rental trap.
Managed monthly plans are designed for businesses that prefer predictable monthly costs instead of a larger upfront build. After the initial agreement, clients can continue monthly support or discuss a buyout/ownership transfer option.
```

#### Managed Starter

Price:

```txt
$249/mo
```

Subtitle:

```txt
12-month minimum
```

Description:

```txt
A simple monthly path for small businesses that need a clean professional site and ongoing technical support.
```

Included:

```txt
Custom starter website build
Hosting and deployment setup
Basic monthly maintenance
Minor content edits
Performance monitoring
Contact form support
Monthly backup/version control check
Email support
```

Best for:

```txt
Small service businesses and solo operators.
```

CTA:

```txt
Start Managed Starter
```

#### Managed Growth

Recommended badge:

```txt
★ BEST VALUE ★
```

Price:

```txt
$399/mo
```

Subtitle:

```txt
12-month minimum
```

Description:

```txt
A stronger managed plan for businesses that need more pages, more updates, and continued improvement after launch.
```

Included:

```txt
Custom growth website build
More advanced page structure
Monthly content updates
Lead capture support
Performance and SEO checks
Priority support
Small design improvements over time
Monthly improvement recommendations
```

Best for:

```txt
Businesses that want their site actively supported and improved.
```

CTA:

```txt
Start Managed Growth
```

#### Managed Custom

Price:

```txt
Custom Quote
```

Subtitle:

```txt
For advanced needs
```

Description:

```txt
For businesses that need portals, integrations, dashboards, automation, or more complex ongoing technical work.
```

Included:

```txt
Custom platform planning
Advanced integrations
Portal or dashboard support
Technical maintenance
Higher support priority
Ongoing feature development options
Custom reporting or automation if needed
```

Best for:

```txt
Businesses that need ongoing engineering, not just a website.
```

CTA:

```txt
Request Custom Monthly Quote
```

Do not send Managed Custom directly to fixed checkout.

### Website Care Plans

Badge:

```txt
PART FOUR
```

Title:

```txt
Website Care Plans
```

Subtitle:

```txt
For clients who already launched a site and want continued support, small edits, monitoring, and improvements without managing the technical side themselves.
```

#### Basic Care

Price:

```txt
$75/mo
```

Description:

```txt
Essential monitoring and light support for simple websites.
```

Included:

```txt
Monthly site check
Uptime/deployment review
Minor bug monitoring
Basic performance check
Version control backup check
Email support
```

Best for:

```txt
Simple websites that do not need frequent edits.
```

CTA:

```txt
Start Basic Care
```

#### Growth Care

Recommended badge:

```txt
★ RECOMMENDED ★
```

Price:

```txt
$150/mo
```

Description:

```txt
Ongoing support for businesses that need regular content edits and a more actively maintained website.
```

Included:

```txt
Everything in Basic Care
Small monthly text/image edits
Monthly performance review
Basic SEO/content recommendations
Form and link checks
Priority support
Small UI polish improvements when needed
```

Best for:

```txt
Businesses that want their website maintained and refined over time.
```

CTA:

```txt
Start Growth Care
```

#### Priority Care

Price:

```txt
$250+/mo
```

Description:

```txt
Higher-touch support for businesses that need faster turnaround, frequent updates, or more active website management.
```

Included:

```txt
Everything in Growth Care
Faster support response
More frequent content updates
Landing page or section improvements
Conversion-focused recommendations
Monthly strategy check-in if needed
Priority scheduling for new work
```

Best for:

```txt
Businesses that rely heavily on their website for leads, trust, and conversion.
```

CTA:

```txt
Start Priority Care
```

### Modifications & Transformations

Badge:

```txt
PART FIVE
```

Title:

```txt
Modifications & Transformations
```

Subtitle:

```txt
Already have a site? Higgins Digital can update what works, rebuild what does not, or completely modernize the experience.
```

#### Quick Fix

Label:

```txt
A
```

Turnaround:

```txt
1–3 day turnaround
```

Price:

```txt
$150–$350
```

Description:

```txt
Small targeted changes for websites that only need a few quick improvements.
```

Included:

```txt
Copy and image swaps
Color or font updates
Form and contact edits
Minor layout tweaks
```

CTA:

```txt
Start Quick Fix
```

#### Standard Mod

Label:

```txt
B
```

Turnaround:

```txt
3–5 day turnaround
```

Price:

```txt
$350–$800
```

Description:

```txt
Page-level updates without rebuilding the entire website.
```

Included:

```txt
New page additions
Section redesigns
Navigation restructure
CTA and conversion updates
```

CTA:

```txt
Start Standard Mod
```

#### Advanced Mod

Label:

```txt
C
```

Turnaround:

```txt
5–10 day turnaround
```

Price:

```txt
$800–$1.5K
```

Description:

```txt
Structural and visual improvements that modernize an outdated or underperforming website.
```

Included:

```txt
Full section rebuilds
Animation additions
Performance audit and fixes
SEO structure overhaul
```

CTA:

```txt
Request Advanced Mod
```

Do not send Advanced Mod directly to fixed checkout.

#### Full Transformation

Label:

```txt
D
```

Turnaround:

```txt
2–4 week turnaround
```

Price:

```txt
$1.5K–$3.0K
```

Description:

```txt
A dated site completely reframed with new visuals, stronger structure, and a more professional user experience.
```

Included:

```txt
Complete visual redesign
Brand system refinement
Architecture rebuild
Domain transition support
```

CTA:

```txt
Request Transformation Quote
```

Do not send Full Transformation directly to fixed checkout.

### Why Higgins Digital Wins

Badge:

```txt
PART SIX
```

Title:

```txt
Why Higgins Digital Wins
```

Subtitle:

```txt
A cleaner, faster, more flexible alternative to bloated templates and overpriced agency builds.
```

Comparison table columns:

```txt
Metric
Typical Agency or Template Build
Higgins Digital Build
```

Rows:

```txt
Loading Speed | Often slowed by bloated themes, plugins, or unnecessary scripts | Built for fast static performance and clean front-end delivery
Security | Plugin-heavy setups can create extra maintenance and exploit risk | Lean architecture with fewer moving parts and cleaner deployment
SEO Structure | Often limited by template structure or page-builder constraints | Clean, search-friendly page structure built around the business
Scalability | Can become harder to maintain as pages, traffic, or features grow | Built to stay organized as the business grows
Code Ownership | Often locked into a platform, builder, or agency workflow | Portable clean code with ownership transfer available
Design Quality | Template-driven look | Custom premium UI/UX tailored to the brand
Pricing Flexibility | Large upfront costs or unclear ongoing fees | One-time builds, managed monthly plans, and optional care plans
```

Make the table horizontally scrollable on mobile if needed.

### Ownership / No Lock-In Statement

Title:

```txt
The code is yours. Period.
```

Body:

```txt
After launch, and after any agreed domain purchase, transfer, or project balance is complete, every line of code, every asset, and every file can belong 100% to the client. No platform lock-in, no hidden licensing fees, and no permission needed to host, edit, or migrate the site later.
```

Second note:

```txt
Monthly care and managed plans are available for businesses that want Higgins Digital to continue maintaining and improving the site — not because the client is trapped.
```

### Final Pricing CTA

Title:

```txt
Ready to build the right website for your business?
```

Subtitle:

```txt
Start with a one-time build, choose a managed monthly plan, or request support for an existing site. Higgins Digital will recommend the cleanest path based on your goals, timeline, and budget.
```

Buttons:

```txt
Request a Quote
View Work
Make a Payment
```

Small text:

```txt
Quotes typically sent within 48 hours.
```

---

## 7. Payments Page + Stripe Checkout System

Add a real payment system using Stripe Checkout.

Route:

```txt
/payments
```

Page title:

```txt
Secure Payments
```

Hero copy:

```txt
Start a website build, activate a monthly plan, or pay for ongoing support through Higgins Digital's secure online checkout.
```

Subcopy:

```txt
Payments are processed securely through Stripe. Monthly plans renew automatically, and one-time payments or deposits are applied toward the selected project or service.
```

Important trust note:

```txt
Higgins Digital does not store card details on this website.
```

### Payment Page Sections

#### Monthly Website Plans

Cards:

```txt
Managed Starter — $249/mo — Start Plan
Managed Growth — $399/mo — Start Plan
Managed Custom — Request Quote
```

#### Website Care Plans

Cards:

```txt
Basic Care — $75/mo — Subscribe
Growth Care — $150/mo — Subscribe
Priority Care — $250+/mo — Subscribe
```

#### Website Build Deposits

Cards:

```txt
Launch Site Deposit — $750 — Pay Deposit
Growth Site Deposit — $1,250 — Pay Deposit
Custom Platform — Request Quote
```

#### Modifications

Cards:

```txt
Quick Fix — $150 — Pay Now
Standard Mod Deposit — $350 — Pay Deposit
Advanced Mod — Request Quote
Full Transformation — Request Quote
```

### Before You Pay Disclaimer

Add near the bottom of the payments page:

```txt
Before You Pay
```

Body:

```txt
Online payments are intended for clearly defined plans, deposits, and approved services. For larger builds, custom platforms, advanced integrations, or full transformations, Higgins Digital may require a short consultation before work begins. If a payment is submitted for a service that requires additional scope clarification, Higgins Digital will contact you before starting the project.
```

Second note:

```txt
Subscription plans renew monthly until canceled according to the agreed service terms. Managed monthly website plans may require an initial minimum commitment depending on the project scope.
```

Additional legal/trust copy:

```txt
Deposits apply toward the selected project total unless otherwise stated in the written project agreement.
```

```txt
For custom or complex work, Higgins Digital may contact you to confirm scope before work begins.
```

```txt
Recurring plans renew monthly until canceled according to the agreed service terms.
```

### Canceled Payment State

If the URL is:

```txt
/payments?canceled=true
```

show a small notice:

```txt
Payment was not completed. You can try again or contact Higgins Digital if you have questions.
```

---

# Stripe Implementation Requirements

Use Stripe Checkout, not a custom card form.

Install Stripe if needed:

```bash
npm install stripe
```

Do not store or use raw card data. Do not expose the Stripe secret key in React/frontend code.

## Required Files

Recommended:

```txt
api/create-checkout-session.js
api/stripe-webhook.js
src/pages/Payments.jsx
src/pages/PaymentSuccess.jsx
src/data/paymentOptions.js
```

Adapt paths if the current project structure requires it.

## Environment Variables

Add these to Vercel later:

```env
STRIPE_SECRET_KEY=sk_live_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SITE_URL=https://higginsd.com

STRIPE_PRICE_MANAGED_STARTER=price_...
STRIPE_PRICE_MANAGED_GROWTH=price_...
STRIPE_PRICE_BASIC_CARE=price_...
STRIPE_PRICE_GROWTH_CARE=price_...
STRIPE_PRICE_PRIORITY_CARE=price_...
STRIPE_PRICE_LAUNCH_DEPOSIT=price_...
STRIPE_PRICE_GROWTH_DEPOSIT=price_...
STRIPE_PRICE_QUICK_FIX=price_...
STRIPE_PRICE_STANDARD_MOD_DEPOSIT=price_...
```

For local development, create a `.env.local` example if the repo uses Vite conventions, but do not commit real keys.

## `src/data/paymentOptions.js`

Create a central list for frontend display. The frontend can know safe metadata and `id`, but not secret keys or actual server-side secret values.

Include at least:

```js
export const paymentOptions = [
  {
    id: 'managed-starter',
    group: 'Monthly Website Plans',
    title: 'Managed Starter',
    price: '$249/mo',
    type: 'subscription',
    description: 'A simple monthly path for small businesses that need a clean professional site and ongoing support.',
    cta: 'Start Managed Starter',
    checkout: true,
  },
  {
    id: 'managed-growth',
    group: 'Monthly Website Plans',
    title: 'Managed Growth',
    price: '$399/mo',
    type: 'subscription',
    description: 'A stronger managed plan for businesses that need monthly updates, ongoing care, and support.',
    cta: 'Start Managed Growth',
    checkout: true,
    recommended: true,
  },
  {
    id: 'basic-care',
    group: 'Website Care Plans',
    title: 'Basic Care',
    price: '$75/mo',
    type: 'subscription',
    description: 'Essential monitoring and light support for simple websites.',
    cta: 'Start Basic Care',
    checkout: true,
  },
  {
    id: 'growth-care',
    group: 'Website Care Plans',
    title: 'Growth Care',
    price: '$150/mo',
    type: 'subscription',
    description: 'Ongoing support for businesses that need regular edits and active maintenance.',
    cta: 'Start Growth Care',
    checkout: true,
    recommended: true,
  },
  {
    id: 'priority-care',
    group: 'Website Care Plans',
    title: 'Priority Care',
    price: '$250+/mo',
    type: 'subscription',
    description: 'Higher-touch support for businesses that need faster turnaround or more frequent updates.',
    cta: 'Start Priority Care',
    checkout: true,
  },
  {
    id: 'launch-deposit',
    group: 'Website Build Deposits',
    title: 'Launch Site Deposit',
    price: '$750',
    type: 'payment',
    description: 'Reserve a Launch Site build. Deposit applies toward the full project balance.',
    cta: 'Pay Launch Deposit',
    checkout: true,
  },
  {
    id: 'growth-deposit',
    group: 'Website Build Deposits',
    title: 'Growth Site Deposit',
    price: '$1,250',
    type: 'payment',
    description: 'Reserve a Growth Site build. Deposit applies toward the full project balance.',
    cta: 'Pay Growth Deposit',
    checkout: true,
  },
  {
    id: 'quick-fix',
    group: 'Modifications',
    title: 'Quick Fix',
    price: '$150',
    type: 'payment',
    description: 'Small copy, image, color, font, form, or layout edits.',
    cta: 'Start Quick Fix',
    checkout: true,
  },
  {
    id: 'standard-mod-deposit',
    group: 'Modifications',
    title: 'Standard Mod Deposit',
    price: '$350',
    type: 'payment',
    description: 'Deposit for page-level updates, section redesigns, navigation changes, or CTA updates.',
    cta: 'Pay Standard Mod Deposit',
    checkout: true,
  },
  {
    id: 'managed-custom',
    group: 'Monthly Website Plans',
    title: 'Managed Custom',
    price: 'Request Quote',
    type: 'quote',
    description: 'For portals, dashboards, integrations, or ongoing engineering.',
    cta: 'Request Quote',
    checkout: false,
  },
  {
    id: 'custom-platform',
    group: 'Website Build Deposits',
    title: 'Custom Platform',
    price: 'Request Quote',
    type: 'quote',
    description: 'Custom platforms require discovery and scope confirmation before payment.',
    cta: 'Request Quote',
    checkout: false,
  },
];
```

## Server Route: `api/create-checkout-session.js`

Create a Vercel serverless function that:

1. Accepts `POST` only.
2. Reads `{ planId }` from the request body.
3. Validates the plan ID against a hardcoded server-side price map.
4. Maps the plan to the correct Stripe price env var.
5. Sets mode to `subscription` or `payment`.
6. Creates a Stripe Checkout Session.
7. Returns `{ url: session.url }`.
8. Returns safe errors if the plan is invalid or env vars are missing.

Server-side price map:

```js
const PRICE_MAP = {
  'managed-starter': {
    price: process.env.STRIPE_PRICE_MANAGED_STARTER,
    mode: 'subscription',
  },
  'managed-growth': {
    price: process.env.STRIPE_PRICE_MANAGED_GROWTH,
    mode: 'subscription',
  },
  'basic-care': {
    price: process.env.STRIPE_PRICE_BASIC_CARE,
    mode: 'subscription',
  },
  'growth-care': {
    price: process.env.STRIPE_PRICE_GROWTH_CARE,
    mode: 'subscription',
  },
  'priority-care': {
    price: process.env.STRIPE_PRICE_PRIORITY_CARE,
    mode: 'subscription',
  },
  'launch-deposit': {
    price: process.env.STRIPE_PRICE_LAUNCH_DEPOSIT,
    mode: 'payment',
  },
  'growth-deposit': {
    price: process.env.STRIPE_PRICE_GROWTH_DEPOSIT,
    mode: 'payment',
  },
  'quick-fix': {
    price: process.env.STRIPE_PRICE_QUICK_FIX,
    mode: 'payment',
  },
  'standard-mod-deposit': {
    price: process.env.STRIPE_PRICE_STANDARD_MOD_DEPOSIT,
    mode: 'payment',
  },
};
```

Success URL:

```txt
/payment-success?session_id={CHECKOUT_SESSION_ID}
```

Cancel URL:

```txt
/payments?canceled=true
```

Use `SITE_URL` from environment variables and fall back safely in development.

## Frontend Checkout Button Behavior

When a payment button is clicked:

1. Set loading state for that button only.
2. POST to `/api/create-checkout-session` with `{ planId }`.
3. Receive `{ url }`.
4. Redirect using `window.location.href = url`.
5. If there is an error, show a clear inline error:

```txt
Checkout could not be started. Please try again or contact Higgins Digital.
```

Quote-first buttons should route to:

```txt
/start-project
```

or:

```txt
/contact
```

Prefer `/start-project` for project-related quote CTAs.

## Payment Success Page

Route:

```txt
/payment-success
```

Title:

```txt
Payment received.
```

Body:

```txt
Thank you for your payment. Higgins Digital will review the payment details and follow up with next steps shortly.
```

Important:

Do not say work begins instantly.

CTA buttons:

```txt
Return Home
Complete Project Intake
Contact Higgins Digital
```

`Complete Project Intake` should link to `/start-project`.

## Webhook Placeholder

Add:

```txt
api/stripe-webhook.js
```

It can be a safe placeholder if not fully connected yet, but structure it for future Stripe webhook verification using `STRIPE_WEBHOOK_SECRET`.

Future events:

```txt
checkout.session.completed
customer.subscription.created
customer.subscription.updated
customer.subscription.deleted
invoice.payment_succeeded
invoice.payment_failed
```

At launch, Stripe Dashboard notifications can be enough, but leave the code organized for future automation.

---

## Services Page V2

If the current site has a services page, rebuild it with the same service categories but better hierarchy.

Recommended sections:

1. Hero
2. Services grid
3. What Higgins Digital builds
4. Ownership and performance differentiators
5. Process preview
6. CTA to Start Project / Scorecard

Services should include:

```txt
Website Builds
Website Redesigns
Custom Platforms
Managed Monthly Plans
Website Care Plans
Performance & Conversion Improvements
```

---

## Work / Projects Page V2

Keep existing projects and assets.

Improve the layout into stronger case-study cards.

Each project should include:

```txt
Client/project name
Before problem
What was built
What improved
Tech/approach
Live link
Visual screenshot/mockup
```

Use this framing for Higgins Building Group:

```txt
Transformed an outdated contractor website into a faster, cleaner, more credible digital presence built to create trust before the first phone call.
```

Do not overclaim analytics that are not available. Use visual proof, performance/UX claims, and clear business framing.

---

## Contact Page V2

Keep the contact page, but make it feel more polished.

It should include:

- Short premium hero
- Direct email/contact options
- Link to `/start-project`
- Link to `/scorecard`
- Optional simple form
- Small expectations section:

```txt
What happens after you reach out?
1. Higgins Digital reviews your goals.
2. You receive a recommended path.
3. If it fits, scope and timeline are confirmed.
4. Build, launch, and support begin.
```

---

## Footer Requirements

Footer should feel premium and useful.

Include:

- Higgins Digital logo
- Short positioning line:

```txt
Premium websites, custom digital systems, and ongoing support for real businesses.
```

- Navigate links
- Services links
- Contact details
- Hours if current site has hours
- Payment link:

```txt
Make a Payment
```

- Small ownership line:

```txt
Custom code. Portable deployment. Optional ongoing support.
```

---

## Forms / Submission Handling

The repo may not have a full backend yet. Use the cleanest available path.

Priority order:

1. Use existing working contact form infrastructure if the current site has it.
2. If no backend exists, create well-structured frontend forms with a TODO endpoint constant.
3. Add a safe `mailto:` fallback that generates a filled email body.
4. Do not fake successful server submission if no endpoint exists.

Add a clear comment in code where the production form endpoint should be connected.

Recommended config:

```js
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
```

If missing, fall back to `mailto:`.

---

## SEO / Metadata

Update page titles and meta descriptions if the project supports it.

Suggested titles:

```txt
Higgins Digital | High-Performance Websites for Real Businesses
Pricing | Higgins Digital
Start a Project | Higgins Digital
Free Website Scorecard | Higgins Digital
How It Works | Higgins Digital
Secure Payments | Higgins Digital
Websites for Contractors & Service Businesses | Higgins Digital
```

Suggested homepage meta description:

```txt
Higgins Digital builds fast, modern, conversion-focused websites and custom digital systems for real businesses, with full ownership options and optional ongoing support.
```

---

## Accessibility Requirements

- All text must pass reasonable contrast against the dark background.
- Buttons and links must have visible focus states.
- Forms must use labels, not placeholders only.
- Interactive cards must be keyboard-friendly when clickable.
- Use semantic section/headings.
- Images must have alt text.
- Respect `prefers-reduced-motion`.

---

## Performance Requirements

- Keep animations lightweight.
- Avoid huge background images on every page.
- Compress images where possible.
- Use lazy loading for non-critical images.
- Avoid importing entire icon libraries if only a few icons are needed.
- Run `npm run build` and fix all errors.

---

## Mobile Requirements

Mobile must be treated as a first-class layout.

Requirements:

- Header must not cover content.
- Cards must stack cleanly.
- Pricing cards should never feel squeezed.
- Comparison tables should be horizontally scrollable or converted into stacked comparison cards.
- Buttons must be easy to tap.
- Page sections need strong vertical spacing.
- No text should touch the screen edges.
- Recommended badges must not overlap awkwardly.
- Bottom CTAs need enough padding so browser chrome does not cover them.

---

## Implementation Sequence

Follow this order:

1. Inspect current repo structure, routes, assets, package.json, and build command.
2. Confirm all current tabs/routes and preserve them.
3. Copy or map the provided brand assets into a clean asset folder if needed.
4. Build the global V2 design system: colors, typography, buttons, cards, background, section headers.
5. Rebuild homepage.
6. Rebuild pricing page using the full pricing structure in this file.
7. Add Start Project flow.
8. Add Website Scorecard page.
9. Add How It Works page.
10. Add Contractor Websites landing page.
11. Add Payments page and Stripe Checkout API route.
12. Add Payment Success page and canceled state.
13. Update footer links and header nav without cluttering.
14. Verify every route manually.
15. Run `npm run build`.
16. Fix all build errors.
17. Final pass for mobile spacing, visual consistency, and copy clarity.

---

## Files Likely to Change

This depends on the actual repo, but likely files include:

```txt
package.json
src/App.jsx
src/main.jsx
src/index.css
src/styles/global.css
src/components/Header.jsx
src/components/Footer.jsx
src/components/Background/HigginsBackground.jsx
src/components/ui/Button.jsx
src/components/ui/GlassCard.jsx
src/components/ui/SectionHeader.jsx
src/components/ui/PricingCard.jsx
src/components/ui/PaymentCard.jsx
src/components/ui/StepFlow.jsx
src/data/pricingData.js
src/data/paymentOptions.js
src/data/projectProof.js
src/pages/Home.jsx
src/pages/Services.jsx
src/pages/Work.jsx
src/pages/Pricing.jsx
src/pages/Contact.jsx
src/pages/StartProject.jsx
src/pages/Scorecard.jsx
src/pages/HowItWorks.jsx
src/pages/ContractorWebsites.jsx
src/pages/Payments.jsx
src/pages/PaymentSuccess.jsx
api/create-checkout-session.js
api/stripe-webhook.js
```

Do not create unnecessary duplicate files if the existing structure already has equivalents.

---

## Copy Rules

Do not say:

```txt
Cheap websites
Rent your website
Pay monthly to keep your website up
We are way cheaper than everyone
```

Do say:

```txt
Managed monthly plan
Ongoing care
Full source-code ownership
No platform lock-in
Performance-focused
Conversion-focused
Flexible pricing paths
Agency-level execution without agency overhead
```

Tone:

```txt
Premium
Trustworthy
Direct
Business-owner friendly
Confident but not arrogant
```

---

## Final QA Checklist

Before stopping, verify all of this:

### Build

- `npm run build` completes successfully.
- No missing imports.
- No missing exports.
- No missing assets.
- No undefined variables.
- No Stripe secret key appears in frontend bundle/code.

### Routes

Verify:

```txt
/
/pricing
/start-project
/scorecard
/how-it-works
/contractor-websites
/payments
/payment-success
/contact
```

Also verify all pre-existing current routes still work.

### Pricing

- Pricing page has all nine required sections.
- One-time builds, managed monthly, care plans, and modifications are clearly separated.
- Recommended badges display cleanly.
- Comparison table is readable on mobile.
- Ownership section is prominent.
- Final CTA includes Request Quote, View Work, and Make a Payment where appropriate.

### Payments

- `/payments` page exists.
- Checkout-enabled options call `/api/create-checkout-session`.
- Quote-first services route to `/start-project` or `/contact`.
- Buttons have loading states.
- Errors are displayed cleanly.
- `/payment-success` exists.
- `/payments?canceled=true` shows cancellation notice.
- Env vars are documented.

### Forms

- Start Project flow works through all steps.
- Scorecard form is usable.
- Contact fallback is not broken.
- No fake success is shown for a network request that fails.

### UI/UX

- Homepage feels significantly more impressive than current site.
- Background feels custom and premium.
- Animations are smooth and not distracting.
- Mobile spacing is clean.
- Header/footer feel intentional.
- No content is cramped.
- No card text collides.
- CTAs are clear.

---

## Final Response Required After Implementation

When done, summarize:

1. Files changed
2. New routes added
3. What was redesigned
4. Payment system status
5. Environment variables still needed
6. Any Stripe/Vercel setup I must do manually
7. Build result
8. Anything I should manually verify in the browser

Do not stop before running:

```bash
npm run build
```

If the build fails, fix the issue and run it again.
