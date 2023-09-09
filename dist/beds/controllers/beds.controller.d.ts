import { CreateBedDto } from '../dto/CreateBed.dto';
import { UpdateBedDto } from '../dto/UpdateBed.dto';
import { BedsService } from '../services/beds.service';
export declare class BedsController {
    private Bedservice;
    constructor(Bedservice: BedsService);
    getBeds(): Promise<import("../../typeorm/entities/Bed").Bed[]>;
    createBed(createBedDto: CreateBedDto): Promise<import("../../typeorm/entities/Bed").Bed>;
    searchBeds(query: string): Promise<import("../../typeorm/entities/Bed").Bed[]>;
    updateBedById(id: number, updateBedDto: UpdateBedDto): Promise<void>;
    deleteBedById(id: number): Promise<void>;
}
