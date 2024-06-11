import { Form, Input } from 'antd';
import styles from './login-form.module.css';
import React, { useState } from 'react';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import { useNavigate } from 'react-router-dom';
import { ILogin } from '../../types/user';
import { login } from '../../api/user/user-api';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/authSlide';
import { JwtPayloads } from '../../types/jwt-payload';
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { t } = useTranslation('login');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const token = await login(values as ILogin);
      if (token) {
        localStorage.setItem('token', token.accessToken);
        localStorage.setItem('roleList', JSON.stringify(token.roleList));

        const decodedToken: JwtPayloads = jwtDecode(token.accessToken);
        const user = { username: decodedToken.username, avatar: decodedToken.avatar };
        dispatch(setToken({ token: token.accessToken, user }));
      }

      if (JSON.stringify(token.roleList).includes('ROLE_ADMIN')) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error: any) {
      const errorMessage = error.message;

      if (errorMessage === 'Email not found') {
        form.setFields([
          {
            name: 'email',
            errors: [errorMessage],
          },
        ]);
      } else if (errorMessage === 'Invalid password') {
        form.setFields([
          {
            name: 'password',
            errors: [errorMessage],
          },
        ]);
      }
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
        <p className={styles.title}>{t('login')}</p>
        <br></br>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
        >
          <Form.Item
            label={t('email address')}
            name="email"
            colon={false}
            rules={[{ required: true, message: t('error-email') }]}
          >
            <Input className={styles['input-form']} />
          </Form.Item>

          <Form.Item
            label={t('password')}
            name="password"
            colon={false}
            rules={[{ required: true, message: t('error-password') }]}
          >
            <Input.Password className={styles['input-form']} />
          </Form.Item>
          <Form.Item className={styles.customText}>
            <a href="./forgot">{t('forgot')}</a>
          </Form.Item>
          <Form.Item className={styles.customBtn}>
            <CustomButton type="primary" htmlType="submit" loading={loading}>
              {loading ? (t('logging in')) : (t('log in'))}
            </CustomButton>
          </Form.Item>
        </Form>
        <p>
        {t('don have account')} <a href="./register">{t('sign up')}</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
