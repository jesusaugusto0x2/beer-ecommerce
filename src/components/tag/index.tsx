import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type Props = {
  text: string;
  variant?: "default" | "active";
};

export const Tag: FC<Props> = ({ text, variant = "default" }) => (
  <div className={cx(styles.Tag, styles[variant])}>
    <span>{text}</span>
  </div>
);
