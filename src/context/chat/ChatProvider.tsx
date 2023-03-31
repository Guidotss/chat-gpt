import { FC, useReducer } from "react"; 
import { ChatContext,chatReducer } from "./"; 
import { Messages } from "@/interfaces"; 


interface ChatProviderProps {
    children: React.ReactNode;
}

export interface ChatState {
    messages: Messages[];
}


const CHAT_INITIAL_STATE: ChatState = {
    messages: [
        {
            id: 1,
            message: 'Hello',
            ia: false
        },
        {
            id: 2,
            message: 'Hi',
            ia: true
        }
    ]
}


export const ChatProvider:FC<ChatProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);

    let id = Math.random();

    const sendMessage = (message:Messages) => {
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