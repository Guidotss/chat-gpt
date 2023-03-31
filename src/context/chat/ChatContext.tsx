import { createContext } from "react"; 
import { Messages } from "@/interfaces";

interface ChatContextProps {
    messages: Messages[]; 
    loading: boolean;

    sendMessage: (message: Messages) => void;
}


export const ChatContext = createContext({} as ChatContextProps);
