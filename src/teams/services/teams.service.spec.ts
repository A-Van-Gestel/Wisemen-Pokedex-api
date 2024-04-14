import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateTeamInputDto,
  TeamOutputDto,
  UpdateTeamPokemonsInputDto,
} from '../dto';
import { Team } from '../entities';
import { TeamsService } from './teams.service';

describe('Teams Service Unit Test', () => {
  // Unit under test
  let teamsService: TeamsService;

  // Declare Mocks
  let teamsRepository: Repository<Team>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamsService,
        {
          provide: getRepositoryToken(Team),
          // Define all the methods that you use from the repo
          useValue: {
            find: jest.fn(),
            findOneBy: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    // Assign the unit under test
    teamsService = module.get<TeamsService>(TeamsService);

    // Retrieve mocks from the unit reference and assign
    teamsRepository = module.get<Repository<Team>>(getRepositoryToken(Team));
  });

  it('should be defined', () => {
    expect(teamsService).toBeDefined();
  });

  describe('findAllV1', () => {
    // Mock values
    const mockTeams: Team[] = [
      { id: BigInt(1), name: 'Team 1', pokemons: [1, 2, 3] },
      { id: BigInt(2), name: 'Team 2', pokemons: [1, 2, 3, 4, 5, 6] },
      { id: BigInt(3), name: 'Team 3', pokemons: [] },
    ];
    const expectedResult: TeamOutputDto[] = [
      { id: BigInt(1), name: 'Team 1', pokemons: [1, 2, 3] },
      { id: BigInt(2), name: 'Team 2', pokemons: [1, 2, 3, 4, 5, 6] },
      { id: BigInt(3), name: 'Team 3', pokemons: [] },
    ];

    it('should return an array of teams', async () => {
      // Arrange
      const findSpy = jest
        .spyOn(teamsRepository, 'find')
        .mockResolvedValue(mockTeams);

      // Act
      const result = await teamsService.findAllV1();

      // Assert
      expect(result).toEqual(expectedResult);
      expect(findSpy).toHaveBeenCalled();
    });
  });

  describe('createV1', () => {
    // Mock values
    const mockCreateTeamDto: CreateTeamInputDto = { name: 'New Team' };
    const mockCreatedTeam: Team = {
      id: BigInt(1),
      name: 'New Team',
      pokemons: [],
    };
    const expectedResult: TeamOutputDto = {
      id: BigInt(1),
      name: 'New Team',
      pokemons: [],
    };

    it('should create a new team', async () => {
      // Arrange
      const createSpy = jest
        .spyOn(teamsRepository, 'create')
        .mockReturnValue(mockCreatedTeam);
      const saveSpy = jest
        .spyOn(teamsRepository, 'save')
        .mockResolvedValue(mockCreatedTeam);

      // Act
      const result = await teamsService.createV1(mockCreateTeamDto);

      // Assert
      expect(result).toEqual(expectedResult);
      expect(createSpy).toHaveBeenCalled();
      expect(saveSpy).toHaveBeenCalled();
    });
  });

  describe('findOneV1', () => {
    // Mock values
    const id: bigint = BigInt(1);
    const mockTeam: Team = {
      id: BigInt(1),
      name: 'Team 1',
      pokemons: [1, 2, 3],
    };
    const expectedResult: TeamOutputDto = {
      id: BigInt(1),
      name: 'Team 1',
      pokemons: [1, 2, 3],
    };

    it('should return a team by id', async () => {
      // Arrange
      const findOnBySpy = jest
        .spyOn(teamsRepository, 'findOneBy')
        .mockResolvedValue(mockTeam);

      // Act
      const result = await teamsService.findOneV1(id);

      // Assert
      expect(result).toEqual(expectedResult);
      expect(findOnBySpy).toHaveBeenCalled();
    });

    it('should throw NotFoundException if team is not found', async () => {
      // Arrange
      jest.spyOn(teamsRepository, 'findOneBy').mockResolvedValue(null);

      // Act & Assert
      await expect(teamsService.findOneV1(id)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('setPokemonsOfTeamV1', () => {
    // Mock values
    const id: bigint = BigInt(1);
    const mockUpdateTeamPokemonsDto: UpdateTeamPokemonsInputDto = {
      pokemons: [1, 2, 3],
    };
    const mockTeam: Team = { id: id, name: 'Team 1', pokemons: [] };
    const mockUpdatedTeam: Team = {
      id: id,
      name: 'Team 1',
      pokemons: [1, 2, 3],
    };
    const expectedResult: TeamOutputDto = {
      id: id,
      name: 'Team 1',
      pokemons: [1, 2, 3],
    };

    it('should update pokemons of an existing team', async () => {
      // Arrange
      const findOneBySpy = jest
        .spyOn(teamsRepository, 'findOneBy')
        .mockResolvedValue(mockTeam);
      const saveSpy = jest
        .spyOn(teamsRepository, 'save')
        .mockResolvedValue(mockUpdatedTeam);

      // Act
      const result = await teamsService.setPokemonsOfTeamV1(
        id,
        mockUpdateTeamPokemonsDto,
      );

      // Assert
      expect(result).toEqual(expectedResult);
      expect(findOneBySpy).toHaveBeenCalled();
      expect(saveSpy).toHaveBeenCalled();
    });

    it('should throw NotFoundException if team does not exist', async () => {
      // Arrange
      const findOneBySpy = jest
        .spyOn(teamsRepository, 'findOneBy')
        .mockResolvedValue(null);

      // Act & Assert
      await expect(
        teamsService.setPokemonsOfTeamV1(id, mockUpdateTeamPokemonsDto),
      ).rejects.toThrow(NotFoundException);
      expect(findOneBySpy).toHaveBeenCalled();
    });
  });
});
