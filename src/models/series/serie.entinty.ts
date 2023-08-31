import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Episode } from '../episodes/episode.entity';

@Entity()
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  category: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  cover: string;

  @Column({
    nullable: true,
  })
  description: string;

  @OneToMany(() => Episode, (episode) => episode.serie)
  episodes: Episode[];
}
