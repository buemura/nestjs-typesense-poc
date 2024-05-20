import { Module } from '@nestjs/common';

import { TYPESENSE_PROVIDER } from './search-engine.constant';
import { TypesenseProvider } from './providers/typesense.provider';
import { SearchEngineProviderFactory } from './factory/search-engine-provider.factory';

@Module({
  providers: [
    SearchEngineProviderFactory,
    {
      provide: TYPESENSE_PROVIDER,
      useClass: TypesenseProvider,
    },
  ],
  exports: [
    SearchEngineProviderFactory,
    {
      provide: TYPESENSE_PROVIDER,
      useClass: TypesenseProvider,
    },
  ],
})
export class SearchEngineModule {}
