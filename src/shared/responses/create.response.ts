import {
  applyDecorators,
  HttpCode,
  HttpStatus,
  Post,
  Type,
  Version,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

export const CreateResponse = <T extends Type>(
  path: string | string[],
  type: T,
  version: string,
  description: string = '',
) =>
  applyDecorators(
    ApiOperation({ summary: description }),
    ApiCreatedResponse({ description: 'Successful operation', type: type }),
    HttpCode(HttpStatus.CREATED),
    Version(version),
    Post(path),
  );
