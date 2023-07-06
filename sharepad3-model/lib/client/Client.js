import { CreateResource, CreateResponseSchema, } from '../model/Create.js';
import { OpenResource, OpenResponseSchema, } from '../model/Open.js';
import { UpdateResource, UpdateResponseSchema, } from '../model/Update.js';
export class Client {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    async invoke(resource, requestBody, responseSchema) {
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
    async create(requestBody) {
        return await this.invoke(CreateResource, requestBody, CreateResponseSchema);
    }
    async open(requestBody) {
        return await this.invoke(OpenResource, requestBody, OpenResponseSchema);
    }
    async update(requestBody) {
        return await this.invoke(UpdateResource, requestBody, UpdateResponseSchema);
    }
}
