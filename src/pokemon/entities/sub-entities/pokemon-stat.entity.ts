import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PokemonDetails } from '../pokemon-details.entity';

@Entity({ name: 'pokemon-stat' })
export class PokemonStat {
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  stat_name: string;

  @Column({ type: 'int' })
  base_stat: number;

  @Column({ type: 'int' })
  effort: number;

  @ApiHideProperty()
  @ManyToOne(() => PokemonDetails, (pokemon) => pokemon.stats)
  pokemon: PokemonDetails;
}
