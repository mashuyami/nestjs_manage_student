import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Bed } from './Bed';

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  avatar: string;

  @Column()
  soDienThoai: string;

  @Column()
  email: string;

  @Column()
  hoTen: string;

  @Column()
  soCMND: string;

  @Column('date')
  ngaySinh: Date;

  @Column()
  noiSinh: string;

  @Column()
  diaChiThuongTru: string;

  @Column()
  tenTruong: string;

  @Column()
  namVaoTruong: string;

  @Column()
  gioiTinh: string;

  @Column()
  trangThai: number;
  @Column()
    createdAt: Date;
  @OneToOne(() => Bed, (bed) => bed.student)
  bed: Bed;
}
