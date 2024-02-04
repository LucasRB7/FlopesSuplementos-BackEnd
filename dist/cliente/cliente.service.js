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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("./cliente.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ClienteService = class ClienteService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async save(createClienteDto) {
        return await this.clienteRepository.save(this.clienteRepository.create(createClienteDto));
    }
    async find() {
        return await this.clienteRepository.find({
            order: {
                id: 'ASC',
            },
        });
    }
    async update(id, data) {
        return await this.clienteRepository.update(id, data);
    }
    async remove(id) {
        return await this.clienteRepository.delete(id);
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cliente_entity_1.ClienteEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map