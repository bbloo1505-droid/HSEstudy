import { NextResponse } from "next/server";
import { z } from "zod";
import { askHse } from "@/lib/ask";
import { ensureSeeded } from "@/lib/seed";

const Body = z.object({
  question: z.string().min(1),
  mode: z.enum(["study", "source"]),
});

export async function POST(req: Request) {
  try {
    ensureSeeded();
    const body = Body.parse(await req.json());
    const answer = await askHse(body.question, body.mode);
    return NextResponse.json({ answer });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Ask failed" },
      { status: 400 },
    );
  }
}
