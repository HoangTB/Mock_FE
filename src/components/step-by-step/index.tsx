import React from 'react';
import { HomeOutlined, InfoCircleOutlined, CheckOutlined, SmileOutlined, LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import styles from './style.module.css';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'

const StepByStep = () => {
  const { t } = useTranslation('step');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }
  return (
    <Steps
      responsive
      style={{
        marginTop: 30,
      }}
      items={[
        {
          title: t('selectHotel'),
          status: 'wait',
          icon: <HomeOutlined className={styles.icon} />,
        },
        {
          title: t('selectRoom'),
          status: 'wait',
          icon: <LoadingOutlined className={styles.icon} />,
        },
        {
          title: t('selectInformation'),
          status: 'wait',
          icon: <InfoCircleOutlined className={styles.icon} />,
        },
        {
          title: t('bookRoom'),
          status: 'finish',
          icon: <CheckOutlined className={styles.icon} />,
        },
        {
          title: t('completed'),
          status: 'wait',
          icon: <SmileOutlined className={styles.icon} />,
        },
      ]}
    />
  );
};

export default StepByStep;
