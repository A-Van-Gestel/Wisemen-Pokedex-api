import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class PokemonStatOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty()
  public readonly stat!: string;

  @ApiProperty()
  public readonly base_stat!: number;

  @ApiProperty()
  public readonly effort!: number;
}
