import { identifier } from './Identifier.js';
import { User } from './User.js';

export class Session {

  public readonly sessionId: string;

  public readonly users: Map<string, User>;

  public timestamp: Date;

  public constructor() {
    this.sessionId = identifier(6);
    this.users = new Map();
    this.timestamp = new Date();
  }

  public createUser(userName: string): User {
    let user = new User(userName);
    this.users.set(user.userId, user);
    return user;
  }

  public getUser(userId: string): User {
    let user = this.users.get(userId);
    if (user === undefined) {
      throw new Error(`Invalid user id: ${userId}`);
    }
    return user;
  }

  public listUsers(): User[] {
    return Array.from(this.users.values());
  }

  public updateTimestamp() {
    this.timestamp = new Date();
  }

  public isTimestampExpired(): boolean {
    let now = new Date();
    return (now.getTime() - this.timestamp.getTime() > (1000 * 60 * 60));
  }

}
