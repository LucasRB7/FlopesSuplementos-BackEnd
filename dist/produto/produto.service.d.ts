import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
import { ProdutoDto } from './dto/produto.dto';
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<ProdutoEntity>);
    save(body: ProdutoDto): Promise<ProdutoDto & ProdutoEntity>;
    find(): Promise<ProdutoEntity[]>;
    update(id: number, body: ProdutoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
