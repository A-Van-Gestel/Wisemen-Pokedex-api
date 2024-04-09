import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamInputDto {
  @IsNotEmpty()
  @IsString()
  public name!: string;
}
