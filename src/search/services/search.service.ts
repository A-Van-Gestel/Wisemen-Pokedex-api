import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { ILike, Repository } from 'typeorm';

import { Pokemon, PokemonOutputDto } from '../../pokemon';
import { SearchInputModel } from '../models';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  public async searchV1(
    searchInputModel: SearchInputModel,
  ): Promise<PokemonOutputDto[]> {
    const searchQuery = `%${searchInputModel.query}%`;

    const filters: Partial<Record<keyof Pokemon, any>>[] = [
      { name: ILike(searchQuery) },
      {
        types: {
          type: ILike(searchQuery),
        },
      },
    ];

    const results = await this.pokemonRepository.find({
      where: filters,
      take: searchInputModel.limit || 0, // defaults to 0 (take all)
    });
    return plainToInstance(PokemonOutputDto, results);
  }
}
