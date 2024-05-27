export interface IRoom {
  roomID: String;
  images: string[];
  nameRoom: string;
  typeRoom: string;
  description: string;
  price: number;
  status: 'empty' | 'full';
}
