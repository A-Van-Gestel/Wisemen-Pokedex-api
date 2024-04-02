import { AbstractEntity } from '@shared';
import {
  ChildEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  TableInheritance,
} from 'typeorm';

import {
  PokemonAbility,
  PokemonMove,
  PokemonStat,
  PokemonType,
  Sprite,
} from './sub-entities';

@Entity({ name: 'pokemon' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Pokemon extends AbstractEntity<Pokemon> {
  @Column({ type: 'text' })
  name!: string;

  @OneToOne(() => Sprite, { eager: true, cascade: true })
  @JoinColumn()
  sprites?: {
    front_default: string;
  };

  @OneToMany(() => PokemonType, (type) => type.pokemon, {
    eager: true,
    cascade: true,
  })
  types?: PokemonType[];
}

// In same file as Pokemon base entity to prevent circular dependencies.
@ChildEntity()
export class PokemonDetails extends Pokemon {
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

  @ManyToMany(() => PokemonMove, { cascade: true })
  @JoinTable()
  moves?: PokemonMove[];

  @OneToMany(() => PokemonStat, (stat) => stat.pokemon, { cascade: true })
  stats?: PokemonStat[];

  @OneToMany(() => PokemonAbility, (ability) => ability.pokemon, {
    cascade: true,
  })
  abilities?: PokemonAbility[];

  constructor(entity: Partial<PokemonDetails>) {
    super(entity);
    Object.assign(this, entity);
  }
}
