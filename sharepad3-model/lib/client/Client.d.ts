import { CreateRequest, CreateResponse } from '../model/Create.js';
import { OpenRequest, OpenResponse } from '../model/Open.js';
import { UpdateRequest, UpdateResponse } from '../model/Update.js';
export declare class Client {
    private readonly endpoint;
    constructor(endpoint: string);
    private invoke;
    create(requestBody: CreateRequest): Promise<CreateResponse>;
    open(requestBody: OpenRequest): Promise<OpenResponse>;
    update(requestBody: UpdateRequest): Promise<UpdateResponse>;
}
