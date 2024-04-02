import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getOrder, Sorting } from '@shared';
import { Repository } from 'typeorm';

import { Pokemon, PokemonDetails } from '../entities';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(PokemonDetails)
    private readonly pokemonDetailsRepository: Repository<PokemonDetails>,
  ) {}

  findAllV1(sort: Sorting): Promise<Pokemon[]> {
    return this.pokemonRepository.find({
      order: getOrder(sort),
    });
  }

  findOneV1(id: bigint): Promise<PokemonDetails> {
    return this.pokemonDetailsRepository.findOne({
      where: { id: id },
      relations: {
        types: true,
        moves: { version_group_details: true },
        stats: true,
        abilities: true,
      },
    });
  }

  findAllV2(sort: Sorting): Promise<Pokemon[]> {
    return this.pokemonRepository.find({
      order: getOrder(sort),
    });
  }
}
