import { Button, Checkbox, Form, FormProps, Input } from "antd";
import style from "./LoginForm.module.css"
import React, { useState } from 'react';

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {

  return (
    <div className={style[`login-page`]} >
    
      <div className={style[`form-container`]}>
        <h1>Login</h1>

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

          <Form.Item
            label="Password"
            name="password"
            rules={[{message: 'Please input your password!' }]}
          >
            <Input.Password className={style['input-custom']} />
          </Form.Item>
          <Form.Item  wrapperCol={{ offset: 15, span: 11 }}>
            <a href="">Forget your password</a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={style['button-custom']} >
              Login
            </Button>
          </Form.Item>
        </Form>

        <p>Don’t have an acount? <a href="">Sign up </a> </p>
      </div>
    </div>
  )
}


export default Login;
