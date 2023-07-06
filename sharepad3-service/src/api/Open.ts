import { wrapper } from './Wrapper.js';
import { Manager } from '../data/Manager.js';
import {
  OpenRequestSchema,
  OpenRequest,
  OpenResponse,
} from 'sharepad3-model';

export async function open(request: OpenRequest): Promise<OpenResponse> {
  let session = Manager.instance.getSession(request.sessionId);
  let user = session.createUser(request.userName);
  return {
    userId: user.userId,
  };
}

export const openWrapper = wrapper(OpenRequestSchema, open);
