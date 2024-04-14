import { BagIcon, DotsIcon, LeftArrowIcon } from "@/assets";
import {
  Button,
  ExpandableText,
  Img,
  NavBar,
  SectionHeader,
  TagGroup,
} from "@/components";
import { FC } from "react";
import { useParams } from "next/navigation";
import { ProductUtils } from "@/utils";
import styles from "./index.module.scss";
import Link from "next/link";

export const ProductDetails: FC = () => {
  const { productId } = useParams();
  const product = ProductUtils.getProductById(productId as string);

  if (!product) {
    return <section>Product not found!</section>;
  }

  return (
    <section className={styles.ProductDetails}>
      <NavBar
        leftItem={
          <Link href="/" passHref>
            <Button variant="default" icon={<LeftArrowIcon />} />
          </Link>
        }
        rightItem={<Button variant="default" icon={<DotsIcon />} />}
        title="Detail"
      />
      <Img src={product.image} width={240} height={240} alt={product.image} />
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
          <ExpandableText
            className={styles.infoText}
            text={product.information}
          />
        </div>
        <div className={styles.subSection}>
          <SectionHeader title="Size" className={styles.subSectionTitle} />
          <TagGroup
            items={ProductUtils.parseSkuToTagItem(product.skus)}
            onChange={(item) => console.log(item)}
          />
        </div>
        <div className={styles.options}>
          <Button icon={<BagIcon />} variant="default" />
          <Button text="Add to cart" />
        </div>
      </div>
    </section>
  );
};
