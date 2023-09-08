import { Repository } from 'typeorm';
import { Student } from 'src/typeorm/entities/Student';
import { CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
export declare class StudentsService {
    private StudentRepository;
    constructor(StudentRepository: Repository<Student>);
    findStudents(): Promise<Student[]>;
    createStudent(StudentDetails: CreateStudentParams): Promise<Student>;
    updateStudent(id: number, updateStudentDetails: UpdateStudentParams): Promise<import("typeorm").UpdateResult>;
    deleteStudent(id: number): Promise<import("typeorm").DeleteResult>;
}
