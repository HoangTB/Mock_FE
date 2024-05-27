import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import styles from './Footer.module.css';
import React from 'react';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <img src="/images/logo.png" alt="..." />
        </div>
        <div>
          <ul>
            <li>Address: Da Nang, Viet Nam</li>
            <li>Phone: 090090909</li>
            <li>@Copyright Team 2</li>
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
