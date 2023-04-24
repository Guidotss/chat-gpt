import { FC, createContext } from 'react';

interface UiContextProps {
    theme: string;
    sidebar: boolean;

    toggleTheme: () => void;
    toggleSidebar: () => void;
}


export const UiContext = createContext({} as UiContextProps);