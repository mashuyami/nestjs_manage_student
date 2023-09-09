"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Student_1 = require("../../typeorm/entities/Student");
let StudentsService = class StudentsService {
    constructor(StudentRepository) {
        this.StudentRepository = StudentRepository;
    }
    findStudents() {
        return this.StudentRepository.find({ relations: ['bed', 'bed.room', 'bed.room.building'] });
    }
    searchStudents(query) {
        return this.StudentRepository
            .createQueryBuilder('student')
            .where('student.hoTen LIKE :query', { query: `%${query}%` })
            .orWhere('student.email LIKE :query', { query: `%${query}%` })
            .getMany();
    }
    createStudent(StudentDetails) {
        const newStudent = this.StudentRepository.create({
            ...StudentDetails
        });
        return this.StudentRepository.save(newStudent);
    }
    updateStudent(id, updateStudentDetails) {
        return this.StudentRepository.update({ id }, { ...updateStudentDetails });
    }
    deleteStudent(id) {
        return this.StudentRepository.delete({ id });
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Student_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentsService);
//# sourceMappingURL=Students.service.js.map