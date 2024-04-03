import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { PokemonsModule } from '../pokemon';
import { ImportPokemonCommand } from './import-pokemon.command';

@Module({
  imports: [CommandModule, PokemonsModule],
  exports: [],
  controllers: [],
  providers: [ImportPokemonCommand],
})
export class CommandsModule {}
