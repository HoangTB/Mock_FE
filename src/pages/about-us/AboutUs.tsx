// About.tsx
import React from 'react';
import { Row, Col, Typography } from 'antd';
import styles from './styles.module.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.overlay}></div>
      <Row>
        <Col span={24}>
          <div className={styles.header}>
            <Title
              level={2}
              style={{
                color: 'white',
              }}
            >
              About Us
            </Title>
          </div>
        </Col>
      </Row>
      <Row gutter={32} className={styles.content}>
        <Col xs={24} md={12}>
          <div className={styles.aboutInfo}>
            <Title level={3}>Our Story</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Paragraph>
            <Paragraph>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.aboutInfo}>
            <Title level={3}>Our Mission</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Paragraph>
            <Paragraph>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
