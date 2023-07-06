import { Session } from './Session.js';
export class Manager {
    constructor() {
        this.sessions = new Map();
    }
    createSession() {
        this.removeExpiredSessions();
        let session = new Session();
        this.sessions.set(session.sessionId, session);
        return session;
    }
    getSession(sessionId) {
        this.removeExpiredSessions();
        let session = this.sessions.get(sessionId);
        if (session === undefined) {
            throw new Error(`Invalid session id: ${sessionId}`);
        }
        session.updateTimestamp();
        return session;
    }
    removeExpiredSessions() {
        Array.from(this.sessions.values()).forEach((e) => {
            if (e.isTimestampExpired()) {
                this.sessions.delete(e.sessionId);
            }
        });
    }
}
Manager.instance = new Manager();
