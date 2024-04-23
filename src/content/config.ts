import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});
const experience = defineCollection({
	schema: z.object({
		orgLogo: z.string().optional(),
		description: z.string(),
		company: z.string(),
		role: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
	})
})

export const collections = { blog, experience};
