import { Controller, Get, Query } from '@nestjs/common';

import { ProductService } from './product.service';
import { SearchProductIn } from './product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async searchProducts(@Query() query: SearchProductIn) {
    return this.productService.searchProduct(query);
  }
}
