import { Avatar, Button, Card, Carousel, Col, Flex, Rate, Row, Typography } from 'antd';
import React, { useRef } from 'react';
import { chunkArray } from '../../utils/common';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { IRating } from '../../types/rating';
import dayjs from 'dayjs';

const { Title } = Typography;

const GuestReviews = ({ ratings }: { ratings: IRating[] }) => {
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const chunkedReviews = chunkArray(ratings, 3);
  // console.log({ chunkedReviews, ratings });

  return (
    <div
      style={{
        marginTop: 40,
        marginBottom: 20,
      }}
    >
      <Title
        level={3}
        style={{
          margin: 0,
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        Guest Reviews
      </Title>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        nextArrow={<ArrowRightOutlined />}
        prevArrow={<ArrowLeftOutlined />}
        ref={carouselRef}
      >
        {ratings.length > 3 ? (
          chunkedReviews.map((chunk, index) => (
            <div key={index}>
              <Row gutter={[16, 16]} justify="center">
                {chunk.map((item, itemIndex) => (
                  <Col key={itemIndex} span={8} xs={24} sm={24} md={8}>
                    <Card style={{ height: '300px', overflow: 'hidden' }}>
                      <Card.Meta
                        style={{
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                        avatar={
                          <Avatar
                            src={item.avatar && 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg'}
                            style={{
                              width: 100,
                              height: 100,
                            }}
                          />
                        }
                        title={item.username}
                      />
                      <Flex vertical align="center">
                        <p>Date: {dayjs(item.timeCreated).format('DD/MM/YYYY')}</p>
                        <Rate disabled defaultValue={item.starRating} />
                        <p style={{ marginTop: '10px', textAlign: 'center' }}>{item.contentRating}</p>
                      </Flex>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))
        ) : (
          <Row gutter={[16, 16]} justify="center">
            {ratings.map((item, itemIndex) => (
              <Col key={itemIndex} span={8} xs={24} sm={24} md={8}>
                <Card style={{ height: '300px', overflow: 'hidden' }}>
                  <Card.Meta
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    avatar={
                      <Avatar
                        src={item.avatar ?? 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg'}
                        style={{
                          width: 100,
                          height: 100,
                        }}
                      />
                    }
                    title={item.username}
                  />
                  <Flex vertical align="center" gap={8}>
                    <p>Date: {dayjs(item.timeCreated).format('DD/MM/YYYY')}</p>
                    <Rate disabled defaultValue={item.starRating} />
                    <p style={{ marginTop: '10px', textAlign: 'center' }}>{item.contentRating}</p>
                  </Flex>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Carousel>
      {ratings.length > 3 && (
        <div style={{ justifyContent: 'center', display: 'flex', gap: '5px', marginTop: 10 }}>
          <Button onClick={handlePrev} icon={<ArrowLeftOutlined />}></Button>
          <Button onClick={handleNext} icon={<ArrowRightOutlined />}></Button>
        </div>
      )}
    </div>
  );
};

export default GuestReviews;
