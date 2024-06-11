import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, Avatar, Typography, Select, message } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios';
import { getProfile, updateProfile } from '../../api/user/user-api';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('edit');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }

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
      // console.log(values);

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
          <Title level={3} style={{ textAlign: 'center' }}>
          {t('edit profile')}
          </Title>
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
              <CameraOutlined /> {t('avatar')}
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={initialValue || undefined}>
            <Form.Item label={(t('full name'))} name="userName" rules={[{ required: true, message: (t('user name')) }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label={(t('email'))}
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: 'email',
                  message: "The input is not valid E-mail!",
                },
              ]}>
              <Input disabled />
            </Form.Item>
            <Form.Item
              label={(t('id number'))}
              name="identificationCard"
              rules={[
                { required: true, message: (t('identification card')) },
                {
                  // only number and no limit length
                  pattern: new RegExp(/^[0-9]*$/),
                  message: (t('valid identification card')) ,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item label={(t('gender'))} name="gender">
              <Select>
                <Option value={true}>{t('male')}</Option>
                <Option value={false}>{t('female')}</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={(t('phone'))}
              name="phoneNumber"
              rules={[
                { required: true, message: (t('phone number')) },
                {
                  pattern: new RegExp(/^[0-9]{10}$/),
                  message: (t('valid phone number')),
                },
              ]}>
              <Input maxLength={10} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ background: 'var(--primary-color)' }}>
              {t('save')}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
