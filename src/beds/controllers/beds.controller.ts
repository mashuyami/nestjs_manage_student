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
  import { CreateBedDto } from '../dto/CreateBed.dto';
  import { UpdateBedDto } from '../dto/UpdateBed.dto';
import { BedsService } from '../services/beds.service';
  @Controller('Beds')
  export class BedsController {
    constructor(private Bedservice: BedsService) {}
    @Get()
    getBeds() {
      return this.Bedservice.findBeds();
    }
  
    @Post()
    createBed(@Body() createBedDto: CreateBedDto) {
      return this.Bedservice.createBed(createBedDto);
    }
  
    @Put(':id')
    async updateBedById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateBedDto: UpdateBedDto,
    ) {
      await this.Bedservice.updateBed(id, updateBedDto);
    }
  
    @Delete(':id')
    async deleteBedById(@Param('id', ParseIntPipe) id: number) {
      await this.Bedservice.deleteBed(id);
    }
  
  }