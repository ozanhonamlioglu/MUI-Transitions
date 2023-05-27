import { AppAction, AppState } from './types';

export const initialState: AppState = { mode: 'light' };

export const themeReducers = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'changeThemeMode':
      return { mode: action.payload };

    default:
      return state;
  }
};
