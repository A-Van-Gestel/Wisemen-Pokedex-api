import { Test, TestingModule } from '@nestjs/testing';

import { SearchService } from '../services';
import { SearchController } from './search.controller';

describe('Search Controller Unit Test', () => {
  // Unit under test
  let searchController: SearchController;

  // Declare Mocks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let searchService: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        {
          provide: SearchService,
          // Define all the methods that you use from the service
          useValue: {
            searchV1: jest.fn(),
          },
        },
      ],
    }).compile();

    // Assign the unit under test
    searchController = module.get<SearchController>(SearchController);

    // Retrieve mocks from the unit reference and assign
    searchService = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(searchController).toBeDefined();
  });
});
