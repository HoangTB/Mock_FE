import { Outlet } from 'react-router-dom';

import React from 'react';
import Header from '../components/partial/header';
import Footer from '../components/partial/footer';
function DefaultLayout() {
  return (
    <div style={{ minHeight: '100vh !important' }}>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
