import { CreateRequest, CreateResponse } from '../model/Create';
import { OpenRequest, OpenResponse } from '../model/Open';
import { UpdateRequest, UpdateResponse } from '../model/Update';
export declare function ass(): void;
export declare class Client {
    private readonly endpoint;
    constructor(endpoint: string);
    private invoke;
    create(requestBody: CreateRequest): Promise<CreateResponse>;
    open(requestBody: OpenRequest): Promise<OpenResponse>;
    update(requestBody: UpdateRequest): Promise<UpdateResponse>;
}
