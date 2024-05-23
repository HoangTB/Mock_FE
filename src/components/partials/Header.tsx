import { Col, Row } from 'antd';
import React from 'react';
function Header() {
  return (
    <div className="header p-3 mb-1 bg-dark-subtle">
      <Row>
        <Col span={24}>Header</Col>
      </Row>
    </div>
  );
}

export default Header;
