// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeContextLinks from './src/lib/rehype-context-links.mjs';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const contextDir = fileURLToPath(new URL('../../context/', import.meta.url));

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },

  markdown: {
    processor: unified({
      rehypePlugins: [[rehypeContextLinks, { contextDir }]],
    }),
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});