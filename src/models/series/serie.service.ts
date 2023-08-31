import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from './serie.entinty';
import { Repository } from 'typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private serieDataSource: Repository<Serie>,
  ) {}

  async findAll(): Promise<Serie[]> {
    return this.serieDataSource.find();
  }

  async findOne(id: number): Promise<Serie> {
    return this.serieDataSource.findOne({ where: { id } });
  }

  async create(movie: Partial<Serie>): Promise<Serie> {
    const newMovie = this.serieDataSource.create(movie);
    return this.serieDataSource.save(newMovie);
  }

  async update(id: number, movie: Partial<Serie>): Promise<Serie> {
    await this.serieDataSource.update(id, movie);
    return this.serieDataSource.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.serieDataSource.delete(id);
  }
}
