import React, { useEffect, useState } from 'react';
import SlideImage from '../../components/carousel/carousel';
import ListCity from '../../components/list-city';
import ListHotel from '../../components/list-hotel/listHotel';

const cities = [
  {
    name: 'Hà Nội',
    image: 'https://i.pinimg.com/736x/3d/82/85/3d8285aebaac5e39ba6db55e76327200.jpg',
  },
  {
    name: 'Đà Nẵng',
    image: 'https://www.hotelavanti.cz/wp-content/uploads/sites/329/2024/01/JPrerovsky_Hotel-Avanti_Exterior_1-1.jpg',
  },
  {
    name: 'Hồ Chí Minh',
    image: 'https://peninsulahotel.vn/uploads/gallery/slider-peninsula-hotel-danang-1686535714.webp',
  },
];

const data = [
  {
    address: '17 Liêu Giai, Ba Đình',
    city: 'Hà Nội',
    image: 'https://i.pinimg.com/736x/3d/82/85/3d8285aebaac5e39ba6db55e76327200.jpg',
  },
  {
    address: '12 Bảo Khanh, Hoàn Kiếm',
    city: 'Hà Nội',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ec/34/c7/hotel-stanza.jpg?w=700&h=-1&s=1',
  },
  {
    address: '267 Nguyễn Chánh, Liên Chiểu',
    city: 'Đà Nẵng',
    image: 'https://stanza.hotels-mexico-city.com/data/Photos/OriginalPhoto/10190/1019062/1019062948.JPEG',
  },
  {
    address: '30 Nguyễn Hữu Thọ, Hải Châu',
    city: 'Đà Nẵng',
    image: 'https://www.hotelavanti.cz/wp-content/uploads/sites/329/2024/01/JPrerovsky_Hotel-Avanti_Exterior_1-1.jpg',
  },
  {
    address: '229 Nguyễn Tất Thành, Thanh Khê',
    city: 'Đà Nẵng',
    image: 'https://u.profitroom.pl/2019-hotelwitek-pl/thumb/1920x1030/uploads/zdjhotel1.jpg',
  },
  {
    address: '133 Lê Văn Hữu, Thủ Đức',
    city: 'Hồ Chí Minh',
    image: 'https://peninsulahotel.vn/uploads/gallery/slider-peninsula-hotel-danang-1686535714.webp',
  },
];

const HomePage = () => {
  return (
    <>
      <SlideImage />

      <ListCity cities={cities} />
      <ListHotel data={data} />
    </>
  );
};
export default HomePage;
