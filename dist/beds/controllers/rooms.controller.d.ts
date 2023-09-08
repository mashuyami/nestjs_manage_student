import { CreateRoomDto } from '../dto/CreateBed.dto';
import { UpdateRoomDto } from '../dto/UpdateBed.dto';
import { RoomsService } from '../services/beds.service';
export declare class RoomsController {
    private roomservice;
    constructor(roomservice: RoomsService);
    getRooms(): any;
    createRoom(createRoomDto: CreateRoomDto): any;
    updateRoomById(id: number, updateRoomDto: UpdateRoomDto): Promise<void>;
    deleteRoomById(id: number): Promise<void>;
}
