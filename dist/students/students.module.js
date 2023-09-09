"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Students_controller_1 = require("./controllers/Students.controller");
const Students_service_1 = require("./services/Students.service");
const Student_1 = require("../typeorm/entities/Student");
const Room_1 = require("../typeorm/entities/Room");
const Bed_1 = require("../typeorm/entities/Bed");
const Building_1 = require("../typeorm/entities/Building");
let StudentsModule = class StudentsModule {
};
exports.StudentsModule = StudentsModule;
exports.StudentsModule = StudentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Student_1.Student, Room_1.Room, Bed_1.Bed, Building_1.Building])],
        controllers: [Students_controller_1.StudentsController],
        providers: [Students_service_1.StudentsService],
    })
], StudentsModule);
//# sourceMappingURL=students.module.js.map