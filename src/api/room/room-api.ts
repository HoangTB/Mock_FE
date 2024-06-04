import axios from 'axios';
import { http } from '../utils/axios_clients';
const domain = process.env.REACT_APP_API_URL;

export const roomApi = {
  getRoomById: async (idRoom: string) => {
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
};
