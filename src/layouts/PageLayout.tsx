import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import React, { PropsWithChildren } from 'react';

const PageLayout: React.FC<PropsWithChildren<ContainerProps>> = ({ children, ...props }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Box sx={{ flex: 1 }} />
            <Switch defaultChecked color="secondary" />
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
