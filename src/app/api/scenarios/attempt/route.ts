import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { ensureSeeded } from "@/lib/seed";

const Body = z.object({
  scenarioId: z.string(),
  response: z.string().min(1),
  reflection: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    ensureSeeded();
    const body = Body.parse(await req.json());
    getDb()
      .prepare(
        `INSERT INTO scenario_attempts (scenario_id, response, reflection, created_at)
         VALUES (?, ?, ?, ?)`,
      )
      .run(body.scenarioId, body.response, body.reflection ?? "", new Date().toISOString());
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Save failed" },
      { status: 400 },
    );
  }
}
