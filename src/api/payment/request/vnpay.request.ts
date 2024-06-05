export interface VnpayRequest {
  users: UsersRequest;
  services: QuantityItem[];
  booking: BookingRequest;
  servicePrice: number;
  roomPrice: number;
  amount: number;
  bankCode: string;
}

export interface UsersRequest {
  username: string;
  gender: boolean;
  email: string;
  phoneNumber: string;
  identificationCard: string;
}

export interface QuantityItem {
  idService: number;
  quantity: number;
}
export interface BookingRequest {
  idRoom: number;
  startDateBooking: String;
  endDateBooking: String;
  numberOfPeoples: number;
}

// export interface BookingRequest {
//   fullName?: string;
//   email?: string;
//   gender?: string;
//   phone?: string;
//   cccd?: string;
//   hours?: number;
//   numberOfPeople?: number;
//   checkInDate?: string;
//   checkOutDate?: string;
//   idRoom?: number;
//   idServices?: number[];
//   roomPrice: number;
//   servicePrice: number;
// }

// export interface paymentRequest {
//   dateTimePayment?: Date;
//   paymentMethod?: string;
//   totalPaymentAmount?: number;
//   booking?: bookingRequest;
// }
