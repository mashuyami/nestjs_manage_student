import { CreateRoomDto } from '../dto/CreateRoom.dto';
import { UpdateRoomDto } from '../dto/UpdateRoom.dto';
import { RoomsService } from '../services/rooms.service';
export declare class RoomsController {
    private roomservice;
    constructor(roomservice: RoomsService);
    getRooms(): any;
    createRoom(createRoomDto: CreateRoomDto): any;
    updateRoomById(id: number, updateRoomDto: UpdateRoomDto): Promise<void>;
    deleteRoomById(id: number): Promise<void>;
}
