import { applyDecorators, Get, Type, Version } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { Error } from '../models';

export const FindOneResponse = <T extends Type>(
  path: string | string[],
  type: T,
  version: string,
  typeName: string,
  description: string = '',
) =>
  applyDecorators(
    ApiOperation({ summary: description }),
    ApiOkResponse({ description: 'Successful operation', type: type }),
    ApiNotFoundResponse({ description: `${typeName} not found`, type: Error }),
    Version(version),
    Get(path),
  );
