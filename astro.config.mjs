// @ts-check
import { defineConfig } from 'astro/config';
import remarkVideo from './src/plugins/remark-video.mjs';

export default defineConfig({
  // Set this to your real domain once it's live (used for links and social previews).
  site: 'https://portfolio-2026.vercel.app',
  markdown: {
    remarkPlugins: [remarkVideo],
  },
});
