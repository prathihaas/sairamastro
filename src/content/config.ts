import { defineCollection, z } from 'astro:content';

// Unified Prakash Group blog schema — do not change field names.
// All new blog posts must include: title, date, category, excerpt, seo_title, seo_description.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                          // English title — H1 and JSON-LD name
    title_te: z.string().optional(),            // Telugu title shown below H1
    date: z.coerce.date(),                      // Accepts "YYYY-MM-DD" or YAML Date
    author: z.string().optional(),              // Byline; falls back to site name in template
    category: z.string().default('General'),    // Category pill (Buying Guide, Tips, etc.)
    tags: z.array(z.string()).optional(),       // Keyword tags for internal linking
    featured_image: z.string().optional(),      // Hero image URL
    excerpt: z.string(),                        // 120-160 chars — listing cards + OG description
    seo_title: z.string(),                      // 50-60 chars — <title> tag
    seo_description: z.string(),               // 120-160 chars — meta description
    readTime: z.string().optional(),            // e.g. "8 min read"
    draft: z.boolean().default(false),          // true = excluded from listings and sitemap
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name_en: z.string(),
    name_te: z.string(),
    price: z.string(),
    category: z.string().default('Scooter'),
    whatsapp_message: z.string(),
    seo_title: z.string(),
    seo_description: z.string(),
    featured_image: z.string().optional(),
    mileage: z.string().optional(),
  }),
});

const branches = defineCollection({
  type: 'content',
  schema: z.object({
    name_en: z.string(),
    name_te: z.string(),
    address_en: z.string(),
    address_te: z.string(),
    phone: z.string(),
    map_link: z.string().url(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title_en: z.string(),
    title_te: z.string(),
    description_en: z.string(),
    description_te: z.string(),
    seo_title: z.string(),
    seo_description: z.string(),
    hero_image: z.string().optional(),
  }),
});

export const collections = { products, blog, branches, pages };
