import { Inject, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserService } from "src/user/services/user.service";
import { LoginDto } from "../dto/login.dto";

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @Inject(UserService) private readonly userService: UserService
    ) {
        super({                       
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }
    
    async validate(payload: LoginDto) {
        const user = await this.userService.findByUserCredentials(payload);
        
        if (!user) {
            return new UnauthorizedException('Unauthorized');
        }
        return payload;
    }
}