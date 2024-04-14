import { BagIcon, DotsIcon, LeftArrowIcon } from "@/assets";
import {
  Button,
  ExpandableText,
  Img,
  NavBar,
  SectionHeader,
  TagGroup,
} from "@/components";
import { ComponentProps, FC, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { CurrencyUtils, ProductUtils } from "@/utils";
import { StockPrice } from "@/models";
import Link from "next/link";
import styles from "./index.module.scss";
import StockPriceData from "@/data/stock-price";

type TagItem = ComponentProps<typeof TagGroup>["items"][0];

export const ProductDetails: FC = () => {
  const { productId } = useParams();
  const product = ProductUtils.getProductById(productId as string);
  const [selectedSkuItem, setSelectedSkuItem] = useState<TagItem>(
    ProductUtils.parseSkuToTagItem(product?.skus?.at(0))
  );

  const selectedStock = useMemo(() => {
    const stock = (StockPriceData as unknown as StockPrice)[
      Number(selectedSkuItem.value)
    ];
    return stock;
  }, [selectedSkuItem]);

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
            <span>
              {CurrencyUtils.parseCentsToDollars(selectedStock.price)}
            </span>
          </p>
          <small>
            Origin: {product.origin} | Stock: {selectedStock.stock}
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
            items={ProductUtils.parseSkuArrayToTagItems(product.skus)}
            selectedItem={selectedSkuItem}
            onChange={(item) => setSelectedSkuItem(item)}
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
