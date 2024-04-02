import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  getOrder,
  getPaginationMetadata,
  PaginatedResourceOutputModel,
  Pagination,
  Sorting,
} from '@shared';
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
    return this.pokemonDetailsRepository.findOneOrFail({
      where: { id: id },
      relations: {
        types: true,
        moves: { version_group_details: true },
        stats: true,
        abilities: true,
      },
    });
  }

  async findAllV2(
    sort: Sorting,
    { limit, offset, path }: Pagination,
  ): Promise<PaginatedResourceOutputModel<Pokemon>> {
    const [results, count] = await this.pokemonRepository.findAndCount({
      order: getOrder(sort),
      take: limit,
      skip: offset,
    });

    const metadata = getPaginationMetadata(limit, offset, count, path);

    return new PaginatedResourceOutputModel<Pokemon>({
      data: results,
      metadata: metadata,
    });
  }
}
