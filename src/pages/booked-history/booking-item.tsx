import React, { useState } from 'react';
import { Card, Row, Col, Button, Typography, Tag, Flex, Modal } from 'antd';
import { Image } from 'antd';
import { IRoomBooking } from '../../types/booked-histoty';
import styles from './styles.module.css';
import { deleteBooking, updateStatusOfBooking } from '../../api/booked-history/booked-history-api';

const { Title, Text } = Typography;

const BookingItem = ({ booking }: { booking: IRoomBooking }) => {
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const cancel = async (roomNumber: number, statusOfBooking: string) => {
    setLoading(true);
    await updateStatusOfBooking(roomNumber, statusOfBooking);
    try {
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBooking = async (idBooking: number) => {
    setLoading(true);
    try {
      await deleteBooking(idBooking);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDelete = () => {
    handleDeleteBooking(booking.idBooking);
    setShowConfirmation(false);
  };

  return (
    <Card bordered={false} className={styles.card}>
      <Row gutter={16}>
        <Col span={4} lg={4} md={24} sm={24} xs={24}>
          <Image
            width={100}
            height={100}
            src={booking.linkOfPhoto.toLocaleString()}
            alt="Room Image"
            style={{ borderRadius: 10 }}
          />
        </Col>
        <Col span={20} lg={20} md={24} sm={24} xs={24}>
          <Row>
            <Col span={10} lg={10} md={12} sm={12} xs={24}>
              <Title level={4}>Room {booking.roomNumber}</Title>
              <Text>
                <p className={styles.title}>Date booking: </p>
                {new Date(booking.dateBooking.toString()).toLocaleString()}
              </Text>
              <br />
              <Text>
                <p className={styles.title}>From Date: </p>
                {new Date(booking.startDateBooking).toLocaleString()}
              </Text>
              <br />
              <Text>
                <p className={styles.title}>To Date: </p>
                {new Date(booking.endDateBooking).toLocaleString()}
              </Text>
              <br />
            </Col>
            <Col span={5} lg={5} md={12} sm={12} xs={24}>
              <Title level={5}>Service</Title>
              <Text>
                <p className={styles.title}>{booking.nameService} </p>
              </Text>
            </Col>
            <Col span={5} lg={5} md={12} sm={12} xs={24}>
              <Title level={5}>Summary</Title>
              <Text>
                <p className={styles.title}>Price room: </p>
                {booking.priceOfRoom}$
              </Text>
              <br />
              <Text>
                <p className={styles.title}>Price service: </p> {booking.priceOfService}$
              </Text>
              <br />
              <Text>
                <p className={styles.title}>Discount: </p>10%
              </Text>
              <br />
              <hr />
              <Text>
                {' '}
                <p className={styles.title}>Total: </p>{' '}
                {booking.priceOfRoom +
                  booking.priceOfService -
                  ((booking.priceOfRoom + booking.priceOfService) * 10) / 100}
                $
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
                  {booking.statusOfBooking === 'Pending' && <Tag color="#f50">Pending</Tag>}
                  {booking.statusOfBooking === 'Approved' && <Tag color="#2db7f5">Approved</Tag>}
                  {booking.statusOfBooking === 'Cancelled' && <Tag color="#cd201f">Cancelled</Tag>}
                </Text>
                {booking.statusOfBooking === 'Pending' && (
                  <Button
                    type="primary"
                    danger
                    onClick={() => cancel(booking.roomNumber, booking.statusOfBooking)}
                    loading={loading}
                  >
                    CANCEL
                  </Button>
                )}
                {booking.statusOfBooking === 'Approved' && (
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
                {booking.statusOfBooking === 'Cancelled' && (
                  <>
                    <Button type="primary">Re-booking</Button>
                    <Button type="primary" danger onClick={() => setShowConfirmation(true)}>
                      Delete
                    </Button>
                    <Modal
                      title="Confirm"
                      open={showConfirmation}
                      onCancel={() => setShowConfirmation(false)}
                      footer={[
                        <Button key="cancel" onClick={() => setShowConfirmation(false)}>
                          Cancel
                        </Button>,
                        <Button key="confirm" type="primary" danger onClick={handleConfirmDelete}>
                          Confirm
                        </Button>,
                      ]}
                    >
                      Are you sure you want to delete this booking?
                    </Modal>
                  </>
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
