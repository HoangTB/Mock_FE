import { Carousel, Col, Flex, Image, Row } from 'antd';
import { Button, Typography } from 'antd';
import React from 'react';
import { IRoom } from '../../types/room';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Room = ({ room }: { room: IRoom }) => {
  const noData = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
  const {
    idRoom,
    images,
    roomNumber,
    typeRoom,
    descriptionOfRoom,
    priceOfRoom,
    numberOfBeds,
    available,
    maxNumberPeopleOfRoom,
  } = room;
  const navigate = useNavigate();
  return (
    <Col span={8} xs={24} sm={12} md={8} lg={8} xl={8}>
      <div style={{ padding: 15, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: 5 }}>
        <Carousel>
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index}>
                <Image src={image} alt={`Image ${index + 1}`} style={{ width: '100%', borderRadius: 10 }} />
              </div>
            ))
          ) : (
            <Image src={noData} alt="..." style={{ width: '100%', borderRadius: 10 }} />
          )}
        </Carousel>
        <Title
          level={3}
          style={{
            margin: 0,
            marginBottom: 10,
          }}
        >
          Room number: {roomNumber}
        </Title>
        <p
          style={{
            margin: 0,
            marginBottom: 8,
          }}
        >
          {typeRoom}
        </p>
        <Flex vertical={true} gap={8} style={{ marginBottom: 4 }}>
          <p>{descriptionOfRoom}</p>
          <p>Number of beds: {numberOfBeds}</p>
          <p> Max people: {maxNumberPeopleOfRoom}</p>
        </Flex>
        <Row gutter={[8, 8]} justify="space-between">
          <Col span={12} lg={24} md={24} sm={24} xs={24}>
            <Title
              level={5}
              style={{
                margin: 0,
              }}
            >
              Price: {priceOfRoom.toLocaleString('de-DE')} VND
            </Title>
          </Col>
          <Col span={12} lg={24} md={24} sm={24} xs={24}>
            {available ? (
              <Button
                type="primary"
                size="middle"
                style={{
                  background: 'var(--primary-color)',
                }}
                onClick={() => navigate(`/branch/room/${idRoom}`)}
              >
                <HomeOutlined />
                Book now
              </Button>
            ) : (
              <Button
                size="middle"
                disabled
                style={{
                  background: 'red',
                  color: '#fff',
                }}
              >
                Full Room
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Room;
