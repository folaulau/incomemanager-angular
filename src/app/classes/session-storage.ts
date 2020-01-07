import { Funnel } from './../enums/funnel.enum';
import { SessionData } from './session-data';

export class SessionStorage {

    public static startSession(sessionData: SessionData): void {
        localStorage.clear();
        localStorage.setItem("token", sessionData.token);
        localStorage.setItem("uuid", sessionData.userUuid);
        localStorage.setItem("accountUuid", sessionData.accountUuid);
        localStorage.setItem("profileSetupStatus", sessionData.profileSetupStatus);
        localStorage.setItem("data", JSON.stringify(sessionData));
    }

    public static endSession(): void {
        localStorage.clear();
    }

    public static getAuthToken(): string {
        return localStorage.getItem("token");
    }

    public static getProfileSetupStatus(): string {
        return localStorage.getItem("profileSetupStatus");
    }

    public static getUuid(): string {
        return localStorage.getItem("uuid");
    }

    public static getSessionData(): {} {
        return JSON.parse(localStorage.getItem("data"));
    }

    public static getAccountUuid(): string {
        return localStorage.getItem("accountUuid");
    }

    public static setProfileSetupStatus(funnel: Funnel): void {
        localStorage.setItem("profileSetupStatus", funnel);
    }

    public static isUserPrimary(): boolean{
        const sessionData = JSON.parse(localStorage.getItem("data"));
        const primary: boolean = sessionData.primary;
        return primary;
    }
}
