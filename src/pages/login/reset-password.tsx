import { Button, Checkbox, Form, FormProps, Input, message } from 'antd';
import styles from './login-form.module.css';
import React, { useState } from 'react';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import { useNavigate, useParams } from 'react-router-dom';
import { changePassword } from '../../api/user/user-api';
import { IChangePass } from '../../types/change-pass';

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const onFinish: FormProps['onFinish'] = async (values) => {
    try {
      setLoading(true);
      if (!id) return;
      const changePass: IChangePass = {
        password: values.password,
        uuid: id,
      };
      let res = await changePassword(changePass);
      if (res === 'success') {
        success();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/login');
    }
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Change password successfully!',
    });
  };

  return (
    <div className={styles[`layout`]}>
      {contextHolder}
      <div className={styles[`form-content`]}>
        <p className={styles.title}>Reset Password</p>
        <br></br>
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
            <Input.Password className={styles[`input-form`]} />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm"
            colon={false}
            rules={[
              { required: true, message: 'Please input your Password!!' },
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
            <Input.Password className={styles[`input-form`]} />
          </Form.Item>

          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit" loading={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
