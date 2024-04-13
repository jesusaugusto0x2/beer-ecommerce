"use client";

import { fetcher } from "@/api";
import { Product } from "@/models/product";
import { Button, NavBar } from "@/components";
import { DotsIcon, LeftArrowIcon } from "@/assets";
import useSWR from "swr";

export default function Products() {
  const { error, isLoading } = useSWR<Product[]>("/api/products", fetcher);

  if (error) {
    return <main>Error has ocurred!</main>;
  }

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <NavBar
        leftItem={<Button variant="default" icon={<LeftArrowIcon />} />}
        rightItem={<Button variant="default" icon={<DotsIcon />} />}
        title="Test Title"
      />
      <Button text="Test Button!" />
    </main>
  );
}
