import { Session } from './Session.js';

export class Manager {

  public static readonly instance = new Manager();

  public readonly sessions: Map<string, Session>; 

  public constructor() {
    this.sessions = new Map();
  }

  public createSession(): Session {
    this.removeExpiredSessions();
    let session = new Session();
    this.sessions.set(session.sessionId, session);
    return session;
  }

  public getSession(sessionId: string): Session {
    this.removeExpiredSessions();
    let session = this.sessions.get(sessionId);
    if (session === undefined) {
      throw new Error(`Invalid session id: ${sessionId}`);
    }
    session.updateTimestamp();
    return session;
  }

  private removeExpiredSessions() {
    Array.from(this.sessions.values()).forEach((e) => {
      if (e.isTimestampExpired()) {
        this.sessions.delete(e.sessionId);
      }
    });
  }
  
}
