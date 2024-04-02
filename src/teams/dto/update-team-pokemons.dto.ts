import { ArrayMaxSize, IsInt, IsNotEmpty, Min } from 'class-validator';

export class UpdateTeamPokemonsDto {
  @IsNotEmpty()
  @IsInt({ each: true })
  @ArrayMaxSize(6)
  @Min(1, { each: true })
  public pokemons!: number[];
}
