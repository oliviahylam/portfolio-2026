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
      // Skills shown on the card + case study (e.g. User research, Prototyping)
      skills: z.array(z.string()).default([]),
      industry: z.string().optional(),
      // ── Storytelling blocks (all optional) ──
      // A one-line hook under the title: the question or tension of the story
      hook: z.string().optional(),
      // Why this problem mattered to YOU — first person
      context: z.string().optional(),
      // The brief / "How might we…" question
      challenge: z.string().optional(),
      // Big numbers that make the problem real
      stats: z.array(z.object({ value: z.string(), label: z.string(), note: z.string().optional() })).default([]),
      // How you used AI — two ways: inside the product, and in your process
      ai: z
        .object({
          inProduct: z.string().optional(),
          inProcess: z.array(z.object({ tool: z.string(), role: z.string(), note: z.string() })).default([]),
        })
        .optional(),
      // What you'd do differently / next steps
      reflection: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
