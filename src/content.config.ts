import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bilingual = z.object({ en: z.string(), ar: z.string() });

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/case-studies" }),
  schema: z.object({
    slug: z.string(),
    tier: z.enum(["flagship", "core", "early"]),
    status: z.enum(["tested", "planned", "early"]),
    year: z.string(),
    title: bilingual,
    sub: bilingual,
    tagline: bilingual.optional(),
    hero: z
      .object({
        kind: z.enum(["image", "composition"]),
        image: z.string().optional(),
        alt: bilingual.optional(),
      })
      .default({ kind: "composition" }),
    context: bilingual,
    role: bilingual,
    teamSize: z.number(),
    problem: bilingual,
    approach: bilingual,
    evidence: z
      .array(
        z.object({
          value: z.string(),
          label: bilingual,
          n: z.number().optional(),
          source: z.string(),
        }),
      )
      .default([]),
    quotes: z
      .array(
        z.object({
          text: bilingual,
          source: z.string(),
        }),
      )
      .default([]),
    methods: z.array(bilingual).default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: bilingual,
          caption: bilingual.optional(),
          credit: z.string().optional(),
        }),
      )
      .default([]),
    openItems: z.array(bilingual).default([]),
    closing: bilingual,
    sourceNote: bilingual.optional(),
  }),
});

export const collections = { "case-studies": caseStudies };
