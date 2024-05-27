import { Button, Checkbox, Form, FormProps, Input } from "antd";
import styles from "./LoginForm.module.css"
import React, { useState } from 'react';
import CustomButton from "../../components/buttons/submit-button/custom-button";

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {

  return (
    <div className={styles[`login-page`]}>
      <div className={styles[`form-content`]}>
        <p className={styles.title}>Login</p>
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          className={styles[`login-form`]}
        >
          <Form.Item
            label="Email address"
            name="email"
            colon={false}
            rules={[{ required: true, message: 'Please input your Email!!' }]}
          >
            <Input className={styles[`input-form`]} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            colon={false}
            rules={[{ required: true, message: 'Please input your Password!!' }]}
          >
            <Input className={styles[`input-form`]} />
          </Form.Item >
          <Form.Item className={styles.customText}>
            <a href="./forgot">Forgot your password</a>
          </Form.Item>
          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit">
              Log in
            </CustomButton>
          </Form.Item>
        </Form>
        <p>Don’t have an acount? <a href="./register">Sign up </a> </p>
      </div>
    </div>
  )
}


export default LoginPage;
