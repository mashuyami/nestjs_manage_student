import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Student } from 'src/typeorm/entities/Student';
import { CreateBedParams, CreateRoomParams, CreateStudentParams,UpdateStudentParams } from 'src/utils/types';
import { Bed } from 'src/typeorm/entities/Bed';
import { Room } from 'src/typeorm/entities/Room';
import { Building } from 'src/typeorm/entities/Building';
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private StudentRepository: Repository<Student>,
  ) {}

  findStudents() {
    return this.StudentRepository.find({ relations: ['bed','bed.room','bed.room.building'] });
  }




  // Method tìm kiếm sinh viên theo tên hoặc một trường khác
  searchStudents(query: string) {
    return this.StudentRepository
      .createQueryBuilder('student')
      .where('student.hoTen LIKE :query', { query: `%${query}%` })
      .orWhere('student.email LIKE :query', { query: `%${query}%` })
      .getMany();
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