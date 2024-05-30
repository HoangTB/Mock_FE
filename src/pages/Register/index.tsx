import React, { useEffect, useState } from 'react';
import styles from './register.module.css';
import { Form, FormProps, Input, Checkbox, message, notification } from 'antd';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import { register } from '../../api/user/user-api';
import { IUser } from '../../types/user';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish: FormProps['onFinish'] = async (values) => {
    const { RePassword, ...filteredValues } = values;
    setLoading(true);

    try {
      const token = await register(filteredValues as IUser);
      if (token) {
        localStorage.setItem('token', token);
        openNotificationWithIcon('success');
      }

      window.location.href = '/';
    } catch (error: any) {
      form.setFields([
        {
          name: 'email',
          errors: [error.message],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Register successfully',
      description: 'You have successfully registered and login!',
    });
  };

  return (
    <div className={styles['register-page']}>
      <div className={styles['form-content']}>
        <div className={styles['form-header']}>
          <p className={styles.title}>Create an account</p>
          <p className={styles.subtitle}>
            <a href="./login">log in instead</a>
          </p>
        </div>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          className={styles['register-form']}
        >
          <Form.Item
            label="Full name"
            name="name"
            colon={false}
            rules={[{ required: true, message: 'Please input your full name!!' }]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label="ID Number"
            name="idNumber"
            rules={[{ required: true, message: 'Please input your id number!' }]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="RePassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your password!!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Password not match!'));
                },
              }),
            ]}
          >
            <Input.Password className={styles['input-form']} />
          </Form.Item>

          <Form.Item valuePropName="checked">
            <Checkbox>
              By creating an account, I agree to our <a href="#">Terms of use</a> và <a href="#">Privacy Policy</a>
            </Checkbox>
          </Form.Item>

          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit">
              {loading ? 'Registering...' : 'Register'}
            </CustomButton>
          </Form.Item>

          {error && <div className={styles.error}>{error}</div>}
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
