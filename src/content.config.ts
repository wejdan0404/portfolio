import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bilingual = z.object({ en: z.string(), ar: z.string() });

// Case-study schema — permissive superset. Public copy intentionally avoids
// personal role, teammate names, and team size. The fields stay optional only
// so older content files do not break while they are cleaned up.
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/case-studies" }),
  schema: z
    .object({
      slug: z.string(),
      tier: z.enum(["flagship", "core", "early"]),
      status: z.enum(["tested", "planned", "early"]),
      order: z.number().optional(),
      title: bilingual,
      sub: bilingual,
      tagline: bilingual.optional(),
      year: z.string().optional(),
      context: bilingual.optional(),
      role: bilingual.optional(),
      hero: z
        .object({
          kind: z.enum(["image", "composition"]).optional(),
          image: z.string().optional(),
          alt: bilingual.optional(),
        })
        .optional(),
      coverTreatment: z.enum(["brand", "image"]).optional(),
      problem: bilingual,
      approach: bilingual,
      evidence: z
        .array(
          z.object({
            // Lean entries can carry `kind: "metric" | "callout"`.
            kind: z.string().optional(),
            // Richer schema is a string; some lean callouts give a bilingual value.
            value: z.union([z.string(), bilingual]),
            label: bilingual,
            n: z.number().optional(),
            source: z.string().optional(),
          }),
        )
        .default([]),
      quotes: z
        .array(
          z.object({
            text: bilingual,
            source: z.string().optional(),
          }),
        )
        .default([]),
      methods: z.array(bilingual).default([]),
      images: z
        .array(
          z.object({
            src: z.string(),
            alt: bilingual.optional(),
            caption: bilingual.optional(),
            credit: z.string().optional(),
            role: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
          }),
        )
        .default([]),
      openItems: z.array(bilingual).default([]),
      closing: bilingual,
      sourceNote: bilingual.optional(),
      flags: z
        .object({
          contentRequired: z.array(z.string()).optional(),
          ownerDecisions: z.array(z.string()).optional(),
          reflection: z.boolean().optional(),
        })
        .passthrough()
        .optional(),
    })
    .passthrough(),
});

export const collections = { "case-studies": caseStudies };
