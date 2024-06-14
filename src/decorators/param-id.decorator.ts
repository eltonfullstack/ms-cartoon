import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const ParamId = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        return String(ctx.switchToHttp().getRequest().params.id);
});

