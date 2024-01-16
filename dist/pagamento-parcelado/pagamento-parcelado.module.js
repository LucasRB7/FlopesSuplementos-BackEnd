"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoParceladoModule = void 0;
const common_1 = require("@nestjs/common");
const pagamento_parcelado_service_1 = require("./pagamento-parcelado.service");
const pagamento_parcelado_controller_1 = require("./pagamento-parcelado.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pagamento_parcelado_entity_1 = require("./entities/pagamento-parcelado.entity");
let PagamentoParceladoModule = class PagamentoParceladoModule {
};
exports.PagamentoParceladoModule = PagamentoParceladoModule;
exports.PagamentoParceladoModule = PagamentoParceladoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pagamento_parcelado_entity_1.PagamentoParceladoEntity])],
        controllers: [pagamento_parcelado_controller_1.PagamentoParceladoController],
        providers: [pagamento_parcelado_service_1.PagamentoParceladoService],
        exports: [pagamento_parcelado_service_1.PagamentoParceladoService]
    })
], PagamentoParceladoModule);
//# sourceMappingURL=pagamento-parcelado.module.js.map