import { Col, Row } from 'antd';
import React, { useState } from 'react';

const PaymentRevenueManagement = () => {
  return (
    <Row>
      <Col span={24}>
        <h1 style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px', textTransform: 'uppercase' }}>
          Payment Revenue Management
        </h1>
      </Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default PaymentRevenueManagement;
