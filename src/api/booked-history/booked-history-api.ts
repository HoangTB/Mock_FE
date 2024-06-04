import axios from 'axios';
import { http } from '../utils/axios_clients';

const domain = process.env.REACT_APP_API_URL;

export const getAllBookedHistory = async () => {
  try {
    const response = await http.get(`${domain}/booking-history/list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getAllBookedHistory = async () => {
//   try {
//     const response = await http.get('/booking-history/list');
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateStatusOfBooking = async (idBooking: number, statusOfBooking: string) => {
  try {
    const response = await http.put(`${domain}/booking-history/updateStatus`, { idBooking, statusOfBooking });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooking = async (idBooking: number) => {
  try {
    const response = await http.delete(`${domain}/booking-history/delete/${idBooking}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
