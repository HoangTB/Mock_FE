import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, Avatar, Typography, Select, message } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios';
import { getProfile, updateProfile } from '../../api/user/user-api';

const { Title } = Typography;
const { Option } = Select;

interface InitialValueProps {
  userName: string;
  email: string;
  identificationCard: string;
  gender: string;
  phoneNumber: string;
}

const EditProfile = () => {
  const [form] = Form.useForm();
  const [initialValue, setInitialValue] = useState<InitialValueProps | null>(null);

  useEffect(() => {
    const fetchInitialValues = async () => {
      try {
        const response = await getProfile();
        if (response) {
          setInitialValue({
            userName: response.userName,
            email: response.email,
            identificationCard: response.identificationCard,
            gender: response.gender,
            phoneNumber: response.phoneNumber,
          });
          form.setFieldsValue({
            userName: response.userName,
            email: response.email,
            identificationCard: response.identificationCard,
            gender: response.gender,
            phoneNumber: response.phoneNumber,
          });
        }
      } catch (error) {
        message.error('Failed to fetch profile data');
      }
    };

    fetchInitialValues();
  }, [form]);

  interface FormValues {
    userName: string;
    email: string;
    identificationCard: string;
    gender: string;
    phoneNumber: string;
  }

  const onFinish = async (values: FormValues) => {
    try {
      console.log(values);
      
      const response = await updateProfile(values);


        // Fetch updated profile data
        const updatedProfile = await getProfile();
        if (updatedProfile) {
          setInitialValue({
            userName: updatedProfile.userName,
            email: updatedProfile.email,
            identificationCard: updatedProfile.identificationCard,
            gender: updatedProfile.gender,
            phoneNumber: updatedProfile.phoneNumber,
          });
          form.setFieldsValue({
            userName: updatedProfile.userName,
            email: updatedProfile.email,
            identificationCard: updatedProfile.identificationCard,
            gender: updatedProfile.gender,
            phoneNumber: updatedProfile.phoneNumber,
          });
        }
    } catch (error) {
      message.error('Failed to update profile');
    }
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Title level={3} style={{ textAlign: 'center' }}>Edit profile</Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={6}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Avatar size={128} src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg" />
            <Title level={4} style={{ marginTop: '10px' }}>
              {initialValue?.userName}
            </Title>
            <Button type="primary" style={{ background: 'var(--primary-color)' }}>
              <CameraOutlined /> Change avatar
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValue || undefined}
          >
            <Form.Item label="Full Name" name="userName">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>
            <Form.Item label="CCCD" name="identificationCard">
              <Input />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Select>
                <Option value={true}>Male</Option>
                <Option value={false}>Female</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Phone" name="phoneNumber">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ background: 'var(--primary-color)' }}>
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
