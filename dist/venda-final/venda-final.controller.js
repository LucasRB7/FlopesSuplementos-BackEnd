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
exports.VendaFinalController = void 0;
const common_1 = require("@nestjs/common");
const venda_final_service_1 = require("./venda-final.service");
const venda_final_dto_1 = require("./dto/venda-final.dto");
const swagger_1 = require("@nestjs/swagger");
let VendaFinalController = class VendaFinalController {
    constructor(vendaFinalService) {
        this.vendaFinalService = vendaFinalService;
    }
    create(vendaFinalDto) {
        return this.vendaFinalService.create(vendaFinalDto);
    }
    findAll() {
        return this.vendaFinalService.findAll();
    }
    update(id, vendaFinalDto) {
        return this.vendaFinalService.update(+id, vendaFinalDto);
    }
    remove(id) {
        return this.vendaFinalService.remove(+id);
    }
};
exports.VendaFinalController = VendaFinalController;
__decorate([
    (0, common_1.Post)("/cadastrar"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [venda_final_dto_1.VendaFinalDto]),
    __metadata("design:returntype", void 0)
], VendaFinalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendaFinalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, venda_final_dto_1.VendaFinalDto]),
    __metadata("design:returntype", void 0)
], VendaFinalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendaFinalController.prototype, "remove", null);
exports.VendaFinalController = VendaFinalController = __decorate([
    (0, swagger_1.ApiTags)('Venda-Final'),
    (0, common_1.Controller)('venda-final'),
    __metadata("design:paramtypes", [venda_final_service_1.VendaFinalService])
], VendaFinalController);
//# sourceMappingURL=venda-final.controller.js.map