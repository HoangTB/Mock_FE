import { Outlet } from 'react-router-dom';

import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import React from 'react';
function DefaultLayout() {
  return (
    <div className="default-layout-wrapper container-fluid">
      <Header />
      <div className="row m-0 main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
