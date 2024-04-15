import { FC } from "react";
import { Button } from "../button";
import {
  BagButtonIcon,
  HomeSelectedIcon,
  MenuButtonIcon,
  SettingsIcon,
} from "@/assets";
import styles from "./index.module.scss";

export const Footer: FC = () => (
  <footer className={styles.Footer}>
    <Button icon={<HomeSelectedIcon />} variant="default" />
    <Button icon={<MenuButtonIcon />} variant="default" />
    <Button icon={<BagButtonIcon />} variant="default" />
    <Button icon={<SettingsIcon />} variant="default" />
  </footer>
);
