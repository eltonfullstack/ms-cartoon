import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cartoon, CartoonDocument } from "../schemas/cartoon.schema";

@Injectable()
export class CartoonRepository {

    constructor(
        @InjectModel(Cartoon.name) 
        private readonly cartoonModel: Model<CartoonDocument>,
    ) {}

    async getAll(): Promise<Cartoon[]> {
        return await this.cartoonModel.find().exec();
    }
}