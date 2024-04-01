import { Sorting } from '../decorators';

export const getOrder = (sort: Sorting) =>
  sort ? { [sort.property]: sort.direction } : {};
