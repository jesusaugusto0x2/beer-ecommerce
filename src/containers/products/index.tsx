import { FC, useState } from "react";
import {
  Avatar,
  Button,
  NavBar,
  SectionHeader,
  SearchInput,
  ButtonGroup,
  Footer,
} from "@/components";
import { MenuIcon } from "@/assets";
import { DRINK_CATEGORIES } from "@/consts";
import styles from "./index.module.scss";
import { ProductList } from "../product-list";
import { useDebounce } from "@/hooks";

export const Products: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);

  return (
    <>
      <main>
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
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className={styles.subSection}>
            <SectionHeader title="Drink Category" actionTitle="See All" />
            <ButtonGroup items={DRINK_CATEGORIES} />
          </div>
          <div className={styles.subSection}>
            <SectionHeader title="Populer" actionTitle="See All" />
            <ProductList searchValue={debouncedSearchValue} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
