import { NextResponse } from "next/server";
import { listDueFlashcards } from "@/lib/flashcards";

export async function GET() {
  return NextResponse.json({ due: listDueFlashcards() });
}
