import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class MoveVersionGroupDetailOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty()
  public readonly move_learn_method!: string;

  @ApiProperty()
  public readonly version_group!: string;

  @ApiProperty()
  public readonly level_learned_at!: number;
}
