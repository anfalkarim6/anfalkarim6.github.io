// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Live on GitHub Pages. If the site moves to its own domain, change `site` to that domain.
export default defineConfig({
  site: 'https://anfalkarim6.github.io',
  integrations: [mdx(), sitemap()],
  prefetch: { defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
