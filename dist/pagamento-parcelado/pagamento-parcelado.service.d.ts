import { PagamentoParceladoDto } from './dto/pagamento-parcelado.dto';
import { Repository } from 'typeorm';
import { PagamentoParceladoEntity } from './entities/pagamento-parcelado.entity';
export declare class PagamentoParceladoService {
    private readonly pagamentoParceladoRepo;
    constructor(pagamentoParceladoRepo: Repository<PagamentoParceladoEntity>);
    create(pagamentoParceladoDto: any): Promise<any>;
    gerarParcelas(id_venda_ref: number, valor: number, parcela: number, vencimento: string): Promise<void>;
    findAll(): Promise<PagamentoParceladoEntity[]>;
    update(id: number, pagamentoParceladoDto: PagamentoParceladoDto): string;
    remove(id: number): string;
}
