import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Room } from './Room';

@Entity({ name: 'buildings' })
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenToaNha: string;

  @Column()
  soTang: number;

  @Column()
  trangThai: number;
  @OneToMany(() => Room, (room) => room.building)
  rooms: Room[];
}
