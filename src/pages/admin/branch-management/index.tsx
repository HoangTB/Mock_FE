import React from 'react';
import TableComponent from '../../../components/table/table-component';
import { Col, Row } from 'antd';
import { Item } from '../../../types/admin/item';

const BranchManagement = () => {
  const originData: Item[] = [];
  for (let i = 0; i < 100; i++) {
    originData.push({
      key: i.toString(),
      name: `B ${i}`,
      age: 32,
      address: `B ${i}`,
    });
  }
  return (
    <Row>
      <Col span={24}>
        <h1 style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px', textTransform: 'uppercase' }}>
          Branch Management
        </h1>
      </Col>
      <Col span={24}>
        <TableComponent originData={originData} />
      </Col>
    </Row>
  );
};

export default BranchManagement;
