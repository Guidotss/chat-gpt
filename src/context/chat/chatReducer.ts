import { ChatState } from "./"; 
import { IAChoices, Messages } from "@/interfaces";



type ChatActionType = 
    |{ type: "[CHAT] - Send Message", payload: Messages } 
    |{ type: "[CHAT] - Receive Message", payload: Messages}
    |{ type: "[CHAT] - Start - Loading", payload: boolean}
    |{ type: "[CHAT] - Stop - Loading", payload: boolean}; 


export const chatReducer = (state: ChatState, action: ChatActionType): ChatState => {
    switch (action.type) {
        case "[CHAT] - Send Message":
            return {
                ...state,
                messages: [...state.messages, action.payload ]
            }
        case "[CHAT] - Receive Message":
            return {
                ...state,
                messages: [...state.messages, action.payload ]
            }
        
        case "[CHAT] - Start - Loading":
            return {
                ...state,
                loading: action.payload
            }
        case "[CHAT] - Stop - Loading":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}