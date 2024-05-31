import { link } from 'fs';
import React from 'react';
import { Carousel } from 'antd';
import style from './style.module.css';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'



const contentStyle: React.CSSProperties = {
  height: '87vh',
  objectFit: 'cover',
  width: '100%',
};

function SlideImage() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }

  const data = [
    {
      link: 'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg',
      image: 1,
      title: t('carousel-image1'),
    },
    {
      link: 'https://peninsulahotel.vn/uploads/gallery/slider-peninsula-hotel-danang-1686535690.webp',
      image: 2,
      title: 'Enjoy top-notch amenities including a spa, swimming pool, gym, and a 5-star restaurant.',
    },
    {
      link: 'https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697-78625-1694019828.jpg',
      image: 3,
      title: 'Conveniently located in the city center, close to major attractions and entertainment',
    },
    {
      link: 'https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720',
      image: 4,
      title: 'Discover diverse and unique culinary delights prepared by top chefs.',
    },
    {
      link: 'https://www.riazorhotel.com/wp-content/uploads/2023/10/Suite-hotel-Riazor2807-scaled.webp',
      image: 5,
      title: 'Book now to enjoy exclusive deals and comprehensive service packages.',
    },
  ];
  return (
    <div className={style[`list-hotel`]}>
      <Carousel autoplay dots={false}>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.carousel}>
              <div className={style['image-container']}>
                <img src={item.link} alt="ok" style={contentStyle} className={style.contentStyle} />
                <div className={style['gradient-overlay']} />
              </div>
              <div className={style.content}>
                <img src="images/logo.png" alt="logo" />
                {item.title}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SlideImage;
