import { Product, ProductSKU } from "@/models";
import ProductData from "@/data/products";

const getProductById = (productId: string): Product | undefined =>
  ProductData.find((p) => p.id === Number(productId));

const parseSkuToTagItem = (skus: ProductSKU[]) =>
  skus.map((sku) => ({ label: sku.name, value: sku.code }));

export const ProductUtils = {
  getProductById,
  parseSkuToTagItem,
};
