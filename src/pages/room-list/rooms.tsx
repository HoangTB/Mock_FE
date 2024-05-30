import { Carousel, Col, Image } from 'antd';
import { Button, Typography } from 'antd';
import React from 'react';
import { IRoom } from '../../types/room';
import { HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Room = ({ room }: { room: IRoom }) => {
  const { images, nameRoom, typeRoom, description, price, status } = room;
  return (
    <Col span={8} xs={24} sm={12} md={8} lg={8} xl={8}>
      <div style={{ padding: 15, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: 5 }}>
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Image ${index + 1}`} style={{ width: '100%', borderRadius: 10 }} />
            </div>
          ))}
        </Carousel>
        <Title
          level={3}
          style={{
            margin: 0,
          }}
        >
          {nameRoom}
        </Title>
        <p
          style={{
            margin: 0,
          }}
        >
          {typeRoom}
        </p>
        <p
          style={{
            height: 50,
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Title
            level={3}
            style={{
              margin: 0,
            }}
          >
            {price}
          </Title>
          {status === 'empty' ? (
            <Button
              type="primary"
              size="middle"
              style={{
                background: 'var(--primary-color)',
              }}
            >
              <HomeOutlined />
              Book now
            </Button>
          ) : (
            <Button
              type="dashed"
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
        </div>
      </div>
    </Col>
  );
};

export default Room;
