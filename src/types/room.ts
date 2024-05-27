export interface IRoom {
  roomID: string;
  images: string[];
  nameRoom: string;
  typeRoom: string;
  description: string;
  price: number;
  status: 'empty' | 'full';
}

export interface IRoomBooking extends IRoom {
  bookingDate: string;
  fromDate: string;
  toDate: string;
  service: string[];
  total: number;
  bookingStatus: 'booking' | 'approve' | 'cancel';
}
