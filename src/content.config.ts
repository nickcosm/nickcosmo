import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/index.mdoc',
    generateId: ({ entry }) => entry.replace(/\/index\.mdoc$/, ''),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Use the image() helper so Astro treats it as a local asset
    cover: image().optional(), 
    coverAlt: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({
    base: './src/content',
    pattern: 'pages/**/index.mdoc',
    generateId: ({ entry }) =>
      entry.replace(/^pages\//, '').replace(/\/index\.mdoc$/, ''),
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { projects, pages };