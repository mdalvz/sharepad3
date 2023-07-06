import { z } from 'zod';

export const OpenResource = '/open';

export const OpenRequestSchema = z.object({
  sessionId: z.string(),
  userName: z.string(),
});

export const OpenResponseSchema = z.object({
  userId: z.string(),
});

export type OpenRequest = z.infer<typeof OpenRequestSchema>;

export type OpenResponse = z.infer<typeof OpenResponseSchema>;
