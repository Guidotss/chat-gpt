import { UiState } from './'


type UiActionType = { type:'[UI] - Toggle Theme', payload: string }


export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch(action.type) {
        case '[UI] - Toggle Theme':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state; 
    }
}