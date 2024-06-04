import { http } from '../utils/axios_clients';

const domain = process.env.REACT_APP_API_URL;

export const getAllVoteHistory = async () => {
  try {
    const response = await http.get(`${domain}/vote-history/list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateVoteHistory = async (
  idRating: number,
  titleRating: string,
  contentRating: string,
  starRating: number,
  timeCreated: string,
) => {
  try {
    const response = await http.put(`${domain}/vote-history/update`, {
      idRating,
      titleRating,
      contentRating,
      starRating,
      timeCreated,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRating = async (idRating: number) => {
  try {
    const response = await http.delete(`${domain}/vote-history/delete/${idRating}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

