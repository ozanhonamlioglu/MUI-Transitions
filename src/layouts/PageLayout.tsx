import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import React, { PropsWithChildren } from 'react';

import GrowingBorderMenu from 'components/menu/GrowingBorderMenu';
import { useThemeContext, useThemeDispatchContext } from 'hooks/useThemeContext';

const pages = ['Products', 'Pricing', 'Blog'];
const PageLayout: React.FC<PropsWithChildren<ContainerProps>> = ({ children, ...props }) => {
  const dispatch = useThemeDispatchContext();
  const theme = useThemeContext();

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch?.({ type: 'changeThemeMode', payload: checked ? 'dark' : 'light' });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <GrowingBorderMenu pages={pages} />
            <Box sx={{ flex: 1 }} />
            <Switch onChange={handleSwitch} checked={theme?.mode === 'dark'} color="secondary" />
          </Toolbar>
        </AppBar>
      </Box>
      <Container disableGutters maxWidth={false} {...props}>
        {children}
      </Container>
    </>
  );
};

export default PageLayout;
