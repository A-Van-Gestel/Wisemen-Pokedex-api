import { Controller, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindResponse } from '@shared';

import { PokemonOutputDto } from '../../pokemon';
import { SearchInputModel } from '../models';
import { SearchService } from '../services';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @FindResponse('', [PokemonOutputDto], '1', 'Search for pokemons')
  searchV1(
    @Query() searchInputModel: SearchInputModel,
  ): Promise<PokemonOutputDto[]> {
    return this.searchService.searchV1(searchInputModel);
  }
}
