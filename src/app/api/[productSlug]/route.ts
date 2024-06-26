import { NextResponse, NextRequest } from "next/server";
import ProductsData from "@/data/products";
import { Product } from "@/models/product";

export async function GET(
  request: NextRequest,
  { params }: { params: { productSlug: string } }
) {
  const [productId, ...pieces] = params.productSlug.split("-");
  const id = Number(productId);
  const brand = pieces.join(" ");

  const product = (ProductsData as Product[]).find(
    (product) => product.id === id && product.brand.toLowerCase() === brand
  );

  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    product,
  });
}
