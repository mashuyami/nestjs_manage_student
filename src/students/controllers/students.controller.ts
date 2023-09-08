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
import { CreateStudentDto } from '../dto/CreateStudent.dto';
import { UpdateStudentDto } from '../dto/UpdateStudent.dto';
import { StudentsService } from '../services/Students.service';
@Controller('Students')
export class StudentsController {
  constructor(private Studentservice: StudentsService) {}
  @Get()
  getStudents() {
    return this.Studentservice.findStudents();
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.Studentservice.createStudent(createStudentDto);
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