import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, Typography, Empty } from 'antd';
import styles from './styles.module.css';
import { IRoomBooking } from '../../types/booked-histoty';
import BookingItem from './booking-item';
import { getAllBookedHistory } from '../../api/booked-history/booked-history-api';

const { Title } = Typography;

const BookedHistory = () => {
  const [data, setData] = useState<IRoomBooking[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('2');
  const bookingList = data;

  const getAllBookedHistoryByIdUser = async () => {
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

  const handleCancelBooking = () => {
    setActiveTab('3');
    getAllBookedHistoryByIdUser();
  };

  const handleDeleteBooking = () => {
    getAllBookedHistoryByIdUser();
  };

  useEffect(() => {
    getAllBookedHistoryByIdUser();
  }, []);

  const renderBookingList = (status: 'Pending' | 'Approved' | 'Cancelled') => {
    const filteredBookings = bookingList?.filter((item) => item?.statusOfBooking === status);
    return (
      <>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {filteredBookings?.length > 0 ? (
              filteredBookings?.map((booking) => (
                <BookingItem
                  key={booking.idBooking}
                  booking={booking}
                  onCancel={handleCancelBooking}
                  onDelete={handleDeleteBooking}
                />
              ))
            ) : (
              <Empty description="No Data Found" />
            )}
          </>
        )}
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
