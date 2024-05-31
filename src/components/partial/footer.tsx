import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import styles from './footer.module.css';
import React from 'react';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'


function Footer() {
  const { t } = useTranslation('footer');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <img src="/images/logo.png" alt="..." />
        </div>
        <div>
          <ul>
            <li>{t('address')}</li>
            <li>{t('phone')}</li>
            <li>{t('copyright')}</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <InstagramOutlined className={styles.icons} />
        <FacebookOutlined className={styles.icons} />
        <TwitterOutlined className={styles.icons} />
        <YoutubeOutlined className={styles.icons} />
        <LinkedinOutlined className={styles.icons} />
      </div>
    </footer>
  );
}
export default Footer;
