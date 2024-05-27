import React from 'react';
import { Row, Col, DatePicker, Select, Typography, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const RoomSearch: React.FC = () => {
  return (
    <div style={{ marginTop: 20, border: '1px solid #ccc', padding: 20, borderRadius: 10 }}>
      <Row gutter={[16, 16]} style={{ alignItems: 'flex-end' }}>
        <Col xs={24} sm={12} md={5}>
          <div>
            <Title level={5} style={{ padding: 0, margin: 0 }}>
              From
            </Title>
            <DatePicker style={{ width: '100%' }} />
          </div>
        </Col>
        <Col xs={24} sm={12} md={5}>
          <div>
            <Title level={5} style={{ padding: 0, margin: 0 }}>
              To
            </Title>
            <DatePicker style={{ width: '100%' }} />
          </div>
        </Col>
        <Col xs={24} sm={12} md={5}>
          <div>
            <Title level={5} style={{ padding: 0, margin: 0 }}>
              Status room
            </Title>
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={5}>
          <div>
            <Title level={5} style={{ padding: 0, margin: 0 }}>
              Room type
            </Title>
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={4}>
          <Button type="primary" size="middle" style={{ width: '100%' }}>
            <SearchOutlined />
            Check Availability
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default RoomSearch;
