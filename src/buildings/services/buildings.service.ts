import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from 'src/typeorm/entities/Building';
import { CreateBuildingParams,UpdateBuildingParams } from 'src/utils/types';
@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Building) private buildingRepository: Repository<Building>,

  ) {}

  findBuildings() {
    return this.buildingRepository.find({ relations: ['room','room.bed','room.bed.student'] });
  }
  searchBuildings(query: string) {
    return this.buildingRepository
      .createQueryBuilder('building')
      .where('building.tenToaNha LIKE :query', { query: `%${query}%` })
      .orWhere('building.soTang LIKE :query', { query: `%${query}%` })
      .getMany();

  }
  createbuilding(buildingDetails: CreateBuildingParams) {
    const newBuilding = this.buildingRepository.create({
      ...buildingDetails
    });
    return this.buildingRepository.save(newBuilding);
  }

  updatebuilding(id: number, updatebuildingDetails: UpdateBuildingParams) {
    return this.buildingRepository.update({id }, { ...updatebuildingDetails });
  }

  deletebuilding(id: number) {
    return this.buildingRepository.delete({id });
  }

}