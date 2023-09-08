import { Repository } from 'typeorm';
import { Bed } from 'src/typeorm/entities/Bed';
import { CreateBedParams, UpdateBedParams } from 'src/utils/types';
export declare class BedsService {
    private bedRepository;
    constructor(bedRepository: Repository<Bed>);
    findBeds(): Promise<Bed[]>;
    createBed(BedDetails: CreateBedParams): Promise<Bed>;
    updateBed(id: number, updateBedDetails: UpdateBedParams): Promise<import("typeorm").UpdateResult>;
    deleteBed(id: number): Promise<import("typeorm").DeleteResult>;
}
