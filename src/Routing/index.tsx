import React, { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loadable from 'components/common/Loadable';

const Inputs = Loadable(lazy(() => import('pages/Inputs')));
const DataDisplay = Loadable(lazy(() => import('pages/DataDisplay')));

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Inputs />} />
      <Route path="/data-display" element={<DataDisplay />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
