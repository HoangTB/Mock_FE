import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Drawer, DrawerProps, Dropdown, MenuProps, RadioChangeEvent, Select } from 'antd';
import React, { useState } from 'react';
import styles from './header.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../../redux/authSlide';

import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'

const options: {
  value: "en" | "jp",
  label: string
}[] = [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'jp',
      label: '日本語',
    },
  ]

function Header() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const dispatch: AppDispatch = useDispatch();
  const { token, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roleList');
    dispatch(clearToken());
    navigate('/login');
  };

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

  const { t } = useTranslation('header');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const branchSection = document.getElementById('branch');
    if (branchSection) {
      branchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to="/edit-profile">Profile</Link>,
    },
    {
      key: '2',
      label: (
        // logout
        <p onClick={handleLogout}>Logout</p>
      ),
    },
  ];

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
          {t('home')}
        </Link>
        <a href="#branch" className={location.pathname === '/branch' ? styles.active : ''} onClick={handleLinkClick}>
        {t('branch')}
        </a>
        <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
        {t('contact')}
        </Link>
        <Link to="/about-us" className={location.pathname === '/about-us' ? styles.active : ''}>
        {t('about us')}
        </Link>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.language}>
          <GlobalOutlined />
          <Select
            className={styles.select}
            labelInValue

            onChange={(item) => changeLanguage(item.value)}
            defaultValue={options[0]}
            options={options}
          />
        </div>

        {token ? (
          <Dropdown menu={{ items }} placement="bottom">
            <div className={styles.headerRightUser}>
              <img
                src={user?.avatar || 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-2.jpg'}
                alt="User Avatar"
              />
              <p>{user?.username}</p>
            </div>
          </Dropdown>
        ) : (
          <div className={styles.headerRightLogin}>
            <Link to="/login">{t('login')}</Link>
          </div>
        )}

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
