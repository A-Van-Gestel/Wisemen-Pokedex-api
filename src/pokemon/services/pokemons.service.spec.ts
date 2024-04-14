import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pokemon, PokemonDetails } from '../entities';
import { PokemonsService } from './pokemons.service';

describe('Pokemon Service Unit Test', () => {
  // Unit under test
  let pokemonsService: PokemonsService;

  // Declare Mocks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pokemonRepository: Repository<Pokemon>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pokemonDetailsRepository: Repository<PokemonDetails>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonsService,
        {
          provide: getRepositoryToken(Pokemon),
          // Define all the methods that you use from the repo
          useValue: {
            find: jest.fn(),
            findAndCount: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(PokemonDetails),
          // Define all the methods that you use from the repo
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    // Assign the unit under test
    pokemonsService = module.get<PokemonsService>(PokemonsService);

    // Retrieve mocks from the unit reference and assign
    pokemonRepository = module.get<Repository<Pokemon>>(
      getRepositoryToken(Pokemon),
    );
    pokemonDetailsRepository = module.get<Repository<PokemonDetails>>(
      getRepositoryToken(PokemonDetails),
    );
  });

  it('should be defined', () => {
    expect(pokemonsService).toBeDefined();
  });
});
