import axios from 'axios';
import { VnpayRequest } from './request/vnpay.request';
import { MomoResponse, VnpayResponse, ZaloResponse } from './response/vnpay.response';

const domain = process.env.REACT_APP_API_URL;
export class VnpayAPI {
  static async vnpayPost(params: VnpayRequest): Promise<VnpayResponse> {
    const url: string = `${domain}/vnpay/post`;
    try {
      const response = await axios.post(url, params);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async momoPost(params: VnpayRequest): Promise<MomoResponse> {
    const url: string = `${domain}/momo/post`;
    try {
      const response = await axios.post(url, params);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

    static async zaloPost(params: VnpayRequest): Promise<ZaloResponse> {
    const url: string = `${domain}/zalopay/post`;
    try {
      const response = await axios.post(url, params);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
