import { identifier } from './Identifier.js';
import { User } from './User.js';
export class Session {
    constructor() {
        this.sessionId = identifier(6);
        this.users = new Map();
        this.timestamp = new Date();
    }
    createUser(userName) {
        let user = new User(userName);
        this.users.set(user.userId, user);
        return user;
    }
    getUser(userId) {
        let user = this.users.get(userId);
        if (user === undefined) {
            throw new Error(`Invalid user id: ${userId}`);
        }
        return user;
    }
    listUsers() {
        return Array.from(this.users.values());
    }
    updateTimestamp() {
        this.timestamp = new Date();
    }
    isTimestampExpired() {
        let now = new Date();
        return (now.getTime() - this.timestamp.getTime() > (1000 * 60 * 60));
    }
}
