import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, TabsProps, Typography } from 'antd';
import styles from './styles.module.css';
import { IRoomBooking } from '../../types/booked-histoty';
import BookingItem from './booking-item';
import { getAllBookedHistory } from '../../api/booked-history/booked-history-api';

const { Title } = Typography;

const BookedHistory = () => {
  const [data, setData] = useState<IRoomBooking[]>([]);
  const [loading, setLoading] = useState(false);

  const bookingList = data;

  const getAll = async () => {
    setLoading(true);
    try {
      const response = await getAllBookedHistory();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const renderBookingList = (status: 'Pending' | 'Approved' | 'Cancelled') => {
    return (
      <>
        {bookingList
          .filter((item) => item.statusOfBooking === status)
          .map((booking) => (
            <BookingItem key={booking.roomNumber} booking={booking} />
          ))}
      </>
    );
  };

  const items = [
    {
      label: 'Approved',
      key: '1',
      children: renderBookingList('Approved'),
    },
    {
      label: 'Pending',
      key: '2',
      children: renderBookingList('Pending'),
    },
    {
      label: 'Cancelled',
      key: '3',
      children: renderBookingList('Cancelled'),
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
