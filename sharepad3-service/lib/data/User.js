import { identifier } from './Identifier.js';
export class User {
    constructor(userName) {
        this.userId = identifier(64);
        this.userName = userName;
        this.userFile = {
            fileType: 'txt',
            fileData: '',
        };
    }
}
