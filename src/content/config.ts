import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
    isDraft: z.boolean().default(false),
    // SKAI series fields (optional, apply when a post is part of a series)
    series: z.string().optional(),
    part: z.number().optional(),
    readTime: z.string().optional(),
    heroIllustration: z
      .object({
        url: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
    nextPart: z
      .object({
        slug: z.string(),
        label: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
