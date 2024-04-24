import { MiddlewareConsumer, Module, NestModule }   from   "@nestjs/common"
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { LoggerMiddleware } from "src/midldleware/logger.middelware";

@Module({
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("users")
    }
}