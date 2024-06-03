import { CarOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Flex, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import { IRoom } from '../../types/room';
import GuestReviews from './guest-reviews';
import styles from './styles.module.css';
import Filters from './filter';
import Room from './rooms';
import { roomApi } from '../../api/room/room-api';
import { useNavigate, useParams } from 'react-router-dom';

const { Title } = Typography;

const RoomList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roomList, setRoomList] = useState<IRoom[]>([]);
  const { idHotel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (idHotel) {
        const data = await roomApi.getRoomList(idHotel, '');
        setIsLoading(true);
        setRoomList(data);
      }
    })();
  }, []);
  const handleSearch = async (queryParams: any) => {
    if (idHotel) {
      const query = new URLSearchParams(queryParams);
      const data = await roomApi.getRoomList(idHotel, queryParams);
      navigate({ search: query.toString() });
      setIsLoading(true);
      setRoomList(data);
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div className={styles.banner}></div>
        <div className={styles.content}>
          <Title level={2} className={styles.title}>
            Welcome to Hotel BK
          </Title>
          <Title
            level={4}
            style={{
              padding: 0,
              margin: 0,
              color: '#fff',
            }}
          >
            Where every stay is unique
          </Title>
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: 2,
              textAlign: 'center',
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
      <Container>
        <Filters onSearch={handleSearch} />

        <StepByStep />

        <Title level={3}>Hotel BK - Ha Noi</Title>

        <div>
          <Title level={4}>Benefit</Title>
          <Flex gap="middle">
            <div className={styles.flex}>
              <CarOutlined className={styles.icon} />
              <p>Car parking</p>
            </div>
            <div className={styles.flex}>
              <DesktopOutlined className={styles.icon} />
              <p>Tivi</p>
            </div>
            <div className={styles.flex}>
              <UserOutlined className={styles.icon} />
              <p>Service 24/24</p>
            </div>
          </Flex>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            alignItems: 'center',
            marginBottom: 40,
            marginTop: 40,
          }}
        >
          <Title
            level={3}
            style={{
              margin: 0,
            }}
          >
            View all room
          </Title>
        </div>

        <Row gutter={[10, 10]}>
          {isLoading && (
            <>
              {roomList.length > 0 ? (
                roomList.map((room, index) => <Room room={room} key={index} />)
              ) : (
                <Title
                  level={4}
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    width: '100%',
                  }}
                >
                  No hotel
                </Title>
              )}
            </>
          )}
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginTop: 20,
            }}
          >
            <Button type="dashed" size="middle">
              Load more
            </Button>
          </div> */}
        </Row>

        <GuestReviews />
      </Container>
    </div>
  );
};

export default RoomList;
