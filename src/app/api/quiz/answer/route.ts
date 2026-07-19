import { NextResponse } from "next/server";
import { z } from "zod";
import { recordAnswer } from "@/lib/quiz";

const Body = z.object({
  questionId: z.string(),
  selectedIndex: z.number().int().min(0),
});

export async function POST(req: Request) {
  try {
    const body = Body.parse(await req.json());
    const result = recordAnswer(body.questionId, body.selectedIndex);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Answer failed" },
      { status: 400 },
    );
  }
}
