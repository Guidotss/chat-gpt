export interface UserId {
    _id: string;
    email: string;
    providerId?:string;
    displayName?:string;
    photoURL?:string;
}