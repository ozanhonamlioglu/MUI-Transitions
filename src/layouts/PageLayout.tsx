import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React, { PropsWithChildren } from 'react';

import DarkLightSwitch from 'components/DarkLightSwitch';
import GrowingBorderMenu from 'components/menu/GrowingBorderMenu';

const pages = ['Products', 'Pricing', 'Blog'];
const PageLayout: React.FC<PropsWithChildren<ContainerProps>> = ({ children, ...props }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <GrowingBorderMenu pages={pages} />
            <Box sx={{ flex: 1 }} />
            <DarkLightSwitch />
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
