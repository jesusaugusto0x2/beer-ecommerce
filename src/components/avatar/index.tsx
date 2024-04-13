import Image, { ImageProps } from "next/image";
import { FC } from "react";
import styles from "./index.module.scss";

export const Avatar: FC<ImageProps> = (props) => (
  <Image {...props} alt={props.alt} className={styles.Avatar} />
);
