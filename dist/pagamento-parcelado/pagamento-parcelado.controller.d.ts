import { PagamentoParceladoService } from './pagamento-parcelado.service';
import { PagamentoParceladoDto } from './dto/pagamento-parcelado.dto';
export declare class PagamentoParceladoController {
    private readonly pagamentoParceladoService;
    constructor(pagamentoParceladoService: PagamentoParceladoService);
    createPagamentos(pagamentoParceladoDto: PagamentoParceladoDto): Promise<void>;
    findAll(): Promise<import("./entities/pagamento-parcelado.entity").PagamentoParceladoEntity[]>;
    update(id: string): string;
    remove(id: string): string;
}
