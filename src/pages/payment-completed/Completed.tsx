import React from 'react';
import Container from '../../components/container/Container';
import StepByStep from '../../components/step-by-step/StepByStep';
import { Col, Flex, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import styles from './Completed.module.css';
const Completed = () => {
  return (
    <>
      <Container>
        <StepByStep />
        <Row>
          <Col span={24} className={styles.title}>
            <Flex align="center" justify="center" gap={10}>
              <CheckCircleOutlined className={styles.checked} />
              <Title level={2} className={styles.titleSuccess}>
                Payment successful!
              </Title>
            </Flex>
          </Col>
          <Col span={24} className={styles.titleThanks}>
            <Title level={5}>Thank you! Secure payment getway that keeps you safe from fraudsters and thiever</Title>
          </Col>
          <Col span={24} className={styles.titleOrderId}>
            <Title level={2}>OrderID: IC-29398493</Title>
            <div className={styles.formInfo}>
              <div className={styles.information}>
                <h4>Order Information</h4>
                <div>
                  <p>
                    <b>Full Name</b>
                  </p>
                  <p>Bui Van Sy</p>
                </div>

                <div>
                  <p>
                    <b>Phone</b>
                  </p>
                  <p>0905484848</p>
                </div>

                <div>
                  <p>
                    <b>CCCD</b>
                  </p>
                  <p>094585455</p>
                </div>

                <div>
                  <p>
                    <b>Email</b>
                  </p>
                  <p>sybuivan142@gmail.com</p>
                </div>

                <div>
                  <p>
                    <b>Gender</b>
                  </p>
                  <p>Male</p>
                </div>

                <div>
                  <p>
                    <b>Room</b>
                  </p>
                  <p>20$</p>
                </div>

                <div>
                  <p>
                    <b>Service</b>
                  </p>
                  <p>4$</p>
                </div>

                <div>
                  <p>
                    <b>Total</b>
                  </p>
                  <p>24$</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Completed;
