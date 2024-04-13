import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "default";
  icon?: ReactElement;
  text?: string;
};

export const Button: FC<Props> = ({
  variant = "primary",
  text,
  icon,
  ...props
}) => (
  <button {...props} className={cx(styles.Button, styles[variant])}>
    {icon}
    {text && <span>{text}</span>}
  </button>
);
