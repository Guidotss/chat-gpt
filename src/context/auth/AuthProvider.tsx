import { FC, useReducer } from "react"; 
import { authReducer, AuthContext } from "./"; 
import { IUser } from "@/interfaces";

export interface AuthState {
    isLogged: boolean;
    user?: IUser;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLogged: false,
    user: undefined,
}

export const AuthProvider:FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const login = async(user: IUser) => {
        dispatch({
            type: "[AUTH] - Login",
            payload: user,
        });

        return true; 
    }


    return (
        <AuthContext.Provider value={{ 
            ...state, 

            login,
            
        }}>
            { children }
        </AuthContext.Provider>
    );
}