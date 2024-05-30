import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { CartoonService } from "../services/cartoon.service";
import { Cartoon } from "../schemas/cartoon.schema";

@Controller('/api/v1/cartoons')
export class CartoonController {
    constructor(private readonly cartoonService: CartoonService) {}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    getAllCartoons(): Promise<Cartoon[]> {
        return this.cartoonService.getAllCartoons();
    }
}