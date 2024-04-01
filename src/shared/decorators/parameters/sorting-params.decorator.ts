import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';

export interface Sorting {
  property: string;
  direction: string;
}

export const SortingParams = createParamDecorator(
  (paramsEnum, ctx: ExecutionContext): Sorting => {
    const req: Request = ctx.switchToHttp().getRequest();
    const sort = req.query.sort as string;
    if (!sort) return null;

    // Check if the valid params sent is an object.
    if (typeof paramsEnum != 'object')
      throw new BadRequestException('Invalid sort parameter');

    // Check if sort query param is in parameter enum.
    if (!Object.values(paramsEnum).includes(sort))
      throw new BadRequestException(`Invalid sort property: ${sort}`);

    // Extract the property name and direction.
    const [property, direction] = sort.split('-');

    return { property, direction };
  },
);
