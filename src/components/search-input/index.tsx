import { SearchIcon } from "@/assets";
import { FC, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const SearchInput: FC<Props> = ({ className, ...props }) => (
  <div className={styles.SearchInputWrapper}>
    <SearchIcon />
    <input {...props} type="search" className={className} />
  </div>
);
