import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cartoon, CartoonDocument } from "../schemas/cartoon.schema";
import { CartoonCreateDto } from "../dto/cartoon-create.dto";
import { CartoonDto } from "../dto/cartoon.dto";

@Injectable()
export class CartoonRepository {

    constructor(
        @InjectModel(Cartoon.name) 
        private readonly cartoonModel: Model<CartoonDocument>,
    ) {}

    async getAll(): Promise<CartoonDto[]> {
        return await this.cartoonModel.find().exec();
    }

    async getOne(id: string): Promise<CartoonDto> {
        return await this.cartoonModel.findById({ _id: id}).exec();
    }

    async save(cartoon: CartoonCreateDto): Promise<CartoonCreateDto> {
        return await this.cartoonModel.create(cartoon);
    }
}