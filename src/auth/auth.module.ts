import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/user/schemas/user.schema";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { UserService } from "src/user/services/user.service";
import { UserRepository } from "src/user/repositories/user.repository";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        PassportModule.register({ 
            defaultStrategy: 'jwt',
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
                signOptions: {
                    algorithm: 'HS256',
                    expiresIn: '24h'
                }
            }),
            inject: [ConfigService],
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, UserRepository, JwtStrategy],
    exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}