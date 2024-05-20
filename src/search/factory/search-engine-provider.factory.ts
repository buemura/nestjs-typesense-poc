import { Inject, Injectable } from '@nestjs/common';

import { TYPESENSE_PROVIDER } from '../search-engine.constant';
import { SearchEngineEnum } from '../search-engine.enum';
import { SearchEngineProvider } from '../search-engine.interface';

@Injectable()
export class SearchEngineProviderFactory {
  constructor(
    @Inject(TYPESENSE_PROVIDER)
    private readonly typesenseProvider: SearchEngineProvider,
  ) {}

  public getProvider(provider: string = SearchEngineEnum.TYPESENSE) {
    switch (provider) {
      case SearchEngineEnum.TYPESENSE:
        return this.typesenseProvider;
      default:
        return this.typesenseProvider;
    }
  }
}
