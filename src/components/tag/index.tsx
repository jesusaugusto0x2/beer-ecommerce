import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type Props = {
  text: string;
  variant?: "default" | "active";
  onClick?: () => void;
};

export const Tag: FC<Props> = ({ text, variant = "default", onClick }) => (
  <div className={cx(styles.Tag, styles[variant])} onClick={onClick}>
    <span>{text}</span>
  </div>
);
