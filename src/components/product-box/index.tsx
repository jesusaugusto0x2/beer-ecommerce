import { FC } from "react";
import { Product } from "@/models/product";
import Image from "next/image";
import { Button } from "../button";
import { PlusWhiteIcon } from "@/assets";
import styles from "./index.module.scss";

type Props = {
  product: Product;
};

export const ProductBox: FC<Props> = ({ product }) => (
  <div className={styles.ProductBox}>
    <h3>{product.brand}</h3>
    <Image src={product.image} alt={product.abv} width={116} height={122} />
    <div className={styles.lowerSection}>
      <p>$28.65</p>
      <Button icon={<PlusWhiteIcon />} />
    </div>
  </div>
);
