import React, { useEffect, useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import { Col, Flex, Row } from 'antd';
import { CheckCircleOutlined, SoundTwoTone } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import styles from './style.module.css';
import { useLocation } from 'react-router-dom';
import { bookingRequest, usersRequest } from '../../api/payment/request/vnpay.request';
const Completed = () => {
  const location = useLocation();
  const [bookingData, setBookingData] = useState<bookingRequest>();
  const [usersData, setUsersData] = useState<usersRequest>();
  const param = new URLSearchParams(location.search);
  const vnp_OrderInfo = param.get('vnp_OrderInfo');
  const amount = param.get('vnp_Amount');
  const booking = param.get('bk');
  const users = param.get('u');
  const formattedAmount = (Number(amount) / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    if (booking && users) {
      const decodedDataBooking = atob(booking);
      const decodedDataUsers = atob(users);
      try {
        const parsedDataBooking = JSON.parse(decodedDataBooking);
        const parsedDataUsers = JSON.parse(decodedDataUsers);
        setBookingData(parsedDataBooking);
        setUsersData(parsedDataUsers);
      } catch (error) {
        console.error('Error parsing decoded data: ', error);
      }
    }
  }, [vnp_OrderInfo, booking]);

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
            <Title level={2}>OrderID: {vnp_OrderInfo}</Title>
            <div className={styles.formInfo}>
              <div className={styles.information}>
                <h4>Order Information</h4>
                <div>
                  <p>
                    <b>Full Name</b>
                  </p>
                  <p>{usersData?.fullName}</p>
                </div>

                <div>
                  <p>
                    <b>Phone</b>
                  </p>
                  <p>{usersData?.phone}</p>
                </div>

                <div>
                  <p>
                    <b>CCCD</b>
                  </p>
                  <p>{usersData?.cccd}</p>
                </div>

                <div>
                  <p>
                    <b>Email</b>
                  </p>
                  <p>{usersData?.email}</p>
                </div>

                <div>
                  <p>
                    <b>Gender</b>
                  </p>
                  <p>{usersData?.gender}</p>
                </div>

                <div>
                  <p>
                    <b>Room</b>
                  </p>
                  <p>
                    {bookingData?.roomPrice?.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                    VND
                  </p>
                </div>

                <div>
                  <p>
                    <b>Service</b>
                  </p>
                  <p>
                    {bookingData?.servicePrice?.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                    VND
                  </p>
                </div>

                <div>
                  <p>
                    <b>Total</b>
                  </p>
                  <p>{formattedAmount} VND</p>
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
