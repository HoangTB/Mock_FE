import React from 'react';
import style from './style.module.css';

interface ICity {
  city: string;
  image: string;
}

interface CityListProps {
  cities: ICity[];
}

const handleLinkClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  const branchSection = document.getElementById(id);
  if (branchSection) {
    branchSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const ListCity: React.FC<CityListProps> = ({ cities }) => {
  return (
    <div className={style.container}>
      <h1>Book room</h1>
      <h2>Where do you want to book?</h2>
      <div className={style.cityList}>
        {cities.map((city, index) => (
          <div key={index} className={style.cityCard}>
            <a href={`#${city.city}`} onClick={handleLinkClick(city.city)}>
              <img src={city.image} alt={city.city} className={style.cityImage} />
              <p className={style.cityName}>{city.city}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCity;
