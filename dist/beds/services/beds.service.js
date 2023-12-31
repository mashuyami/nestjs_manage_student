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
exports.BedsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Bed_1 = require("../../typeorm/entities/Bed");
let BedsService = class BedsService {
    constructor(bedRepository) {
        this.bedRepository = bedRepository;
    }
    findBeds() {
        return this.bedRepository.find({ relations: ['room', 'student', 'room.building'] });
    }
    searchBeds(query) {
        return this.bedRepository
            .createQueryBuilder('bed')
            .where('bed.viTriGiuong LIKE :query', { query: `%${query}%` })
            .orWhere('bed.trangThai LIKE :query', { query: `%${query}%` })
            .getMany();
    }
    createBed(BedDetails) {
        const newBed = this.bedRepository.create({
            ...BedDetails
        });
        return this.bedRepository.save(newBed);
    }
    updateBed(id, updateBedDetails) {
        return this.bedRepository.update({ id }, { ...updateBedDetails });
    }
    deleteBed(id) {
        return this.bedRepository.delete({ id });
    }
};
exports.BedsService = BedsService;
exports.BedsService = BedsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Bed_1.Bed)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BedsService);
//# sourceMappingURL=beds.service.js.map