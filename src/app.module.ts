import { Module } from '@nestjs/common';

import { DbModule } from './db';
import { PokemonsModule } from './pokemon';

@Module({
  imports: [DbModule, PokemonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
