import { CreateStudentDto } from '../dto/CreateStudent.dto';
import { UpdateStudentDto } from '../dto/UpdateStudent.dto';
import { StudentsService } from '../services/students.service';
export declare class StudentsController {
    private studentservice;
    constructor(studentservice: StudentsService);
    getStudents(): any;
    createStudent(createStudentDto: CreateStudentDto): any;
    updateStudentById(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    deleteStudentById(id: number): Promise<void>;
}
