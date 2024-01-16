"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cliente_module_1 = require("./cliente/cliente.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const produto_module_1 = require("./produto/produto.module");
const categorias_module_1 = require("./categorias/categorias.module");
const users_module_1 = require("./users/users.module");
const venda_parcial_module_1 = require("./venda-parcial/venda-parcial.module");
const venda_final_module_1 = require("./venda-final/venda-final.module");
const pagamento_parcelado_module_1 = require("./pagamento-parcelado/pagamento-parcelado.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                database: process.env.DB_DATABASE,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                entities: [__dirname + '/**/*.entity{.js,.ts  }']
            }),
            cliente_module_1.ClienteModule, produto_module_1.ProdutoModule, categorias_module_1.CategoriasModule, users_module_1.UsersModule, venda_parcial_module_1.VendaParcialModule, venda_final_module_1.VendaFinalModule, pagamento_parcelado_module_1.PagamentoParceladoModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map