import { Body, Controller, Param } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  CreateResponse,
  FindOneResponse,
  FindResponse,
  UpdateResponse,
} from '@shared';

import { CreateTeamDto, UpdateTeamPokemonsDto } from '../dto';
import { Team } from '../entities';
import { TeamsService } from '../services';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @FindResponse('', [Team], '1', 'Get all teams')
  findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @ApiBody({
    description: 'Team to create',
    type: CreateTeamDto,
  })
  @CreateResponse('', Team, '1', 'Create a new team')
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.create(createTeamDto);
  }

  @ApiParam({
    name: 'id',
    description: 'The id of the team to retrieve',
    required: true,
  })
  @FindOneResponse(':id', Team, '1', 'Team', 'Get team by id')
  findOne(@Param('id') id: bigint): Promise<Team | null> {
    return this.teamService.findOne(id);
  }

  @ApiBody({
    description: "Array of Pokemon id's to set",
    type: UpdateTeamPokemonsDto,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the team to set pokemons',
    required: true,
  })
  @UpdateResponse(':id', Team, '1', 'Team', 'Set Pokemons of a team')
  setPokemonsOfTeam(
    @Param('id') id: bigint,
    @Body() updateTeamPokemonsDto: UpdateTeamPokemonsDto,
  ): Promise<Team> {
    return this.teamService.setPokemonsOfTeam(id, updateTeamPokemonsDto);
  }
}
