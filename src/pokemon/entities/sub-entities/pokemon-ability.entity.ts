import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PokemonDetails } from '../pokemon-details.entity';

@Entity({ name: 'pokemon-ability' })
export class PokemonAbility {
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  ability: string;

  @Column({ type: 'boolean' })
  is_hidden: boolean;

  @Column({ type: 'int' })
  slot: number;

  @ApiHideProperty()
  @ManyToOne(() => PokemonDetails, (pokemon) => pokemon.abilities)
  pokemon: PokemonDetails;
}
