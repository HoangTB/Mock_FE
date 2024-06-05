import axios from 'axios';
import { http } from '../utils/axios_clients';
const domain = process.env.REACT_APP_API_URL;

export const roomApi = {
  getRoomById: async (idRoom: string) => {
    console.log(idRoom);
    try {
      const response = await http.get(`${domain}/room/${idRoom}`);
      return response.data;
    } catch (error) {
      if ((error as any).response && (error as any).response.data) {
        throw new Error((error as any).response.data.message);
      } else {
        throw new Error('An unknown error occurred.');
      }
    }
  },

  getRoomList: async (idHotel: string, query: any) => {
    try {
      let queryString = '';
      if (query) {
        queryString = Object.keys(query)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
          .join('&');
      }

      const apiUrl = `${domain}/room/list/${idHotel}${queryString ? '?' + queryString : ''}`;

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      if ((error as any).response && (error as any).response.data) {
        throw new Error((error as any).response.data.message);
      } else {
        throw new Error('An unknown error occurred.');
      }
    }
  },
};
