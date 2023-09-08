import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bed } from 'src/typeorm/entities/Bed';
import { CreateBedParams,UpdateBedParams } from 'src/utils/types';
@Injectable()
export class BedsService {
  constructor(
    @InjectRepository(Bed) private bedRepository: Repository<Bed>,

  ) {}

  findBeds() {
    return this.bedRepository.find();
  }

  createBed(BedDetails: CreateBedParams) {
    const newBed = this.bedRepository.create({
      ...BedDetails
    });
    return this.bedRepository.save(newBed);
  }

  updateBed(id: number, updateBedDetails: UpdateBedParams) {
    return this.bedRepository.update({id }, { ...updateBedDetails });
  }

  deleteBed(id: number) {
    return this.bedRepository.delete({id });
  }

}