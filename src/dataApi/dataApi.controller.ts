import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Get,
  Param,
} from '@nestjs/common';
import { DataApiService } from './dataApi.service';
import { Movie } from './dataTypes';

@Controller()
export class DataApiController {
  constructor(private readonly dataService: DataApiService) {}

  @Post('/createMovie')
  @UsePipes(ValidationPipe)
  async createMovie(@Body() movie: Movie): Promise<Movie> {
    return this.dataService.createMovie(movie);
  }

  @Get('/getMovie/:id')
  @UsePipes(ValidationPipe)
  async getMovie(@Param('id') id): Promise<Movie> {
    return this.dataService.getMovieById(id);
  }
}
