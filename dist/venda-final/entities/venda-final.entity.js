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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaFinalEntity = void 0;
const typeorm_1 = require("typeorm");
let VendaFinalEntity = class VendaFinalEntity {
};
exports.VendaFinalEntity = VendaFinalEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "venda_final_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "vendap_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "cliente_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VendaFinalEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "acrescimos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "descontos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendaFinalEntity.prototype, "pagamento_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VendaFinalEntity.prototype, "data_horario_venda", void 0);
exports.VendaFinalEntity = VendaFinalEntity = __decorate([
    (0, typeorm_1.Entity)('venda_final')
], VendaFinalEntity);
//# sourceMappingURL=venda-final.entity.js.map