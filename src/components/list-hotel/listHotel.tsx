import React from 'react';
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
  const locations = data.reduce((acc: any, item) => {
    if (!acc[item.city]) {
      acc[item.city] = [];
    }
    acc[item.city].push(item);
    return acc;
  }, {});

  return (
    <div className={style.container} id="branch">
      {Object.keys(locations).map((city) => (
        <div key={city} className={style.citySection}>
          <h2>{city}</h2>
          <div className={style.branchList}>
            {locations[city].map((branch: any, index: number) => (
              <div key={index} className={style.branch}>
                <img src={branch.image} alt={`Branch ${index}`} className={style.image} />
                <p>{branch.address}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListHotel;
