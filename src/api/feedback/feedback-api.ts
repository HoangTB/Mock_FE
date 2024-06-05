import { http } from '../utils/axios_clients';

const domain = process.env.REACT_APP_API_URL;

export const createFeedBack = async (
  titleRating: string,
  contentRating: string,
  starRating: number,
  idHotel: number,
  timeCreated: string,
) => {
  try {
    const response = await http.post(`${domain}/feedback/create`, {
      titleRating,
      contentRating,
      starRating,
      idHotel,
      timeCreated,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
