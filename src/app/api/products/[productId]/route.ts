import { NextResponse, NextRequest } from "next/server";
import Products from "@/app/data/products";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productId = Number(params.productId);
  const product = Products.find((p) => p.id === productId);

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
