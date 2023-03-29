import { FC, useReducer } from "react"; 
import { ChatContext,chatReducer } from "./"; 


interface ChatProviderProps {
    children: React.ReactNode;
}

export interface ChatState {
    messages: string[];
    ia: boolean;
}


const CHAT_INITIAL_STATE: ChatState = {
    messages: [],
    ia: false,
}


export const ChatProvider:FC<ChatProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);


    const sendMessage = (message:string) => {
        dispatch({
            type: '[CHAT] - Send Message',
            payload: message
        })
    }
    

    return (
        <ChatContext.Provider value={{
            ...state,

            sendMessage
        }}>
            {children}
        </ChatContext.Provider>
    )
}