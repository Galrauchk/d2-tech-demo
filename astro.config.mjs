// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://d2-tech-demo.netlify.app',
  integrations: [sitemap()],
});
