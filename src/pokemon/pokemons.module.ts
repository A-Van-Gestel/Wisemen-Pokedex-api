import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonsController } from './controllers';
import { Pokemon, PokemonDetails } from './entities';
import { PokemonsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, PokemonDetails])],
  exports: [PokemonsService],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
