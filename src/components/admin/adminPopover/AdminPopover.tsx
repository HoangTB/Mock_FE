import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Menu, Typography, Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import './AdminPopover.css';
import type { MenuProps } from 'antd';

// Types for menu options
interface MenuOption {
  label: string;
  icon: any;
  linkTo: string;
}

// Define menu options
const MENU_OPTIONS: MenuOption[] = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '#',
  },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: '#',
  },
];

// Create menu items for Ant Design Menu component
const menuItems: MenuProps['items'] = [
  {
    key: 'header',
    label: (
      <>
        <Typography.Text strong>Admin</Typography.Text>
        <br />
        <Typography.Text type="secondary">admin@gmail.com</Typography.Text>
      </>
    ),
    disabled: true,
  },
  { type: 'divider' },
  ...MENU_OPTIONS.map((option) => ({
    key: option.label,
    icon: <Icon icon={option.icon} />,
    label: <RouterLink to={option.linkTo}>{option.label}</RouterLink>,
  })),
  { type: 'divider' },
  {
    key: 'logout',
    label: (
      <Button type="text" block>
        Logout
      </Button>
    ),
  },
];

const AdminPopover: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  const onLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handleMenuClick: MenuProps['onClick'] = (info) => {
    if (info.key === 'logout') {
      onLogout();
    }
    setOpen(false);
  };

  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: handleMenuClick,
      }}
      trigger={['click']}
      open={open}
      onOpenChange={setOpen}
    >
      <Avatar
        ref={anchorRef}
        onClick={() => setOpen(!open)}
        size={44}
        icon={<UserOutlined />}
        className="avatar-style"
      />
    </Dropdown>
  );
};

export default AdminPopover;
