import { allLaptops } from '../all-laptops-data';

export const getLaptopsForPage = (pageNumber: number) => {
  const laptopsPerPage = 8;
  const startIndex = (pageNumber - 1) * laptopsPerPage;
  const endIndex = startIndex + laptopsPerPage;
  return allLaptops.slice(startIndex, endIndex);
};

export const getTotalPages = () => {
  return Math.ceil(allLaptops.length / 8);
};
