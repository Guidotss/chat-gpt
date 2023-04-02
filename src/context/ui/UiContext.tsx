import { FC, createContext } from 'react';

interface UiContextProps {
    theme: string;

    toggleTheme: () => void;
}


export const UiContext = createContext({} as UiContextProps);