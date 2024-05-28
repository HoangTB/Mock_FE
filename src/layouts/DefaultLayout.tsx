import { Outlet } from 'react-router-dom';

import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import React from 'react';
function DefaultLayout() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
