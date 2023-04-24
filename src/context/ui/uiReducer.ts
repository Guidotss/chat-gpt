import { UiState } from './'


type UiActionType = 
    | { type:'[UI] - Toggle Theme', payload: string }
    | { type:'[UI] - Toggle Sidebar', payload:  boolean }


export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch(action.type) {
        case '[UI] - Toggle Theme':
            return {
                ...state,
                theme: action.payload
            }
        
        case '[UI] - Toggle Sidebar':
            return {
                ...state,
                sidebar: action.payload
            }
        default:
            return state; 
    }
}