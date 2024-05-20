import { Module } from '@nestjs/common';

import { SearchEngineModule } from '../search/search-engine.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [SearchEngineModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
