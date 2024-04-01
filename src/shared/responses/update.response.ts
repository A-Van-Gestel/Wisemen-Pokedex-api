import {
  applyDecorators,
  HttpCode,
  HttpStatus,
  Post,
  Type,
  Version,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export const UpdateResponse = <T extends Type>(
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
    HttpCode(HttpStatus.OK),
    Version(version),
    Post(path),
  );
