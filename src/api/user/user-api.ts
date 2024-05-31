import axios from 'axios';
import { ILogin, IUser } from '../../types/user';

const domain = process.env.REACT_APP_API_URL;

export const register = async (user: IUser) => {
  try {
    const response = await axios.post(`${domain}/auth/register`, user);
    return response.data;
  } catch (error) {
    if ((error as any).response && (error as any).response.data) {
      throw new Error((error as any).response.data.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};

export const login = async (data: ILogin) => {
  try {
    const response = await axios.post(`${domain}/auth/login`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
