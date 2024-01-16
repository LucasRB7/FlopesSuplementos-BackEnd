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
exports.VendaParcialController = void 0;
const common_1 = require("@nestjs/common");
const venda_parcial_service_1 = require("./venda-parcial.service");
const venda_parcial_dto_1 = require("./dto/venda-parcial.dto");
const swagger_1 = require("@nestjs/swagger");
let VendaParcialController = class VendaParcialController {
    constructor(vendaParcialService) {
        this.vendaParcialService = vendaParcialService;
    }
    create(vendaParcialDto) {
        return this.vendaParcialService.create(vendaParcialDto);
    }
    findAll() {
        return this.vendaParcialService.findAll();
    }
    update(id, vendaParcialDto) {
        return this.vendaParcialService.update(+id, vendaParcialDto);
    }
    remove(id) {
        return this.vendaParcialService.remove(+id);
    }
};
exports.VendaParcialController = VendaParcialController;
__decorate([
    (0, common_1.Post)("/cadastrar"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [venda_parcial_dto_1.VendaParcialDto]),
    __metadata("design:returntype", void 0)
], VendaParcialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendaParcialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, venda_parcial_dto_1.VendaParcialDto]),
    __metadata("design:returntype", void 0)
], VendaParcialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendaParcialController.prototype, "remove", null);
exports.VendaParcialController = VendaParcialController = __decorate([
    (0, swagger_1.ApiTags)('Venda-Parcial'),
    (0, common_1.Controller)('venda-parcial'),
    __metadata("design:paramtypes", [venda_parcial_service_1.VendaParcialService])
], VendaParcialController);
//# sourceMappingURL=venda-parcial.controller.js.map