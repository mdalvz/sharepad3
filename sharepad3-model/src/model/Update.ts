import { z } from 'zod';

export const UpdateResource = '/update';

export const UpdateRequestSchema = z.object({
  sessionId: z.string(),
  userId: z.string(),
  userFile: z.object({
    fileType: z.string(),
    fileData: z.string(),
  }),
});

export const UpdateResponseSchema = z.array(z.object({
  userName: z.string(),
  userFile: z.object({
    fileType: z.string(),
    fileData: z.string(),
  }),
}));

export type UpdateRequest = z.infer<typeof UpdateRequestSchema>;

export type UpdateResponse = z.infer<typeof UpdateResponseSchema>;
