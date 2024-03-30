import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db';
import { PokemonsModule } from './pokemon';

@Module({
  imports: [DbModule, PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
