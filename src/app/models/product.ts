export type ProductSKU = {
  code: string;
  name: string;
};

export type Product = {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: ProductSKU[];
};
