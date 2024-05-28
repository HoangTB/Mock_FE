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
const ResetPassword = () => {
    return (
      <div className={styles[`layout`]}>
      <div className={styles[`form-content`]}>
        <p className={styles.title}>Reset Password</p><br></br>
        <Form
          name="reset"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
        >
          <Form.Item
            label="Password"
            name="password"
            colon={false}
            rules={[{ required: true, message: 'Please input your Password!!' }]}
          >
            <Input className={styles[`input-form`]} />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm"
            colon={false}
            rules={[{ required: true, message: 'Please input your Password!!' }]}
          >
            <Input className={styles[`input-form`]} />
          </Form.Item>
          
          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit">
              Reset Password
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
      )
};

export default ResetPassword;