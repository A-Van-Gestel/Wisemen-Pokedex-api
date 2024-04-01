import { Test, TestingModule } from '@nestjs/testing';

import { SearchService } from '../services';
import { SearchController } from './search.controller';

describe('SearchController', () => {
  let controller: SearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchService],
    }).compile();

    controller = module.get<SearchController>(SearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
