import { Injectable } from "@nestjs/common";
import { CartoonRepository } from "../repositories/cartoon.repository";
import { Cartoon } from "../schemas/cartoon.schema";

@Injectable()
export class CartoonService {

    constructor(private readonly cartoonRepository: CartoonRepository) {}

    getAllCartoons(): Promise<Cartoon[]> {
        return this.cartoonRepository.getAll();
    }
}