import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import netlify from '@astrojs/netlify/functions';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    storyblok({
      bridge: true,
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: 'eu',
      },
      components: {
        blogPost: 'storyblok/BlogPost',
        blogPostList: 'storyblok/BlogPostList',
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind(),
  ],
  // vite: {
  //   plugins: [basicSsl()],
  //   server: {
  //     https: true,
  //   },
  // },
});
