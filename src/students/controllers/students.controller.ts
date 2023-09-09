import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateStudentDto } from '../dto/CreateStudent.dto';
import { UpdateStudentDto } from '../dto/UpdateStudent.dto';
import { StudentsService } from '../services/Students.service';
import { FindManyOptions } from 'typeorm';
import { Student } from 'src/typeorm/entities/Student';
@Controller('Students')
export class StudentsController {
  constructor(private Studentservice: StudentsService) {}
  @Get()
  getStudents() {
    return this.Studentservice.findStudents();
  }

  @Get('search')
  searchStudents(@Query('query') query: string) {
    return this.Studentservice.searchStudents(query);
  }


  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.Studentservice.createStudent(createStudentDto);
  }

  //loc sinh vien theo id toa nha
  @Get('filterByBuilding')
  filterStudentsByBuilding(@Query('buildingId') buildingId: number) {
    return this.Studentservice.filterStudentsByBuilding(buildingId);
  }
 //loc sinh vien theo id room
  @Get('filterByRoom')
  filterStudentsByRoom(@Query('roomId') roomId: number) {
    return this.Studentservice.filterStudentsByRoom(roomId);
  }
  @Put(':id')
  async updateStudentById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    await this.Studentservice.updateStudent(id, updateStudentDto);
  }

  @Delete(':id')
  async deleteStudentById(@Param('id', ParseIntPipe) id: number) {
    await this.Studentservice.deleteStudent(id);
  }

}