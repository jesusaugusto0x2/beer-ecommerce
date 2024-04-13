import { FC } from "react";
import { Avatar, Button, NavBar, SearchInput } from "@/components";
import { MenuIcon } from "@/assets";
import styles from "./index.module.scss";

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
  </section>
);
