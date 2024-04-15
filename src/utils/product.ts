import { Product, ProductSKU, StockPrice } from "@/models";
import ProductData from "@/data/products";
import { ENDPOINTS } from "@/consts/api";
import StockPriceData from "@/data/stock-price";

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

const getFirstSkuStock = (product: Product): StockPrice | undefined => {
  const firstSku = product.skus.at(0);

  if (!firstSku) {
    return undefined;
  }

  return (StockPriceData as { [key: number]: {} })[
    Number(firstSku.code)
  ] as StockPrice;
};

export const ProductUtils = {
  getProductById,
  parseSkuToTagItem,
  parseSkuArrayToTagItems,
  generateProductEndpoint,
  slugifyBrand,
  getFirstSkuStock,
};
