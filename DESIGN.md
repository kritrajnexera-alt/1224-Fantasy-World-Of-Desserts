---
name: 1224 Dessert Cafe
description: The Dessert Gallery — premium desserts and coffee in Ankleshwar
colors:
  bg: "#FAFAF8"
  surface: "#FFFFFF"
  highlight: "#F5E6D3"
  ink: "#1A1A1A"
  red: "#C8102E"
  border: "#E5E5E5"
  muted: "#6B6B6B"
  watermark: "#F0EDE8"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: -0.02em
  nav:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 4px
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.9
  mono:
    fontFamily: "Space Mono, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
---

# Design System: 1224 Dessert Cafe

## 1. Overview

**Creative North Star: "The Dessert Gallery"**

1224 Dessert Cafe's visual system treats every menu item as an exhibit in a white-walled gallery. The space is architectural, airy, and deliberate — generous white space frames each dish like an artwork on a wall, while a single red accent (Cherry) cuts through the monochrome with precision. This is not a cosy cafe with exposed brick and Edison bulbs. It is a pristine gallery where what you eat is the art.

The system explicitly rejects: dark moody interiors, pastel cute dessert tropes, corporate glassmorphism, and any layout where the container competes with the content. Cards are rare; when they appear they are flat and border-only. Bento grids and nested cards are prohibited. Shadows do not exist in this system — depth is conveyed through tonal layering, not elevation.

### Key Characteristics:
- Gallery whites and near-whites dominate every surface
- Cherry red accent used at ≤5% of any screen (the rarity is the point)
- Asymmetric, editorial layouts with abundant negative space
- Four-typeface system with high contrast (serif display + grotesk nav + humanist body + mono prices)
- Thin 1px borders in Silver Thread (border) as the only structural line
- No shadows, no glass, no gradients
- Overflow-hidden on every section for clean edges

## 2. Colors: The Cafe Palette

A warm-leaning neutral palette anchored by a single high-chroma red accent. The warmth is in the highlight (Parchment) and background (Flour), not in sRGB warm shifts — the neutrals carry ≤0.01 chroma toward the brand's own hue.

### Primary
- **Cherry** (#C8102E / oklch(45% 0.22 25)): The only accent. Used for thin dividers, hover states, active nav indicators, and the WhatsApp callout. Never for body text or backgrounds. Appears on ≤5% of any given screen.

### Neutral
- **Flour** (#FAFAF8 / oklch(98% 0.002 90)): The gallery wall. Used as the primary background for every page and section.
- **Snow** (#FFFFFF / oklch(100% 0 0)): Card and container surfaces. Contrasts subtly against Flour.
- **Parchment** (#F5E6D3 / oklch(92% 0.015 70)): Highlight sections — about strip, blockquotes, location cards. Used sparingly to create rhythm.
- **Linen** (#F0EDE8 / oklch(94% 0.008 75)): Watermark text and ghost elements. Never used for readable content.
- **Silver Thread** (#E5E5E5 / oklch(90% 0 0)): Borders, dividers, subtle structural lines. Always 1px.
- **Stone** (#6B6B6B / oklch(45% 0 0)): Secondary/muted text, meta information, nav-lower-status.
- **Dark Roast** (#1A1A1A / oklch(15% 0 0)): Body text and primary ink. The only text color for readable content.

### Named Rules

**The Cherry Rule.** The accent colour (Cherry #C8102E) is used on ≤5% of any screen. A second Cherry element within the same viewport dilutes the effect. Cherry is for the moment the user should notice. Its rarity is the point.

**The Flour Floor Rule.** The background is always Flour (#FAFAF8). Snow (#FFFFFF) sits on Flour for cards and containers — the surface one step above the gallery floor. Parchment (#F5E6D3) is used to highlight, never as a background behind text.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Nav Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** Inter (with -apple-system, sans-serif fallback)
**Label/Mono Font:** Space Mono (with monospace fallback)

**Character:** An editorial serif for display that speaks of old-world quality, paired with a cold grotesk for navigation (the gallery label) and a warm humanist sans for body (the cafe seat). Space Mono enters only for prices and technical data — it has the authority of a receipt, not a headline. The contrast between the four is the point: each typeface has a distinct job, and they never overlap.

### Hierarchy
- **Display** (300 italic, clamp(2.5rem, 7vw, 5rem), 0.95 line-height, -0.02em tracking): Hero headlines, page titles, large numerals. Used only once per page.
- **Headline** (400 italic, clamp(1.75rem, 4vw, 2.5rem), 1.1 line-height): Section titles and item names. Cormorant Garamond, always italic.
- **Nav** (500, 12px, 1 line-height, 4px tracking, uppercase): Navigation links, section labels, eyebrow content. Space Grotesk, always uppercase.
- **Body** (400, 15px, 1.9 line-height): All paragraph text. Inter. Max line length 70ch.
- **Label** (400, 11-13px, 1 line-height, 3-4px tracking, uppercase): Small labels, meta information, footnotes. Space Grotesk, always uppercase.
- **Mono** (400, 14px, 1 line-height): Prices, numerical data. Space Mono. The only font that right-anchors to its container.

### Named Rules

**The One Font Per Job Rule.** Cormorant Garamond is for display only. Space Grotesk is for navigation and labels only. Inter is for body text only. Space Mono is for prices only. No typeface intrudes on another's role. If in doubt, use Inter.

**The Upper-Lower Divide.** Every nav/label element is uppercase with 3-4px tracking. Every body/display element is sentence case or title case. No mixed case in navigation. No uppercase in paragraphs.

**The Price Right Rule.** Prices are always set in Space Mono, right-aligned to the container, on the same baseline as the item name. The price is an object in its own right — Space Mono's mechanical rhythm distinguishes it from the editorial body copy.

## 4. Elevation

**Flat by default.** This system uses zero box-shadows. Depth is conveyed entirely through tonal layering — Snow (#FFFFFF) surfaces sit on Flour (#FAFAF8) backgrounds, and the subtle shift from 100% to 98% lightness is the only elevation signal. Borders are 1px Silver Thread (#E5E5E5) where structural separation is needed.

There is no shadow vocabulary. Hover states use colour transitions (text or border shifting to Cherry (#C8102E)) or the background fill inversion on the primary CTA button (border-to-fill). No inset shadows, no drop shadows, no floating elements.

### Named Rules
**The Flat-By-Default Rule.** No element casts a shadow at any state. Hover feedback uses colour or background fill, never elevation change.

## 5. Components

### Buttons
- **Shape:** Square corners (0px border-radius). The system is architectural; radiusing would soften it into the cafe territory we avoid.
- **Primary CTA (text → fill):** `border: 1px solid Dark Roast; color: Dark Roast; background: transparent; padding: 12px 32px;` → hover: `background: Dark Roast; color: White; transition 300ms ease`. Letter-spacing 3px, uppercase, Space Grotesk 12px/500.
- **Close / Cancel (modal):** Same pattern, smaller: `padding: 8px 24px; font-size: 11px;`.

### Navigation (Navbar)
- **Style:** Pure white bar (`background: Snow (#FFFFFF)`), full-width, fixed top. Border-bottom 1px Silver Thread.
- **Typography:** Space Grotesk 12px/500, 4px tracking, uppercase.
- **Separators:** 1px Cherry dots between links — the only decorative element.
- **Active state:** A 1px Cherry dot below the active link (mimics the separator rhythm).
- **Mobile:** Hamburger toggle; menu expands vertically with a subtle fade.

### Footer
- **Style:** 3-column grid, text left, `border-top: 1px Silver Thread`. No background tint (Flour inherits from page).
- **Typography:** Brand mark (Cormorant Garamond 24px/300 italic), links in Space Grotesk 12px/3px tracking uppercase.
- **Columns:** Brand + Tagline / Address / Social + Hours.

### WhatsApp Floating Button
- **Style:** Fixed `bottom: 24px; right: 24px;` — 48px circle, `background: Dark Roast; color: White`. No shadow (flat-by-default).
- **Icon:** Inline WhatsApp SVG, 20×20px.
- **Hover:** `background shifts to Cherry (#C8102E)`.

### Modal / Lightbox
- **Style:** Fixed overlay (`background: rgba(0,0,0,0.6)`), center-card Snow surface with border 1px Silver Thread.
- **Content:** Item name (Cormorant Garamond 24px/italic), label (Space Grotesk 11px/3px tracking uppercase), Close button.
- **Dismiss:** Click outside or press Close.

### Instagram Strip
- **Style:** 4-column grid, `gap: 12px`, each cell `aspect-square`. Background alternates Parchment and Silver Thread/50-opacity.
- **Label:** Hidden by default, fades in on hover (Space Grotesk 11px/2px tracking uppercase).
- **Link:** Opens Instagram profile in new tab.

## 6. Do's and Don'ts

### Do:
- **Do** use Flour (#FAFAF8) as the default background for every section and page. Snow (#FFFFFF) only for containers that sit on Flour.
- **Do** use Cherry (#C8102E) exactly once per viewport, at ≤5% of the surface area.
- **Do** keep every section `overflow-hidden` so content never bleeds into negative space.
- **Do** use the correct typeface for the job: Cormorant for display, Space Grotesk for nav/labels, Inter for body, Space Mono for prices.
- **Do** keep borders at exactly 1px Silver Thread (#E5E5E5). Thicker borders erode the architectural feel.
- **Do** respect `prefers-reduced-motion` — all reveals should be visible content that fades/slides in gently.
- **Do** use generous white space. If a section feels full, remove something.

### Don't:
- **Don't** use any shadow, glass effect, or gradient. The system is flat by definition.
- **Don't** use card-in-card layouts or nested containers. A surface sits directly on Flour, not on another surface.
- **Don't** use dark backgrounds, dark moody photography, or dark sections. The gallery is white.
- **Don't** use pastel colours, cupcake icons, whimsical fonts, or any cute/playful dessert-shop tropes.
- **Don't** put an uppercase Space Grotesk eyebrow above every section ("DESSERTS" "ABOUT" "MENU"). One per page is voice; every section is AI grammar.
- **Don't** use side-stripe borders (border-left or border-right >1px as an accent). Use full borders, background tint, or nothing.
- **Don't** use gradient text (`background-clip: text` with a gradient). Single solid colour only.
- **Don't** use numbered section markers (01 · About / 02 · Process) as default scaffolding — only use them when the content is actually a sequence.
