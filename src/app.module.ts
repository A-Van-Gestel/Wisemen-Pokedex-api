import { Module } from '@nestjs/common';

import { DbModule } from './db';
import { PokemonsModule } from './pokemon';
import { SearchModule } from './search';

@Module({
  imports: [DbModule, PokemonsModule, SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
