import { IRoomService } from './service-history';

export interface IRoomBooking {
  startDateBooking: string;
  endDateBooking: string;
  paymentMethod: string | null;
  services: IRoomService[];
  statusOfBooking: 'Pending' | 'Approved' | 'Cancelled';
  priceOfRoom: number;
  roomNumber: number;
  linkOfPhoto: string;
  dateBooking: string;
  idBooking: number;
  idUser: number;
  idHotel: number;
}
