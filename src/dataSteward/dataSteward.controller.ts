import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ClientRMQ } from '@nestjs/microservices/client/client-rmq';
import { DataStewardPersistenceService } from './dataStewardPersistence.service';
import { Movie } from './dataTypes';
import { Guid } from 'guid-typescript';
import { MESSAGE_SERVICE } from 'src/microServiceConfig';

@Controller()
export class DataStewardController {
  constructor(
    @Inject(MESSAGE_SERVICE) private client: ClientRMQ,
    private database: DataStewardPersistenceService,
  ) {}

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
