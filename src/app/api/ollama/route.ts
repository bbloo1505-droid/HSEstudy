import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { checkOllama } from "@/lib/ollama";
import { ensureSeeded } from "@/lib/seed";

export async function GET() {
  ensureSeeded();
  const status = await checkOllama();
  const selected = getDb()
    .prepare(`SELECT value FROM settings WHERE key = 'ollama_model'`)
    .get() as { value: string } | undefined;
  return NextResponse.json({ ...status, selectedModel: selected?.value ?? "qwen3:8b" });
}

const Body = z.object({ model: z.string().min(1) });

export async function POST(req: Request) {
  ensureSeeded();
  const body = Body.parse(await req.json());
  getDb()
    .prepare(`INSERT OR REPLACE INTO settings (key, value) VALUES ('ollama_model', ?)`)
    .run(body.model);
  return NextResponse.json({ ok: true, model: body.model });
}
