import { NextResponse } from "next/server";
import Products from "@/data/products";

export async function GET() {
  return NextResponse.json({ data: Products });
}
