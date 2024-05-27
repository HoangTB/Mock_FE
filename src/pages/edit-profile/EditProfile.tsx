import React from 'react';
import { Row, Col, Form, Input, Button, Avatar, Typography, Select } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const EditProfile = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row>
        <Col span={24}>
          <Title
            level={2}
            style={{
              textAlign: 'center',
            }}
          >
            Edit profile
          </Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={6}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Avatar size={128} src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg" />
            <Title level={4} style={{ marginTop: '10px' }}>
              LamNT80
            </Title>
            <Button type="primary">
              <CameraOutlined />
              Change avatar
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Form
            layout="vertical"
            initialValues={{
              fullName: 'username123',
              email: 'email@domain.com',
              cccd: '000005555555',
              gender: 'female',
              phone: '1111222222',
            }}
          >
            <Form.Item label="Full Name" name="fullName">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="CCCD" name="cccd">
              <Input />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save changes
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
