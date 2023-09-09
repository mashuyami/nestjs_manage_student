import { CreateBuildingDto } from '../dto/CreateBuilding.dto';
import { UpdateBuildingDto } from '../dto/UpdateBuilding.dto';
import { BuildingsService } from '../services/buildings.service';
export declare class BuildingsController {
    private buildingservice;
    constructor(buildingservice: BuildingsService);
    getBuildings(): Promise<import("../../typeorm/entities/Building").Building[]>;
    createBuilding(createBuidingDto: CreateBuildingDto): Promise<import("../../typeorm/entities/Building").Building>;
    searchBuildings(query: string): Promise<import("../../typeorm/entities/Building").Building[]>;
    updateBuidingById(id: number, updateBuidingDto: UpdateBuildingDto): Promise<void>;
    deleteBuidingById(id: number): Promise<void>;
}
