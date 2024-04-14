import { fetcher } from "@/api";
import { FC } from "react";
import { ProductBox } from "@/components";
import { ProductListResponse } from "@/models/api";
import useSWR from "swr";
import styles from "./index.module.scss";

export const ProductList: FC = () => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR<ProductListResponse>("/api/products", fetcher);

  if (error) {
    return <div>Error has ocurred!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!response) {
    return <div>There are no products at the moment</div>;
  }

  return (
    <div className={styles.ProductList}>
      {response.data.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
};
