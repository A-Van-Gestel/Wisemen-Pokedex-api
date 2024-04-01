import { ApiProperty, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { PokemonType, Sprite } from '../entities/sub-entities';

export class Pokemon {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  name!: string;

  @ApiProperty({ type: PickType(Sprite, ['front_default']) })
  @Type(() => PickType(Sprite, ['front_default']))
  sprites!: {
    front_default: string;
  };

  @ApiProperty({ type: PokemonType, isArray: true })
  @Type(() => PokemonType)
  types!: PokemonType[];

  constructor(pokemon: Partial<Pokemon>) {
    Object.assign(this, pokemon);
  }
}
