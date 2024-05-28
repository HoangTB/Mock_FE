import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Drawer, DrawerProps, RadioChangeEvent, Select } from 'antd';
import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
function Header() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const showProfile = () => {
    setOpenProfile(true);
  };

  const onCloseProfile = () => {
    setOpenProfile(false);
  };

  const onClose = () => {
    setOpen(false);
  };
  const location = useLocation();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const branchSection = document.getElementById('branch');
    if (branchSection) {
      branchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.headerRow}>
      <div className={styles.headerLeft}>
        <div>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <nav className={styles.headerLinks}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <a href="#branch" className={location.pathname === '/branch' ? styles.active : ''} onClick={handleLinkClick}>
          Branch
        </a>
        <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
          Contact
        </Link>
        <Link to="/about-us" className={location.pathname === '/about-us' ? styles.active : ''}>
          About Us
        </Link>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.language}>
          <GlobalOutlined />
          <Select
            className={styles.select}
    labelInValue
    defaultValue={{ value: 'English', label: 'English' }}
    options={[
      {
        value: 'English',
        label: 'English',
      },
      {
        value: 'Japanese',
        label: 'Japanese',
      },
    ]}
  />
        </div>
        {/* login */}
        <div className={styles.headerRightLogin}>
          <Link to="/login">Login</Link>
        </div>
        {/* user */}
        <div className={styles.headerRightUser}>
          <img src="https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg" alt="..." />{' '}
          <p>LamNT80</p>
        </div>

        {/* list menu header */}
        <Button onClick={showDrawer} className={styles.btnList}>
          <UnorderedListOutlined />
        </Button>
        <Drawer
          title="Menu"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          width={250}
        >
          <nav className={styles.headerLinksShow}>
            <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
              Home
            </Link>
            <Link to="/branch" className={location.pathname === '/branch' ? styles.active : ''}>
              Branch
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
              Contact
            </Link>
            <Link to="/about-us" className={location.pathname === '/about-us' ? styles.active : ''}>
              About Us
            </Link>
          </nav>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
