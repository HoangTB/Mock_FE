import { Button, Checkbox, Form, FormProps, Input } from "antd";
import styles from "./LoginForm.module.css";
import React, { useState } from 'react';
import CustomButton from "../../components/buttons/submit-button/custom-button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', {
        email: values.email,
        password: values.password,
      });

      // Assuming the response contains the token
      const { accessToken, roleList } = response.data;
      // Store the token in localStorage or a context/state management solution
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('roleList', JSON.stringify(roleList));

      // Redirect to a protected route, e.g., dashboard
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please check your email and password.');
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['form-content']}>
        <p className={styles.title}>Login</p>
        {error && <div className={styles.error}>{error}</div>}
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          className={styles['login-form']}
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
          </Form.Item >
          <Form.Item className={styles.customText}>
            <a href="./forgot">Forgot your password</a>
          </Form.Item>
          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit" >
              Log in
            </CustomButton>
          </Form.Item>
        </Form>
        <p>Don’t have an account? <a href="./register">Sign up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
