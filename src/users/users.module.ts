import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [],
  controllers: [],
  providers: [],
})
export class UsersModule {}
