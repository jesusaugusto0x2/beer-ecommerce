import { Product, ProductSKU } from "@/models";
import ProductData from "@/data/products";
import { ENDPOINTS } from "@/consts/api";

const getProductById = (productId: string): Product | undefined =>
  ProductData.find((p) => p.id === Number(productId));

const parseSkuToTagItem = (sku?: ProductSKU) => ({
  label: sku?.name || "",
  value: sku?.code || "",
});

const slugifyBrand = (product: Product) =>
  product.brand.toLowerCase().replace(" ", "-");

const parseSkuArrayToTagItems = (skus: ProductSKU[]) =>
  skus.map((sku) => parseSkuToTagItem(sku));

const generateProductEndpoint = (productId: string) => {
  const product = getProductById(productId);

  if (!product) {
    return "";
  }

  return ENDPOINTS.productDetails
    .replace("{productId}", `${product.id}`)
    .replace("{productName}", slugifyBrand(product));
};

export const ProductUtils = {
  getProductById,
  parseSkuToTagItem,
  parseSkuArrayToTagItems,
  generateProductEndpoint,
  slugifyBrand,
};
