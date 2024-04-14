import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class SpriteDetailsOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty()
  public readonly front_default!: string;

  @ApiPropertyOptional()
  public readonly front_female?: string;

  @ApiProperty()
  public readonly front_shiny!: string;

  @ApiPropertyOptional()
  public readonly front_shiny_female?: string;

  @ApiProperty()
  public readonly back_default!: string;

  @ApiPropertyOptional()
  public readonly back_female?: string;

  @ApiProperty()
  public readonly back_shiny!: string;

  @ApiPropertyOptional()
  public readonly back_shiny_female?: string;
}
