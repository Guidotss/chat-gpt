import { ChatState } from "./"; 



type ChatActionType = 
    |{ type: "[CHAT] - Send Message", payload: string }; 


export const chatReducer = (state: ChatState, action: ChatActionType): ChatState => {
    switch (action.type) {
        case "[CHAT] - Send Message":
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}