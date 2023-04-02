import { FC, useEffect, useReducer, } from 'react';
import { UiContext,uiReducer } from './';


interface UiProviderProps {
    children: React.ReactNode;
}


export interface UiState {
    theme: string;
}


const UI_INITIAL_STATE: UiState = {
    theme: 'dark'
}

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    useEffect(() => {
        console.log(state.theme);
    }, [state.theme]);

    const toggleTheme = () => {
        dispatch({
            type: '[UI] - Toggle Theme',
            payload: state.theme === 'dark' ? 'light' : 'dark'
        }); 
    }

    return (
        <UiContext.Provider value={{
            ...state,
            
            toggleTheme
        }}>
            {children}
        </UiContext.Provider>
    );
}