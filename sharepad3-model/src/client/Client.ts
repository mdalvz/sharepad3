import { z } from 'zod';
import {
  CreateRequest, 
  CreateResource, 
  CreateResponse, 
  CreateResponseSchema,
} from '../model/Create.js';
import {
  OpenRequest, 
  OpenResource, 
  OpenResponse, 
  OpenResponseSchema,
} from '../model/Open.js';
import {
  UpdateRequest, 
  UpdateResource, 
  UpdateResponse, 
  UpdateResponseSchema,
} from '../model/Update.js';

export class Client {

  private readonly endpoint: string;

  public constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  private async invoke<TRequest, TResponse>(
    resource: string,
    requestBody: TRequest, 
    responseSchema: z.ZodType<TResponse>
  ): Promise<TResponse> {
    let response = await fetch(this.endpoint + resource, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error(`Invoke ${resource} failed: ${await response.text()}`);
    }
    let responseBody = await responseSchema.safeParseAsync(await response.json());
    if (!responseBody.success) {
      throw new Error(`Invoke ${resource} failed: Invalid response body`);
    }
    return responseBody.data;
  }

  public async create(requestBody: CreateRequest): Promise<CreateResponse> {
    return await this.invoke(CreateResource, requestBody, CreateResponseSchema);
  }

  public async open(requestBody: OpenRequest): Promise<OpenResponse> {
    return await this.invoke(OpenResource, requestBody, OpenResponseSchema);
  }

  public async update(requestBody: UpdateRequest): Promise<UpdateResponse> {
    return await this.invoke(UpdateResource, requestBody, UpdateResponseSchema);
  }

}
