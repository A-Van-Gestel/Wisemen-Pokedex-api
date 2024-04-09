import { ApiProperty } from '@nestjs/swagger';
import { BaseOutputDto } from '@shared';
import { Type } from 'class-transformer';

import {
  PokemonAbilityOutputDto,
  PokemonMoveOutputDto,
  PokemonStatOutputDto,
  PokemonTypeDetailsOutputDto,
  SpriteDetailsOutputDto,
} from './sub-dto';

export class PokemonDetailsOutputDto extends BaseOutputDto {
  @ApiProperty()
  public readonly name!: string;

  @ApiProperty()
  public readonly height!: number;

  @ApiProperty()
  public readonly weight!: number;

  @ApiProperty()
  public readonly order!: number;

  @ApiProperty()
  public readonly species!: string;

  @ApiProperty()
  public readonly form!: string;

  @ApiProperty({ type: SpriteDetailsOutputDto })
  @Type(() => SpriteDetailsOutputDto)
  public readonly sprites!: SpriteDetailsOutputDto;

  @ApiProperty({ type: [PokemonTypeDetailsOutputDto] })
  @Type(() => PokemonTypeDetailsOutputDto)
  public readonly types!: PokemonTypeDetailsOutputDto[];

  @ApiProperty({ type: [PokemonMoveOutputDto] })
  @Type(() => PokemonMoveOutputDto)
  public readonly moves!: PokemonMoveOutputDto[];

  @ApiProperty({ type: [PokemonStatOutputDto] })
  @Type(() => PokemonStatOutputDto)
  public readonly stats!: PokemonStatOutputDto[];

  @ApiProperty({ type: [PokemonAbilityOutputDto] })
  @Type(() => PokemonAbilityOutputDto)
  public readonly abilities!: PokemonAbilityOutputDto[];
}
