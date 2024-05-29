import { Avatar, Button, Card, Carousel, Col, Flex, Rate, Row, Typography } from 'antd';
import React, { useRef } from 'react';
import { IGuestReview } from '../../types/review';
import { chunkArray } from '../../utils/common';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title } = Typography;

const guestReviews: IGuestReview[] = [
  {
    guestName: 'John Doe',
    reviewDate: '2024-05-01',
    rating: 5,
    comments: 'Amazing experience! The room was clean and the staff were very friendly.',
    avatar: 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg',
  },
  {
    guestName: 'Jane Smith',
    reviewDate: '2024-04-15',
    rating: 4,
    comments: 'Very comfortable stay. The location was perfect, but the breakfast could be improved.',
    avatar: 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg',
  },
  {
    guestName: 'Sam Johnson',
    reviewDate: '2024-03-20',
    rating: 3,
    comments: 'Average experience. The room was a bit noisy, but overall it was okay.',
    avatar: 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg',
  },
  {
    guestName: 'Emily Brown',
    reviewDate: '2024-02-10',
    rating: 5,
    comments: 'Exceptional service! Will definitely come back again.',
    avatar: 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg',
  },
  {
    guestName: 'Michael Wilson',
    reviewDate: '2024-01-05',
    rating: 4,
    comments: 'Great value for money. The amenities were excellent.',
    avatar: 'https://2sao.vietnamnetjsc.vn/images/2021/04/26/21/17/trai-dep-1.jpg',
  },
];

const GuestReviews = () => {
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const chunkedReviews = chunkArray(guestReviews, 3);
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
        {chunkedReviews.map((chunk, index) => (
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
                          src={item.avatar}
                          style={{
                            width: 100,
                            height: 100,
                          }}
                        />
                      }
                      title={item.guestName}
                    />
                    <Flex vertical align="center">
                      <p>Date: {item.reviewDate}</p>
                      <Rate disabled defaultValue={item.rating} />
                      <p style={{ marginTop: '10px', textAlign: 'center' }}>{item.comments}</p>
                    </Flex>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>

      <div style={{ justifyContent: 'center', display: 'flex', gap: '5px', marginTop: 10 }}>
        <Button onClick={handlePrev} icon={<ArrowLeftOutlined />}></Button>
        <Button onClick={handleNext} icon={<ArrowRightOutlined />}></Button>
      </div>
    </div>
  );
};

export default GuestReviews;
