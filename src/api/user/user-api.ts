import axios from 'axios';
import { ILogin, IUser } from '../../types/user';
import { IResetPass } from '../../types/reset-pass';
import { IChangePass } from '../../types/change-pass';

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

export const reset = async (data: IResetPass) => {
  try {
    const response = await axios.post(`${domain}/auth/forgot`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (data: IChangePass) => {
  try {
    const response = await axios.post(`${domain}/auth/change-password`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
