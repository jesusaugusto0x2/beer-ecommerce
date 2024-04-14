import { FC, useState } from "react";
import { Tag } from "../tag";
import styles from "./index.module.scss";

type TagItem = {
  label: string;
  value: string;
};

type Props = {
  items: TagItem[];
  selectedItem: TagItem;
  onChange?: (tag: TagItem) => void;
};

export const TagGroup: FC<Props> = ({ items, selectedItem, onChange }) => {
  return (
    <ul className={styles.TagGroup}>
      {items.map((item) => (
        <li key={item.value}>
          <Tag
            text={item.label}
            variant={selectedItem?.value === item.value ? "active" : "default"}
            onClick={() => {
              onChange?.(item);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
