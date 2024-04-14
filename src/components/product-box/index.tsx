import { FC, useState } from "react";
import { Product } from "@/models/product";
import { Button } from "../button";
import { PlusWhiteIcon } from "@/assets";
import { Img } from "../img";
import styles from "./index.module.scss";
import Link from "next/link";

type Props = {
  product: Product;
};

export const ProductBox: FC<Props> = ({ product }) => (
  <div className={styles.ProductBox}>
    <h3>{product.brand}</h3>
    <Img src={product.image} alt={product.image} width={116} height={122} />
    <div className={styles.lowerSection}>
      <p>$28.65</p>
      <Link passHref href={`/products/${product.id}`}>
        <Button icon={<PlusWhiteIcon />} />
      </Link>
    </div>
  </div>
);
