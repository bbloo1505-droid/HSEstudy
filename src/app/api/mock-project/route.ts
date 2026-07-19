import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { ensureSeeded } from "@/lib/seed";
import { todayIso } from "@/lib/srs";

const Body = z.object({
  projectId: z.string(),
  state: z.record(z.string(), z.boolean()),
  notes: z.record(z.string(), z.string()),
});

export async function POST(req: Request) {
  try {
    ensureSeeded();
    const body = Body.parse(await req.json());
    getDb()
      .prepare(
        `UPDATE mock_project_progress
         SET checklist_state_json = ?, notes_json = ?, updated_at = ?
         WHERE project_id = ?`,
      )
      .run(JSON.stringify(body.state), JSON.stringify(body.notes), todayIso(), body.projectId);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Save failed" },
      { status: 400 },
    );
  }
}
