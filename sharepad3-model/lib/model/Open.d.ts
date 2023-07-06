import { z } from 'zod';
export declare const OpenResource = "/open";
export declare const OpenRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
    userName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
    userName: string;
}, {
    sessionId: string;
    userName: string;
}>;
export declare const OpenResponseSchema: z.ZodObject<{
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
}, {
    userId: string;
}>;
export type OpenRequest = z.infer<typeof OpenRequestSchema>;
export type OpenResponse = z.infer<typeof OpenResponseSchema>;
