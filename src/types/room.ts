export interface IRoom {
  roomID: string;
  images: string[];
  nameRoom: string;
  typeRoom: string;
  description: string;
  price: number;
  status: 'empty' | 'full';
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
