export class SearchProductIn {
  term: string;
  category?: string;
  filters?: string[];
}

export class SearchProductOut {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discount_percentage: number;
  ratings: number;
  filters: Record<string, string>;
  stores: Store[];
}

class Store {
  id: string;
  name: string;
}
