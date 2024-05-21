// npm install typesense @babel/runtime

const Typesense = require('typesense');
const client = new Typesense.Client({
  nodes: [{ host: 'localhost', port: '8108', protocol: 'http' }],
  apiKey: 'xyz',
});

const schema = {
  name: 'products',
  enable_nested_fields: true,
  fields: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'brand', type: 'string' },
    { name: 'category', type: 'string' },
    { name: 'price', type: 'int32' },
    { name: 'discount_percentage', type: 'int32' },
    { name: 'ratings', type: 'int32' },
    { name: 'filters', type: 'object' },
    { name: 'stores', type: 'object[]' },
  ],
  default_sorting_field: 'ratings',
};

const documents = [
  {
    id: 'clwfg05eh00000cl5aqzq5vnp',
    name: 'IPhone 14',
    brand: 'Apple',
    category: 'Smartphone',
    price: 999,
    discount_percentage: 10,
    ratings: 24,
    filters: {
      color: 'black',
      connectivity: '5G',
      storage: '128 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfg50as00010cl5d722h18w',
    name: 'IPhone 14 Pro Max',
    brand: 'Apple',
    category: 'Smartphone',
    price: 1199,
    discount_percentage: 12,
    ratings: 32,
    filters: {
      color: 'purple',
      connectivity: '5G',
      storage: '256 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfg50as00020cl5d722h18x',
    name: 'IPhone 13',
    brand: 'Apple',
    category: 'Smartphone',
    price: 799,
    discount_percentage: 16,
    ratings: 40,
    filters: {
      color: 'gold',
      connectivity: '4G',
      storage: '64 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfg60bs00030cl5e833j29y',
    name: 'Samsung Galaxy S23',
    brand: 'Samsung',
    category: 'Smartphone',
    price: 899,
    discount_percentage: 15,
    ratings: 28,
    filters: {
      color: 'black',
      connectivity: '5G',
      storage: '1 TB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfg70cs00040cl5f944k39z',
    name: 'Google Pixel 7',
    brand: 'Google',
    category: 'Smartphone',
    price: 699,
    discount_percentage: 20,
    ratings: 35,
    filters: {
      color: 'white',
      connectivity: '5G',
      storage: '128 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfg80ds00050cl5g055l49a',
    name: 'OnePlus 11',
    brand: 'OnePlus',
    category: 'Smartphone',
    price: 749,
    discount_percentage: 18,
    ratings: 22,
    filters: {
      color: 'Red',
      connectivity: '5G',
      storage: '128 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfg90es00060cl5h166m59b',
    name: 'Sony Xperia 1 IV',
    brand: 'Sony',
    category: 'Smartphone',
    price: 999,
    discount_percentage: 14,
    ratings: 18,
    filters: {
      color: 'black',
      connectivity: '5G',
      storage: '256 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
    ],
  },
  {
    id: 'clwfga0fs00070cl5i277n69c',
    name: 'Xiaomi 13 Pro',
    brand: 'Xiaomi',
    category: 'Smartphone',
    price: 799,
    discount_percentage: 13,
    ratings: 30,
    filters: {
      color: 'black',
      connectivity: '5G',
      storage: '256 GB',
    },
    stores: [
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfgb0gs00080cl5j388o79d',
    name: 'Huawei P50 Pro',
    brand: 'Huawei',
    category: 'Smartphone',
    price: 899,
    discount_percentage: 11,
    ratings: 25,
    filters: {
      color: 'gray',
      connectivity: '5G',
      storage: '128 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwfgc0hs00090cl5k499p89e',
    name: 'Oppo Find X5 Pro',
    brand: 'Oppo',
    category: 'Smartphone',
    price: 849,
    discount_percentage: 17,
    ratings: 27,
    filters: {
      color: 'black',
      connectivity: '4G',
      storage: '64 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
    ],
  },
  {
    id: 'clwg9f7da00000cl209di71vl',
    name: 'Play Station 5',
    brand: 'Sony',
    category: 'Gaming',
    price: 499,
    discount_percentage: 5,
    ratings: 433,
    filters: {
      color: 'white',
      storage: '500 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
    ],
  },
  {
    id: 'clwg9hxml00000ckxg1bjgvgx',
    name: 'Xbox series s',
    brand: 'Sony',
    category: 'Gaming',
    price: 399,
    discount_percentage: 2,
    ratings: 322,
    filters: {
      color: 'white',
      storage: '500 GB',
    },
    stores: [
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
  {
    id: 'clwg9jaa800010ckxhvnmgjq0',
    name: 'Nintendo Switch Oled',
    brand: 'Nintendo',
    category: 'Gaming',
    price: 359,
    discount_percentage: 10,
    ratings: 235,
    filters: {
      color: 'Red',
      storage: '64 GB',
    },
    stores: [
      {
        id: 'da2bad0a-b737-4adc-8db4-2f909c9434b1',
        name: 'wallmart',
      },
      {
        id: '0142ef9a-f0d2-4577-bf58-262220fc3530',
        name: 'best buy',
      },
    ],
  },
];

client
  .collections()
  .create(schema)
  .then(() => {
    client.collections('products').documents().import(documents);
  });
