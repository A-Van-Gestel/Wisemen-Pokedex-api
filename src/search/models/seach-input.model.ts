import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class SearchInputModel {
  @IsString()
  @ApiProperty({ description: 'Name or Type of the pokemon' })
  public query!: string;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @ApiPropertyOptional({ description: 'Limit the number of results' })
  public limit?: number;

  constructor(object: Partial<SearchInputModel>) {
    Object.assign(this, object);
  }
}
