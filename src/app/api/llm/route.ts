import { NextResponse } from "next/server";
import { getLlmStatus } from "@/lib/llm";
import { ensureSeeded } from "@/lib/seed";

export async function GET() {
  ensureSeeded();
  const status = await getLlmStatus();
  return NextResponse.json(status);
}
