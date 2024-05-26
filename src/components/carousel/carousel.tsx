import { link } from 'fs';
import React from 'react';
import { Carousel } from 'antd';

const data = [
  {
    link: 'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg',
    image: 1,
    title: 'Welcome to BK Hotel',
  },
  {
    link: 'https://peninsulahotel.vn/uploads/gallery/slider-peninsula-hotel-danang-1686535690.webp',
    image: 2,
  },
  {
    link: 'https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697-78625-1694019828.jpg',
    image: 3,
  },
  {
    link: 'https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720',
    image: 4,
  },
  {
    link: 'https://www.riazorhotel.com/wp-content/uploads/2023/10/Suite-hotel-Riazor2807-scaled.webp',
    image: 5,
  },
];

const contentStyle: React.CSSProperties = {
  height: '87vh',
  objectFit: 'cover',
  width: '100%',
};

function SlideImage() {
  return (
    <div>
      <Carousel autoplay dots={false}>
        {data.map((item, index) => {
          return (
            <>
              <div>{item.title}</div>
              <div key={index}>
                <img src={item.link} alt="ok" style={contentStyle} />
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SlideImage;
