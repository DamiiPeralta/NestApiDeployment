import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TodosModule, ProductsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
