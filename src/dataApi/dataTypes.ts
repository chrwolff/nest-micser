import { IsString, IsInt, IsOptional } from 'class-validator';

export class Movie {
  @IsString()
  @IsOptional()
  readonly id: string;

  @IsString()
  readonly canonicalName: string;

  @IsInt()
  readonly year: number;
}
