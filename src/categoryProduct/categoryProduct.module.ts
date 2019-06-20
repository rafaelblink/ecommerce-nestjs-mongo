import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryProduct } from 'dist/categoryProduct/categoryProduct.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryProduct])],
    providers: [],
    controllers: [],
  })
  export class CategoryProductModule {}