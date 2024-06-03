import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, Avatar, Typography, Select, FormProps } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { InitialValueProps } from '../../types/initialValue';

const { Title } = Typography;
const { Option } = Select;

const EditProfile = () => {
  const [form] = Form.useForm();
  let [initialValue, setInitialValue] = useState<InitialValueProps>();

  useEffect(() => {
    // Viết api ở api folder.
    // gọi tới đúng api backend
    // sau đó có response thì setInitialValue= response
    const fetchInitialValues = async () => {
      const data = {
        fullName: 'username122223',
        email: 'truonglam83d@gmail.com',
        cccd: '123',
        gender: 'female',
        phone: '123456789',
      };
      setInitialValue(data);
      form.setFieldsValue(data); // Cập nhật form với dữ liệu
    };

    fetchInitialValues();
  }, [form]);
  // submit form
  const onFinish: FormProps['onFinish'] = async (values) => {
    // viết 1 api post gửi data về server
    // if(response.status === 200) => success
    // quăng thông báo succescc
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Title
            level={3}
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
              {initialValue?.fullName}
            </Title>
            <Button
              type="primary"
              style={{
                background: 'var(--primary-color)',
              }}
            >
              <CameraOutlined />
              Change avatar
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={initialValue}>
            <Form.Item label="Full Name" name="fullName">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input disabled />
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
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: 'var(--primary-color)',
                }}
              >
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
