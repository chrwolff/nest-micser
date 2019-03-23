import { Injectable } from '@nestjs/common';
import { Transport, Client } from '@nestjs/microservices';
import { ClientRMQ } from '@nestjs/microservices/client/client-rmq';
import { Movie } from './dataTypes';

@Injectable()
export class DataApiService {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://localhost:5672`],
      queue: 'movie_queue',
      queueOptions: { durable: false },
    },
  })
  private client: ClientRMQ;

  async createMovie(movie: Movie): Promise<Movie> {
    let id = await this.client
      .send({ channel: 'createMovie' }, this.marshal(movie))
      .toPromise<string>();
    return { id, ...movie };
  }

  async getMovieById(id: string): Promise<Movie> {
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
