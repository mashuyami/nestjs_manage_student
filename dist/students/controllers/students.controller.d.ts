import { CreateStudentDto } from '../dto/CreateStudent.dto';
import { UpdateStudentDto } from '../dto/UpdateStudent.dto';
import { StudentsService } from '../services/Students.service';
import { Student } from 'src/typeorm/entities/Student';
export declare class StudentsController {
    private Studentservice;
    constructor(Studentservice: StudentsService);
    getStudents(): Promise<Student[]>;
    searchStudents(query: string): Promise<Student[]>;
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    updateStudentById(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    deleteStudentById(id: number): Promise<void>;
}
