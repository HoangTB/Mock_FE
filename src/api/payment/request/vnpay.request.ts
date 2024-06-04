export interface VnpayRequest {
  users?: usersRequest;
  booking?: bookingRequest;
  amount?: number;
  bankCode?: string;
}

export interface usersRequest {
  fullName?: string;
  gender?: string;
  email?: string;
  phone?: string;
  cccd?: string;
}

export interface bookingRequest {
  idRoom: number;
  idServices: number[];
  roomPrice: number;
  servicePrice: number;
}

// export interface paymentRequest {
//   dateTimePayment?: Date;
//   paymentMethod?: string;
//   totalPaymentAmount?: number;
//   booking?: bookingRequest;
// }

// export interface bookingRequest {
//   room?: number;
//   users?: number;
//   startDateBooking?: Date;
//   endDateBooking?: Date;
//   numberOfPeoples?: number;
//   statusOfBooking?: boolean | string;
// }
