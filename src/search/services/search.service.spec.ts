import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pokemon } from '../../pokemon';
import { SearchService } from './search.service';

describe('Search Service Unit Test', () => {
  // Unit under test
  let searchService: SearchService;

  // Declare Mocks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pokemonRepository: Repository<Pokemon>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchService,
        {
          provide: getRepositoryToken(Pokemon),
          // Define all the methods that you use from the repo
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    // Assign the unit under test
    searchService = module.get<SearchService>(SearchService);

    // Retrieve mocks from the unit reference and assign
    pokemonRepository = module.get<Repository<Pokemon>>(
      getRepositoryToken(Pokemon),
    );
  });

  it('should be defined', () => {
    expect(searchService).toBeDefined();
  });
});
