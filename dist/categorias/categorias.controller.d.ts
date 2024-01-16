import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<import("./entities/categoria.entity").CategoriaEntity>;
    findAll(): Promise<import("./entities/categoria.entity").CategoriaEntity[]>;
    findOne(table: string): Promise<any[]>;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
