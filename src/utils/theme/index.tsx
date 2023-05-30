import { alpha, createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React, { PropsWithChildren, useMemo } from 'react';

import { useThemeContext } from 'hooks/useThemeContext';

import ThemeOptions from './theme';

const ThemeOptimization: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeContext();

  const theTheme = useMemo(() => {
    const mode = theme?.mode || 'light';
    const themeOptions = ThemeOptions(mode);

    return createTheme({
      palette: {
        mode: mode,
        common: {
          black: '#000',
          white: '#fff'
        },
        ...themeOptions,
        text: {
          primary: mode === 'dark' ? '#fff' : themeOptions.grey![700],
          secondary: mode === 'dark' ? '#fff' : themeOptions.grey![500],
          disabled: mode === 'dark' ? '#fff' : themeOptions.grey![400]
        },
        action: {
          disabled: themeOptions.grey![300]
        },
        divider: mode === 'dark' ? alpha(themeOptions.grey![900]!, 0.05) : themeOptions.grey![200],
        background: {
          paper: mode === 'dark' ? themeOptions.grey![100] : themeOptions.grey![100],
          default: mode === 'dark' ? themeOptions.grey![100] : themeOptions.grey![50]
        }
      }
    });
  }, [theme]);

  return (
    <ThemeProvider theme={theTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeOptimization;
