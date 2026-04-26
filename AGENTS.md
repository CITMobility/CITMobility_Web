# AGENTS.md

## Project Overview
- **Framework**: Next.js 16.2.4 (cutting edge - NOT the version you know)
- **React**: 19.2.4
- **Styling**: Tailwind CSS v4 (uses `@tailwindcss/postcss`, not older plugin setup)
- **Language**: TypeScript 5

## Developer Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

**Note**: No separate typecheck script - typecheck runs implicitly via `next build`.

## Architecture

- **App Router**: Uses `app/` directory (Next.js App Router)
- **Main pages**: `app/page.tsx` (home), `app/productos/page.tsx` (products)
- **Path alias**: `@/*` maps to project root

## Key Differences from Older Next.js

- Tailwind CSS v4 uses `@tailwindcss/postcss` in `postcss.config.mjs` (no `tailwind.config.ts`)
- Next.js 16 has breaking changes - check `node_modules/next/dist/docs/` for APIs

## Missing Standard Tools

- No Jest/Vitest test framework configured
- NoStorybook