import { Repository } from 'typeorm';
import { Building } from 'src/typeorm/entities/Building';
import { CreateBuildingParams, UpdateBuildingParams } from 'src/utils/types';
export declare class BuildingsService {
    private buildingRepository;
    constructor(buildingRepository: Repository<Building>);
    findBuildings(): Promise<Building[]>;
    searchBuildings(query: string): Promise<Building[]>;
    createbuilding(buildingDetails: CreateBuildingParams): Promise<Building>;
    updatebuilding(id: number, updatebuildingDetails: UpdateBuildingParams): Promise<import("typeorm").UpdateResult>;
    deletebuilding(id: number): Promise<import("typeorm").DeleteResult>;
}
