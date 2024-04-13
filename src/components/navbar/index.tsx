import { FC, ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  title?: string;
  leftItem: ReactNode;
  rightItem: ReactNode;
};

export const NavBar: FC<Props> = ({ title, leftItem, rightItem }) => (
  <nav className={styles.NavBar}>
    {leftItem}
    {title && <h1>{title}</h1>}
    {rightItem}
  </nav>
);
