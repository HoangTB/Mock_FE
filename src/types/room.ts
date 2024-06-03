export interface IRoom {
  roomID: string;
  images: string[];
  typeRoom: string;
  numberOfBeds?: number;
  roomNumber?: number;
  maxNumberPeopleOfRoom?: number;
  descriptionOfRoom: string;
  priceOfRoom: number;
  available: boolean;
}

export interface IRoomBooking extends IRoom {
  bookingDate: string;
  fromDate: string;
  toDate: string;
  service: string[];
  total: number;
  bookingStatus: 'booking' | 'approve' | 'cancel';
}
