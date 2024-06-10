import { Carousel, Col, Flex, Image, Row } from 'antd';
import { Button, Typography } from 'antd';
import React from 'react';
import { IRoom } from '../../types/room';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const Room = ({ room }: { room: IRoom }) => {
  const { t } = useTranslation('roomList');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }
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
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ width: '100%', borderRadius: 10, height: 230 }}
                />
              </div>
            ))
          ) : (
            <div>
              <Image src={noData} alt="..." style={{ width: '100%', borderRadius: 10, height: 230 }} />
            </div>
          )}
        </Carousel>
        <Title
          level={3}
          style={{
            margin: 0,
            marginBottom: 10,
          }}
        >
          {t('room number')}:  {roomNumber}
        </Title>
        <p
          style={{
            margin: 0,
            marginBottom: 8,
          }}
        >
          {t('room type')}:  {typeRoom}
        </p>
        <Flex vertical={true} gap={5} style={{ lineHeight: 1.5 }}>
          <p>{t('description')}: {descriptionOfRoom}</p>
          <p>{t('number of bed')}: {numberOfBeds}</p>
          <p>{t('max people')}: {maxNumberPeopleOfRoom}</p>
        </Flex>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Title
              level={5}
              style={{
                margin: 0,
              }}
            >
              {t('price')}: {priceOfRoom.toLocaleString('de-DE')} VND
            </Title>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
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
                {t('book now')}
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
