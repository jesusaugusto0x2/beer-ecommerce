import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  actionTitle?: string;
};

export const SectionHeader: FC<Props> = ({
  title,
  actionTitle = "See All",
}) => (
  <div className={styles.SectionHeader}>
    <p>{title}</p>
    <span>{actionTitle}</span>
  </div>
);
