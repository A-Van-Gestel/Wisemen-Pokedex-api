import { ApiHideProperty } from '@nestjs/swagger';
import { AbstractEntity } from '@shared';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Pokemon } from '../pokemon.entity';

@Entity({ name: 'pokemon-type' })
export class PokemonType extends AbstractEntity<PokemonType> {
  @Column({ type: 'text' })
  type!: string;

  @Column({ type: 'int' })
  slot!: number;

  @ApiHideProperty()
  @ManyToOne(() => Pokemon, (pokemon) => pokemon.types)
  @JoinColumn()
  pokemon?: Pokemon;
}
