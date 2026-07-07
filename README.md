# Barsuk Studio Website

Official site for Barsuk Studio — a showcase of our casual indie tap games with
screenshots and store links. Built with [Astro](https://astro.build), deployed to
GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build
```

Requires Node 22.12+.

## Adding or editing a game

Everything is data-driven — you don't touch HTML.

1. Add the cover art to `public/img/games_pick/` (SVG or PNG, ~1024×500).
2. Add screenshots to `src/assets/img/screens_<name>/` (PNG). They're converted to
   WebP automatically at build time.
3. Add an entry to `src/data/games.json`. Its order controls the order on the home
   grid. `screenshots` points at the folder from step 2; `icon` at the cover from
   step 1; `privacy` at the matching page in `public/`.

The game page (`/<slug>.html`) is generated from `src/pages/[slug].astro`.

## Configuration

- `src/data/site.ts` — studio name, store/social links, and the **GA4 Measurement
  ID** (`gaId`). Set a social link to `''` to hide that channel.
- Privacy policy pages live as standalone files in `public/` (served unchanged).
- `public/app-ads.txt` and the Google verification file are served as-is.

## Structure

```
src/
  data/        games.json (content) + site.ts (config)
  layouts/     Base.astro — <head>, SEO, JSON-LD, GA4
  components/  Header, Footer, GameCard, StoreButtons, SocialLinks, BadgerMark
  pages/       index.astro (home) + [slug].astro (game pages)
  lib/         games.ts — data loading + screenshot optimization
  assets/img/  screenshots (build-optimized)
public/        icons, privacy pages, favicon, app-ads.txt, og-cover
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. One-time setup: repo **Settings → Pages →
Build and deployment → Source: GitHub Actions**.
