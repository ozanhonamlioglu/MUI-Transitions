import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

import PageLayout from 'layouts/PageLayout';

import { BorderGrowingButton, BorderSwitchingButton, RotatedBackgroundButton } from 'components/buttons';

const Home = () => {
  const theme = useTheme();

  return (
    <PageLayout sx={{ padding: 10 }}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <BorderGrowingButton disableFocusRipple>Forgot passworsd</BorderGrowingButton>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
