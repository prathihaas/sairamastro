import { defineCollection, z } from 'astro:content';

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

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title_en: z.string(),
    title_te: z.string(),
    date: z.string(), // ISO format YYYY-MM-DD
    author: z.string().default('Sairam Honda'),
    featured_image: z.string().optional(),
    seo_title: z.string(),
    seo_description: z.string(),
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

export const collections = {
  products,
  blog,
  branches,
  pages,
};