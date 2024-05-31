import axios from 'axios';

const domain = process.env.REACT_APP_API_URL;

export const getAllBookedHistory = async () => {
  try {
    const response = await axios.get(`${domain}/booking-history/list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatusOfBooking = async (roomNumber: number, statusOfBooking: string) => {
  try {
    const response = await axios.put(`${domain}/booking-history/updateStatus`, { roomNumber, statusOfBooking });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooking = async (idBooking: number) => {
  try {
    const response = await axios.delete(`${domain}/booking-history/delete/${idBooking}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
