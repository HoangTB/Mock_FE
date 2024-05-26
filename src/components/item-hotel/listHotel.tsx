import React from 'react';
import ItemHotel from './itemHotel';
import style from './list.module.css';

interface IData {
  address: string;
  city: string;
  image: string;
}

interface ListHotelProps {
  data: IData[];
}

const ListHotel = ({ data }: ListHotelProps) => {
  return (
    <div className={style[`list-hotel`]}>
      {data.map((item, index) => {
        return <ItemHotel key={index} address={item.address} image={item.image} />;
      })}
    </div>
  );
};
export default ListHotel;
