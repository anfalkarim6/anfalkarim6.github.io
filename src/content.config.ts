import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A photograph hosted on Unsplash's image CDN. `id` is the `photo-…` path segment. */
const photo = z.object({
  id: z.string().startsWith('photo-'),
  alt: z.string(),
  credit: z.string(),
  creditUrl: z.string(),
  caption: z.string().optional(),
  position: z.string().default('50% 50%'),
});

export const STYLES = ['Gothic', 'Mughal', 'Modernist', 'Organic', 'Vernacular', 'Brutalist'] as const;

const essays = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    published: z.coerce.date(),
    style: z.enum(STYLES),
    building: z.object({
      name: z.string(),
      architect: z.string(),
      location: z.string(),
      city: z.string(),
      year: z.number(),
      yearLabel: z.string(),
      material: z.string(),
    }),
    cover: photo,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    year: z.number(),
    site: z.string(),
    summary: z.string(),
    programme: z.string(),
    area: z.string(),
    tools: z.array(z.string()),
    drawing: z.enum(['reading-room-section', 'courtyard-plan', 'pavilion-axon']),
    drawingCaption: z.string(),
    order: z.number(),
  }),
});

export const collections = { essays, projects };
