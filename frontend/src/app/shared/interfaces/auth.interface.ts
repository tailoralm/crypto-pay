export interface IAuth {
    userId: string;
    token: string;
    username: string;
    accessToken?: string;
    refreshToken?: string;
}