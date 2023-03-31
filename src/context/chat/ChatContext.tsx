import { createContext } from "react"; 
import { Messages } from "@/interfaces";

interface ChatContextProps {
    messages: Messages[]; 

    sendMessage: (message: Messages) => void;
}


export const ChatContext = createContext({} as ChatContextProps);
