import { Button, Checkbox, Form, FormProps, Input } from "antd";
import style from "./LoginForm.module.css"
import React, { useState } from 'react';

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const ForgotPassword = () => {
    return (
        <div className={style[`login-page`]} >
        
          <div className={style[`form-container`]}>
            <h1>Forgot Password</h1>
    
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Email address"
                name="email"
                rules={[{message: 'Please input your email!' }]}
              >
                <Input className={style['input-custom']} />
              </Form.Item>
    
              <Form.Item>
                <Button type="primary" htmlType="submit" className={style['button-custom']} >
                  Send me
                </Button>
              </Form.Item>
            </Form>
    
          </div>
        </div>
      )
};

export default ForgotPassword;