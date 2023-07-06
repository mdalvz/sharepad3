import { z } from 'zod';

export const CreateResource = '/create';

export const CreateRequestSchema = z.object({});

export const CreateResponseSchema = z.object({
  sessionId: z.string(),
});

export type CreateRequest = z.infer<typeof CreateRequestSchema>;

export type CreateResponse = z.infer<typeof CreateResponseSchema>;
