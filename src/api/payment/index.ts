import axios from 'axios';
import { VnpayRequest } from './request/vnpay.request';
import { VnpayResponse } from './response/vnpay.response';

const domain = process.env.REACT_APP_API_URL;
export class VnpayAPI {
  static async vnpayPost(params: VnpayRequest): Promise<VnpayResponse> {
    const url: string = `${domain}/vnpay/post`;
    try {
      const response = await axios.post(url, params);
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // static async returnAPI(params){
  //   const url: string = `${domain}/vnpay/return`;
  //   try {
  //     const response = await axios.get(url, params);
  //     console.log(response);

  //   } catch (error) {
  //      console.log(error);
  //     throw error;
  //   }
  // }
}
