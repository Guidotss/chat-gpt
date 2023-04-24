import { FC, useEffect, useReducer } from 'react';
import { UiContext, uiReducer } from './';
import Cookies from 'js-cookie';

interface UiProviderProps {
  children: React.ReactNode;
}

export interface UiState {
  theme: string;
  sidebar: boolean;
}

const UI_INITIAL_STATE: UiState = {
  theme: 'dark',
  sidebar: false
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  useEffect(() => {
    const theme = Cookies.get('theme');
    if (theme) {
      dispatch({
        type: '[UI] - Toggle Theme',
        payload: theme
      });
    }
  }, []);

  const toggleTheme = () => {
    if (state.theme === 'dark') {
      Cookies.set('theme', 'light');
    } else {
      Cookies.set('theme', 'dark');
    }

    dispatch({
      type: '[UI] - Toggle Theme',
      payload: state.theme === 'dark' ? 'light' : 'dark'
    });
  };

  const openSidebar = () => {
    dispatch({
      type: '[UI] - Open Sidebar',
      payload: true
    });
  }

  const closeSidebar = () => {
    dispatch({
      type: '[UI] - Open Sidebar',
      payload:false
    });
  }

  return (
    <UiContext.Provider
      value={{
        ...state,

        toggleTheme,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
