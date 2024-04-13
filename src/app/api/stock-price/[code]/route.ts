import { NextResponse, NextRequest } from "next/server";
import StockPrices from "@/app/data/stock-price";

export async function GET(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  const code = Number(params.code);
  const stockPrice = (
    StockPrices as { [key: number]: { stock: number; price: number } }
  )[code];

  if (!stockPrice) {
    return NextResponse.json(
      { message: "Stock price not found" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    stockPrice,
  });
}
