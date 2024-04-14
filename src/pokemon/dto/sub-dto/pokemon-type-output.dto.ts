import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';

import { PokemonTypeNameOutputDto } from './pokemon-type-name-output.dto';

export class PokemonTypeOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty({ type: PokemonTypeNameOutputDto })
  @Type(() => PokemonTypeNameOutputDto)
  @Transform(({ obj }) => new PokemonTypeNameOutputDto(obj.type))
  public readonly type!: PokemonTypeNameOutputDto;

  @ApiProperty()
  public readonly slot!: number;
}
