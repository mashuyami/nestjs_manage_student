import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Room } from './Room';
import { Student } from './Student';

@Entity({ name: 'beds' })
export class Bed {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  viTriGiuong: number;

  @Column()
  trangThai: number;

  @OneToOne(() => Student)
  @JoinColumn()
  student: Student;
  @ManyToOne(() => Room, (room) => room.bed)
  room: Room;
}
