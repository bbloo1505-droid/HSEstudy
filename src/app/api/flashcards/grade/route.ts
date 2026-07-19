import { NextResponse } from "next/server";
import { z } from "zod";
import { gradeFlashcard } from "@/lib/flashcards";

const Body = z.object({
  id: z.string(),
  grade: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});

export async function POST(req: Request) {
  try {
    const body = Body.parse(await req.json());
    const next = gradeFlashcard(body.id, body.grade);
    return NextResponse.json({ ok: true, next });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Grade failed" },
      { status: 400 },
    );
  }
}
