<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# 1224 Dessert Cafe — Project Context

## Stack
- Next.js 16 App Router + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Framer Motion
- Static site (all pages prerendered)

## Design System
- **Brand**: "The Dessert Gallery" — white gallery aesthetic where desserts are art
- **Bg**: `#FAFAF8`, **Ink**: `#1A1A1A`, **Red accent**: `#C8102E` (≤5%), **Muted**: `#6B6B6B` (WCAG AA 5.1:1), **Highlight**: `#F5E6D3`, **Surface**: `#FFFFFF`
- **Typography**: Cormorant Garamond (display/italic), Space Grotesk (nav/12px/4px tracking/uppercase), Inter (body/15px/1.9 Lh), Space Mono (prices)
- **Motion intensity**: 5/10 — fade-in + slide-up, parallax watermarks, hover zoom on images. All animations respect `prefersReducedMotion`.
- **Layout rules**: No shadows, gradients, glass, or card-in-card. 1px borders, overflow-hidden on sections, flat-by-default.

## Pages (5)
| Route | Key Features |
|-------|-------------|
| `/` | Hero with parallax "1224" watermark, 3 signature items (staggered reveal), about strip, Instagram strip |
| `/menu` | 4 editorial categories (Desserts, Coffee, Cold Drinks, Bites), hover color shift, staggered items |
| `/gallery` | 9-image masonry grid (real Unsplash), hover zoom + overlay, lightbox with backdrop blur |
| `/about` | 5-column split layout (text + cafe image), scroll-parallax watermark, address card |
| `/contact` | Address/hours/phone/Instagram + Google Maps embed + WhatsApp CTA button |

## Components
- **Navbar** — Fixed white, active page indicator via red dot, mobile hamburger, ≥44px touch targets
- **Footer** — 3-column (brand, visit, follow), scroll-triggered fade-in
- **WhatsAppButton** — Fixed black circle, bottom-right, links to wa.me/919099058602

## Key Decisions
- `<img>` tags with Unsplash direct URLs (no `next/image` — simpler for static export)
- All pages are `'use client'` for Framer Motion; route-level `layout.tsx` server components handle metadata
- `postcss.config.mjs` uses `@tailwindcss/postcss` (Tailwind v4)
- `vercel.json` configured for Next.js build

## Deployment Status
- **Blocks**: Remote GitHub has old React files causing build failures. Local `eea72c0` is clean.
- **To deploy**: `git push origin main --force` (requires credentials/PAT to overwrite old history)
<!-- END:project-context -->
