import React from 'react';
import { HomeOutlined, InfoCircleOutlined, CheckOutlined, SmileOutlined, LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.css';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'

const StepByStep = () => {
  const { t } = useTranslation('step');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }
  const location = useLocation();

  // Kiểm tra đường dẫn hiện tại và đặt trạng thái cho mỗi bước dựa trên đó
  const getStatus = (path: any) => {
    if (location.pathname === path) {
      return 'finish';
    } else {
      return 'wait';
    }
  };

  return (
    <Steps
      responsive
      style={{
        margin: '30px 0',
      }}
      items={[
        {
          title: t('selectHotel'),
          status: getStatus('/'),
          icon: (
            <Link to="/">
              <HomeOutlined className={styles.icon} />
            </Link>
          ),
        },
        {
          title: t('selectRoom'),
          status: getStatus('/rooms/1'),
          icon: (
            <Link to="/">
              <LoadingOutlined className={styles.icon} />
            </Link>
          ),
        },
        {
          title: t('selectInformation'),
          status: getStatus('/booking'),
          icon: (
            <Link to="/booking">
              <InfoCircleOutlined className={styles.icon} />
            </Link>
          ),
        },
        {
          title: t('bookRoom'),
          status: getStatus('/booking/1'),
          icon: (
            <Link to="/">
              <CheckOutlined className={styles.icon} />
            </Link>
          ),
        },
        {
          title: t('completed'),
          status: getStatus('/booking/completed'),
          icon: (
            <Link to="/">
              <SmileOutlined className={styles.icon} />
            </Link>
          ),
        },
      ]}
    />
  );
};

export default StepByStep;
