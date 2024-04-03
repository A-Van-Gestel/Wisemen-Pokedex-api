import { Injectable } from '@nestjs/common';
import { JsonPokemonDetailsDto } from '@shared';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { Command, Positional } from 'nestjs-command';

import { PokemonsService } from '../pokemon';

@Injectable()
export class ImportPokemonCommand {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Command({
    command: 'import:pokemon <identifier>',
    describe: 'Imports a pokemon from the external pokeapi API',
  })
  async execute(
    @Positional({
      name: 'identifier',
      describe: 'The external ID or name of the Pokémon',
      type: 'string',
    })
    identifier: string,
  ) {
    try {
      // Make a request to the external API to fetch the Pokémon data
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${identifier}`,
      );

      // Return early if not Pokémon is found.
      if (response.data == 'Not Found') {
        console.log(`No pokemon found for: ${identifier}`);
        return;
      }

      // Handle the response and import the Pokémon data into your application
      const pokemonData = plainToInstance(JsonPokemonDetailsDto, response.data);
      console.log(`Found Pokémon: ${pokemonData.name} (ID: ${pokemonData.id})`);

      const importedPokemon =
        await this.pokemonService.importPokemonV1(pokemonData);

      console.log(
        `Successfully Imported Pokémon: ${importedPokemon.name} (ID: ${importedPokemon.id})`,
      );
    } catch (error) {
      console.error('Error importing Pokémon:', error);
    }
  }
}
