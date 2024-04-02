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
  findAllV1(): Promise<Team[]> {
    return this.teamService.findAllV1();
  }

  @ApiBody({
    description: 'Team to create',
    type: CreateTeamDto,
  })
  @CreateResponse('', Team, '1', 'Create a new team')
  createV1(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.createV1(createTeamDto);
  }

  @ApiParam({
    name: 'id',
    description: 'The id of the team to retrieve',
    required: true,
  })
  @FindOneResponse(':id', Team, '1', 'Team', 'Get team by id')
  findOneV1(@Param('id') id: bigint): Promise<Team | null> {
    return this.teamService.findOneV1(id);
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
  setPokemonsOfTeamV1(
    @Param('id') id: bigint,
    @Body() updateTeamPokemonsDto: UpdateTeamPokemonsDto,
  ): Promise<Team> {
    return this.teamService.setPokemonsOfTeamV1(id, updateTeamPokemonsDto);
  }
}
