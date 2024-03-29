import { ApiHideProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PokemonDetails } from '../pokemon-details.entity';
import { MoveVersionGroupDetail } from './move-version-detail.entity';

@Entity({ name: 'pokemon-move' })
export class PokemonMove {
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  move: string;

  @ApiHideProperty()
  @ManyToOne(() => PokemonDetails, (pokemon) => pokemon.moves)
  pokemon: PokemonDetails;

  @OneToMany(() => MoveVersionGroupDetail, (detail) => detail.move)
  version_group_details: MoveVersionGroupDetail[];
}
