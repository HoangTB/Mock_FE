import React from 'react';
import { HomeOutlined, InfoCircleOutlined, CheckOutlined, SmileOutlined, LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.css';

const StepByStep = () => {
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
          icon: <Link to="/"><HomeOutlined className={styles.icon} /></Link>,
        },
        {
          title: 'Select room',
          status: getStatus('/rooms/1'),
          icon: <Link to="/rooms/1"><LoadingOutlined className={styles.icon} /></Link>,
        },
        {
          title: 'Select information',
          status: getStatus('/booking'),
          icon: <Link to="/booking"><InfoCircleOutlined className={styles.icon} /></Link>,
        },
        {
          title: 'Booking room',
          status: getStatus('/booking/1'),
          icon: <Link to="/booking/1"><CheckOutlined className={styles.icon} /></Link>,
        },
        {
          title: 'Completed',
          status: getStatus('/booking/completed'),
          icon: <Link to="/booking/completed"><SmileOutlined className={styles.icon} /></Link>,
        },
      ]}
    />
  );
};

export default StepByStep;
