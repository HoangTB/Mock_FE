import React, { useEffect, useState } from 'react';
import styles from './register.module.css';
import { Form, FormProps, Input, Checkbox, message, notification } from 'antd';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import { register } from '../../api/user/user-api';
import { IUser } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { JwtPayloads } from '../../types/jwt-payload';
import { jwtDecode } from 'jwt-decode';
import { setToken } from '../../redux/authSlide';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'
type NotificationType = 'success' | 'info' | 'warning' | 'error';


function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const { t } = useTranslation('register');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish: FormProps['onFinish'] = async (values) => {
    const { RePassword, ...filteredValues } = values;
    setLoading(true);

    try {
      const token = await register(filteredValues as IUser);
      if (token) {
        localStorage.setItem('token', token.accessToken);
        localStorage.setItem('roleList', JSON.stringify(token.roleList));

        const decodedToken: JwtPayloads = jwtDecode(token.accessToken);
        const user = { username: decodedToken.username, avatar: decodedToken.avatar };
        dispatch(setToken({ token: token.accessToken, user }));
        navigate('/');
      }
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
      {contextHolder}
      <div className={styles['form-content']}>
        <div className={styles['form-header']}>
          <p className={styles.title}>{t('create')}</p>
          <p className={styles.subtitle}>
            <a href="./login">{t('login')}</a>
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
            label={t('full-name')}
            name="name"
            colon={false}
            rules={[{ required: true, message: t('error-full-name') }]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label= {t('email')}
            name="email"
            rules={[
              { required: true, message: t('error-email') },
              {
                type: 'email',
                message: t('error-email-format'),
              },
            ]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label= {t('phone')}
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number!' },
              {
                pattern: new RegExp(/^[0-9]{10}$/),
                message: 'Please enter a valid phone number!',
              },
            ]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label={t('id-number')}
            name="idNumber"
            rules={[
              { required: true, message: 'Please input your id number!' },
              {
                // only number and no limit length
                pattern: new RegExp(/^[0-9]*$/),
                message: 'Please enter a valid id number!',
              },
            ]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label= {t('password')}
            name="password"
            rules={[{ required: true, message: t('error-password') }]}
          >
            <Input.Password className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label= {t('confirm-password')}
            name="RePassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: t('error-confirm-password'),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('error-password-match')));
                },
              }),
            ]}
          >
            <Input.Password className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            valuePropName="checked"
            name="agreement"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')),
              },
            ]}
          >
            <Checkbox>
             {t('by')} <a href="#">{t('team-of')}</a> {t('and')} <a href="#">{t('privacy-policy')}</a>
            </Checkbox>
          </Form.Item>

          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit" loading={loading}>
              {loading ? t('register...') : t('register')}
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
