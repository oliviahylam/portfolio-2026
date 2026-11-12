import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per project in src/content/projects/<project-name>/
// containing project.md + its images. See README.md for the fields.
const projects = defineCollection({
  loader: glob({
    pattern: '*/project.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0].replace(/^\d+[-_]/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.union([z.string(), z.number()]).transform(String),
      // Which lens(es) show this project. First one decides the page style.
      lens: z.array(z.enum(['product', 'brand'])).default(['product']),
      // 'case-study' = text-led product layout, 'editorial' = image-led brand layout
      template: z.enum(['case-study', 'editorial']).default('case-study'),
      order: z.number().default(99),
      brandOrder: z.number().optional(),
      category: z.string(),
      summary: z.string(),
      cover: image().optional(),
      coverVideo: z.string().optional(),
      coverNote: z.string().optional(),
      role: z.string().optional(),
      team: z.string().optional(),
      timeline: z.string().optional(),
      client: z.string().optional(),
      tools: z.array(z.string()).default([]),
      outcome: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
