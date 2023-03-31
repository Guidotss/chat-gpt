import { ChatState } from "./"; 
import { Messages } from "@/interfaces";



type ChatActionType = 
    |{ type: "[CHAT] - Send Message", payload: Messages }; 


export const chatReducer = (state: ChatState, action: ChatActionType): ChatState => {
    switch (action.type) {
        case "[CHAT] - Send Message":
            return {
                ...state,
                messages: [...state.messages, action.payload ]
            }
        default:
            return state;
    }
}