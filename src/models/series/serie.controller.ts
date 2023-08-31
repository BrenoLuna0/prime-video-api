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
import { SerieService } from './serie.service';
import { Serie } from './serie.entinty';

@Controller('series')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Get()
  async findAll(): Promise<Serie[]> {
    return this.serieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Serie> {
    const serie = this.serieService.findOne(id);
    if (!serie) {
      throw new NotFoundException('Serie Inexistente');
    } else {
      return serie;
    }
  }

  @Post()
  async create(@Body() serie: Serie): Promise<Serie> {
    return this.serieService.create(serie);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const serie = this.findOne(id);
    if (serie) {
      return this.serieService.delete(id);
    } else {
      throw new NotFoundException('Serie Inexistente');
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() serie: Serie): Promise<Serie> {
    const _serie = this.serieService.findOne(id);
    if (_serie) {
      return this.serieService.update(id, serie);
    } else {
      throw new NotFoundException('Serie Inexistente');
    }
  }
}
