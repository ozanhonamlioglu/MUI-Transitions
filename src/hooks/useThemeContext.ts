import React, { useContext } from 'react';

import { ThemeContext, ThemeDispatchContext } from 'contexts/ThemeContext';

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export const useThemeDispatchContext = () => {
  const dispatch = useContext(ThemeDispatchContext);
  return dispatch;
};
