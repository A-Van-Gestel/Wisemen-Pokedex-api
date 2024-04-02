import { ApiProperty } from '@nestjs/swagger';
import { PaginationMetadataOutputModel } from '@shared';

export class PaginatedResourceOutputModel<T> {
  data: T[];

  @ApiProperty({ type: () => PaginationMetadataOutputModel })
  metadata: PaginationMetadataOutputModel;

  constructor(object: PaginatedResourceOutputModel<T>) {
    Object.assign(this, object);
  }
}
