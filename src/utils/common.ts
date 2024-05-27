import { IGuestReview } from '../types/review';

export const chunkArray = (array: IGuestReview[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
