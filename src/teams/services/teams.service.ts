import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTeamDto, UpdateTeamPokemonsDto } from '../dto';
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

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create({
      ...createTeamDto,
      pokemons: [],
    });
    return this.teamRepository.save(team);
  }

  findOne(id: bigint): Promise<Team | null> {
    return this.teamRepository.findOneByOrFail({ id: id });
  }

  async setPokemonsOfTeam(
    id: bigint,
    updateTeamPokemonsDto: UpdateTeamPokemonsDto,
  ): Promise<Team> {
    const team = await this.teamRepository.findOneByOrFail({
      id: id,
    });
    team.pokemons = updateTeamPokemonsDto.pokemons;
    return this.teamRepository.save(team);
  }
}
