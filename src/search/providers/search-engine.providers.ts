import { TYPESENSE_PROVIDER } from '../search-engine.constant';
import { TypesenseProvider } from './typesense.provider';

export const SearchEngineProviders = [
  {
    provide: TYPESENSE_PROVIDER,
    useclass: TypesenseProvider,
  },
];
