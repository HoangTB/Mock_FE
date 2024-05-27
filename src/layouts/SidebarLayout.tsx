import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from '../components/container/Container';

const SidebarLayout = () => {
  const location = useLocation();
  const [menuMode, setMenuMode] = useState<'inline' | 'horizontal'>('inline');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMenuMode('horizontal');
      } else {
        setMenuMode('inline');
      }
    };

    if (mediaQuery.matches) {
      setMenuMode('horizontal');
    } else {
      setMenuMode('inline');
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Container>
      <Row
        style={{
          margin: '40px 0',
        }}
      >
        <Col span={6} md={6} sm={24} xs={24}>
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
              mode={menuMode}
              theme="light"
              defaultSelectedKeys={[location.pathname]}
              selectedKeys={[location.pathname]}
              style={{
                background: '#fff',
                border: 'none',
                width: '450px',
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
        </Col>
        <Col span={18} md={18} sm={24} xs={24}>
          <Layout
            style={{
              background: '#fff',
            }}
          >
            <Outlet />
          </Layout>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarLayout;
