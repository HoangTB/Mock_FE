import React from 'react';
import { Layout } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import DashboardNavbar from '../../components/admin/dashBoardNavbar/DashBoardNavbar';
import NavSection from '../../components/admin/navSection/NavSection';
import sidebarConfig from '../../components/admin/sideBar/SideBarConfig';
import './DashBoardLayout.css';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

// const { Header, Content, Sider } = Layout;

const DashBoardLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Layout className="layout">
      <Header className="header">
        <DashboardNavbar />
      </Header>
      <Layout>
        <Sider className="sider" width={300} theme="light">
          <div className="logo">
            <RouterLink to="/">
              <img src="/images/logo.png" alt="Logo" />
            </RouterLink>
          </div>
          <NavSection navConfig={sidebarConfig} />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export { DashBoardLayout };
