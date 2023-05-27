import CssBaseline from '@mui/material/CssBaseline';
import React, { PropsWithChildren } from 'react';

import { useThemeContext } from 'hooks/useThemeContext';

const ThemeOptimization: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeContext();

  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export default ThemeOptimization;
