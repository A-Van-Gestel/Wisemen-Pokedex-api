import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonDetails, PokemonsModule } from './pokemon';
import {
  MoveVersionGroupDetail,
  PokemonAbility,
  PokemonMove,
  PokemonStat,
  PokemonType,
  Sprite,
} from './pokemon/entities/sub-entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        PokemonDetails,
        Sprite,
        PokemonType,
        PokemonMove,
        MoveVersionGroupDetail,
        PokemonStat,
        PokemonAbility,
      ],
      synchronize: true, // Only for development, should be set to false in production
    }),
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
