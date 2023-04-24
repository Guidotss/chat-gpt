import { FC, createContext } from 'react';

interface UiContextProps {
    theme: string;
    sidebar: boolean;

    toggleTheme: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
}


export const UiContext = createContext({} as UiContextProps);