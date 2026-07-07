import type { ImageMetadata } from 'astro';
import gamesData from '../data/games.json';

export interface Game {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  blurb: string;
  description: string[];
  icon: string;
  screenshots: string;
  stores: { googlePlay: string; appStore: string };
  privacy: string;
}

export const games = gamesData as Game[];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

/** Public URL for a game's cover icon (icons live in /public/img). */
export function iconUrl(game: Game): string {
  return `/${game.icon}`;
}

/** Platforms a game ships on, derived from its store links. */
export function platforms(game: Game): string[] {
  const out: string[] = [];
  if (game.stores.googlePlay) out.push('Android');
  if (game.stores.appStore) out.push('iOS');
  return out;
}

// Optimised, build-time screenshot imports (astro:assets converts to WebP).
const screenModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/screens_*/*.png',
  { eager: true },
);

/** Ordered, optimisable screenshot images for a game's folder. */
export function getScreens(folder: string): ImageMetadata[] {
  const prefix = `/src/assets/${folder}/`;
  return Object.entries(screenModules)
    .filter(([key]) => key.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod.default);
}
