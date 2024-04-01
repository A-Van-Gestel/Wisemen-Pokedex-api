import { Body, Controller, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateResponse,
  FindOneResponse,
  FindResponse,
  UpdateResponse,
} from '@shared';

import { CreateTeamDto, UpdateTeamDto } from '../dto';
import { Team } from '../entities';
import { TeamsService } from '../services';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @FindResponse('', [Team], '1', 'Get all teams')
  findAll() {
    return this.teamService.findAll();
  }

  @CreateResponse('', Team, '1', 'Create a new team')
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @FindOneResponse(':id', Team, '1', 'Team', 'Get team by id')
  findOne(@Param('id') id: number) {
    return this.teamService.findOne(id);
  }

  @UpdateResponse(':id', Team, '1', 'Team', 'Set Pokemons of a team')
  setPokemonsOfTeam(
    @Param('id') id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    return this.teamService.setPokemonsOfTeam(id, updateTeamDto);
  }
}
