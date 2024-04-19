interface Treatment {
  handle: string;
  id: number;
  main_shopify_id: string;
  title: string;
  variants: Variant[];
}

interface Variant {
  id: string;
  price: Price;
  sku: string;
}

interface Price {
  amount: string;
  currency_code: string;
  country: string;
  variant_id: string;
}
