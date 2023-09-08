import { Repository } from 'typeorm';
import { Room } from 'src/typeorm/entities/Room';
import { CreateRoomParams, UpdateRoomParams } from 'src/utils/types';
export declare class RoomsService {
    private roomRepository;
    constructor(roomRepository: Repository<Room>);
    findRooms(): Promise<Room[]>;
    createRoom(RoomDetails: CreateRoomParams): Promise<Room>;
    updateRoom(id: number, updateRoomDetails: UpdateRoomParams): Promise<import("typeorm").UpdateResult>;
    deleteRoom(id: number): Promise<import("typeorm").DeleteResult>;
}
