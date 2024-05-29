import React from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.css';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Row className={styles.customContainer}>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default Container;
