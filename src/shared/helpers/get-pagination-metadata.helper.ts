import { PaginationMetadataOutputModel } from '../models';

export const getPaginationMetadata = (
  limit: number,
  offset: number,
  total: number,
  path: string,
): PaginationMetadataOutputModel => {
  if (limit == 0) limit = total;

  const next =
    offset + limit < total
      ? `${path}?limit=${limit}&offset=${offset + limit}`
      : null;

  const previous =
    offset - limit >= 0
      ? `${path}?limit=${limit}&offset=${Math.max(0, offset - limit)}`
      : null;

  const pages = Math.ceil(total / limit);
  const page = Math.floor(offset / limit) + 1;

  return new PaginationMetadataOutputModel({
    next: next,
    previous: previous,
    total: total,
    pages: pages,
    page: page,
  });
};
