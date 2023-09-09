import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from 'src/typeorm/entities/Room';
import { CreateRoomParams,UpdateRoomParams } from 'src/utils/types';
@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private roomRepository: Repository<Room>,

  ) {}

  findRooms() {
    return this.roomRepository.find({ relations: ['bed','building','bed.student'] });
  }

  createRoom(RoomDetails: CreateRoomParams) {
    const newRoom = this.roomRepository.create({
      ...RoomDetails
    });
    return this.roomRepository.save(newRoom);
  }
  searchRooms(query: string) {
    return this.roomRepository
      .createQueryBuilder('room')
      .where('room.tenPhong LIKE :query', { query: `%${query}%` })
      .orWhere('room.viTriTang LIKE :query', { query: `%${query}%` })
      .getMany();

  }
  updateRoom(id: number, updateRoomDetails: UpdateRoomParams) {
    return this.roomRepository.update({id }, { ...updateRoomDetails });
  }

  deleteRoom(id: number) {
    return this.roomRepository.delete({id });
  }

}