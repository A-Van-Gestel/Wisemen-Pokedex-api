import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pokemon } from '../pokemon';
import { SearchController } from './controllers';
import { SearchService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
