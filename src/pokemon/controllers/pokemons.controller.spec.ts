import { Test, TestingModule } from '@nestjs/testing';

import { PokemonsService } from '../services';
import { PokemonsController } from './pokemons.controller';

describe('PokemonController', () => {
  let controller: PokemonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [PokemonsService],
    }).compile();

    controller = module.get<PokemonsController>(PokemonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
