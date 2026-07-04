# SITE Architecture

Marketing site for SITE Architecture, built with [Next.js](https://nextjs.org/)
(App Router) and React. Animations use GSAP + ScrollTrigger, smooth scrolling
via Lenis, and heading splits via SplitType.

## Scripts

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run Oxlint

## Structure

- `src/app` — App Router routes: `/` (home), `/privacy-policy`,
  `/terms-conditions`, plus a catch-all that redirects unknown paths home.
  `layout.jsx` holds `<head>`/metadata + hero preloads; `AppShell.jsx` is the
  client shell (smooth scroll, navbar, footer).
- `src/sections` — home page sections (all client components).
- `src/components` — navbar, footer, preloader, cursor glow, legal page shell.
- `src/lib` — GSAP setup, Lenis provider, intro signal.
- `src/content` — raw HTML for the legal pages (read at build time).
- `public` — images, SVGs, and self-hosted fonts (`public/fonts`).
