import React from 'react';
import style from './style.module.css';

interface ICity {
  city: string;
  image: string;
}

interface CityListProps {
  cities: ICity[];
}

const ListCity: React.FC<CityListProps> = ({ cities }) => {
  return (
    <div className={style.container}>
      <h1>Book room</h1>
      <h2>Where do you want to book?</h2>
      <div className={style.cityList}>
        {cities.map((city, index) => (
          <div key={index} className={style.cityCard}>
            <img src={city.image} alt={city.city} className={style.cityImage} />
            <p className={style.cityName}>{city.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCity;
