import React from 'react';
import { Card, Row, Col, Button, Typography, Tag, Flex } from 'antd';
import { Image } from 'antd';
import { IRoomBooking } from '../../types/room';
import styles from './styles.module.css';

const { Title, Text } = Typography;

const BookingItem = ({ booking }: { booking: IRoomBooking }) => {
  return (
    <Card bordered={false} className={styles.card}>
      <Row gutter={16}>
        <Col span={4} lg={4} md={24} sm={24} xs={24}>
          <Image width={100} height={100} src={booking.images[0]} alt="Room Image" style={{ borderRadius: 10 }} />
        </Col>
        <Col span={20} lg={20} md={24} sm={24} xs={24}>
          <Row>
            <Col span={10} lg={10} md={12} sm={12} xs={24}>
              <Title level={4}>{booking.nameRoom}</Title>
              <Text>
                <p className={styles.title}>Booking Date: </p>
                {new Date(booking.bookingDate).toLocaleString()}
              </Text>
              <br />
              <Text>
                <p className={styles.title}>From Date: </p>
                {new Date(booking.fromDate).toLocaleString()}
              </Text>
              <br />
              <Text>
                <p className={styles.title}>To Date: </p>
                {new Date(booking.toDate).toLocaleString()}
              </Text>
              <br />
            </Col>
            <Col span={5} lg={5} md={12} sm={12} xs={24}>
              <Title level={5}>Service</Title>
              {booking.service.map((srv, index) => (
                <Text key={index}>
                  {srv}
                  <br />
                </Text>
              ))}
            </Col>
            <Col span={5} lg={5} md={12} sm={12} xs={24}>
              <Title level={5}>Summary</Title>
              <Text>
                <p className={styles.title}>Price room: </p>
                {booking.price}$
              </Text>
              <br />
              <Text>
                <p className={styles.title}>Price service: </p> {booking.total - booking.price}$
              </Text>
              <br />
              <Text>
                <p className={styles.title}>Discount: </p>
                0$
              </Text>
              <br />
              <hr />
              <Text>
                {' '}
                <p className={styles.title}>Total: </p> {booking.total}$
              </Text>
            </Col>
            <Col span={4} lg={4} md={12} sm={12} xs={24}>
              <Title level={5}>Payment</Title>
              <Text>Zalo Pay</Text>
            </Col>
            <Col
              span={24}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginTop: 10,
              }}
            >
              <Flex justify="space-between">
                <Text>
                  <p
                    className={styles.title}
                    style={{
                      marginRight: 10,
                    }}
                  >
                    Status:{' '}
                  </p>
                  {booking.bookingStatus === 'booking' && <Tag color="#f50">Pending</Tag>}
                  {booking.bookingStatus === 'approve' && <Tag color="#2db7f5">Approved</Tag>}
                  {booking.bookingStatus === 'cancel' && <Tag color="#cd201f">Cancelled</Tag>}
                </Text>
                {booking.bookingStatus === 'booking' && (
                  <Button type="primary" danger>
                    CANCEL
                  </Button>
                )}
                {booking.bookingStatus === 'approve' && (
                  <Button
                    type="primary"
                    danger
                    style={{
                      background: '#f50',
                    }}
                  >
                    Feedback
                  </Button>
                )}
                {booking.bookingStatus === 'cancel' && (
                  <Flex gap={10}>
                    <Button type="primary">Re-booking</Button>
                    <Button type="primary" danger>
                      Delete
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default BookingItem;
