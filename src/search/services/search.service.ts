import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToInstance } from 'class-transformer';
import { ILike, Repository } from 'typeorm';

import { Pokemon } from '../../pokemon';
import { SearchInputModel } from '../models';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  public async search(searchInputModel: SearchInputModel): Promise<Pokemon[]> {
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
      take: searchInputModel.limit,
    });
    return results.map((result) => instanceToInstance(new Pokemon(result)));
  }
}
