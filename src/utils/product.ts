import { Product, ProductSKU } from "@/models";
import ProductData from "@/data/products";
import { ENDPOINTS } from "@/consts/api";

const getProductById = (productId: string): Product | undefined =>
  ProductData.find((p) => p.id === Number(productId));

const parseSkuToTagItem = (sku?: ProductSKU) => ({
  label: sku?.name || "",
  value: sku?.code || "",
});

const parseSkuArrayToTagItems = (skus: ProductSKU[]) =>
  skus.map((sku) => parseSkuToTagItem(sku));

const generateProductEndpoint = (productId: string) => {
  const product = getProductById(productId);

  if (!product) {
    return "";
  }

  const slugifiedName = product.brand.toLowerCase().replace(" ", "-");

  return ENDPOINTS.productDetails
    .replace("{productId}", `${product.id}`)
    .replace("{productName}", slugifiedName);
};

export const ProductUtils = {
  getProductById,
  parseSkuToTagItem,
  parseSkuArrayToTagItems,
  generateProductEndpoint,
};
