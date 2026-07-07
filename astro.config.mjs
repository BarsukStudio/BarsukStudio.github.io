// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://barsukstudio.github.io',
  // Emit `gym.html` instead of `gym/index.html` so existing store links keep working.
  build: { format: 'file' },
  integrations: [sitemap()],
});
