import { Injectable } from "@nestjs/common";
import * as bcryptjs from 'bcryptjs';
import { UserRepository } from "../repositories/user.repository";
import { UserCreateDto } from "../dto/user-create.dto";
import { LoginDto } from "src/auth/dto/login.dto";

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {}

    async save(user: UserCreateDto): Promise<any> {

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(user.password, salt);
        user.password = hashedPassword;
        
        return await this.userRepository.saveOne(user);
    }

    async findByUserCredentials(userDto: LoginDto): Promise<UserCreateDto> {
        return await this.userRepository.findOneUser(userDto);
    }
}