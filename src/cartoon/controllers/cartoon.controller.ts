import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Post, UseFilters, UseGuards } from "@nestjs/common";
import { CartoonService } from "../services/cartoon.service";
import { CartoonDto } from "../dto/cartoon.dto";
import { CartoonCreateDto } from "../dto/cartoon-create.dto";
import { HttpExceptionFilter } from "src/exception/exception-http-filter";
import { JwtAuthGuard } from "src/guards/jwt.guard";

@Controller('cartoons')
@UseFilters(HttpExceptionFilter)
export class CartoonController {
    constructor(private readonly cartoonService: CartoonService) {}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    getAllCartoons(): Promise<CartoonDto[]> {
        return this.cartoonService.getAllCartoons();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    getOneCartoon(@Param('id') id: string): Promise<CartoonDto> {

        if (!id) {
            throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
        }
        return this.cartoonService.getOneCartoon(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    saveCartoon(@Body() cartoon: CartoonCreateDto): Promise<CartoonCreateDto> {
        return this.cartoonService.saveCartoon(cartoon);
    }
}