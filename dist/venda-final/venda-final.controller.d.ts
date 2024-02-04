import { VendaFinalService } from './venda-final.service';
import { VendaFinalDto } from './dto/venda-final.dto';
export declare class VendaFinalController {
    private readonly vendaFinalService;
    constructor(vendaFinalService: VendaFinalService);
    create(vendaFinalDto: VendaFinalDto): Promise<VendaFinalDto & import("./entities/venda-final.entity").VendaFinalEntity>;
    findAll(): Promise<import("./entities/venda-final.entity").VendaFinalEntity[]>;
    update(id: string): string;
    remove(id: string): string;
}
