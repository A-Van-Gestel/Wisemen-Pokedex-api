import { Expose, Type } from 'class-transformer';

import { ToStringFromNameGroup } from '../decorators';

class NameGroup {
  @Expose()
  name: string;
}

class VersionGroupDetail {
  @Expose()
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  move_learn_method: string;

  @Expose()
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  version_group: string;

  @Expose()
  level_learned_at: number;
}

class Sprites {
  @Expose()
  front_default: string;

  @Expose()
  front_female?: string;

  @Expose()
  front_shiny: string;

  @Expose()
  front_shiny_female?: string;

  @Expose()
  back_default: string;

  @Expose()
  back_female?: string;

  @Expose()
  back_shiny: string;

  @Expose()
  back_shiny_female?: string;
}

class CurrentType {
  @Expose()
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  type: string;

  @Expose()
  slot: number;
}

class Move {
  @Expose()
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  move: string;

  @Expose()
  @Type(() => VersionGroupDetail)
  version_group_details: VersionGroupDetail[];
}

class Stat {
  @Expose({ name: 'stat' })
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  stat_name: string;

  @Expose()
  base_stat: number;

  @Expose()
  effort: number;
}

class Ability {
  @Expose()
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  ability: string;

  @Expose()
  is_hidden: boolean;

  @Expose()
  slot: number;
}

/**
 * Mapped against pokeapi pokemon data.
 */
export class JsonPokemonDetails {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  height: number;

  @Expose()
  weight: number;

  @Expose()
  order: number;

  @Expose()
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  species: string;

  @Expose({ name: 'forms' })
  @Type(() => NameGroup)
  @ToStringFromNameGroup()
  form: string;

  @Expose()
  @Type(() => Sprites)
  sprites: Sprites;

  @Expose()
  @Type(() => CurrentType)
  types: CurrentType[];

  @Expose()
  @Type(() => Move)
  moves: Move[];

  @Expose()
  @Type(() => Stat)
  stats: Stat[];

  @Expose()
  @Type(() => Ability)
  abilities: Ability[];
}
