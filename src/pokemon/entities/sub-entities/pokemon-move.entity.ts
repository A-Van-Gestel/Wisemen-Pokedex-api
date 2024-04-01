import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../shared';
import { MoveVersionGroupDetail } from './move-version-detail.entity';

@Entity({ name: 'pokemon-move' })
export class PokemonMove extends AbstractEntity<PokemonMove> {
  @Column({ type: 'text' })
  move!: string;

  @OneToMany(() => MoveVersionGroupDetail, (detail) => detail.move)
  version_group_details!: MoveVersionGroupDetail[]; // TODO: Fix relationship seeding
}
