import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Episode } from './episode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private episodeDataSource: Repository<Episode>,
  ) {}

  async findAll(): Promise<Episode[]> {
    return this.episodeDataSource.find();
  }

  async findOne(id: number): Promise<Episode> {
    return this.episodeDataSource.findOne({ where: { id } });
  }

  async create(episode: Partial<Episode>): Promise<Episode> {
    console.log('EPISODE', episode);
    const newEpisode = this.episodeDataSource.create(episode);
    return this.episodeDataSource.save(newEpisode);
  }

  async update(id: number, movie: Partial<Episode>): Promise<Episode> {
    await this.episodeDataSource.update(id, movie);
    return this.episodeDataSource.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.episodeDataSource.delete(id);
  }

  async findAllFromSerie(id: number): Promise<Episode[]> {
    return this.episodeDataSource.find({
      relations: { serie: true },
      where: { serie: { id } },
    });
  }
}
