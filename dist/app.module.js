"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const Building_1 = require("./typeorm/entities/Building");
const buildings_module_1 = require("./buildings/buildings.module");
const Room_1 = require("./typeorm/entities/Room");
const Student_1 = require("./typeorm/entities/Student");
const Bed_1 = require("./typeorm/entities/Bed");
const rooms_module_1 = require("./rooms/rooms.module");
const beds_module_1 = require("./beds/beds.module");
const students_module_1 = require("./students/students.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: null,
                database: 'manage_student',
                entities: [Building_1.Building, Room_1.Room, Student_1.Student, Bed_1.Bed],
                synchronize: true,
            }),
            buildings_module_1.BuildingsModule,
            rooms_module_1.RoomsModule,
            beds_module_1.BedsModule,
            students_module_1.StudentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map