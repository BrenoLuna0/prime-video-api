import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Serie } from '../series/serie.entinty';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column({
    type: 'bytea',
  })
  video: any;

  @Column()
  isonline: boolean;

  @ManyToOne(() => Serie, (serie) => serie.episodes)
  serie: Serie;
}
