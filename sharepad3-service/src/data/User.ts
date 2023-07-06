import { identifier } from './Identifier.js';

export class User {

  public readonly userId: string;

  public readonly userName: string;

  public readonly userFile: {
    fileType: string,
    fileData: string,
  };

  public constructor(userName: string) {
    this.userId = identifier(64);
    this.userName = userName;
    this.userFile = {
      fileType: 'txt',
      fileData: '',
    };
  }

}
