import { IUser }  from "./user";
export interface IAuthenticationResponse{
    user: IUser,
    success: boolean,
    errorMessage: string,
    authToken: string
}