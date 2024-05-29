import { Form, Input } from 'antd';
import styles from './login-form.module.css';
import React, { useState } from 'react';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ILogin } from '../../types/user';
import { login } from '../../api/user/user-api';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);
    setError('');
      setLoading(true);
      try {
        const token = await login(values as ILogin)
        if(token) {
          localStorage.setItem('token', token.accessToken);
          localStorage.setItem('roleList', JSON.stringify(token.roleList));

        }

        if(JSON.stringify(token.roleList).includes("ROLE_ADMIN")){
          navigate("/admin")
        }else{
          navigate("/")
        }
      } catch (error) {
        setError('Login failed. Please check your email and password.');
        // localStorage.setItem('roleList', JSON.stringify(roleList));
      } finally {
        setLoading(false);

      }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['layout']}>
      <div className={styles['form-content']}>
        <p className={styles.title}>Login</p>
        <br></br>
        {error && <div className={styles.error}>{error}</div>}
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
        >
          <Form.Item
            label="Email address"
            name="email"
            colon={false}
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            colon={false}
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password className={styles['input-form']} />
          </Form.Item>
          <Form.Item className={styles.customText}>
            <a href="./forgot">Forgot your password</a>
          </Form.Item>
          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit">
              Log in
            </CustomButton>
          </Form.Item>
        </Form>
        <p>
          Don’t have an account? <a href="./register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
