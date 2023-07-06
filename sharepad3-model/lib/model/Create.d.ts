import { z } from 'zod';
export declare const CreateResource = "/create";
export declare const CreateRequestSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const CreateResponseSchema: z.ZodObject<{
    sessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
}, {
    sessionId: string;
}>;
export type CreateRequest = z.infer<typeof CreateRequestSchema>;
export type CreateResponse = z.infer<typeof CreateResponseSchema>;
