import { Controller, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindResponse } from '@shared';

import { Pokemon } from '../../pokemon';
import { SearchInputModel } from '../models';
import { SearchService } from '../services';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @FindResponse('', [Pokemon], '1', 'Search for pokemons')
  search(@Query() searchInputModel: SearchInputModel) {
    return this.searchService.search(searchInputModel);
  }
}
