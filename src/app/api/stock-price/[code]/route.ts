import { StockPrice } from "@/models/stock-price";
import { NextResponse, NextRequest } from "next/server";
import StockPriceData from "@/data/stock-price";

export async function GET(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  const code = Number(params.code);
  const stockPrice = (StockPriceData as unknown as StockPrice)[code];

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
