import React from 'react';
import { Col, Row, Tabs, TabsProps, Typography } from 'antd';
import styles from './styles.module.css';
import { IRoomBooking } from '../../types/room';
import BookingItem from './booking-item';

const { Title } = Typography;

const BookedHistory = () => {
  const bookingList: IRoomBooking[] = [
    {
      roomID: '1',
      images: [
        'https://cdn.autonomous.ai/production/ecm/230907/10-Home-Reading-Room-Ideas-to-Curl-up-With-a-Book-in-20231.webp',
      ],
      nameRoom: 'Room 1',
      typeRoom: 'Single',
      description: 'A cozy single room.',
      price: 50,
      status: 'empty',
      bookingDate: '2024-05-15T00:00:00Z',
      fromDate: '2024-05-16T00:00:00Z',
      toDate: '2024-05-17T00:00:00Z',
      service: ['Laundry Service', 'Catering Service'],
      total: 105,
      bookingStatus: 'booking',
    },
    {
      roomID: '4',
      images: [
        'https://cdn.autonomous.ai/production/ecm/230907/10-Home-Reading-Room-Ideas-to-Curl-up-With-a-Book-in-20231.webp',
      ],
      nameRoom: 'Room 1',
      typeRoom: 'Single',
      description: 'A cozy single room.',
      price: 50,
      status: 'empty',
      bookingDate: '2024-05-15T00:00:00Z',
      fromDate: '2024-05-16T00:00:00Z',
      toDate: '2024-05-17T00:00:00Z',
      service: ['Laundry Service', 'Catering Service'],
      total: 105,
      bookingStatus: 'booking',
    },
    {
      roomID: '2',
      images: [
        'https://cdn.autonomous.ai/production/ecm/230907/10-Home-Reading-Room-Ideas-to-Curl-up-With-a-Book-in-20231.webp',
      ],
      nameRoom: 'Room 2',
      typeRoom: 'Double',
      description: 'A spacious double room.',
      price: 80,
      status: 'full',
      bookingDate: '2024-05-16T00:00:00Z',
      fromDate: '2024-05-18T00:00:00Z',
      toDate: '2024-05-19T00:00:00Z',
      service: ['Currency Exchange'],
      total: 85,
      bookingStatus: 'cancel',
    },
    {
      roomID: '2',
      images: [
        'https://cdn.autonomous.ai/production/ecm/230907/10-Home-Reading-Room-Ideas-to-Curl-up-With-a-Book-in-20231.webp',
      ],
      nameRoom: 'Room 3',
      typeRoom: 'Double',
      description: 'A spacious double room.',
      price: 80,
      status: 'full',
      bookingDate: '2024-05-16T00:00:00Z',
      fromDate: '2024-05-18T00:00:00Z',
      toDate: '2024-05-19T00:00:00Z',
      service: ['Currency Exchange'],
      total: 85,
      bookingStatus: 'approve',
    },
  ];

  const renderBookingList = (status: 'approve' | 'cancel' | 'booking') => {
    return (
      <>
        {bookingList
          .filter((item) => item.bookingStatus === status)
          .map((booking) => (
            <BookingItem key={booking.roomID} booking={booking} />
          ))}
      </>
    );
  };

  const items = [
    {
      label: 'Booking',
      key: '1',
      children: renderBookingList('booking'),
    },
    {
      label: 'Approve',
      key: '2',
      children: renderBookingList('approve'),
    },
    {
      label: 'Cancel',
      key: '3',
      children: renderBookingList('cancel'),
    },
  ];
  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => <DefaultTabBar {...props} />;
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title
            level={3}
            style={{
              textAlign: 'center',
            }}
          >
            Booked History
          </Title>
        </Col>
        <div className={styles.tabs}>
          <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} size="large" />
        </div>
      </Row>
    </div>
  );
};

export default BookedHistory;
