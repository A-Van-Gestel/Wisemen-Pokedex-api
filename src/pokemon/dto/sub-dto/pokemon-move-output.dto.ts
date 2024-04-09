import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { MoveVersionGroupDetailOutputDto } from './move-version-detail-output.dto';

export class PokemonMoveOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty()
  public readonly move!: string;

  @ApiProperty({ type: [MoveVersionGroupDetailOutputDto] })
  @Type(() => MoveVersionGroupDetailOutputDto)
  public readonly version_group_details!: MoveVersionGroupDetailOutputDto[];
}
