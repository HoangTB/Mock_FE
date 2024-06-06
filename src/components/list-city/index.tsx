import React from 'react';
import style from './style.module.css';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'

interface ICity {
  city: string;
  image: string;
}

interface CityListProps {
  cities: ICity[];
}

const ListCity: React.FC<CityListProps> = ({ cities }) => {
  const { t } = useTranslation('listCity');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'jp') => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={style.container}>
      <h1>{t('book')}</h1>
      <h2>{t('where')}</h2>
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
