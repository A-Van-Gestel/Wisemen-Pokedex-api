import { ApiProperty } from '@nestjs/swagger';

export class Error {
  @ApiProperty()
  error: string;

  @ApiProperty()
  error_message: string;

  constructor(object: Partial<Error>) {
    Object.assign(this, object);
  }
}
