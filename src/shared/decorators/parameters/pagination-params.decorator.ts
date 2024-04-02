import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface Pagination {
  limit: number;
  offset: number;
  path: string;
}

export const PaginationParams = createParamDecorator(
  (data, ctx: ExecutionContext): Pagination => {
    const req: Request = ctx.switchToHttp().getRequest();
    let limit = parseInt(req.query.limit as string) || 0;
    const offset = parseInt(req.query.offset as string) || 0;
    const path = req.route?.path || '';

    if (limit < 0) limit = 0;

    return { limit, offset, path };
  },
);
