import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column({
    type: 'varchar',
  })
  cover: string;

  @Column()
  description: string;

  @Column()
  isonline: boolean;

  @Column({
    nullable: true,
  })
  link: string;
}
