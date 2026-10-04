import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ksprashu.dev',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
