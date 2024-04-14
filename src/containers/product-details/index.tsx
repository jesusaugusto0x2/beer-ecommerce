import { DotsIcon, LeftArrowIcon } from "@/assets";
import { Button, NavBar, SectionHeader } from "@/components";
import { FC } from "react";
import { useParams } from "next/navigation";
import { ProductUtils } from "@/utils";
import Image from "next/image";
import styles from "./index.module.scss";

export const ProductDetails: FC = () => {
  const { productId } = useParams();

  const product = ProductUtils.getProductById(productId as string);

  if (!product) {
    return <section>Product not found!</section>;
  }

  return (
    <section className={styles.ProductDetails}>
      <NavBar
        leftItem={<Button variant="default" icon={<LeftArrowIcon />} />}
        rightItem={<Button variant="default" icon={<DotsIcon />} />}
        title="Detail"
      />
      <Image src={product.image} width={240} height={240} alt={product.image} />
      <div className={styles.description}>
        <div className={styles.titleSection}>
          <p>
            <span>{product.brand}</span>
            <span>$26.60</span>
          </p>
          <small>
            Origin: {product.origin} | Stock: {product.skus.length}
          </small>
        </div>
        <div className={styles.subSection}>
          <SectionHeader
            title="Description"
            className={styles.subSectionTitle}
          />
          <p>{product.information}</p>
        </div>
        <div className={styles.subSection}>
          <SectionHeader title="Size" className={styles.subSectionTitle} />
        </div>
      </div>
    </section>
  );
};
