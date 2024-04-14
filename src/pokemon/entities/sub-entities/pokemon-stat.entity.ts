import { ApiHideProperty } from '@nestjs/swagger';
import { AbstractEntity } from '@shared';
import { Column, Entity, ManyToOne } from 'typeorm';

import { PokemonDetails } from '../pokemon.entity';

@Entity({ name: 'pokemon-stat' })
export class PokemonStat extends AbstractEntity<PokemonStat> {
  @Column({ type: 'text' })
  stat!: string;

  @Column({ type: 'int' })
  base_stat!: number;

  @Column({ type: 'int' })
  effort!: number;

  @ApiHideProperty()
  @ManyToOne(() => PokemonDetails, (pokemon) => pokemon.stats)
  pokemon?: PokemonDetails;
}
