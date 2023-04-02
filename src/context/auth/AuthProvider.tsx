import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import { authReducer, AuthContext } from './';
import { IUser } from '@/interfaces';

export interface AuthState {
  isLogged: boolean;
  user?: IUser;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLogged: false,
  user: undefined
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    console.log(state.user, state.isLogged);
  }, [state.user, state.isLogged]);

  const login = async (user: IUser) => {
    try {
      const checkUser = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await checkUser.json();

      if (data.ok) {
        const { user, token } = data;
        dispatch({
          type: '[AUTH] - Login',
          payload: user
        });
        Cookies.set('token', token);
      }
    } catch (err) {
      console.log(err);
      Cookies.remove('token');
      return false;
    }

    return true;
  };

  const register = async (user: IUser): Promise<boolean> => {
    try {
      const newUser = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const data = await newUser.json();

      if (data.ok) {
        const { user, token } = data;
        dispatch({
          type: '[AUTH] - Login',
          payload: user
        });
        Cookies.set('token', token);
      }
      return true;
    } catch (err) {
      console.log(err);
      Cookies.remove('token');
      return false;
    }
  };

  const logout = () => {
    Cookies.remove('token');
    dispatch({
      type: '[AUTH] - Logout'
    });
  };

  useEffect(() => {
    revalidateToken();
  }, []);

  const revalidateToken = async () => {
    const token = Cookies.get('token');
    if (!token) {
      dispatch({
        type: '[AUTH] - Logout'
      });
      return;
    }

    try {
      const response = await fetch('/api/auth/validate-token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (data.ok) {
        const { user } = data;
        dispatch({
          type: '[AUTH] - Login',
          payload: user
        });
        Cookies.set('token', token);
      }
    } catch (err) {
      console.log(err);
      Cookies.remove('token');
      dispatch({
        type: '[AUTH] - Logout'
      });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        dispatch({
          type: '[AUTH] - Logout'
        });
        return;
      }

      const response = await fetch('/api/auth/validate-token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (data.ok) {
        const { user } = data;
        dispatch({
          type: '[AUTH] - Login',
          payload: user
        });
        Cookies.set('token', token);
      }
    } catch (err) {
      console.log(err);
      Cookies.remove('token');
      dispatch({
        type: '[AUTH] - Logout'
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
