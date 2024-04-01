import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../../shared';

@Entity({ name: 'sprite' })
export class Sprite extends AbstractEntity<Sprite> {
  @Column({ type: 'text' })
  front_default!: string;

  @Column({ type: 'text', nullable: true })
  front_female?: string;

  @Column({ type: 'text' })
  front_shiny!: string;

  @Column({ type: 'text', nullable: true })
  front_shiny_female?: string;

  @Column({ type: 'text' })
  back_default!: string;

  @Column({ type: 'text', nullable: true })
  back_female?: string;

  @Column({ type: 'text' })
  back_shiny!: string;

  @Column({ type: 'text', nullable: true })
  back_shiny_female?: string;
}
