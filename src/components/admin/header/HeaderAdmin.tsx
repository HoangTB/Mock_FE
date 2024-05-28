import React from 'react';
import './HeaderAdmin.css';
import { Header } from 'antd/es/layout/layout';

const HeaderAdmin = () => {
  return (
    <Header className="dashboard-navbar">
      <div className="navbar-content">
        <div className="navbar-space" />
        <h3>ADMIN</h3>
      </div>
    </Header>
  );
};

export default HeaderAdmin;
