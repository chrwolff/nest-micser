import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Get,
  Param,
} from '@nestjs/common';
import { Movie } from './dataTypes';
import { MESSAGE_SERVICE } from 'src/microServiceConfig';

@Controller()
export class DataApiController {
  constructor(@Inject(MESSAGE_SERVICE) private client: ClientProxy) {}

  @Post('/createMovie')
  @UsePipes(ValidationPipe)
  async createMovie(@Body() movie: Movie): Promise<Movie> {
    let id = await this.client
      .send({ channel: 'createMovie' }, this.marshal(movie))
      .toPromise<string>();
    return { id, ...movie };
  }

  @Get('/getMovie/:id')
  @UsePipes(ValidationPipe)
  async getMovie(@Param('id') id): Promise<Movie> {
    let databaseMovie = await this.client
      .send({ channel: 'getMovieById' }, id)
      .toPromise<any>();
    return this.unmarshal(id, databaseMovie);
  }

  private marshal(movie: Movie): any {
    return {
      name: movie.canonicalName,
      year: movie.year,
    };
  }

  private unmarshal(id: string, databaseMovie: any): Movie {
    let movie: Movie = {
      id,
      canonicalName: databaseMovie.name,
      year: databaseMovie.year,
    };
    return movie;
  }
}
