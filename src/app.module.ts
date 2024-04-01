import { Module } from '@nestjs/common';

import { DbModule } from './db';
import { PokemonsModule } from './pokemon';
import { SearchModule } from './search';
import { TeamsModule } from './teams';

@Module({
  imports: [DbModule, PokemonsModule, SearchModule, TeamsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
