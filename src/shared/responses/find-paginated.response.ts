import { applyDecorators, Get, Type, Version } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  getSchemaPath,
} from '@nestjs/swagger';

import { PaginatedResourceOutputModel } from '../models';

export const FindPaginatedResponse = <T extends Type<unknown>>(
  path: string | string[],
  type: T,
  version: string,
  description: string = '',
) =>
  applyDecorators(
    ApiExtraModels(PaginatedResourceOutputModel, type),
    ApiOperation({ summary: description }),
    ApiOkResponse({
      description: 'Successful operation',
      schema: {
        allOf: [
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(type) },
              },
            },
          },
          { $ref: getSchemaPath(PaginatedResourceOutputModel) },
        ],
      },
    }),
    Version(version),
    Get(path),
  );
