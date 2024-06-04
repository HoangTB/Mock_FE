export interface IRoom {
  idRoom: string;
  images: string[];
  typeRoom: string;
  numberOfBeds?: number;
  roomNumber?: number;
  maxNumberPeopleOfRoom?: number;
  descriptionOfRoom: string;
  priceOfRoom: number;
  available: boolean;
}

export interface IRoomDetail {
  roomID: string;
  nameHotel: string;
  address: string;
  images: string[];
  typeRoom: string;
  numberOfBeds?: number;
  roomNumber?: number;
  maxNumberPeopleOfRoom?: number;
  descriptionOfRoom: string;
  priceOfRoom: number;
  available: boolean;
  imageUrl: string;
}

export interface IRoomBooking extends IRoom {
  bookingDate: string;
  fromDate: string;
  toDate: string;
  service: string[];
  total: number;
  bookingStatus: 'booking' | 'approve' | 'cancel';
}

export interface IService {
  nameService: string;
  idService: number;
}

export interface IBookingRoom {
  room: IRoomDetail;
  // services: IService[];
  user?: IUserInfo;
}

export interface IUserInfo {
  userName: string;
  identificationCard: string;
  phoneNumber: string;
  gender: boolean;
  email: string;
}
