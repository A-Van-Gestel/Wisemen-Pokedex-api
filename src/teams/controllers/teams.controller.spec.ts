import { Test, TestingModule } from '@nestjs/testing';

import {
  CreateTeamInputDto,
  TeamOutputDto,
  UpdateTeamPokemonsInputDto,
} from '../dto';
import { TeamsService } from '../services';
import { TeamsController } from './teams.controller';

describe('Teams Controller Unit Test', () => {
  // Unit under test
  let teamsController: TeamsController;

  // Declare Mocks
  let teamsService: TeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [
        {
          provide: TeamsService,
          // Define all the methods that you use from the service
          useValue: {
            findAllV1: jest.fn(),
            findOneV1: jest.fn(),
            createV1: jest.fn(),
            setPokemonsOfTeamV1: jest.fn(),
          },
        },
      ],
    }).compile();

    teamsController = module.get<TeamsController>(TeamsController);
    teamsService = module.get<TeamsService>(TeamsService);
  });

  it('should be defined', () => {
    expect(teamsController).toBeDefined();
  });

  describe('findAllV1', () => {
    // Mock values
    const mockTeams: TeamOutputDto[] = [
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
      const findAllV1Spy = jest
        .spyOn(teamsService, 'findAllV1')
        .mockResolvedValue(mockTeams);

      // Act
      const result = await teamsService.findAllV1();

      // Assert
      expect(result).toEqual(expectedResult);
      expect(findAllV1Spy).toHaveBeenCalled();
    });
  });

  describe('createV1', () => {
    // Mock values
    const mockCreateTeamDto: CreateTeamInputDto = { name: 'New Team' };
    const mockCreatedTeam: TeamOutputDto = {
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
      const createV1Spy = jest
        .spyOn(teamsService, 'createV1')
        .mockReturnValue(Promise.resolve(mockCreatedTeam));

      // Act
      const result = await teamsController.createV1(mockCreateTeamDto);

      // Assert
      expect(result).toEqual(expectedResult);
      expect(createV1Spy).toHaveBeenCalled();
    });
  });

  describe('findOneV1', () => {
    // Mock values
    const id: bigint = BigInt(1);
    const mockTeam: TeamOutputDto = {
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
      const findOneV1Spy = jest
        .spyOn(teamsService, 'findOneV1')
        .mockResolvedValue(Promise.resolve(mockTeam));

      // Act
      const result = await teamsController.findOneV1(id);

      // Assert
      expect(result).toEqual(expectedResult);
      expect(findOneV1Spy).toHaveBeenCalled();
    });
  });

  describe('setPokemonsOfTeamV1', () => {
    // Mock values
    const id: bigint = BigInt(1);
    const mockUpdateTeamPokemonsDto: UpdateTeamPokemonsInputDto = {
      pokemons: [1, 2, 3],
    };
    const mockUpdatedTeam: TeamOutputDto = {
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
      const setPokemonsOfTeamV1Spy = jest
        .spyOn(teamsService, 'setPokemonsOfTeamV1')
        .mockResolvedValue(Promise.resolve(mockUpdatedTeam));

      // Act
      const result = await teamsController.setPokemonsOfTeamV1(
        id,
        mockUpdateTeamPokemonsDto,
      );

      // Assert
      expect(result).toEqual(expectedResult);
      expect(setPokemonsOfTeamV1Spy).toHaveBeenCalled();
    });
  });
});
