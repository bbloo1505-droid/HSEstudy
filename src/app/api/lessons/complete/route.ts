import { NextResponse } from "next/server";
import { z } from "zod";
import { completeLesson } from "@/lib/progress";
import { ConfidenceLevel } from "@/lib/types";

const Body = z.object({
  lessonId: z.string(),
  confidence: ConfidenceLevel,
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = Body.parse(await req.json());
    completeLesson(body.lessonId, body.confidence, body.notes ?? "");
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Complete failed" },
      { status: 400 },
    );
  }
}
