import React, { useEffect, useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import { Col, Flex, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import styles from './style.module.css';
import { useLocation } from 'react-router-dom';
import { BookingRequest, UsersRequest } from '../../api/payment/request/vnpay.request';
const Completed = () => {
  const location = useLocation();
  const [bookingData, setBookingData] = useState<BookingRequest>();
  const [usersData, setUsersData] = useState<UsersRequest>();
  const param = new URLSearchParams(location.search);
  const orderInfo = param.get('orderInfo');
  const amount = param.get('amount');
  const booking = param.get('bk');
  const users = param.get('u');
  const roomPrice = param.get('roomPrice');
  const servicePrice = param.get('servicePrice');

  localStorage.removeItem('serviceQuantities');
  localStorage.removeItem('booking');
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
  }, [orderInfo, booking]);

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
            <Title level={2}>OrderID: {orderInfo}</Title>
            <div className={styles.formInfo}>
              <div className={styles.information}>
                <h4>Order Information</h4>
                <div>
                  <p>
                    <b>Full Name</b>
                  </p>
                  <p>{usersData?.username}</p>
                </div>

                <div>
                  <p>
                    <b>Phone</b>
                  </p>
                  <p>{usersData?.phoneNumber}</p>
                </div>

                <div>
                  <p>
                    <b>CCCD</b>
                  </p>
                  <p>{usersData?.identificationCard}</p>
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
                  <p>{usersData?.gender === true ? 'Male' : 'Female'}</p>
                </div>

                <div>
                  <p>
                    <b>Room</b>
                  </p>
                  <p>
                    {Number(roomPrice).toLocaleString('de-DE')}
                    VND
                  </p>
                </div>

                <div>
                  <p>
                    <b>Service</b>
                  </p>
                  <p>{Number(servicePrice).toLocaleString('de-DE')} VND</p>
                </div>

                <div>
                  <p>
                    <b>Total</b>
                  </p>
                  <p>{Number(amount).toLocaleString('de-DE')} VND</p>
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
