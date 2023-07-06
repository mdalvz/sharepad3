import { z } from 'zod';

export type Handler<TRequest, TResponse> = (request: TRequest) => Promise<TResponse>;

export type Wrapper = (request: any, response: any) => Promise<void>;

export function wrapper<TRequest, TResponse>(
  requestSchema: z.ZodType<TRequest>,
  handler: Handler<TRequest, TResponse>
): Wrapper {
  return async function (request: any, response: any) {
    let requestBody = await requestSchema.safeParseAsync(request.body);
    if (!requestBody.success) {
      response.status(400);
      response.send('Invalid request body');
      return;
    }
    try {
      let responseBody = await handler(requestBody.data);
      response.status(200);
      response.json(responseBody);
      return;
    } catch (error) {
      if (error instanceof Error) {
        response.status(400);
        response.send(error.message);
        return;
      } else {
        response.status(500);
        response.send('Internal server error');
        return;
      }
    }
  };
}
