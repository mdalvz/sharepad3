import { z } from 'zod';
export type Handler<TRequest, TResponse> = (request: TRequest) => Promise<TResponse>;
export type Wrapper = (request: any, response: any) => Promise<void>;
export declare function wrapper<TRequest, TResponse>(requestSchema: z.ZodType<TRequest>, handler: Handler<TRequest, TResponse>): Wrapper;
