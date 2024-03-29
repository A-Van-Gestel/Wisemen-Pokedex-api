import { Controller, Get, Param, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PokemonDetails } from '../entities';
import { Pokemon } from '../models';
import { PokemonsService } from '../services';

@ApiTags('Pokemons')
@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pokemons' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: Pokemon,
    isArray: true,
  })
  @Version('1')
  findAllV1(): Promise<Pokemon[]> {
    return this.pokemonService.findAllV1();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pokemon by id' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: PokemonDetails,
  })
  @ApiResponse({ status: 404, description: 'Pokemon not found', type: Error })
  @Version('1')
  findOneV1(@Param('id') id: number): Promise<PokemonDetails> {
    return this.pokemonService.findOneV1(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pokemons paginated' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: Pokemon,
    isArray: true,
  })
  @Version('2')
  findAllV2(): Promise<Pokemon[]> {
    // TODO: Add pagination
    return this.pokemonService.findAllV2();
  }
}
