import { NextResponse } from "next/server";
import Products from "@/app/data/products";

export async function GET() {
  return NextResponse.json({ data: Products });
}
