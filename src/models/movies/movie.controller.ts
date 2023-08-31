import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Movie> {
    const movie = this.movieService.findOne(id);
    if (!movie) {
      throw new NotFoundException('Filme Inexistente');
    } else {
      return movie;
    }
  }

  @Post()
  async create(@Body() movie: Movie): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const movie = this.findOne(id);
    if (movie) {
      return this.movieService.delete(id);
    } else {
      throw new NotFoundException('Filme Inexistente');
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() movie: Movie): Promise<Movie> {
    const _movie = this.movieService.findOne(id);
    if (_movie) {
      return this.movieService.update(id, movie);
    } else {
      throw new NotFoundException('Filme Inexistente');
    }
  }
}
