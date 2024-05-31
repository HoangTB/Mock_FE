import React, { useEffect, useState } from 'react';
import SlideImage from '../../components/carousel/carousel';
import ListCity from '../../components/list-city';
import ListHotel from '../../components/list-hotel/listHotel';
import { IHotel } from '../../types/hotel';
import { getHotels } from '../../api/hotel/hotel-api';

const HomePage = () => {
  const [data, setData] = useState<IHotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<{ city: any; image: any }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getHotels();
      const city = res.map((item: IHotel) => item.city);
      const citySet = new Set(city);
      const cityArray = Array.from(citySet);
      const cities = cityArray.map((city: any) => {
        return {
          city,
          image: (res.find((item: IHotel) => item.city === city) as IHotel | undefined)?.imageUrl,
        };
      });
      setCities(cities);

      setData(res);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <SlideImage />
      <ListCity cities={cities} />
      {loading ? <div>Loading...</div> : <ListHotel data={data} />}
    </>
  );
};
export default HomePage;
