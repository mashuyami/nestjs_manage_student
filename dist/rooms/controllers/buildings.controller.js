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
exports.BuildingsController = void 0;
const common_1 = require("@nestjs/common");
const CreateBuilding_dto_1 = require("../dto/CreateBuilding.dto");
const UpdateBuilding_dto_1 = require("../dto/UpdateBuilding.dto");
const buildings_service_1 = require("../services/buildings.service");
let BuildingsController = class BuildingsController {
    constructor(buildingservice) {
        this.buildingservice = buildingservice;
    }
    getBuildings() {
        return this.buildingservice.findBuildings();
    }
    createBuilding(createBuidingDto) {
        return this.buildingservice.createbuilding(createBuidingDto);
    }
    async updateBuidingById(id, updateBuidingDto) {
        await this.buildingservice.updatebuilding(id, updateBuidingDto);
    }
    async deleteBuidingById(id) {
        await this.buildingservice.deletebuilding(id);
    }
};
exports.BuildingsController = BuildingsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "getBuildings", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBuilding_dto_1.CreateBuildingDto]),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "createBuilding", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateBuilding_dto_1.UpdateBuildingDto]),
    __metadata("design:returntype", Promise)
], BuildingsController.prototype, "updateBuidingById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuildingsController.prototype, "deleteBuidingById", null);
exports.BuildingsController = BuildingsController = __decorate([
    (0, common_1.Controller)('buildings'),
    __metadata("design:paramtypes", [buildings_service_1.BuildingsService])
], BuildingsController);
//# sourceMappingURL=buildings.controller.js.map