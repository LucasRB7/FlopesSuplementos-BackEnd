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
exports.VendaParcialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const venda_parcial_entity_1 = require("./entities/venda-parcial.entity");
const typeorm_2 = require("@nestjs/typeorm");
let VendaParcialService = class VendaParcialService {
    constructor(vendaParcialRepo) {
        this.vendaParcialRepo = vendaParcialRepo;
    }
    create(vendaParcialDto) {
        return this.vendaParcialRepo.save(vendaParcialDto);
    }
    findAll() {
        return this.vendaParcialRepo.find();
    }
    update(id, vendaParcialDto) {
        return this.vendaParcialRepo.update(id, vendaParcialDto);
    }
    remove(id) {
        return this.vendaParcialRepo.delete(id);
    }
};
exports.VendaParcialService = VendaParcialService;
exports.VendaParcialService = VendaParcialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(venda_parcial_entity_1.VendaParcialEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VendaParcialService);
//# sourceMappingURL=venda-parcial.service.js.map