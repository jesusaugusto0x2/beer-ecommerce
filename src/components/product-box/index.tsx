import { FC, useState } from "react";
import { Product } from "@/models/product";
import { Button } from "../button";
import { PlusWhiteIcon } from "@/assets";
import { Img } from "../img";
import { CurrencyUtils, ProductUtils } from "@/utils";
import { DEFAULT_SMALL_IMAGE_WIDTH, IMAGE_WIDTH_MAP } from "@/consts";
import Link from "next/link";
import styles from "./index.module.scss";

type Props = {
  product: Product;
};

export const ProductBox: FC<Props> = ({ product }) => {
  const imgWidth =
    IMAGE_WIDTH_MAP[ProductUtils.slugifyBrand(product)]?.small ||
    DEFAULT_SMALL_IMAGE_WIDTH;

  const firstSku = ProductUtils.getFirstSkuStock(product);

  return (
    <div className={styles.ProductBox}>
      <h3>{product.brand}</h3>
      <Img
        src={product.image}
        alt={product.image}
        width={imgWidth}
        height={122}
      />
      <div className={styles.lowerSection}>
        <p>{CurrencyUtils.parseCentsToDollars(firstSku?.price)}</p>
        <Link passHref href={`/products/${product.id}`}>
          <Button icon={<PlusWhiteIcon />} />
        </Link>
      </div>
    </div>
  );
};
