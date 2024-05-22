import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://aysastresume.vercel.app',
  vite: {
    plugins: [yaml()],
  },
  integrations: [mdx(), sitemap(), tailwind(), react(), db()]
});