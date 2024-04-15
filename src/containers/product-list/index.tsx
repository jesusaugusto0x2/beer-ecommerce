import { fetcher } from "@/api";
import { FC } from "react";
import { ProductBox } from "@/components";
import { ProductListResponse } from "@/models/api";
import { ENDPOINTS } from "@/consts/api";
import useSWR from "swr";
import styles from "./index.module.scss";

type Props = {
  searchValue: string;
};

export const ProductList: FC<Props> = ({ searchValue }) => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR<ProductListResponse>(
    `${ENDPOINTS.productList}?search=${searchValue}`,
    fetcher
  );

  if (error) {
    return <div className={styles.centered}>Error has ocurred!</div>;
  }

  if (isLoading) {
    return <div className={styles.centered}>Loading...</div>;
  }

  if (!response) {
    return (
      <div className={styles.centered}>There are no products at the moment</div>
    );
  }

  return (
    <div className={styles.ProductList}>
      {response.data.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
};
