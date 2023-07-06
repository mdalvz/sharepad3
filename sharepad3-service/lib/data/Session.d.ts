import { User } from './User.js';
export declare class Session {
    readonly sessionId: string;
    readonly users: Map<string, User>;
    timestamp: Date;
    constructor();
    createUser(userName: string): User;
    getUser(userId: string): User;
    listUsers(): User[];
    updateTimestamp(): void;
    isTimestampExpired(): boolean;
}
