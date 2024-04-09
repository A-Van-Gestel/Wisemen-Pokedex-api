import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import {
  CreateTeamInputDto,
  TeamOutputDto,
  UpdateTeamPokemonsInputDto,
} from '../dto';
import { Team } from '../entities';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async findAllV1(): Promise<TeamOutputDto[]> {
    const results = await this.teamRepository.find();
    return plainToInstance(TeamOutputDto, results);
  }

  async createV1(createTeamDto: CreateTeamInputDto): Promise<TeamOutputDto> {
    const team = this.teamRepository.create({
      ...createTeamDto,
      pokemons: [],
    });

    const teamPersistent = await this.teamRepository.save(team);
    return plainToInstance(TeamOutputDto, teamPersistent);
  }

  async findOneV1(id: bigint): Promise<TeamOutputDto | null> {
    const result = await this.teamRepository.findOneByOrFail({ id: id });
    return plainToInstance(TeamOutputDto, result);
  }

  async setPokemonsOfTeamV1(
    id: bigint,
    updateTeamPokemonsDto: UpdateTeamPokemonsInputDto,
  ): Promise<TeamOutputDto> {
    const team = await this.teamRepository.findOneByOrFail({
      id: id,
    });
    team.pokemons = updateTeamPokemonsDto.pokemons;

    const teamPersistent = await this.teamRepository.save(team);
    return plainToInstance(TeamOutputDto, teamPersistent);
  }
}
