import { createContext } from "react"; 

interface ChatContextProps {
    messages: string[];
    ia: boolean;

    sendMessage: (message: string) => void;
}


export const ChatContext = createContext({} as ChatContextProps);
