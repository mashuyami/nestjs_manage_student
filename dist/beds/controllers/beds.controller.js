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
exports.BedsController = void 0;
const common_1 = require("@nestjs/common");
const CreateBed_dto_1 = require("../dto/CreateBed.dto");
const UpdateBed_dto_1 = require("../dto/UpdateBed.dto");
const beds_service_1 = require("../services/beds.service");
let BedsController = class BedsController {
    constructor(Bedservice) {
        this.Bedservice = Bedservice;
    }
    getBeds() {
        return this.Bedservice.findBeds();
    }
    createBed(createBedDto) {
        return this.Bedservice.createBed(createBedDto);
    }
    searchBeds(query) {
        return this.Bedservice.searchBeds(query);
    }
    async updateBedById(id, updateBedDto) {
        await this.Bedservice.updateBed(id, updateBedDto);
    }
    async deleteBedById(id) {
        await this.Bedservice.deleteBed(id);
    }
};
exports.BedsController = BedsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BedsController.prototype, "getBeds", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBed_dto_1.CreateBedDto]),
    __metadata("design:returntype", void 0)
], BedsController.prototype, "createBed", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BedsController.prototype, "searchBeds", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateBed_dto_1.UpdateBedDto]),
    __metadata("design:returntype", Promise)
], BedsController.prototype, "updateBedById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BedsController.prototype, "deleteBedById", null);
exports.BedsController = BedsController = __decorate([
    (0, common_1.Controller)('Beds'),
    __metadata("design:paramtypes", [beds_service_1.BedsService])
], BedsController);
//# sourceMappingURL=beds.controller.js.map