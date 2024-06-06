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
          title: 'Select hotel',
          status: getStatus('/'),
          icon: (
            <Link to="/">
              <HomeOutlined className={styles.icon} />
            </Link>
          ),
        },
        {
          title: 'Select room',
          status: 'wait',
          icon: <LoadingOutlined className={styles.icon} />,
        },
        {
          title: 'Select information',
          status: 'wait',
          icon: <InfoCircleOutlined className={styles.icon} />,
        },
        {
          title: 'Booking room',
          status: 'finish',
          icon: <CheckOutlined className={styles.icon} />,
        },
        {
          title: 'Completed',
          status: 'wait',
          icon: <SmileOutlined className={styles.icon} />,
        },
      ]}
    />
  );
};

export default StepByStep;
