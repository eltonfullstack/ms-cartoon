import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class UserCreateDto {

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    password: string;
}