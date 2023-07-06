import { Session } from './Session.js';
export declare class Manager {
    static readonly instance: Manager;
    readonly sessions: Map<string, Session>;
    constructor();
    createSession(): Session;
    getSession(sessionId: string): Session;
    private removeExpiredSessions;
}
