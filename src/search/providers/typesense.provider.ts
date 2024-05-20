import { Injectable } from '@nestjs/common';
import Typesense, { Client } from 'typesense';

import { SearchProductOut } from '../../product/product.dto';
import { SeachParams, SearchEngineProvider } from '../search-engine.interface';
import { ConfigurationOptions } from 'typesense/lib/Typesense/Configuration';

@Injectable()
export class TypesenseProvider implements SearchEngineProvider {
  private client: Client;

  constructor() {
    const typeSenseConfig: ConfigurationOptions = {
      nodes: [{ host: 'localhost', port: 8108, protocol: 'http' }],
      apiKey: 'xyz',
    };

    this.client = new Typesense.Client(typeSenseConfig);
  }

  async search(params: SeachParams): Promise<SearchProductOut[]> {
    const res = await this.client
      .collections(params.collection)
      .documents()
      .search({
        query_by: params.queryBy,
        q: params.searchTerm,
        sort_by: params.sortBy,
      });

    console.log('res', res);

    const response = res.hits as unknown as SearchProductOut[];
    return response;
  }
}
