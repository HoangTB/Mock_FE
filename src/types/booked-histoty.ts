export interface IRoomBooking {
  startDateBooking: string;
  endDateBooking: string;
  paymentMethod: string;
  nameService: String;
  priceOfService: number;
  statusOfBooking: 'Pending' | 'Approved' | 'Cancelled';
  priceOfRoom: number;
  roomNumber: number;
  linkOfPhoto: String;
  dateBooking: String;
  idBooking: number;
  idUser: number;
}
