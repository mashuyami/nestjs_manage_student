"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Building_1 = require("../typeorm/entities/Building");
const rooms_controller_1 = require("./controllers/rooms.controller");
const rooms_service_1 = require("./services/rooms.service");
let BuildingsModule = class BuildingsModule {
};
exports.BuildingsModule = BuildingsModule;
exports.BuildingsModule = BuildingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Building_1.Building])],
        controllers: [rooms_controller_1.BuildingsController],
        providers: [rooms_service_1.BuildingsService],
    })
], BuildingsModule);
//# sourceMappingURL=buildings.module.js.map