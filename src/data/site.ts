/**
 * Site-wide configuration: studio identity, store & social links, analytics.
 * Editing this file changes the header, footer and SEO everywhere.
 */
export const site = {
  name: 'Barsuk Studio',
  author: 'Aleh Belko',
  url: 'https://barsukstudio.github.io',
  description:
    'Barsuk Studio makes casual indie tap games in clean vector graphics for Android and iOS — clickers, an action RPG, and relaxing puzzles.',

  /** Google Analytics 4 Measurement ID (G-XXXXXXXXXX). Leave empty to disable. */
  gaId: '',

  /** Developer catalog links — point at the whole studio, not a single game. */
  stores: {
    googlePlay: 'https://play.google.com/store/apps/dev?id=6043684000948739501',
    appStore: 'https://apps.apple.com/us/developer/aleh-belko/id1441871074',
  },

  /** Social links. Set to '' to hide a channel; only keep what you actually run. */
  social: {
    youtube: 'https://www.youtube.com/channel/UCI24p4woAtftcQUt-_KJt-g',
    instagram: 'https://www.instagram.com/barsukstudio',
    tiktok: '',
    discord: '',
  },
} as const;
