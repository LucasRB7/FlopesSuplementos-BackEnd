import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteService {
    private readonly clienteRepository;
    constructor(clienteRepository: Repository<ClienteEntity>);
    save(createClienteDto: CreateClienteDto): Promise<ClienteEntity>;
    find(): Promise<ClienteEntity[]>;
    update(id: number, data: UpdateClienteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
