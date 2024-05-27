// Contact.tsx
import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import Title from 'antd/es/typography/Title';

const { TextArea } = Input;

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.overlay}></div>

      <Row>
        <Col span={24}>
          <div className={styles.header}>
            <Title
              level={3}
              style={{
                color: 'white',
              }}
            >
              Contact
            </Title>
          </div>
        </Col>
      </Row>
      <Row gutter={32}>
        <Col xs={24} md={10}>
          <div className={styles.contactInfo}>
            <h2>Address</h2>
            <p>
              <EnvironmentOutlined /> 23 Cornelia St.
            </p>
            <h2>Phone</h2>
            <p>
              <PhoneOutlined /> +89 9223 324 324
            </p>
            <h2>Email</h2>
            <p>
              <MailOutlined /> hello@jacira.com
            </p>
          </div>
        </Col>
        <Col xs={24} md={14}>
          <div className={styles.contactForm}>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="First name" required>
                    <Input placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last name" required>
                    <Input placeholder="Last name" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Email" required>
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item label="Phone">
                <Input placeholder="Phone" />
              </Form.Item>
              <Form.Item label="Comment">
                <TextArea rows={4} placeholder="Comment" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
