import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';
import { execSync } from 'child_process'
import db from "@astrojs/db";

const currentCommitHash = execSync('git rev-parse --short HEAD', (err, stdout, stderr) => {
  if (err) {
    console.error(err)
  }
})
const currentCommitHashStr = currentCommitHash.toString().trim()
const equivalentBranches = execSync(`git branch --contains ${currentCommitHashStr}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
  }
})
const equivalentBranchesStr = equivalentBranches.toString().trim()
const branchRefSegments = equivalentBranchesStr.split('*').map((branch) => branch.trim()).filter((branch) => branch != null && branch !== '' && branch !== 'HEAD')
const  branchName = branchRefSegments[0]




// https://astro.build/config
export default defineConfig({
  site: 'https://ayaskant-homepage.netlify.app',
  vite: {
    plugins: [yaml()],
    define: {
      'import.meta.env.editorBranch': `"${branchName}"` 
    }
  },
  integrations: [mdx(), sitemap(), tailwind(), react(), db()]
});