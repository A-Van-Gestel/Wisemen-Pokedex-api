import { ApiProperty } from '@nestjs/swagger';
import { BaseOutputDto } from '@shared';

export class TeamOutputDto extends BaseOutputDto {
  @ApiProperty()
  public readonly name!: string;

  @ApiProperty({ type: [Number] })
  public readonly pokemons!: number[];
}
