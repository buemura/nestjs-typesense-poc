import { Injectable } from '@nestjs/common';
import Typesense, { Client } from 'typesense';
import { ConfigurationOptions } from 'typesense/lib/Typesense/Configuration';
import { SearchParams } from 'typesense/lib/Typesense/Documents';

import { SearchProductIn, SearchProductOut } from './product.dto';

@Injectable()
export class ProductService {
  private client: Client;

  constructor() {
    const typeSenseConfig: ConfigurationOptions = {
      nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
      apiKey: 'xyz',
    };

    this.client = new Typesense.Client(typeSenseConfig);
  }

  async searchProduct(input: SearchProductIn): Promise<SearchProductOut[]> {
    const seachParams: SearchParams = {
      query_by: 'name,brand',
      sort_by: 'ratings:asc',
      filter_by: '',
      q: input.term,
    };

    if (input.category) {
      seachParams.filter_by = `category:${input.category}`;
    }

    if (input.filters && !Array.isArray(input.filters)) {
      if (seachParams.filter_by !== '') {
        seachParams.filter_by += '&&';
      }
      seachParams.filter_by += `filters.${input.filters}`;
    }

    if (Array.isArray(input.filters) && input.filters.length) {
      input.filters.forEach((f) => {
        if (seachParams.filter_by !== '') {
          seachParams.filter_by += '&&';
        }

        seachParams.filter_by += `filters.${f}`;
      });
    }

    const res = await this.client
      .collections('products')
      .documents()
      .search(seachParams);

    const response = res.hits.map((h) => h.document) as SearchProductOut[];
    return response;
  }
}
