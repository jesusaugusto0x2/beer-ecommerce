import { Product, ProductSKU } from "@/models";
import ProductData from "@/data/products";

const getProductById = (productId: string): Product | undefined =>
  ProductData.find((p) => p.id === Number(productId));

const parseSkuToTagItem = (sku?: ProductSKU) => ({
  label: sku?.name || "",
  value: sku?.code || "",
});

const parseSkuArrayToTagItems = (skus: ProductSKU[]) =>
  skus.map((sku) => parseSkuToTagItem(sku));

export const ProductUtils = {
  getProductById,
  parseSkuToTagItem,
  parseSkuArrayToTagItems,
};
