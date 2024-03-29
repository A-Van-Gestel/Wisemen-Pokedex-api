import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  PokemonAbility,
  PokemonMove,
  PokemonStat,
  PokemonType,
  Sprite,
} from './sub-entities';

@Entity({ name: 'pokemon-details' })
export class PokemonDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'int' })
  order: number;

  @Column({ type: 'text' })
  species: string;

  @Column({ type: 'text' })
  form: string;

  @OneToOne(() => Sprite, (sprite) => sprite.pokemon)
  sprites: Sprite;

  @OneToMany(() => PokemonType, (type) => type.pokemon)
  types: PokemonType[];

  @OneToMany(() => PokemonMove, (move) => move.pokemon)
  moves: PokemonMove[];

  @OneToMany(() => PokemonStat, (stat) => stat.pokemon)
  stats: PokemonStat[];

  @OneToMany(() => PokemonAbility, (ability) => ability.pokemon)
  abilities: PokemonAbility[];
}
