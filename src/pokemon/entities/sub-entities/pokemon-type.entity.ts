import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PokemonDetails } from '../pokemon-details.entity';

@Entity({ name: 'pokemon-type' })
export class PokemonType {
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'int' })
  slot: number;

  @ApiHideProperty()
  @ManyToOne(() => PokemonDetails, (pokemon) => pokemon.types)
  pokemon: PokemonDetails;
}
