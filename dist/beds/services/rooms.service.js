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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Room_1 = require("../../typeorm/entities/Room");
let RoomsService = class RoomsService {
    constructor(roomRepository) {
        this.roomRepository = roomRepository;
    }
    findRooms() {
        return this.roomRepository.find();
    }
    createRoom(RoomDetails) {
        const newRoom = this.roomRepository.create({
            ...RoomDetails
        });
        return this.roomRepository.save(newRoom);
    }
    updateRoom(id, updateRoomDetails) {
        return this.roomRepository.update({ id }, { ...updateRoomDetails });
    }
    deleteRoom(id) {
        return this.roomRepository.delete({ id });
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Room_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map