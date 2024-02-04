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
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("./produto.service");
const swagger_1 = require("@nestjs/swagger");
const produto_dto_1 = require("./dto/produto.dto");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    create(produtoDto) {
        return this.produtoService.save(produtoDto);
    }
    findAll() {
        return this.produtoService.find();
    }
    update(id, produtoDto) {
        return this.produtoService.update(parseInt(id), produtoDto);
    }
    remove(id) {
        console.log(id);
        return this.produtoService.remove(parseInt(id));
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Post)('/cadastro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_dto_1.ProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, produto_dto_1.ProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "remove", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, swagger_1.ApiTags)('Produto'),
    (0, common_1.Controller)('produto'),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map