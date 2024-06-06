export interface VnpayResponse {
  status?: string;
  message?: string;
  url?: string;
}

export interface MomoResponse {
  partnerCode?: string;
  orderId?: string;
  requestId?: string;
  amount?: number;
  responseTime?: number;
  message?: string;
  resultCode?: number;
  payUrl?: string;
  shortLink?: string;
}

export interface ZaloResponse {
  order_token?: string;
  order_url?: string;
  return_code?: number;
  return_message?: string;
  sub_return_code?: number;
  sub_return_message?: string;
  zp_trans_token?: string;
}

export interface BookingDataLocalResponse {
  cccd: string;
  checkInDate: string;
  checkOutDate: string;
  email: string;
  fullName: string;
  gender: string;
  hours: number;
  numberOfPeople: number;
  phone: string;
  sum: number;
}
