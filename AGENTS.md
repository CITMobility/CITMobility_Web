# AGENTS.md

## Project Overview
- **Project name**: CIT Mobility (`cit-mobility`)
- **Framework**: Next.js 16.2.4 (cutting edge - NOT the version you know)
- **React**: 19.2.4
- **Styling**: Tailwind CSS v4 (uses `@tailwindcss/postcss`, not older plugin setup)
- **Language**: TypeScript 5

## Developer Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint (uses `eslint` directly, NOT `next lint`)
```

**Note**: No separate typecheck script - typecheck runs implicitly via `next build`.

## Architecture

- **App Router**: Uses `app/` directory (Next.js App Router)
- **Main pages**:
  - `app/page.tsx` — Home page
  - `app/productos/page.tsx` — Products page
- **Path alias**: `@/*` maps to project root

### Components (`components/`)
Reusable components used across the app:
- `Navbar.tsx` / `Navbar.css` — Site navigation bar
- `Footer.tsx` / `Footer.css` — Site footer
- `HeroCanvas.tsx` — Hero section with canvas animation
- `HeroWrapper.tsx` — Wrapper for hero lazy-loading
- `RutaAnimada.tsx` / `RutaAnimada.css` — Animated route/section
- `ScrollAnimations.tsx` — Scroll-triggered animations
- `MockupApp.tsx` — App mockup display component
- `RobotMascot.tsx` / `RobotMascot.css` — Robot mascot graphic
- `VideoPreloader.tsx` — Video asset preloader

### CSS
Each page and most components have a co-located `.css` file:
- `app/globals.css` — Global base styles
- `app/page.css` — Home page styles
- `app/productos/page.css` — Products page styles

## Key Differences from Older Next.js

- Tailwind CSS v4 uses `@tailwindcss/postcss` in `postcss.config.mjs` (no `tailwind.config.ts`)
- Next.js 16 has breaking changes - check `node_modules/next/dist/docs/` for APIs

## Missing Standard Tools

- No Jest/Vitest test framework configured
- No Storybook