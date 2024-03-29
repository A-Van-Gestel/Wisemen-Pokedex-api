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
    return this.pokemonDetailsRepository.find() as Promise<Pokemon[]>;
  }

  findOneV1(id: number): Promise<PokemonDetails> {
    return this.pokemonDetailsRepository.findOneBy({ id: id });
  }

  findAllV2(): Promise<Pokemon[]> {
    return this.pokemonDetailsRepository.find() as Promise<Pokemon[]>;
  }
}
