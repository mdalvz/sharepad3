import { z } from 'zod';
export declare const UpdateResource = "/update";
export declare const UpdateRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
    userId: z.ZodString;
    userFile: z.ZodObject<{
        fileType: z.ZodString;
        fileData: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fileType: string;
        fileData: string;
    }, {
        fileType: string;
        fileData: string;
    }>;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
    userId: string;
    userFile: {
        fileType: string;
        fileData: string;
    };
}, {
    sessionId: string;
    userId: string;
    userFile: {
        fileType: string;
        fileData: string;
    };
}>;
export declare const UpdateResponseSchema: z.ZodArray<z.ZodObject<{
    userName: z.ZodString;
    userFile: z.ZodObject<{
        fileType: z.ZodString;
        fileData: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fileType: string;
        fileData: string;
    }, {
        fileType: string;
        fileData: string;
    }>;
}, "strip", z.ZodTypeAny, {
    userName: string;
    userFile: {
        fileType: string;
        fileData: string;
    };
}, {
    userName: string;
    userFile: {
        fileType: string;
        fileData: string;
    };
}>, "many">;
export type UpdateRequest = z.infer<typeof UpdateRequestSchema>;
export type UpdateResponse = z.infer<typeof UpdateResponseSchema>;
