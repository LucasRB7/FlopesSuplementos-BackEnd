import { VendaParcialService } from './venda-parcial.service';
import { VendaParcialDto } from './dto/venda-parcial.dto';
export declare class VendaParcialController {
    private readonly vendaParcialService;
    constructor(vendaParcialService: VendaParcialService);
    create(vendaParcialDto: VendaParcialDto): Promise<VendaParcialDto & import("./entities/venda-parcial.entity").VendaParcialEntity>;
    findAll(): Promise<import("./entities/venda-parcial.entity").VendaParcialEntity[]>;
    update(id: string, vendaParcialDto: VendaParcialDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
