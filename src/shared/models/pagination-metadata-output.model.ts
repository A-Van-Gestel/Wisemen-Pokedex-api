import { ApiProperty } from '@nestjs/swagger';

export class PaginationMetadataOutputModel {
  @ApiProperty()
  next: string;

  @ApiProperty()
  previous: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  pages: number;

  @ApiProperty()
  page: number;

  constructor(object: PaginationMetadataOutputModel) {
    Object.assign(this, object);
  }
}
