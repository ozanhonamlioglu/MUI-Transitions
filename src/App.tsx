import React from 'react';

import { ThemeProvider } from 'contexts/ThemeContext';
import Routing from 'routing';

import ThemeOptimization from 'utils/theme';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeOptimization>
        <Routing />
      </ThemeOptimization>
    </ThemeProvider>
  );
};

export default App;
