import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type Props = {
  title: string;
  actionTitle?: string;
  className?: string;
};

export const SectionHeader: FC<Props> = ({ title, actionTitle, className }) => (
  <div className={cx(styles.SectionHeader, className)}>
    <p>{title}</p>
    {actionTitle && <span>{actionTitle}</span>}
  </div>
);
