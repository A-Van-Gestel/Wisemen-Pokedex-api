import { ApiHideProperty } from '@nestjs/swagger';
import { AbstractEntity } from '@shared';
import { Column, Entity, ManyToOne } from 'typeorm';

import { PokemonMove } from './pokemon-move.entity';

@Entity({ name: 'move-version-group-detail' })
export class MoveVersionGroupDetail extends AbstractEntity<MoveVersionGroupDetail> {
  @Column({ type: 'text' })
  move_learn_method!: string;

  @Column({ type: 'text' })
  version_group!: string;

  @Column({ type: 'int' })
  level_learned_at!: number;

  @ApiHideProperty()
  @ManyToOne(() => PokemonMove, (move) => move.version_group_details)
  move?: PokemonMove;
}
