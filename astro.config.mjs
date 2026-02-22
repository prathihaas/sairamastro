import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sairamhonda.com', // Replace with production URL
  trailingSlash: 'ignore'
});