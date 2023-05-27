import React, { createContext, PropsWithChildren, useReducer } from 'react';

import { initialState, themeReducers } from './reducers';
import { AppAction, AppState } from './types';

export const ThemeContext = createContext<AppState | undefined>(undefined);
export const ThemeDispatchContext = createContext<React.Dispatch<AppAction> | undefined>(undefined);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducers, initialState);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};
