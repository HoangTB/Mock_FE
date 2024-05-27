import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Drawer, DrawerProps, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <div className={styles.headerRow}>
      <div className={styles.headerLeft}>
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
      </div>
      <div className={styles.headerLinks}>
        <Link to="/">Home</Link>
        <Link to="/branch">Branch</Link>
        <a>Contact</a>
        <a>About Us</a>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.language}>
          <GlobalOutlined />
          <select name="" id="">
            <option value="">English</option>
            <option value="">Japanese</option>
          </select>
        </div>
        {/* user */}
        <div className={styles.headerRightLogin}>Login</div>
        {/* login */}
        <div className={styles.headerRightUser}>
          <img src="https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg" alt="..." />{' '}
          <p>LamNT80</p>
        </div>
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
          <div className={styles.headerLinksShow}>
            <a>Home</a>
            <a>Rooms</a>
            <a>News</a>
            <a>Contact</a>
            <a>About Us</a>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
