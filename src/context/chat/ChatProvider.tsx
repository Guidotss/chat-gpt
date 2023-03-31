import { FC, useEffect, useReducer, useState } from 'react'; 
import { ChatContext,chatReducer } from "./"; 
import { Messages } from "@/interfaces"; 
import { IaResponse } from '../../interfaces/iaResponse';
import { send } from 'process';


interface ChatProviderProps {
    children: React.ReactNode;
}

export interface ChatState {
    messages: Messages[];
    loading:boolean; 
}


const CHAT_INITIAL_STATE: ChatState = {
    messages: [],
    loading:false
}


export const ChatProvider:FC<ChatProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);
    const { messages } = state;
    const lastMessage = messages[messages.length - 1]; 

    useEffect(() =>{
        if(lastMessage?.ia) return;
        sendIaMessage();
    },[lastMessage]); 


    const startLoading = () => {
        dispatch({
            type: '[CHAT] - Start Loading',
            payload: true
        });
    }
    
    const stopLoading = () => {
        dispatch({
            type: '[CHAT] - Stop Loading',
            payload: false
        });
    }

    const sendMessage = (message:Messages) => {

        dispatch({
            type: '[CHAT] - Send Message',
            payload: message
        }); 
    }
    const sendIaMessage = async() => {

        startLoading();

        if(!lastMessage) return;

        const response = await fetch("/api",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({prompt: lastMessage})
        });

        const dataJSON = await response.json();
        const { data } = dataJSON;
       
        const iaResponse = {
            id:Math.random(),
            message: data?.message.content,
            ia:true
        }
        
        stopLoading();
        
        dispatch({
            type: '[CHAT] - Send Message',
            payload: iaResponse
        });
    }

    const deleteChat = () => {
        dispatch({
            type: '[CHAT] - Delete Chat',
            payload: []
        });
    }




    return (
        <ChatContext.Provider value={{
            ...state,

            sendMessage,
            deleteChat
        }}>
            {children}
        </ChatContext.Provider>
    )
}