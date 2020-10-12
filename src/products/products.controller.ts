import { Controller, Get, Param } from '@nestjs/common';

import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }): Promise<Product> {
    return this.service.findOne(id);
  }
}
