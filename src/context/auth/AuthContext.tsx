import { IUser } from "@/interfaces";
import { createContext } from "react"; 

interface AuthContextProps {
    isLogged: boolean;
    user?: IUser; 

    login: (user: IUser) => Promise<boolean>; 
    register: (user: IUser) => Promise<boolean>;
    logout: () => void;
}


export const AuthContext = createContext({} as AuthContextProps); 