"use client";

import { fetcher } from "@/api";
import { Product } from "@/models/product";
import { Products } from "@/containers";
import useSWR from "swr";

export default function Home() {
  const { error, isLoading } = useSWR<Product[]>("/api/products", fetcher);

  if (error) {
    return <main>Error has ocurred!</main>;
  }

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <Products />
    </main>
  );
}
