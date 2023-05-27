import Grid from '@mui/material/Grid';
import React from 'react';

import PageLayout from 'layouts/PageLayout';

import { BorderGrowingButton, BorderSwitchingButton, RotatedBackgroundButton } from 'components/buttons';

const Home = () => {
  return (
    <PageLayout sx={{ padding: 10 }}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <BorderGrowingButton disableFocusRipple>Forgot passworsd</BorderGrowingButton>
        </Grid>
        <Grid item xs={12}>
          <BorderSwitchingButton disableRipple>Login with</BorderSwitchingButton>
        </Grid>
        <Grid item xs={12}>
          <RotatedBackgroundButton text="Facebook" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
