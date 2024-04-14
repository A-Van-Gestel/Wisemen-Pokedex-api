import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Error,
  getOrder,
  getPaginationMetadata,
  JsonPokemonDetailsDto,
  PaginatedResourceOutputModel,
  Pagination,
  Sorting,
} from '@shared';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { PokemonDetailsOutputDto, PokemonOutputDto } from '../dto';
import { Pokemon, PokemonDetails } from '../entities';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(PokemonDetails)
    private readonly pokemonDetailsRepository: Repository<PokemonDetails>,
  ) {}

  async findAllV1(sort: Sorting): Promise<PokemonOutputDto[]> {
    const results = await this.pokemonRepository.find({
      order: getOrder(sort),
    });

    return plainToInstance(PokemonOutputDto, results);
  }

  async findOneV1(id: bigint): Promise<PokemonDetailsOutputDto> {
    const result = await this.pokemonDetailsRepository.findOne({
      where: { id: id },
      relations: {
        types: true,
        moves: { version_group_details: true },
        stats: true,
        abilities: true,
      },
    });

    if (result == null)
      throw new NotFoundException(
        new Error({
          error: 'Pokemon not found',
          error_message: `No pokemon found with id: ${id}`,
        }),
      );

    return plainToInstance(PokemonDetailsOutputDto, result);
  }

  async findAllV2(
    sort: Sorting,
    { limit, offset, path }: Pagination,
  ): Promise<PaginatedResourceOutputModel<PokemonOutputDto>> {
    const [results, count] = await this.pokemonRepository.findAndCount({
      order: getOrder(sort),
      take: limit,
      skip: offset,
    });

    const metadata = getPaginationMetadata(limit, offset, count, path);

    return new PaginatedResourceOutputModel<PokemonOutputDto>({
      data: plainToInstance(PokemonOutputDto, results),
      metadata: metadata,
    });
  }

  importPokemonV1(
    jsonPokemonDetailsDto: JsonPokemonDetailsDto,
  ): Promise<PokemonDetails> {
    const importedPokemonDetails = this.pokemonDetailsRepository.create(
      jsonPokemonDetailsDto,
    );
    return this.pokemonDetailsRepository.save(importedPokemonDetails);
  }
}
