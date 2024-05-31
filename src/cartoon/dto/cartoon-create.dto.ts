import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CartoonCreateDto {

    @IsNotEmpty()
    @MinLength(3)
    title?: string;

    @MinLength(3)
    description?: string;

    @IsNotEmpty()
    @MaxLength(100)
    image?: string;
}