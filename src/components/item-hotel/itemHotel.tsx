import React from 'react';
import style from './item.module.css';
interface ItemHotelProps {
  address: string | undefined;
  image: string;
}

const ItemHotel = ({ address, image }: ItemHotelProps) => {
  return (
    <div className={style[`item-hotel`]}>
      <img src={image} alt={address} />
      <p>{address}</p>
    </div>
  );
};
export default ItemHotel;
