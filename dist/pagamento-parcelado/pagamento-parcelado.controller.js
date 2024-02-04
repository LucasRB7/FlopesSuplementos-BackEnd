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
exports.PagamentoParceladoController = void 0;
const common_1 = require("@nestjs/common");
const pagamento_parcelado_service_1 = require("./pagamento-parcelado.service");
const pagamento_parcelado_dto_1 = require("./dto/pagamento-parcelado.dto");
const swagger_1 = require("@nestjs/swagger");
let PagamentoParceladoController = class PagamentoParceladoController {
    constructor(pagamentoParceladoService) {
        this.pagamentoParceladoService = pagamentoParceladoService;
    }
    createPagamentos(pagamentoParceladoDto) {
        return this.pagamentoParceladoService.gerarParcelas(pagamentoParceladoDto.id_venda_ref, pagamentoParceladoDto.valor, pagamentoParceladoDto.parcela, pagamentoParceladoDto.vencimento);
    }
    findAll() {
        return this.pagamentoParceladoService.findAll();
    }
    update(id) {
        return this.pagamentoParceladoService.update(+id);
    }
    remove(id) {
        return this.pagamentoParceladoService.remove(+id);
    }
};
exports.PagamentoParceladoController = PagamentoParceladoController;
__decorate([
    (0, common_1.Post)('/cadastrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagamento_parcelado_dto_1.PagamentoParceladoDto]),
    __metadata("design:returntype", void 0)
], PagamentoParceladoController.prototype, "createPagamentos", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PagamentoParceladoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagamentoParceladoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagamentoParceladoController.prototype, "remove", null);
exports.PagamentoParceladoController = PagamentoParceladoController = __decorate([
    (0, swagger_1.ApiTags)('Pagamento-Parcelado'),
    (0, common_1.Controller)('pagamento-parcelado'),
    __metadata("design:paramtypes", [pagamento_parcelado_service_1.PagamentoParceladoService])
], PagamentoParceladoController);
//# sourceMappingURL=pagamento-parcelado.controller.js.map