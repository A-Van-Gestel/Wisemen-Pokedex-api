import { applyDecorators, Get, Type, Version } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

export const FindResponse = <T extends Type>(
  path: string | string[],
  type: [T],
  version: string,
  description: string = '',
) =>
  applyDecorators(
    ApiOperation({ summary: description }),
    ApiOkResponse({ description: 'Successful operation', type: type }),
    Version(version),
    Get(path),
  );
