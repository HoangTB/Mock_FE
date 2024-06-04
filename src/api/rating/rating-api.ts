import axios from 'axios';

const domain = process.env.REACT_APP_API_URL;

export const ratingApi = {
  getRatingByIdHotel: async (idHotel: string) => {
    try {
      const apiUrl = `${domain}/rating/list/${idHotel}`;

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
