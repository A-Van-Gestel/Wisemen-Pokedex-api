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

import { PokemonDetailsOutputDto, PokemonOutputDto } from '../dto';
import { PokemonSortingFields } from '../enums';
import { PokemonsService } from '../services';

@ApiTags('Pokemons')
@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @SortQuery(PokemonSortingFields, 'Sort the pokemons')
  @FindResponse('', [PokemonOutputDto], '1', 'Get all pokemons')
  findAllV1(
    @SortingParams(PokemonSortingFields) sort?: Sorting,
  ): Promise<PokemonOutputDto[]> {
    return this.pokemonService.findAllV1(sort);
  }

  @ApiParam({
    name: 'id',
    description: 'The id of the pokemon to retrieve',
    required: true,
  })
  @FindOneResponse(
    ':id',
    PokemonDetailsOutputDto,
    '1',
    'Pokemon',
    'Get a pokemon by id',
  )
  findOneV1(@Param('id') id: bigint): Promise<PokemonDetailsOutputDto> {
    return this.pokemonService.findOneV1(id);
  }

  @PaginateQuery('pokemons')
  @SortQuery(PokemonSortingFields, 'Sort the pokemons')
  @FindPaginatedResponse(
    '',
    PokemonOutputDto,
    '2',
    'Get all pokemons paginated',
  )
  findAllV2(
    @SortingParams(PokemonSortingFields) sort?: Sorting,
    @PaginationParams() pagination?: Pagination,
  ): Promise<PaginatedResourceOutputModel<PokemonOutputDto>> {
    return this.pokemonService.findAllV2(sort, pagination);
  }
}
