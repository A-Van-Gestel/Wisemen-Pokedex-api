import { ApiProperty } from '@nestjs/swagger';

export class PokemonTypeNameOutputDto {
  @ApiProperty()
  public readonly name!: string;

  constructor(name: string) {
    this.name = name;
  }
}
