import { Product } from "@/models";
import ProductData from "@/data/products";

const getProductById = (productId: string): Product | undefined =>
  ProductData.find((p) => p.id === Number(productId));

export const ProductUtils = {
  getProductById,
};
