import { Get, Param, Controller, Post, Body, Delete } from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Get()
    findAll(): Promise<Product[]> {
      return this.productService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(id);
    }

    @Post()
    save(@Body() product: Product) {
        return this.productService.save(product);
    }

    @Delete(':id')
    delete(@Param('id') id) {
      return this.productService.remove(id);
    }
  }
