import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UserCreateDto } from "../dto/user-create.dto";

@Controller('/users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    saveUser(@Body() user: UserCreateDto): Promise<UserCreateDto> {
        return this.userService.save(user);
    }
    
}