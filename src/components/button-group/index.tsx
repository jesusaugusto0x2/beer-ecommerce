import { FC, ReactElement, useState } from "react";
import { Button } from "../button";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.scss";

type ButtonItem = {
  title: string;
  icon?: ReactElement;
};

type Props = {
  items: ButtonItem[];
};

export const ButtonGroup: FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState("");

  return (
    <li className={styles.ButtonGroup}>
      {items.map((item) => (
        <ul key={uuidv4()}>
          <Button
            icon={item.icon}
            text={item.title}
            onClick={() => setSelected(item.title)}
            variant={selected === item.title ? "primary" : "default"}
          />
        </ul>
      ))}
    </li>
  );
};
