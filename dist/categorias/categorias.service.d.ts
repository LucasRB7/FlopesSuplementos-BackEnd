import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { CategoriaEntity } from './entities/categoria.entity';
import { Repository } from 'typeorm';
export declare class CategoriasService {
    private readonly categoriaRepo;
    constructor(categoriaRepo: Repository<CategoriaEntity>);
    save(createCategoriaDto: CreateCategoriaDto): Promise<CategoriaEntity>;
    findAll(): Promise<CategoriaEntity[]>;
    findOne(table: string): Promise<any[]>;
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
