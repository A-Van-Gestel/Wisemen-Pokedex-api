import { Controller, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  FindOneResponse,
  FindResponse,
  Sorting,
  SortingParams,
  SortQuery,
} from '../../shared';
import { Pokemon, PokemonDetails } from '../entities';
import { PokemonSortingFields } from '../enums';
import { PokemonsService } from '../services';

@ApiTags('Pokemons')
@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @SortQuery(PokemonSortingFields, 'Sort the pokemons')
  @FindResponse('', [Pokemon], '1', 'Get all pokemons')
  findAllV1(
    @SortingParams(PokemonSortingFields) sort?: Sorting,
  ): Promise<Pokemon[]> {
    return this.pokemonService.findAllV1(sort);
  }

  @FindOneResponse(':id', PokemonDetails, '1', 'Pokemon', 'Get a pokemon by id')
  findOneV1(@Param('id') id: number): Promise<PokemonDetails> {
    return this.pokemonService.findOneV1(id);
  }

  @SortQuery(PokemonSortingFields, 'Sort the pokemons')
  @FindResponse('', [Pokemon], '2', 'Get all pokemons paginated')
  findAllV2(
    @SortingParams(PokemonSortingFields) sort?: Sorting,
  ): Promise<Pokemon[]> {
    // TODO: Add pagination
    return this.pokemonService.findAllV2(sort);
  }
}
