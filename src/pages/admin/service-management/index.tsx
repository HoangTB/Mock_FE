import { Col, Row } from 'antd';
import React from 'react';
import TableComponent from '../../../components/table/table-component';
import { Item } from '../../../types/admin/item';

const ServiceManagement = () => {
  const originData: Item[] = [];
  for (let i = 0; i < 100; i++) {
    originData.push({
      key: i.toString(),
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  return (
    <Row>
      <Col span={24}>
        <h1 style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px', textTransform: 'uppercase' }}>
          Service Management
        </h1>
      </Col>
      <Col span={24}>
        <TableComponent originData={originData} />
      </Col>
    </Row>
  );
};

export default ServiceManagement;
