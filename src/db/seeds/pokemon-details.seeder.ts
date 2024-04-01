import { plainToInstance } from 'class-transformer';
import * as fs from 'fs';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { PokemonDetails } from '../../pokemon';
import { JsonPokemonDetailsDto } from '../../shared';

// noinspection JSUnusedGlobalSymbols
export class PokemonDetailsSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    // Reset column ID's to start back from 1.
    await dataSource.query('TRUNCATE "pokemon" RESTART IDENTITY CASCADE;');

    // Get pokemonDetails repository.
    const repository = dataSource.getRepository(PokemonDetails);

    // Read pokemon JSON data.
    const jsonPath = path.join(__dirname, '../../../Seeds/pokemons.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf-8');

    // Map raw data into JsonPokemonDetails class to first clean the data, then into PokemonDetails entity.
    const pokemonDetailsArray = plainToInstance(
      JsonPokemonDetailsDto,
      JSON.parse(jsonData),
      { excludeExtraneousValues: true },
    ) as unknown as JsonPokemonDetailsDto[] as PokemonDetails[];

    await repository.save(pokemonDetailsArray);
  }
}
