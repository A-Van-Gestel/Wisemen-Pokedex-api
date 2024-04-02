import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export const PaginateQuery = (typeName: string) =>
  applyDecorators(
    ApiQuery({
      name: 'limit',
      type: Number,
      required: false,
      description: `Limit the number of ${typeName}`,
    }),
    ApiQuery({
      name: 'offset',
      type: Number,
      required: false,
      description: `Offset the number of ${typeName}`,
    }),
  );
