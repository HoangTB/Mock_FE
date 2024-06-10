// About.tsx
import React from 'react';
import styles from './styles.module.css';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('aboutUs');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }
  return (
    <>
      <div className={styles[`about-img`]}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <img src="images/logo.png" alt="logo" />
          <h2>{t('title')}</h2>
          <p className={styles.intro}>{t('at FHotel')}</p>

          <ul>
            <li>
              <h3>{t('our philosophy')}</h3>
              <p>{t('at FHotel name')}</p>
            </li>
            <li>
              <h3>{t('our accommodation')}</h3>
              <p>{t('indulge')}</p>
            </li>
            <li>
              <h3>{t('dining experience')}</h3>
              <p>{t('savor')}</p>
            </li>
            <li>
              <h3>{t('events')}</h3>
              <p>{t('host')}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
