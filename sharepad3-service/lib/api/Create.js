import { wrapper } from './Wrapper.js';
import { Manager } from '../data/Manager.js';
import { CreateRequestSchema, } from 'sharepad3-model';
export async function create(_) {
    let session = Manager.instance.createSession();
    return {
        sessionId: session.sessionId,
    };
}
export const createWrapper = wrapper(CreateRequestSchema, create);
