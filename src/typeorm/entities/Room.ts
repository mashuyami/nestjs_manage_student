import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Building } from './Building';
import { Bed } from './Bed';

@Entity({ name: 'rooms' })
export class Room {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tenPhong: string;

  @Column()
  viTriTang: number;

  @Column()
  soNguoiToiDa: number;

  @Column()
  gioiTinhSV: string;

  @Column()
  hinhThucThanhToan: string;

  @Column('float')
  donGia: number;

  @Column()
  trangThai: number;

  @ManyToOne(() => Building, (building) => building.rooms)
  building: Building;
  @OneToMany(() => Bed, (bed) => bed.room)
  beds: Bed[];
}
