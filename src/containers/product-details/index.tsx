import { BagIcon, DotsIcon, LeftArrowIcon } from "@/assets";
import {
  Button,
  ExpandableText,
  Img,
  NavBar,
  SectionHeader,
  TagGroup,
} from "@/components";
import { ComponentProps, FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CurrencyUtils, ProductUtils } from "@/utils";
import { ProductResponse, StockPriceResponse } from "@/models";
import { fetcher } from "@/api";
import { ENDPOINTS, REFRESH_INTERVAL } from "@/consts/api";
import { DEFAULT_LARGE_IMAGE_WIDTH, IMAGE_WIDTH_MAP } from "@/consts";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import useSWR from "swr";
import styles from "./index.module.scss";

type TagItem = ComponentProps<typeof TagGroup>["items"][0];

export const ProductDetails: FC = () => {
  const { productId } = useParams();
  const productUrl = ProductUtils.generateProductEndpoint(productId as string);
  const [selectedSkuItem, setSelectedSkuItem] = useState<TagItem>();

  const {
    data: productData,
    isLoading: isLoadingProductData,
    error,
  } = useSWR<ProductResponse>(productUrl, fetcher);

  const { data: stockData } = useSWR<StockPriceResponse>(
    !selectedSkuItem
      ? null
      : ENDPOINTS.stockPrice.replace("{id}", selectedSkuItem.value),
    fetcher,
    {
      refreshInterval: REFRESH_INTERVAL,
    }
  );

  useEffect(() => {
    if (!productData) {
      return;
    }

    setSelectedSkuItem(
      ProductUtils.parseSkuToTagItem(productData?.product?.skus?.at(0))
    );
  }, [productData]);

  if (isLoadingProductData) {
    return (
      <section className={styles.centeredScreenText}>
        Loading product...
      </section>
    );
  }

  if (!productData || error) {
    return (
      <section className={styles.centeredScreenText}>
        <p>Product not found!</p>
        <Link href="/" passHref>
          <Button text="Return to Home Page" />
        </Link>
      </section>
    );
  }

  const imgWidth =
    IMAGE_WIDTH_MAP[ProductUtils.slugifyBrand(productData.product)]?.large ||
    DEFAULT_LARGE_IMAGE_WIDTH;

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
      <div className={styles.imgWrapper}>
        <Img
          src={productData.product.image}
          width={imgWidth}
          height={240}
          alt={productData.product.image}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.titleSection}>
          <p>
            <span>{productData.product.brand}</span>
            <span>
              {CurrencyUtils.parseCentsToDollars(stockData?.stockPrice?.price)}
            </span>
          </p>
          <small>
            Origin: {productData.product.origin} | Stock:{" "}
            {stockData?.stockPrice?.stock}
          </small>
        </div>
        <div className={styles.subSection}>
          <SectionHeader
            title="Description"
            className={styles.subSectionTitle}
          />
          <ExpandableText
            className={styles.infoText}
            text={productData.product.information}
          />
        </div>
        <div className={styles.subSection}>
          <SectionHeader title="Size" className={styles.subSectionTitle} />
          <TagGroup
            items={ProductUtils.parseSkuArrayToTagItems(
              productData.product.skus
            )}
            selectedItem={selectedSkuItem as TagItem}
            onChange={(item) => setSelectedSkuItem(item)}
          />
        </div>
        <div className={styles.options}>
          <Button icon={<BagIcon />} variant="default" />
          <Button
            text="Add to cart"
            onClick={() =>
              toast("Added!", {
                icon: "🍺",
              })
            }
          />
        </div>
      </div>
      <Toaster />
    </section>
  );
};
