import { Product } from "./product";
import { StockPrice } from "./stock-price";

export type ProductListResponse = {
  data: Product[];
};

export type StockPriceResponse = {
  stockPrice: StockPrice;
};
