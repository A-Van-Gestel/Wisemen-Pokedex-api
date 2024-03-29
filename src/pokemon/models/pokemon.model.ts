import { PokemonType } from '../entities/sub-entities';

export class Pokemon {
  id: number;

  name: string;

  sprites: {
    front_default: string;
  };

  types: PokemonType[];
}
