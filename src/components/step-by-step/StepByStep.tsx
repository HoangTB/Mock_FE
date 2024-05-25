import React from 'react';
import { HomeOutlined, InfoCircleOutlined, CheckOutlined, SmileOutlined, LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import styles from './style.module.css';

const StepByStep = () => {
  return (
    <Steps
      responsive
      style={{
        marginTop: 30,
      }}
      items={[
        {
          title: 'Select hotel',
          status: 'finish',
          icon: <HomeOutlined className={styles.icon} />,
        },
        {
          title: 'Select room',
          status: 'process',
          icon: <LoadingOutlined className={styles.icon} />,
        },
        {
          title: 'Select information',
          status: 'wait',
          icon: <InfoCircleOutlined className={styles.icon} />,
        },
        {
          title: 'Booking room',
          status: 'wait',
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
