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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bed = void 0;
const typeorm_1 = require("typeorm");
const Room_1 = require("./Room");
const Student_1 = require("./Student");
let Bed = class Bed {
};
exports.Bed = Bed;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bed.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bed.prototype, "viTriGiuong", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bed.prototype, "trangThai", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Student_1.Student, (student) => student.bed),
    __metadata("design:type", Student_1.Student)
], Bed.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Room_1.Room, (room) => room.beds),
    __metadata("design:type", Room_1.Room)
], Bed.prototype, "room", void 0);
exports.Bed = Bed = __decorate([
    (0, typeorm_1.Entity)({ name: 'beds' })
], Bed);
//# sourceMappingURL=Bed.js.map