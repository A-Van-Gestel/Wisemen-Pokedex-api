import { ApiHideProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PokemonDetails } from '../pokemon-details.entity';

@Entity({ name: 'sprite' })
export class Sprite {
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  front_default: string;

  @Column({ type: 'text', nullable: true })
  front_female?: string;

  @Column({ type: 'text', nullable: true })
  front_shiny?: string;

  @Column({ type: 'text', nullable: true })
  front_shiny_female?: string;

  @Column({ type: 'text' })
  back_default: string;

  @Column({ type: 'text', nullable: true })
  back_female?: string;

  @Column({ type: 'text', nullable: true })
  back_shiny?: string;

  @Column({ type: 'text', nullable: true })
  back_shiny_female?: string;

  @ApiHideProperty()
  @OneToOne(() => PokemonDetails, (pokemon) => pokemon.sprites)
  @JoinColumn()
  pokemon: PokemonDetails;
}
