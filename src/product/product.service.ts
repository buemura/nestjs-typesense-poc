import { Injectable } from '@nestjs/common';

import { SearchEngineProviderFactory } from '../search/factory/search-engine-provider.factory';
import { SearchEngineProvider } from '../search/search-engine.interface';
import { SearchProductIn, SearchProductOut } from './product.dto';

@Injectable()
export class ProductService {
  private provider: SearchEngineProvider;

  constructor(
    private readonly searchEngineProviderFactory: SearchEngineProviderFactory,
  ) {
    this.provider = searchEngineProviderFactory.getProvider();
  }

  async searchProduct(input: SearchProductIn): Promise<SearchProductOut[]> {
    const products = await this.provider.search({
      collection: 'products',
      queryBy: 'name',
      sortBy: 'ratings:asc',
      searchTerm: input.term,
    });

    return products;
  }
}
