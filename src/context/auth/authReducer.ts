import { IUser } from '@/interfaces';
import { AuthState } from './';

type AuthActionTypes =
  | { type: '[AUTH] - Login'; payload: IUser }
  | { type: '[AUTH] - Logout' };

export const authReducer = (state: AuthState,action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case '[AUTH] - Login':
      return {
        ...state,
        isLogged: true,
        user: action.payload
      };
    case '[AUTH] - Logout':
      return {
        ...state,
        isLogged: false,
        user: undefined
      };

    default:
      return state;
  }
};
