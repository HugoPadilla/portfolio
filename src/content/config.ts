import {defineCollection, z} from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    icon: z.string().optional(),
    iconColorClass: z.string().optional(),
    gradientFrom: z.string().optional(),
    gradientTo: z.string().optional(),
    isComingSoon: z.boolean().default(false),
    projectStats: z.object({
      duration: z.string(),
      role: z.string(),
      platform: z.string(),
      teamSize: z.string().optional(),
    }).optional(),
    context: z.object({
      title: z.string(),
      description: z.string(),
      challenges: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),
    }).optional(),
    architecture: z.object({
      title: z.string(),
      description: z.string(),
      steps: z.array(z.object({
        title: z.string(),
        subtitle: z.string(),
        icon: z.string().optional(),
        stepNumber: z.number().optional()
      })).optional()
    }).optional(),
    keyFeatures: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })).optional(),
  }),
});

export const collections = {projects};
