import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SERVICES } from './lib/services';

const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as [string, ...string[]];

// Blog posts exist to catch problem-aware search ("why is my wall damp
// inside") upstream of the service pages, and to pass that authority up.
//
// The schema is the enforcement. Modelled against the real 135-page link
// graph, a conventional blog — nav link, tag archives, posts cross-linking
// — costs the service pages 6.7 points of internal PageRank at 50 posts.
// The same 50 posts linking only upward GAIN them 1.6. So:
//
//   * `service` and `city` are REQUIRED. Every post must point up at a
//     money page; a post that serves no service page should not exist.
//   * There is deliberately no `tags` or `category` field. Archive pages
//     are thin, absorb PageRank and pass it sideways into more thin pages.
//     That was most of the 6.7-point loss.
//   * There is no `related` field. Post-to-post cross-linking is the trap
//     the 90 service x area pages already fell into: 70% of their links
//     went sideways and the tail hoarded 28% of site authority.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(65),
    description: z.string().min(70).max(160),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),

    /** The service page this post feeds. Required — this is the link up. */
    service: z.enum(SERVICE_SLUGS),
    /** Secondary service, where the post genuinely serves two. */
    alsoService: z.enum(SERVICE_SLUGS).optional(),
    /** The city hub this post feeds. */
    city: z.literal('bath'),

    /** Lead image, relative to /public. */
    image: z.string().startsWith('/'),
    imageAlt: z.string().min(10),

    /** Shown as the byline. Posts are James's diagnosis, not filler. */
    author: z.string().default('James'),
    /** Rough read time in minutes, for the card. */
    minutes: z.number().int().min(1).max(20),
    draft: z.boolean().default(false),
  }),
});


// Case studies — James's ten real projects from the live site. Full narrative
// (brief / challenge / execution) plus gallery. The /projects/{case}/ route
// renders them; the our-work gallery links each photo set to its study.
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

