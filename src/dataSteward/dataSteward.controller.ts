import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DataStewardPersistenceService } from './dataStewardPersistence.service';
import { Movie } from './dataTypes';
import { Guid } from 'guid-typescript';

@Controller()
export class DataStewardController {
  constructor(private database: DataStewardPersistenceService) {}

  @MessagePattern({ channel: 'createMovie' })
  createMovie(movie: Movie): string {
    let guid = Guid.raw();
    this.database.createMovie(guid, movie);
    return guid;
  }

  @MessagePattern({ channel: 'getMovieById' })
  getMovie(id: string): Movie {
    return this.database.getMovie(id);
  }
}
