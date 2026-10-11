import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    series: z
      .object({
        name: z.string(),
        part: z.number(),
      })
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).default([]),
    year: z.number(),
    yearRange: z.string().optional(),
    category: z.enum(['healthcare', 'saas', 'islamic', 'research', 'design']),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    caseStudy: z.boolean().default(false),
    status: z
      .enum(['live', 'building', 'archived', 'thesis'])
      .default('live'),
    links: z
      .object({
        live: z.url().optional(),
        repo: z.url().optional(),
        external: z.url().optional(),
      })
      .default({}),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    order: z.number().optional(),
    /** Most recent release, shown on the home page Work row */
    release: z
      .object({
        version: z.string(),
        date: z.coerce.date(),
      })
      .optional(),
  }),
});

export const collections = { blog, projects };
