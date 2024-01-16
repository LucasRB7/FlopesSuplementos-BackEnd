"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaFinalModule = void 0;
const common_1 = require("@nestjs/common");
const venda_final_service_1 = require("./venda-final.service");
const venda_final_controller_1 = require("./venda-final.controller");
const typeorm_1 = require("@nestjs/typeorm");
const venda_final_entity_1 = require("./entities/venda-final.entity");
let VendaFinalModule = class VendaFinalModule {
};
exports.VendaFinalModule = VendaFinalModule;
exports.VendaFinalModule = VendaFinalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([venda_final_entity_1.VendaFinalEntity])],
        controllers: [venda_final_controller_1.VendaFinalController],
        providers: [venda_final_service_1.VendaFinalService],
        exports: [venda_final_service_1.VendaFinalService]
    })
], VendaFinalModule);
//# sourceMappingURL=venda-final.module.js.map