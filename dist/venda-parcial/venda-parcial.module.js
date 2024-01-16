"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaParcialModule = void 0;
const common_1 = require("@nestjs/common");
const venda_parcial_service_1 = require("./venda-parcial.service");
const venda_parcial_controller_1 = require("./venda-parcial.controller");
const typeorm_1 = require("@nestjs/typeorm");
const venda_parcial_entity_1 = require("./entities/venda-parcial.entity");
let VendaParcialModule = class VendaParcialModule {
};
exports.VendaParcialModule = VendaParcialModule;
exports.VendaParcialModule = VendaParcialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([venda_parcial_entity_1.VendaParcialEntity])],
        controllers: [venda_parcial_controller_1.VendaParcialController],
        providers: [venda_parcial_service_1.VendaParcialService],
        exports: [venda_parcial_service_1.VendaParcialService]
    })
], VendaParcialModule);
//# sourceMappingURL=venda-parcial.module.js.map