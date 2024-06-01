import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/user.schema";
import { JwtAuthGuard } from "src/guards/jwt.guard";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, UserRepository, JwtAuthGuard],
    exports: [UserService]
})
export class UserModule {}