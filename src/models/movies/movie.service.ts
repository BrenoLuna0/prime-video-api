import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
// import AppDataSource from '../../providers/database/postegres/provider.module';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieDataSource: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieDataSource.find();
  }

  async findOne(id: number): Promise<Movie> {
    return this.movieDataSource.findOne({ where: { id } });
  }

  async create(movie: Partial<Movie>): Promise<Movie> {
    const newMovie = this.movieDataSource.create(movie);
    return this.movieDataSource.save(newMovie);
  }

  async update(id: number, movie: Partial<Movie>): Promise<Movie> {
    await this.movieDataSource.update(id, movie);
    return this.movieDataSource.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.movieDataSource.delete(id);
  }
}
