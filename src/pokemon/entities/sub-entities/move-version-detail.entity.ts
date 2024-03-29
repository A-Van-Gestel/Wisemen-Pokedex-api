import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PokemonMove } from './pokemon-move.entity';

@Entity({ name: 'move-version-group-detail' })
export class MoveVersionGroupDetail {
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  move_learn_method: string;

  @Column({ type: 'text' })
  version_group: string;

  @Column({ type: 'int' })
  level_learned_at: number;

  @ManyToOne(() => PokemonMove, (move) => move.version_group_details)
  move: PokemonMove;
}
