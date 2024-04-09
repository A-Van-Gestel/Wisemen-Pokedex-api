import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { BaseOutputDto } from '@shared';
import { Exclude, Type } from 'class-transformer';

import { PokemonTypeOutputDto, SpriteOutputDto } from './sub-dto';

export class PokemonOutputDto extends BaseOutputDto {
  @ApiProperty()
  public readonly name!: string;

  @ApiHideProperty()
  @Exclude()
  public readonly height!: number;

  @ApiHideProperty()
  @Exclude()
  public readonly weight!: number;

  @ApiHideProperty()
  @Exclude()
  public readonly order!: number;

  @ApiHideProperty()
  @Exclude()
  public readonly species!: string;

  @ApiHideProperty()
  @Exclude()
  public readonly form!: string;

  @ApiProperty({ type: SpriteOutputDto })
  @Type(() => SpriteOutputDto)
  public readonly sprites!: SpriteOutputDto;

  @ApiProperty({ type: [PokemonTypeOutputDto] })
  @Type(() => PokemonTypeOutputDto)
  public readonly types!: PokemonTypeOutputDto[];
}
