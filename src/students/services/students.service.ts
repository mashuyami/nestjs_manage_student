import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Student } from 'src/typeorm/entities/Student';
import {
  CreateBedParams,
  CreateRoomParams,
  CreateStudentParams,
  UpdateStudentParams,
} from 'src/utils/types';
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private StudentRepository: Repository<Student>,
  ) {}

  findStudents() {
    return this.StudentRepository.find({
      relations: ['bed', 'bed.room', 'bed.room.building'],
    });
  }
  filterStudentsByBuilding(buildingId: number) {
    // Lọc sinh viên theo tòa nhà
    // Điều kiện lọc: Sinh viên đang ở trong tòa nhà có ID là buildingId
    return this.StudentRepository.find({
      where: {
        bed: {
          room: {
            building: {
              id: buildingId,
            },
          },
        },
      },
      relations: ['bed', 'bed.room', 'bed.room.building'],
    });
  }
  // Lọc sinh viên theo phòng
  // Điều kiện lọc: Sinh viên đang ở trong phòng có ID là roomId
  filterStudentsByRoom(roomId: number) {
    return this.StudentRepository.find({
      where: {
        bed: {
          room: {
            id: roomId,
          },
        },
      },
      relations: ['bed', 'bed.room', 'bed.room.building'],
    });
  }
  searchStudents(query: string) {
    return this.StudentRepository.createQueryBuilder('student')
      .where('student.hoTen LIKE :query', { query: `%${query}%` })
      .orWhere('student.email LIKE :query', { query: `%${query}%` })
      .getMany();
  }
  createStudent(StudentDetails: CreateStudentParams) {
    const newStudent = this.StudentRepository.create({
      ...StudentDetails,
    });
    return this.StudentRepository.save(newStudent);
  }

  updateStudent(id: number, updateStudentDetails: UpdateStudentParams) {
    return this.StudentRepository.update({ id }, { ...updateStudentDetails });
  }

  deleteStudent(id: number) {
    return this.StudentRepository.delete({ id });
  }
}
