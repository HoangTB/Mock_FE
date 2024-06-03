import { Form, FormProps, Input, message } from 'antd';
import styles from './login-form.module.css';
import React, { useState } from 'react';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import { reset } from '../../api/user/user-api';

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const ForgotPassword = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const onFinish: FormProps['onFinish'] = async (values) => {
    setLoading(true);
    const resetPass = {
      email: values.email,
      isSendMail: true,
    };
    let res = await reset(resetPass);
    if (res === 'success') {
      success();
      setLoading(false);
    }
  };
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Please check your email to reset password!',
    });
  };

  return (
    <div className={styles[`layout`]}>
      {contextHolder}

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
            <CustomButton type="primary" htmlType="submit" loading={loading}>
              {loading ? 'Sending...' : 'Send Email'}
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
