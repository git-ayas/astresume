import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';
import { execSync } from 'child_process'
import db from "@astrojs/db";

const branchSymRefPath = execSync('git symbolic-ref HEAD', (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`[Prebuild Tasks - ${(new Date ()).toISOString()}]:`,stdout)
})
const branchRefSegments = branchSymRefPath.toString().split('/')
const  branchName = branchRefSegments[branchRefSegments.length-1]




// https://astro.build/config
export default defineConfig({
  site: 'https://ayaskant-homepage.netlify.app',
  vite: {
    plugins: [yaml()],
    define: {
      'import.meta.env.editorBranch': `\"${branchName.toString().trim()}\"` || 'master'
    }
  },
  integrations: [mdx(), sitemap(), tailwind(), react(), db()]
});