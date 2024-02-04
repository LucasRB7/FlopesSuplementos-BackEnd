import { VendaFinalDto } from './dto/venda-final.dto';
import { VendaFinalEntity } from './entities/venda-final.entity';
import { Repository } from 'typeorm';
export declare class VendaFinalService {
    private readonly vendaFinalRepo;
    constructor(vendaFinalRepo: Repository<VendaFinalEntity>);
    create(vendaFinalDto: VendaFinalDto): Promise<VendaFinalDto & VendaFinalEntity>;
    findAll(): Promise<VendaFinalEntity[]>;
    findOne(id: number): string;
    update(id: number): string;
    remove(id: number): string;
}
