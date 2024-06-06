import axios from 'axios';
import { ILogin, IUser } from '../../types/user';
import { IResetPass } from '../../types/reset-pass';
import { IChangePass } from '../../types/change-pass';
import { http } from '../utils/axios_clients';
import { message } from 'antd';

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
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if ((error as any).response && (error as any).response.data) {
      if ((error as any).response.data.message === 'Invalid password') {
        throw new Error('Invalid password');
      }

      if ((error as any).response.data.message === 'Email not found') {
        throw new Error('Email not found');
      }
    } else {
      throw new Error('An unknown error occurred.');
    }
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

export const getProfile = async () => {
  try {
    const response = await http.get(`${domain}/edit-profile`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (data: any) => {
  try {
    const response = await http.put(`${domain}/edit-profile`, data);
    if (response.status === 200) {
      message.success('Profile updated successfully');
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkEmail = async (email: string) => {
  try {
    const response = await axios.post(`${domain}/check-email`, { email });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 409) {
      throw new Error(error.response.data.message || 'This email already exists in the database. Please login');
    }
    throw new Error('An error occurred while checking the email.');
  }
};
