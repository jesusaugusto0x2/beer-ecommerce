import { FC, useState } from "react";
import { Tag } from "../tag";
import styles from "./index.module.scss";

type TagItem = {
  label: string;
  value: string;
};

type Props = {
  items: TagItem[];
  onChange?: (tag: TagItem) => void;
};

export const TagGroup: FC<Props> = ({ items, onChange }) => {
  const [selected, setSelected] = useState<TagItem>();

  return (
    <ul className={styles.TagGroup}>
      {items.map((item) => (
        <li key={item.value}>
          <Tag
            text={item.label}
            variant={selected?.value === item.value ? "active" : "default"}
            onClick={() => {
              setSelected(item);
              onChange?.(item);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
