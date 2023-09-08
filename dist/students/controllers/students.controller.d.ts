import { CreateStudentDto } from '../dto/CreateStudent.dto';
import { UpdateStudentDto } from '../dto/UpdateStudent.dto';
import { StudentsService } from '../services/Students.service';
export declare class StudentsController {
    private Studentservice;
    constructor(Studentservice: StudentsService);
    getStudents(): Promise<import("../../typeorm/entities/Student").Student[]>;
    createStudent(createStudentDto: CreateStudentDto): Promise<import("../../typeorm/entities/Student").Student>;
    updateStudentById(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    deleteStudentById(id: number): Promise<void>;
}
