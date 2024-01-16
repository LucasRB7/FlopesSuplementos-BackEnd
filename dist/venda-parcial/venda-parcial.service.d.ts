import { VendaParcialDto } from './dto/venda-parcial.dto';
import { Repository } from 'typeorm';
import { VendaParcialEntity } from './entities/venda-parcial.entity';
export declare class VendaParcialService {
    private readonly vendaParcialRepo;
    constructor(vendaParcialRepo: Repository<VendaParcialEntity>);
    create(vendaParcialDto: VendaParcialDto): Promise<VendaParcialDto & VendaParcialEntity>;
    findAll(): Promise<VendaParcialEntity[]>;
    update(id: number, vendaParcialDto: VendaParcialDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
