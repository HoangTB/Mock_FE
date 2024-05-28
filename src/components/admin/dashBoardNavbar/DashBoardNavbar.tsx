import React from 'react';
import { Layout, Space } from 'antd';
import AdminPopover from '../adminPopover/AdminPopover';
import './DashBoardNavBar.css';

const { Header } = Layout;

interface DashboardNavbarProps {
  onOpenSidebar?: () => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ onOpenSidebar }) => {
  return (
    <Header className="dashboard-navbar">
      <div className="navbar-content">
        <div className="navbar-space" />
        <Space>
          <AdminPopover />
        </Space>
      </div>
    </Header>
  );
};

export default DashboardNavbar;
