import { IUser } from "@/interfaces";
import { AuthState } from "./"; 

type AuthActionTypes =
    | { type: '[AUTH] - Login'; payload: IUser }


export const authReducer = (state: AuthState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case '[AUTH] - Login':
            return {
                ...state,
                isLogged: true
            }
        default:
            return state;
    }
}