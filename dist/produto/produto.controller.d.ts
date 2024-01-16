import { ProdutoService } from './produto.service';
import { ProdutoDto } from './dto/produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    create(produtoDto: ProdutoDto): Promise<ProdutoDto & import("./produto.entity").ProdutoEntity>;
    findAll(): Promise<import("./produto.entity").ProdutoEntity[]>;
    update(id: string, produtoDto: ProdutoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
