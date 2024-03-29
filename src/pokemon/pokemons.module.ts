import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonsController } from './controllers';
import { PokemonDetails } from './entities';
import { PokemonsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonDetails])],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
