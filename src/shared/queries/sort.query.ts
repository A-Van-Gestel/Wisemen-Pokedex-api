import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type';

export const SortQuery = (sortEnum: SwaggerEnumType, description: string) =>
  applyDecorators(
    ApiQuery({
      name: 'sort',
      enum: sortEnum,
      required: false,
      description: description,
    }),
  );
