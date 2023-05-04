import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
