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
exports.BuildingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Building_1 = require("../../typeorm/entities/Building");
let BuildingsService = class BuildingsService {
    constructor(buildingRepository) {
        this.buildingRepository = buildingRepository;
    }
    findBuildings() {
        return this.buildingRepository.find({ relations: ['room', 'room.bed', 'room.bed.student'] });
    }
    searchBuildings(query) {
        return this.buildingRepository
            .createQueryBuilder('building')
            .where('building.tenToaNha LIKE :query', { query: `%${query}%` })
            .orWhere('building.soTang LIKE :query', { query: `%${query}%` })
            .getMany();
    }
    createbuilding(buildingDetails) {
        const newBuilding = this.buildingRepository.create({
            ...buildingDetails
        });
        return this.buildingRepository.save(newBuilding);
    }
    updatebuilding(id, updatebuildingDetails) {
        return this.buildingRepository.update({ id }, { ...updatebuildingDetails });
    }
    deletebuilding(id) {
        return this.buildingRepository.delete({ id });
    }
};
exports.BuildingsService = BuildingsService;
exports.BuildingsService = BuildingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Building_1.Building)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BuildingsService);
//# sourceMappingURL=buildings.service.js.map