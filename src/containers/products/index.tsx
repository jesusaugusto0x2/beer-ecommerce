import { FC } from "react";
import {
  Avatar,
  Button,
  NavBar,
  SectionHeader,
  SearchInput,
  ButtonGroup,
} from "@/components";
import { MenuIcon } from "@/assets";
import styles from "./index.module.scss";
import { DRINK_CATEGORIES } from "@/consts";

export const Products: FC = () => (
  <section className={styles.Products}>
    <NavBar
      leftItem={<Button variant="default" icon={<MenuIcon />} />}
      rightItem={
        <Avatar
          src="/img/default-user.jpg"
          alt="user_avatar"
          width={40}
          height={40}
        />
      }
    />
    <div className={styles.titleWrapper}>
      <h2>Hi Mr. Michael,</h2>
      <h1>Welcome Back!</h1>
    </div>
    <SearchInput
      placeholder="Search burger, pizza, drink or ect..."
      className={styles.inputStyle}
    />
    <div className={styles.subSection}>
      <SectionHeader title="Drink Category" />
      <ButtonGroup items={DRINK_CATEGORIES} />
    </div>
    <div className={styles.subSection}>
      <SectionHeader title="Populer" />
    </div>
  </section>
);
