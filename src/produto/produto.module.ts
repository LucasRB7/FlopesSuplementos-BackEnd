import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [ProdutoService],
})
export class ProdutoModule {}
