import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
  },
    vite: {
      resolve: {
        alias: {
          src: path.resolve("./src"),
        },
      },
    },
  vitePlugin: {
    experimental: {
      inspector: true,
    },
  },
};

export default config;
