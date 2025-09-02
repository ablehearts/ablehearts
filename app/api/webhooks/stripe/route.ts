import { NextRequest, NextResponse } from "next/server";
export async function POST(_req: NextRequest) {
  // TODO: verify signature and record successful payments
  return NextResponse.json({ ok: true });
}
