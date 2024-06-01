import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { UserCreateDto } from "../dto/user-create.dto";
import { LoginDto } from "src/auth/dto/login.dto";

export class UserRepository {
    constructor(
        @InjectModel(User.name) 
        private readonly userModel: Model<UserDocument>,
    ) {}

    async saveOne(user: UserCreateDto): Promise<UserCreateDto> {
        return await this.userModel.create(user);
    }

    async findOneUser(userDto: LoginDto): Promise<UserCreateDto> {
        return await this.userModel.findOne(userDto);
    }

}