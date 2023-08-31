import { Module } from '@nestjs/common';
import { SerieController } from './serie.controller';
import { SerieService } from './serie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serie } from './serie.entinty';

@Module({
  imports: [TypeOrmModule.forFeature([Serie])],
  controllers: [SerieController],
  providers: [SerieService],
})
export class SerieModule {}
