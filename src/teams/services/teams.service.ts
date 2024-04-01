import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTeamDto, UpdateTeamDto } from '../dto';
import { Team } from '../entities';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }

  findOne(id: number): Promise<Team | null> {
    return this.teamRepository.findOneByOrFail({ id: id });
  }

  setPokemonsOfTeam(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }
}
