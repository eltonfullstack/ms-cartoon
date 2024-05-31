import { Injectable } from "@nestjs/common";
import { CartoonRepository } from "../repositories/cartoon.repository";
import { CartoonDto } from "../dto/cartoon.dto";
import { CartoonCreateDto } from "../dto/cartoon-create.dto";

@Injectable()
export class CartoonService {

    constructor(private readonly cartoonRepository: CartoonRepository) {}

    getAllCartoons(): Promise<CartoonDto[]> {
        return this.cartoonRepository.getAll();
    }

    getOneCartoon(id: string): Promise<CartoonDto> {
        return this.cartoonRepository.getOne(id);
    }

    saveCartoon(cartoon: CartoonCreateDto): Promise<CartoonCreateDto> {
        return this.cartoonRepository.save(cartoon);
    }
}