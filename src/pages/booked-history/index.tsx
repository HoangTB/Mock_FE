import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';
import styles from './styles.module.css';
import BookingItem from './booking-item';
import { getAllBookedHistory } from '../../api/booked-history/booked-history-api';
import { IRoomBooking } from '../../types/booked-histoty';

const { Title } = Typography;

const BookedHistory = () => {
  const [data, setData] = useState<IRoomBooking[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('2');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllBookedHistory();
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleCancelBooking = async () => {
    setActiveTab('3');
    await getAllBookedHistory();
  };

  const handleDeleteBooking = async () => {
    setActiveTab('3');
    await getAllBookedHistory();
    fetchData();
  };

  const renderBookingList = (status: 'Pending' | 'Approved' | 'Cancelled') => {
    const filteredBookings = data.filter((item) => item.statusOfBooking === status);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (filteredBookings.length === 0) {
      return <>No data not found</>;
    }

    return filteredBookings.map((booking) => (
      <BookingItem
        key={booking.idBooking}
        booking={booking}
        onCancel={handleCancelBooking}
        onDelete={handleDeleteBooking}
        setTab={setActiveTab}
      />
    ));
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

  return (
    <div className={styles.container}>
      <Row>
        <Col span={24}>
          <Title level={3} style={{ textAlign: 'center' }}>
            Booked History
          </Title>
        </Col>
        <div className={styles.tabs}>
          <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} size="large" />
        </div>
      </Row>
    </div>
  );
};

export default BookedHistory;
