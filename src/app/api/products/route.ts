import { NextRequest, NextResponse } from "next/server";
import ProductsData from "@/data/products";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search");

  if (!search) {
    return NextResponse.json({ data: ProductsData });
  }

  const products = ProductsData.filter((product) =>
    product.brand.toLowerCase().includes(search.toLowerCase())
  );

  return NextResponse.json({ data: products });
}
