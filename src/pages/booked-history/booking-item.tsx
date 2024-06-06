import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Typography, Tag, Flex, Modal, Form, Input, InputNumber, message } from 'antd';
import { Image } from 'antd';
import styles from './styles.module.css';
import { deleteBooking, updateStatusOfBooking } from '../../api/booked-history/booked-history-api';
import moment from 'moment';
import { createFeedBack } from '../../api/feedback/feedback-api';
import { IRoomBooking } from '../../types/booked-histoty';
import { IRoomService } from '../../types/service-history';

const { Title, Text } = Typography;

const BookingItem = ({
  booking,
  onCancel,
  onDelete,
}: {
  booking: IRoomBooking;
  onCancel: () => void;
  onDelete: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [feedbackData, setFeedbackData] = useState({
    titleRating: '',
    contentRating: '',
    starRating: 1,
    idHotel: booking.idHotel,
    timeCreated: moment().format('YYYY-MM-DDTHH:mm'),
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setIsDirty(true);
  }, [feedbackData]);

  const cancel = async (idBooking: number, statusOfBooking: string) => {
    setLoading(true);
    try {
      await updateStatusOfBooking(idBooking, statusOfBooking);
      onCancel();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmCancel = () => {
    cancel(booking.idBooking, 'Cancelled');
    setConfirmCancel(false);
  };

  const handleDeleteBooking = async (idBooking: number) => {
    setLoading(true);
    try {
      await deleteBooking(idBooking);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      onDelete();
    }
  };

  const handleConfirmDelete = () => {
    handleDeleteBooking(booking.idBooking);
    setShowConfirmation(false);
  };

  const handleFeedbackSubmit = async () => {
    try {
      setLoading(true);
      await createFeedBack(
        feedbackData.titleRating,
        feedbackData.contentRating,
        feedbackData.starRating,
        feedbackData.idHotel,
        feedbackData.timeCreated,
      );
      setLoading(false);
      setFeedbackModalVisible(false);
      form.resetFields();
      message.success('Feedback submitted successfully!');
    } catch (error) {
      setLoading(false);
      message.error('Failed to submit feedback. Please try again later.');
    }
  };

  const isCancelable = () => {
    const currentTime = moment();
    const bookingTime = moment(booking.startDateBooking.toString());
    const diffInHours = bookingTime.diff(currentTime, 'hours');
    return diffInHours > 24;
  };

  const calculateServicePrice = (services: IRoomService[]) => {
    return services.reduce((total, service) => total + (service.priceOfService || 0), 0);
  };

  const servicePrice = calculateServicePrice(booking.services);
  const totalPrice = booking.priceOfRoom + servicePrice - ((booking.priceOfRoom + servicePrice) * 10) / 100;

  return (
    <Card bordered={false} className={styles.card}>
      <Row gutter={16}>
        <Col span={4} lg={4} md={24} sm={24} xs={24}>
          <Image
            width={100}
            height={100}
            src={booking?.linkOfPhoto?.toLocaleString()}
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
                {moment(booking?.dateBooking.toString()).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
              <br />
              <Text>
                <p className={styles.title}>From Date: </p>
                {moment(booking?.startDateBooking.toString()).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
              <br />
              <Text>
                <p className={styles.title}>To Date: </p>
                {moment(booking?.endDateBooking.toString()).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
              <br />
            </Col>
            <Col span={5} lg={5} md={12} sm={12} xs={24}>
              <Title level={5}>Service</Title>
              {booking.services.map((service, index) => (
                <Text key={index} className={styles.listService}>
                  <p className={styles.contentService}>{service.nameService}</p>
                </Text>
              ))}
            </Col>
            <Col span={5} lg={5} md={12} sm={12} xs={24}>
              <Title level={5}>Summary</Title>
              <Text>
                <p className={styles.title}>Price room: </p>
                {booking.priceOfRoom}VND
              </Text>
              <br />
              <Text>
                <p className={styles.title}>Price service: </p> {servicePrice}VND
              </Text>
              <br />
              <Text>
                <p className={styles.title}>Discount: </p>10%
              </Text>
              <br />
              <hr />
              <Text>
                <p className={styles.title}>Total: </p> {totalPrice}VND
              </Text>
            </Col>
            <Col span={4} lg={4} md={12} sm={12} xs={24}>
              <Title level={5}>Payment</Title>
              <Text>{booking.paymentMethod || 'N/A'}</Text>
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
                <Flex gap={10}>
                  {booking.statusOfBooking === 'Pending' && (
                    <>
                      <Button
                        type="primary"
                        danger
                        onClick={() => setConfirmCancel(true)}
                        loading={loading}
                        disabled={!isCancelable()}
                      >
                        CANCEL
                      </Button>
                      <Modal
                        title="Confirm"
                        open={confirmCancel}
                        onCancel={() => setConfirmCancel(false)}
                        footer={[
                          <Button key="back" onClick={() => setConfirmCancel(false)}>
                            No
                          </Button>,
                          <Button key="submit" type="primary" danger onClick={handleConfirmCancel} loading={loading}>
                            Yes
                          </Button>,
                        ]}
                      >
                        Are you sure you want to cancel this booking?
                      </Modal>
                    </>
                  )}
                  {booking.statusOfBooking === 'Approved' && (
                    <>
                      <Button
                        type="primary"
                        danger
                        style={{
                          background: '#f50',
                        }}
                        onClick={() => setFeedbackModalVisible(true)}
                      >
                        Feedback
                      </Button>
                      <Modal
                        title="Feedback"
                        open={feedbackModalVisible}
                        onCancel={() => setFeedbackModalVisible(false)}
                        footer={[
                          <Button key="back" onClick={() => setFeedbackModalVisible(false)}>
                            Cancel
                          </Button>,
                          <Button
                            key="submit"
                            type="primary"
                            onClick={handleFeedbackSubmit}
                            loading={loading}
                            disabled={
                              !isDirty ||
                              !feedbackData.titleRating ||
                              !feedbackData.contentRating ||
                              feedbackData.starRating < 1 ||
                              feedbackData.starRating > 5
                            }
                          >
                            Submit
                          </Button>,
                        ]}
                      >
                        <Form form={form} layout="vertical">
                          <Form.Item
                            name="title"
                            label="Title"
                            rules={[{ required: true, message: 'Please input the title!' }]}
                          >
                            <Input
                              placeholder="Enter title"
                              value={feedbackData.titleRating}
                              onChange={(e) => {
                                setFeedbackData({ ...feedbackData, titleRating: e.target.value });
                                setIsDirty(true);
                              }}
                            />
                          </Form.Item>
                          <Form.Item
                            name="content"
                            label="Content"
                            rules={[{ required: true, message: 'Please input the content!' }]}
                          >
                            <Input.TextArea
                              rows={4}
                              placeholder="Enter content"
                              value={feedbackData.contentRating}
                              onChange={(e) => {
                                setFeedbackData({ ...feedbackData, contentRating: e.target.value });
                                setIsDirty(true);
                              }}
                            />
                          </Form.Item>
                          <Form.Item
                            name="starRating"
                            label="Star Rating"
                            rules={[
                              { required: true, message: 'Please input the star rating!' },
                              { type: 'number', min: 1, max: 5, message: 'Star rating must be between 1 and 5' },
                            ]}
                          >
                            <InputNumber
                              placeholder="Star rating"
                              value={feedbackData.starRating || undefined}
                              onChange={(value) => {
                                setFeedbackData({ ...feedbackData, starRating: value as number });
                                setIsDirty(true);
                              }}
                              min={1}
                              max={5}
                            />
                          </Form.Item>
                        </Form>
                      </Modal>
                    </>
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
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default BookingItem;
