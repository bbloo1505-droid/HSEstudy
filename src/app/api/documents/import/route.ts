import { NextResponse } from "next/server";
import { importLocalDocuments } from "@/lib/documents";
import { ensureSeeded } from "@/lib/seed";

export async function POST() {
  try {
    ensureSeeded();
    const result = importLocalDocuments();
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Import failed" },
      { status: 500 },
    );
  }
}
