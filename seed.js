// npm install typesense @babel/runtime

const Typesense = require('typesense');
const client = new Typesense.Client({
  nodes: [{ host: 'localhost', port: '8108', protocol: 'http' }],
  apiKey: 'xyz',
});

const schema = {
  name: 'products',
  fields: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'price', type: 'int32' },
    { name: 'discount_percentage', type: 'int32' },
    { name: 'ratings', type: 'int32' },
  ],
  default_sorting_field: 'ratings',
};

const documents = [
  {
    id: 'clwfg05eh00000cl5aqzq5vnp',
    name: 'IPhone 14',
    price: 999,
    discount_percentage: 10,
    ratings: 24,
  },
  {
    id: 'clwfg50as00010cl5d722h18w',
    name: 'IPhone 14 Pro Max',
    price: 1199,
    discount_percentage: 12,
    ratings: 32,
  },
  {
    id: 'clwfg50as00020cl5d722h18x',
    name: 'IPhone 13',
    price: 799,
    discount_percentage: 16,
    ratings: 40,
  },
  {
    id: 'clwfg60bs00030cl5e833j29y',
    name: 'Samsung Galaxy S23',
    price: 899,
    discount_percentage: 15,
    ratings: 28,
  },
  {
    id: 'clwfg70cs00040cl5f944k39z',
    name: 'Google Pixel 7',
    price: 699,
    discount_percentage: 20,
    ratings: 35,
  },
  {
    id: 'clwfg80ds00050cl5g055l49a',
    name: 'OnePlus 11',
    price: 749,
    discount_percentage: 18,
    ratings: 22,
  },
  {
    id: 'clwfg90es00060cl5h166m59b',
    name: 'Sony Xperia 1 IV',
    price: 999,
    discount_percentage: 14,
    ratings: 18,
  },
  {
    id: 'clwfga0fs00070cl5i277n69c',
    name: 'Xiaomi 13 Pro',
    price: 799,
    discount_percentage: 13,
    ratings: 30,
  },
  {
    id: 'clwfgb0gs00080cl5j388o79d',
    name: 'Huawei P50 Pro',
    price: 899,
    discount_percentage: 11,
    ratings: 25,
  },
  {
    id: 'clwfgc0hs00090cl5k499p89e',
    name: 'Oppo Find X5 Pro',
    price: 849,
    discount_percentage: 17,
    ratings: 27,
  },
];

client
  .collections()
  .create(schema)
  .then(() => {
    client.collections('products').documents().import(documents);
  });
