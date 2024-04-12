import { NextResponse } from "next/server";
import Products from "@/app/data/products";

export async function GET(request: Request) {
  return NextResponse.json({ data: Products });
}
