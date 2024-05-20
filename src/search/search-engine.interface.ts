import { SearchProductOut } from '../product/product.dto';

export type SeachParams = {
  collection: string;
  queryBy: string;
  sortBy: string;
  searchTerm: string;
};

export interface SearchEngineProvider {
  search(params: SeachParams): Promise<SearchProductOut[]>;
}
