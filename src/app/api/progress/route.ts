import { NextResponse } from "next/server";
import { z } from "zod";
import { getDashboard, updateTopicConfidence } from "@/lib/progress";
import { ConfidenceLevel } from "@/lib/types";

export async function GET() {
  const dash = getDashboard();
  return NextResponse.json(dash);
}

const Body = z.object({
  topicId: z.string(),
  confidence: ConfidenceLevel,
});

export async function POST(req: Request) {
  try {
    const body = Body.parse(await req.json());
    updateTopicConfidence(body.topicId, body.confidence);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Update failed" },
      { status: 400 },
    );
  }
}
