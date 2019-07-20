import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './users/user.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://rafa:senha123@cluster0-2ldci.mongodb.net/test?retryWrites=true&w=majority',
      database: 'ecommerce-db',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: false,
      useNewUrlParser: true,
      ssl: true,
    }),
    UserModule,
    ProductModule,
  ],
})

export class AppModule {}
