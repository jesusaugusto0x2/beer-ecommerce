import { SearchIcon } from "@/assets";
import { FC, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const SearchInput: FC<Props> = (props) => (
  <div className={styles.SearchInputWrapper}>
    <SearchIcon />
    <input {...props} type="search" />
  </div>
);
