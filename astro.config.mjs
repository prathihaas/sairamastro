import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.sairamhonda.com",
  trailingSlash: "always",
  integrations: [
    tailwind(),
        sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/lp/'),
      serialize: (item) => {
        const url = item.url;
        const buildDate = new Date().toISOString().slice(0, 10);

        // Homepage — genuinely changes on every deploy (new products, blog posts)
        if (url === 'https://www.sairamhonda.com/' || url === 'https://www.sairamhonda.com') {
          return { ...item, priority: 1.0, changefreq: 'daily', lastmod: buildDate };
        }
        // Blog listing page — changes when new posts are added
        if (url.endsWith('/blog') || url.endsWith('/blog/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly', lastmod: buildDate };
        }
        // Individual blog posts — use build date as lastmod proxy (no per-post frontmatter access here)
        if (url.includes('/blog/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: buildDate };
        }
        // Product pages — set lastmod to build date so Google recrawls after price updates
        if (url.includes('/products/') || url.includes('/cars/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: buildDate };
        }
        // Service page
        if (url.includes('/service')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // Locations / branches — very stable
        if (url.includes('/locations') || url.includes('/branches')) {
          return { ...item, priority: 0.7, changefreq: 'yearly' };
        }
        // About page — stable E-E-A-T page
        if (url.includes('/about')) {
          return { ...item, priority: 0.7, changefreq: 'yearly' };
        }
        // All other pages — moderate priority
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      },
    }),
  ],
});
