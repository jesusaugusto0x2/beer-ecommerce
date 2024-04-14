import { FC, useState } from "react";
import { Product } from "@/models/product";
import Image from "next/image";
import { Button } from "../button";
import { PlusWhiteIcon } from "@/assets";
import styles from "./index.module.scss";
import Link from "next/link";

type Props = {
  product: Product;
};

export const ProductBox: FC<Props> = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(product.image);

  return (
    <div className={styles.ProductBox}>
      <h3>{product.brand}</h3>
      <Image
        src={imageSrc}
        alt={product.image}
        width={116}
        height={122}
        onError={() => setImageSrc("/img/unavailable.jpg")}
      />
      <div className={styles.lowerSection}>
        <p>$28.65</p>
        <Link passHref href={`/products/${product.id}`}>
          <Button icon={<PlusWhiteIcon />} />
        </Link>
      </div>
    </div>
  );
};
