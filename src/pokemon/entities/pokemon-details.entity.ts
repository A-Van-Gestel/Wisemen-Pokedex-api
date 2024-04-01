import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { AbstractEntity } from '../../shared';
import {
  PokemonAbility,
  PokemonMove,
  PokemonStat,
  PokemonType,
  Sprite,
} from './sub-entities';

@Entity({ name: 'pokemon-details' })
export class PokemonDetails extends AbstractEntity<PokemonDetails> {
  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'int' })
  height!: number;

  @Column({ type: 'int' })
  weight!: number;

  @Column({ type: 'int' })
  order!: number;

  @Column({ type: 'text' })
  species!: string;

  @Column({ type: 'text' })
  form!: string;

  @OneToOne(() => Sprite, { eager: true, cascade: true })
  @JoinColumn()
  sprites?: Sprite;

  @OneToMany(() => PokemonType, (type) => type.pokemon, { cascade: true })
  types?: PokemonType[];

  @ManyToMany(() => PokemonMove, { cascade: true })
  @JoinTable()
  moves?: PokemonMove[];

  @OneToMany(() => PokemonStat, (stat) => stat.pokemon, { cascade: true })
  stats?: PokemonStat[];

  @OneToMany(() => PokemonAbility, (ability) => ability.pokemon, {
    cascade: true,
  })
  abilities?: PokemonAbility[];
}
