import { defineCollection, z } from 'astro:content';

const cooks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    source_url: z.string().url().optional(),
    source_name: z.string().optional(),
    made_on: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    photos: z.array(z.string().url()).default([]),
    photo_credit: z.string().optional(),
  }),
});

export const collections = { cooks };
