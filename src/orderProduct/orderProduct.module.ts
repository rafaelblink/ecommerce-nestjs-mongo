import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './orderProduct.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrderProduct])],
    providers: [],
    controllers: [],
  })
  export class OrderProductModule {}