import { wrapper } from './Wrapper.js';
import { Manager } from '../data/Manager.js';
import {
  UpdateRequestSchema,
  UpdateRequest,
  UpdateResponse,
} from 'sharepad3-model';

export async function update(request: UpdateRequest): Promise<UpdateResponse> {
  let session = Manager.instance.getSession(request.sessionId);
  let user = session.getUser(request.userId);
  user.userFile.fileType = request.userFile.fileType;
  user.userFile.fileData = request.userFile.fileData;
  return session.listUsers()
    .filter(e => {
      return e.userId !== user.userId;
    })
    .map(e => {
      return {
        userName: e.userName,
        userFile: {
          fileType: e.userFile.fileType,
          fileData: e.userFile.fileData,
        },
      };
    });
}

export const updateWrapper = wrapper(UpdateRequestSchema, update);
