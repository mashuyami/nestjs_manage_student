import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateBuildingDto } from '../dto/CreateBuilding.dto';
  import { UpdateBuildingDto } from '../dto/UpdateBuilding.dto';
import { BuildingsService } from '../services/buildings.service';
  @Controller('buildings')
  export class BuildingsController {
    constructor(private buildingservice: BuildingsService) {}
    @Get()
    getBuildings() {
      return this.buildingservice.findBuildings();
    }
  
    @Post()
    createBuilding(@Body() createBuidingDto: CreateBuildingDto) {
      return this.buildingservice.createbuilding(createBuidingDto);
    }
  
    @Put(':id')
    async updateBuidingById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateBuidingDto: UpdateBuildingDto,
    ) {
      await this.buildingservice.updatebuilding(id, updateBuidingDto);
    }
  
    @Delete(':id')
    async deleteBuidingById(@Param('id', ParseIntPipe) id: number) {
      await this.buildingservice.deletebuilding(id);
    }
  
  }