import { CarOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Flex, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import { IRoom } from '../../types/room';
import GuestReviews from './guest-reviews';
import styles from './styles.module.css';
import Filters from './filter';
import Room from './room';
import { roomApi } from '../../api/room/room-api';
import { useNavigate, useParams } from 'react-router-dom';
import { ratingApi } from '../../api/rating/rating-api';
import { IRating } from '../../types/rating';
import { IHotel } from '../../types/hotel';

const { Title } = Typography;

const RoomList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roomList, setRoomList] = useState<{
    rooms: IRoom[];
    hotel: IHotel;
  }>({
    hotel: {
      addressHotel: '',
      city: '',
      idHotel: '',
      imageUrl: '',
      nameHotel: '',
      phoneNumberHotel: '',
      ratings: [],
      rooms: [],
    },
    rooms: [],
  });
  const [ratingList, setRatingList] = useState<IRating[]>([]);
  const { idHotel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (idHotel) {
        const data = await roomApi.getRoomList(idHotel, '');
        const ratings = await ratingApi.getRatingByIdHotel(idHotel);
        setRatingList(ratings);
        setRoomList(data);
        setIsLoading(true);
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
        <div
          className={styles.banner}
          style={{
            backgroundImage: `url(${roomList.hotel.imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'inherit',
          }}
        ></div>
        <div className={styles.content}>
          <Title level={2} className={styles.title}>
            Welcome to {roomList.hotel.nameHotel}
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

        <Title level={3}>{roomList.hotel.nameHotel}</Title>

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
              {roomList.rooms.length > 0 ? (
                roomList.rooms.map((room, index) => <Room room={room} key={index} />)
              ) : (
                <img
                  src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"
                  alt=""
                  width={500}
                  style={{
                    margin: 'auto',
                  }}
                />
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

        {isLoading && <GuestReviews ratings={ratingList} />}
      </Container>
    </div>
  );
};

export default RoomList;
