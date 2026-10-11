// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hammadh.dev',
  // Astro 7 defaults to JSX-style whitespace, which would glue inline text together
  // (e.g. "Requester· Remote"); keep the HTML-style collapsing the templates assume.
  compressHTML: true,
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    // Both themes are emitted; global.css picks one from html[data-theme].
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      // Force Vite to pre-bundle these client-only React libs.
      // Without this, the dynamic import for the GitHub heatmap island
      // can 504 on first load when Vite's dep optimizer skips them.
      include: ['react-github-calendar', 'react-activity-calendar'],
    },
  },
});
