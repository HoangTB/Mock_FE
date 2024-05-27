import { CarOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Flex, Row, Typography } from 'antd';
import React from 'react';
import Container from '../../components/container/Container';
import StepByStep from '../../components/step-by-step/StepByStep';
import { IRoom } from '../../types/room';
import Filters from './Filters';
import GuestReviews from './GuestReviews';
import Room from './Room';
import styles from './styles.module.css';
const { Title } = Typography;

const roomList: IRoom[] = [
  {
    roomID: 'room1',
    images: [
      'https://static.wixstatic.com/media/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg',
    ],
    description: 'A cozy room with a beautiful view.',
    nameRoom: 'Deluxe Room',
    typeRoom: 'Double',
    price: 20,
    status: 'empty',
  },
  {
    roomID: 'room2',
    images: [
      'https://static.wixstatic.com/media/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg',
    ],
    description: 'Spacious suite with modern amenities.',
    nameRoom: 'Executive Suite',
    typeRoom: 'Single',
    price: 20,
    status: 'empty',
  },
  {
    roomID: 'room3',
    images: [
      'https://static.wixstatic.com/media/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg',
    ],
    description: 'Spacious suite with modern amenities.',
    nameRoom: 'Executive Suite',
    typeRoom: 'Single',
    price: 20,
    status: 'full',
  },
  {
    roomID: 'room4',
    images: [
      'https://static.wixstatic.com/media/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg',
    ],
    description: 'A cozy room with a beautiful view.',
    nameRoom: 'Deluxe Room',
    typeRoom: 'Double',
    price: 20,
    status: 'empty',
  },
  {
    roomID: 'room5',
    images: [
      'https://static.wixstatic.com/media/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg',
    ],
    description: 'Spacious suite with modern amenities.',
    nameRoom: 'Executive Suite',
    typeRoom: 'Single',
    price: 20,
    status: 'empty',
  },
  {
    roomID: 'room6',
    images: [
      'https://static.wixstatic.com/media/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e1480b25dd7f4009a7341151ac180d43~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_07962d29b57648269a0333502d0a992c~mv2.jpg',
      'https://static.wixstatic.com/media/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg/v1/fill/w_768,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce70af_e3ae2313d5ad4ccca5e449bdf0518da0~mv2.jpg',
    ],
    description: 'Spacious suite with modern amenities.',
    nameRoom: 'Executive Suite',
    typeRoom: 'Single',
    price: 20,
    status: 'full',
  },
];

const RoomList = () => {
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
        <Filters />

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
          {roomList.map((room, index) => (
            <Room room={room} key={index} />
          ))}

          <div
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
          </div>
        </Row>

        <GuestReviews />
      </Container>
    </div>
  );
};

export default RoomList;
