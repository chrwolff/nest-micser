import { Injectable } from '@nestjs/common';
import { Movie } from './dataTypes';

@Injectable()
export class DataStewardPersistenceService {
  private movies = new Map<string, Movie>();

  createMovie(id: string, movie: Movie) {
    this.movies.set(id, movie);
  }

  getMovie(id: string): Movie {
    return this.movies.get(id);
  }
}
