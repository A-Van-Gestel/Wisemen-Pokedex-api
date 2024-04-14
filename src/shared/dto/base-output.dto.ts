import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseOutputDto {
  @ApiProperty({ type: BigInt })
  public readonly id!: bigint;

  constructor(object: any) {
    Object.assign(this, object);
  }
}
