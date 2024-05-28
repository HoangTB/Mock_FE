// Contact.tsx
import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { TextArea } = Input;

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles['left-content']}>
          <div className={styles.imgLogo}>
            <img src="/images/logo.png" alt="..." />
          </div>
          <div className={styles.contactInfo}>
            <p>
              <EnvironmentOutlined /> Da Nang Viet Nam
            </p>
            <p>
              <PhoneOutlined /> +89 90 090 909
            </p>
            <p>
              <MailOutlined /> fhotel@gmail.com
            </p>
          </div>
        </div>
        <div className={styles['right-content']}>
          <div className={styles.contactForm}>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label={<span style={{ color: 'white' }}>First Name</span>} required>
                    <Input className={styles.input} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<span style={{ color: 'white' }}>Last Name</span>} required>
                    <Input className={styles.input} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={<span style={{ color: 'white' }}>Email</span>} required>
                <Input type="email" className={styles.input} />
              </Form.Item>
              <Form.Item label={<span style={{ color: 'white' }}>Phone</span>}>
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item label={<span style={{ color: 'white' }}>Comment</span>}>
                <TextArea rows={4} className={styles.textarea} />
              </Form.Item>
              <Form.Item>
                <button className={styles.btnSend} type="submit">
                  Send
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
