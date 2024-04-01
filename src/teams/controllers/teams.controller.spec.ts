import { Test, TestingModule } from '@nestjs/testing';

import { TeamsService } from '../services';
import { TeamsController } from './teams.controller';

describe('TeamController', () => {
  let controller: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
