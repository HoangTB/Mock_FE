import React from 'react';
import style from './list.module.css';
import { IHotel } from '../../types/hotel';
import { EnvironmentOutlined, PhoneFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface ListHotelProps {
  data: IHotel[];
}

const ListHotel = ({ data }: ListHotelProps) => {
  const navigate = useNavigate();

  const locations = data.reduce((acc: any, item) => {
    if (!acc[item.city]) {
      acc[item.city] = [];
    }
    acc[item.city].push(item);
    return acc;
  }, {});

  const navigateTo = (id: string) => () => {
    navigate(`/branch/${id}`);
  };

  return (
    <div className={style.container} id="branch">
      {Object.keys(locations).map((city) => (
        <div key={city} className={style.citySection}>
          <h2>{city}</h2>
          <div className={style.branchList}>
            {locations[city].map((branch: any, index: number) => (
              <div key={index} className={style.branch} onClick={navigateTo(branch.idHotel)}>
                <img src={branch.imageUrl} alt={`Branch ${index}`} className={style.image} />
                <p>{branch.nameHotel}</p>

                <p>
                  <PhoneFilled />
                  {branch.phoneNumberHotel}
                </p>
                <p>
                  <EnvironmentOutlined />
                  {branch.addressHotel}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListHotel;
