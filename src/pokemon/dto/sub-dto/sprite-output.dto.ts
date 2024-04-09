import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class SpriteOutputDto {
  @ApiHideProperty()
  @Exclude()
  public readonly id: bigint;

  @ApiProperty()
  public readonly front_default!: string;

  @ApiHideProperty()
  @Exclude()
  public readonly front_female?: string;

  @ApiHideProperty()
  @Exclude()
  public readonly front_shiny!: string;

  @ApiHideProperty()
  @Exclude()
  public readonly front_shiny_female?: string;

  @ApiHideProperty()
  @Exclude()
  public readonly back_default!: string;

  @ApiHideProperty()
  @Exclude()
  public readonly back_female?: string;

  @ApiHideProperty()
  @Exclude()
  public readonly back_shiny!: string;

  @ApiHideProperty()
  @Exclude()
  public readonly back_shiny_female?: string;
}
