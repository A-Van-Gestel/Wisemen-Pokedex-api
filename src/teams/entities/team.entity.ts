import { AbstractEntity } from '@shared';
import { Column, Entity } from 'typeorm';

@Entity('teams')
export class Team extends AbstractEntity<Team> {
  @Column({ type: 'text' })
  name: string;

  @Column('int', { array: true })
  pokemons: number[];
}
