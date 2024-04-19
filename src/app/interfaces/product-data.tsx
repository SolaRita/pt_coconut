interface ProductAction {
  title: string;
  description: string;
  icon: string;
}

interface ProductData {
  title: string;
  img: string;
  actions: ProductAction[];
}
