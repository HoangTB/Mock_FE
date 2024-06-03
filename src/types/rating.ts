import { Dayjs } from 'dayjs';

export interface IRating {
  idRating: number;
  contentRating: string;
  timeCreated: Dayjs;
}
