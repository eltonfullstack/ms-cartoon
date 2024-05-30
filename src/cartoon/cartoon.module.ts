import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartoonSchema } from "./schemas/cartoon.schema";
import { CartoonController } from "./controllers/cartoon.controller";
import { CartoonService } from "./services/cartoon.service";
import { CartoonRepository } from "./repositories/cartoon.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Cartoon', schema: CartoonSchema }])],
    controllers: [CartoonController],
    providers: [CartoonService, CartoonRepository],
    exports: [],
})
export class CartoonModule {
}