import { Test, TestingModule } from '@nestjs/testing';

import { PokemonsService } from '../services';
import { PokemonsController } from './pokemons.controller';

describe('Pokemon Controller Unit Test', () => {
  // Unit under test
  let pokemonsController: PokemonsController;

  // Declare Mocks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pokemonsService: PokemonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [
        {
          provide: PokemonsService,
          // Define all the methods that you use from the service
          useValue: {
            findAllV1: jest.fn(),
            findOneV1: jest.fn(),
            findAllV2: jest.fn(),
          },
        },
      ],
    }).compile();

    // Assign the unit under test
    pokemonsController = module.get<PokemonsController>(PokemonsController);

    // Retrieve mocks from the unit reference and assign
    pokemonsService = module.get<PokemonsService>(PokemonsService);
  });

  it('should be defined', () => {
    expect(pokemonsController).toBeDefined();
  });
});
