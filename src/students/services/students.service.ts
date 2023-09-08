import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/typeorm/entities/Student';
import { CreateStudentParams,UpdateStudentParams } from 'src/utils/types';
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private StudentRepository: Repository<Student>,

  ) {}

  findStudents() {
    return this.StudentRepository.find();
  }

  createStudent(StudentDetails: CreateStudentParams) {
    const newStudent = this.StudentRepository.create({
      ...StudentDetails
    });
    return this.StudentRepository.save(newStudent);
  }

  updateStudent(id: number, updateStudentDetails: UpdateStudentParams) {
    return this.StudentRepository.update({id }, { ...updateStudentDetails });
  }

  deleteStudent(id: number) {
    return this.StudentRepository.delete({id });
  }

}