import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class PokemonAbilityOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty()
  public readonly ability!: string;

  @ApiProperty()
  public readonly is_hidden!: boolean;

  @ApiProperty()
  public readonly slot!: number;
}
