import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';
import styles from './styles.module.css';
import BookingItem from './booking-item';
import { getAllBookedHistory } from '../../api/booked-history/booked-history-api';
import { IRoomBooking } from '../../types/booked-histoty';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation('edit');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }

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
      return <>
        <img
          src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"
          alt=""
          width={400}
          style={{
            marginLeft: 200
          }}
        />
      </>;
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
      label: (t('approved')),
      key: '1',
      children: renderBookingList('Approved'),
    },
    {
      label: (t('pending')),
      key: '2',
      children: renderBookingList('Pending'),
    },
    {
      label: (t('cancelled')),
      key: '3',
      children: renderBookingList('Cancelled'),
    },
  ];

  return (
    <div className={styles.container}>
      <Row>
        <Col span={24}>
          <Title level={3} style={{ textAlign: 'center' }}>
          {(t('booked history'))}
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
