import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PokemonDetails } from '../entities';
import { Pokemon } from '../models';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(PokemonDetails)
    private readonly pokemonDetailsRepository: Repository<PokemonDetails>,
  ) {}

  findAllV1(): Promise<Pokemon[]> {
    return this.pokemonDetailsRepository.find() as Promise<Pokemon[]>; // TODO: Update query to return actual only pokemon data
  }

  findOneV1(id: number): Promise<PokemonDetails> {
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

  findAllV2(): Promise<Pokemon[]> {
    return this.pokemonDetailsRepository.find() as Promise<Pokemon[]>; // TODO: Update query to return actual only pokemon data
  }
}
