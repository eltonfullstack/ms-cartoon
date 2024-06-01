import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserDocument } from "src/user/schemas/user.schema";

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
    ) {}

    async login(username: string, password: string): Promise<any> {

        const user = await this.userModel.findOne({ username }).exec();

        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        if (!await bcryptjs.compare(password, user.password)) {
            throw new UnauthorizedException('Password is incorrect');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const payload = {
            username: user.username,
            name: user.name,
            email: user.email,
            token
        };
        return payload;
    }
}