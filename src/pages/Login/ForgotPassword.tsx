import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import styles from './LoginForm.module.css';
import React, { useState } from 'react';
import CustomButton from '../../components/buttons/submit-button/custom-button';

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const ForgotPassword = () => {
  return (
    <div className={styles[`layout`]}>
      <div className={styles[`form-content`]}>
        <p className={styles.title}>Forgot Password</p>
        <br></br>
        <Form
          name="forgot"
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
            rules={[{ required: true, message: 'Please input your Email!!' }]}
          >
            <Input className={styles[`input-form`]} />
          </Form.Item>

          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit">
              Send me
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
