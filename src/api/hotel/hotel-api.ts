import axios from 'axios';

const domain = process.env.REACT_APP_API_URL;

export const getHotels = async () => {
  try {
    const response = await axios.get(`${domain}/list/hotels`);
    return response.data;
  } catch (error) {
    return [];
  }
};
