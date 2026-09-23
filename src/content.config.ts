import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SERVICES } from './lib/services';

const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as [string, ...string[]];

// ── MB Bookkeeping pitch mock ──
// The Aspect template's blog + case-study collections were deleted wholesale
// (their content was Aspect's, not MB's). The collections stay declared with
// the same schemas so every route keeps compiling, but they are EMPTY until
// the client signs:
//
//   * blog: launch with 8 posts per the KD cadence — cost guides, MTD
//     explainers, Xero-vs-QuickBooks comparisons. Every post must point up
//     at a money page (`service` required).
//   * case-studies: real client stories only, with permission. None invented.
//
// City field is 'bristol' for MB (was 'bath' for Aspect).

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(65),
    description: z.string().min(70).max(160),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    service: z.enum(SERVICE_SLUGS),
    alsoService: z.enum(SERVICE_SLUGS).optional(),
    city: z.literal('bristol'),
    image: z.string().startsWith('/'),
    imageAlt: z.string().min(10),
    author: z.string().default('MB'),
    minutes: z.number().int().min(1).max(20),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    image: z.string(),
    brief: z.string(),
    challenge: z.string(),
    execution: z.string(),
    gallery: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    meta: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog, caseStudies };