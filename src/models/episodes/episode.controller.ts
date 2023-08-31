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
import { EpisodeService } from './episode.service';
import { Episode } from './episode.entity';

@Controller('episodes')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  async findAll(): Promise<Episode[]> {
    return this.episodeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Episode> {
    const episode = this.episodeService.findOne(id);
    if (!episode) {
      throw new NotFoundException('Episódio Inexistente');
    } else {
      return episode;
    }
  }

  @Post()
  async create(@Body() episode: Episode): Promise<Episode> {
    console.log('EPISODE', episode);
    return this.episodeService.create(episode);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const episode = this.findOne(id);
    if (episode) {
      return this.episodeService.delete(id);
    } else {
      throw new NotFoundException('Episódio Inexistente');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() episode: Episode,
  ): Promise<Episode> {
    const _episode = this.episodeService.findOne(id);
    if (_episode) {
      return this.episodeService.update(id, episode);
    } else {
      throw new NotFoundException('Episódio Inexistente');
    }
  }

  @Get('serie/:id')
  async findAllBySerie(@Param('id') id: number): Promise<Episode[]> {
    return this.episodeService.findAllFromSerie(id);
  }
}
