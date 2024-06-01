import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "../services/auth.service";
import { LoginDto } from "../dto/login.dto";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() user: LoginDto): Promise<any> {
        return this.authService.login(user.username, user.password);
    }

}