import React from 'react';
import { Layout } from 'antd';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import './styles.css';
import Sider from 'antd/es/layout/Sider';
import HeaderAdmin from '../../components/admin/header/header-admin';
import SideBar from '../../components/admin/sideBar';
import sideBarContent from '../../components/admin/sideBar/sideBarContent/sideBarContent';

const AdminLayout = () => {
  return (
    <Layout className="layout">
      <HeaderAdmin />
      <Layout>
        <Sider className="sider" width={250} theme="light">
          <div className="logo">
            <RouterLink to="/">
              <img src="/images/logo.png" alt="Logo" />
            </RouterLink>
          </div>
          <SideBar navConfig={sideBarContent} />
        </Sider>
        <Layout style={{ padding: '40px' }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export { AdminLayout };
