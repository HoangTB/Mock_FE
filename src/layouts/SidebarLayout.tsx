import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from '../components/container/Container';

const SidebarLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          style={{
            background: '#fff',
            borderInlineEnd: '1px solid rgba(5, 5, 5, 0.06)',
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            style={{
              background: '#fff',
              border: 'none',
            }}
          >
            <Menu.Item key="/edit-profile" icon={<UserOutlined />}>
              <Link to="/edit-profile">Edit Profile</Link>
            </Menu.Item>
            <Menu.Item key="/booked-history" icon={<SettingOutlined />}>
              <Link to="/booked-history">Booked History</Link>
            </Menu.Item>
            <Menu.Item key="/voted-history" icon={<UserOutlined />}>
              <Link to="/voted-history">Voted History </Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout
          style={{
            background: '#fff',
          }}
        >
          <Outlet />
        </Layout>
      </Layout>
    </Container>
  );
};

export default SidebarLayout;
