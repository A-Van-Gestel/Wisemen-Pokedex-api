import { Controller, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import {
  FindOneResponse,
  FindPaginatedResponse,
  FindResponse,
  PaginatedResourceOutputModel,
  PaginateQuery,
  Pagination,
  PaginationParams,
  Sorting,
  SortingParams,
  SortQuery,
} from '@shared';

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

  @ApiParam({
    name: 'id',
    description: 'The id of the pokemon to retrieve',
    required: true,
  })
  @FindOneResponse(':id', PokemonDetails, '1', 'Pokemon', 'Get a pokemon by id')
  findOneV1(@Param('id') id: bigint): Promise<PokemonDetails> {
    return this.pokemonService.findOneV1(id);
  }

  @PaginateQuery('pokemons')
  @SortQuery(PokemonSortingFields, 'Sort the pokemons')
  @FindPaginatedResponse('', Pokemon, '2', 'Get all pokemons paginated')
  findAllV2(
    @SortingParams(PokemonSortingFields) sort?: Sorting,
    @PaginationParams() pagination?: Pagination,
  ): Promise<PaginatedResourceOutputModel<Pokemon>> {
    return this.pokemonService.findAllV2(sort, pagination);
  }
}
