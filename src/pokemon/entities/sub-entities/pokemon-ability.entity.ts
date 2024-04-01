import { ApiHideProperty } from '@nestjs/swagger';
import { AbstractEntity } from '@shared';
import { Column, Entity, ManyToOne } from 'typeorm';

import { PokemonDetails } from '../pokemon.entity';

@Entity({ name: 'pokemon-ability' })
export class PokemonAbility extends AbstractEntity<PokemonAbility> {
  @Column({ type: 'text' })
  ability!: string;

  @Column({ type: 'boolean' })
  is_hidden!: boolean;

  @Column({ type: 'int' })
  slot!: number;

  @ApiHideProperty()
  @ManyToOne(() => PokemonDetails, (pokemon) => pokemon.abilities)
  pokemon?: PokemonDetails;
}
